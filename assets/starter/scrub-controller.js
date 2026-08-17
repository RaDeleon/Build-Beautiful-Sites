/* Build Beautiful Sites — scroll-scrub controller
 * Creative system: Build Beautiful Sites by AD
 *
 * Framework-agnostic ES module. Copy this file into the project rather than
 * retyping it. It is the reference implementation for `scrub-engineering.md`.
 *
 * Contract:
 * - Seeks are coalesced. The decoder never receives an unbounded backlog.
 * - The rAF loop rests once progress converges and while the region is
 *   offscreen. A permanently running loop is a defect, not a cost of doing
 *   business.
 * - Scroll target, smoothed progress, and media time stay out of framework
 *   state. Nothing here triggers a React/Vue render per frame.
 * - Every listener, observer, and frame request is released by destroy().
 */

export const clamp = (value, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, value));

/** Eased 0..1 ramp between two edges. */
export const smoothstep = (edge0, edge1, value) => {
  const t = clamp((value - edge0) / Math.max(0.0001, edge1 - edge0));
  return t * t * (3 - 2 * t);
};

/**
 * Opacity for a caption band: short eased entrance, long readable plateau,
 * short eased exit. The plateau is the point — a headline that is only legible
 * during careful dragging has failed.
 */
export function bandOpacity(progress, start, end) {
  const ramp = Math.min(0.025, (end - start) / 3);
  const enter = smoothstep(start, start + ramp, progress);
  const leave = 1 - smoothstep(end - ramp, end, progress);
  return enter * leave;
}

/** The chapter containing `progress`, or null. Chapters are [start, end). */
export function activeChapter(chapters, progress) {
  for (const chapter of chapters) {
    if (progress >= chapter.start && progress < chapter.end) return chapter;
  }
  return chapters.length && progress >= 1 ? chapters[chapters.length - 1] : null;
}

/**
 * Normalized 0..1 progress through a tall region containing a sticky stage.
 * Returns 0 above the region and 1 below it.
 */
export function createRegionProgress(region) {
  return () => {
    const rect = region.getBoundingClientRect();
    const scrollable = rect.height - window.innerHeight;
    if (scrollable <= 0) return 0;
    return clamp(-rect.top / scrollable);
  };
}

/**
 * Maps smoothed scroll progress onto video.currentTime.
 *
 * @param {object} options
 * @param {HTMLVideoElement} options.video
 * @param {() => number} options.progress  Returns raw 0..1 scroll progress.
 * @param {(shown: number) => void} [options.render]  Called per frame with
 *        smoothed progress. Keep it cheap and delta-gated.
 * @param {number} [options.response]  0..1 smoothing per 60fps frame. Higher
 *        tracks the cursor more tightly; lower feels heavier.
 */
export function createScrubController({ video, progress, render = () => {}, response = 0.16 }) {
  let target = 0;
  let shown = 0;
  let raf = 0;
  let last = 0;
  let seeking = false;
  let queuedTime = null;
  let destroyed = false;

  function requestSeek(time) {
    if (!Number.isFinite(video.duration) || video.duration <= 0) return;
    const bounded = Math.max(0, Math.min(video.duration, time));
    if (seeking) {
      queuedTime = bounded;
      return;
    }
    seeking = true;
    try {
      video.currentTime = bounded;
    } catch {
      seeking = false;
    }
  }

  function finishSeek() {
    seeking = false;
    if (queuedTime === null) return;
    const next = queuedTime;
    queuedTime = null;
    requestSeek(next);
  }

  function failSeek() {
    seeking = false;
    queuedTime = null;
  }

  function tick(now) {
    if (destroyed) return;
    const dt = Math.min(100, now - (last || now));
    last = now;
    shown += (target - shown) * (1 - Math.pow(1 - response, dt / 16.667));
    if (Math.abs(target - shown) < 0.0005) shown = target;

    requestSeek(shown * video.duration);
    render(shown);

    if (shown !== target) {
      raf = requestAnimationFrame(tick);
    } else {
      raf = 0;
      last = 0;
    }
  }

  function update() {
    if (destroyed) return;
    target = clamp(progress());
    if (!raf) raf = requestAnimationFrame(tick);
  }

  /** Jump without easing — use on first ready and after resize. */
  function snap() {
    if (destroyed) return;
    target = clamp(progress());
    shown = target;
    requestSeek(shown * video.duration);
    render(shown);
  }

  video.addEventListener('seeked', finishSeek);
  video.addEventListener('error', failSeek);

  return {
    update,
    snap,
    get progress() {
      return shown;
    },
    destroy() {
      destroyed = true;
      if (raf) cancelAnimationFrame(raf);
      raf = 0;
      video.removeEventListener('seeked', finishSeek);
      video.removeEventListener('error', failSeek);
      queuedTime = null;
    }
  };
}

/**
 * Wires a scrub region end to end: progress mapping, a passive scroll listener
 * that only runs while the region is near the viewport, readiness handling, and
 * teardown.
 *
 * The caller is responsible for the poster layer, the static/reduced-motion
 * experience, and deciding whether to set video.src at all — this function does
 * not decide whether the film should play, only how it is driven.
 *
 * @returns {{ destroy: () => void, controller: object }}
 */
export function mountScrubStage({ region, video, render = () => {}, rootMargin = '200px', response }) {
  const progress = createRegionProgress(region);
  const controller = createScrubController({ video, progress, render, response });

  let listening = false;
  const onScroll = () => controller.update();

  function listen() {
    if (listening) return;
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize, { passive: true });
    listening = true;
    controller.update();
  }

  function unlisten() {
    if (!listening) return;
    window.removeEventListener('scroll', onScroll);
    window.removeEventListener('resize', onResize);
    listening = false;
  }

  function onResize() {
    controller.snap();
  }

  // Seek to the current scroll position on ready, not to frame zero — a user
  // who lands mid-region or reloads should never see the opening frame.
  function onReady() {
    controller.snap();
  }
  video.addEventListener('loadedmetadata', onReady);

  const observer = new IntersectionObserver(
    entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) listen();
        else unlisten();
      }
    },
    { rootMargin }
  );
  observer.observe(region);

  return {
    controller,
    destroy() {
      observer.disconnect();
      unlisten();
      video.removeEventListener('loadedmetadata', onReady);
      controller.destroy();
    }
  };
}
