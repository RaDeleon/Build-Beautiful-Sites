# Scroll-Scrub Engineering

Use this reference after the Cinematic Scrub media passes its video gate.

## Contents

1. Architecture
2. Media preparation
3. Loading strategy
4. Scroll-to-time controller
5. Chapter pacing and legibility
6. Responsive and reduced-motion modes
7. Framework integration
8. Teardown and testing

## Architecture

Build a tall narrative region containing a sticky viewport stage:

```text
cinematic region: 400–1000vh
└── sticky stage: 100dvh
    ├── poster layer
    ├── decorative video
    ├── global scrim
    ├── semantic caption bands
    └── progress/loading/failure UI
real website continues below
```

Map normalized progress through the narrative region to media time. The final scroll position must land on the composed ending before the below-fold site begins.

Size by reading distance, not clip duration alone:

- One 6–10 second journey: start around 400–550vh.
- Two to four chained chapters: start around 700–1100vh.
- Give each important caption a long readable plateau. Remove a beat rather than compressing every beat.

Do not call a scrubbed prerendered film true 3D. Use that term only for live geometry.

## Media preparation

Use H.264 MP4, `yuv420p`, no audio, fast-start metadata, and frequent keyframes. The provided optimizer uses a short GOP for responsive seeking.

```bash
bash scripts/optimize_cinematic_media.sh desktop raw.mp4 public/media/hero-desktop.mp4
bash scripts/optimize_cinematic_media.sh mobile raw.mp4 public/media/hero-mobile.mp4
bash scripts/optimize_cinematic_media.sh poster raw.mp4 public/media/hero-poster.jpg
bash scripts/optimize_cinematic_media.sh ending raw.mp4 public/media/hero-ending.jpg
bash scripts/inspect_cinematic_media.sh public/media/hero-desktop.mp4 review/hero
```

Inspect actual output size and visual quality. Reduce width or increase CRF before sacrificing keyframe density. Smooth gradients show banding earlier; dense texture hides compression artifacts but produces larger files.

## Loading strategy

### Default

Prefer an ordinary muted inline video when the deployment CDN/host supports reliable byte-range requests:

```html
<video
  id="hero-film"
  muted
  playsinline
  preload="metadata"
  aria-hidden="true"
  tabindex="-1"
></video>
```

Paint the poster separately so readable content never waits for the video. Set the video source only inside the motion-capable path.

### Blob fallback

Use a Blob URL only when range seeking is missing/unreliable or testing proves direct seeking broken. Fetching the entire film increases memory use and delays readiness, so do not apply it blindly.

```js
async function loadFilmAsBlob(url, signal) {
  const response = await fetch(url, { signal });
  if (!response.ok) throw new Error(`Film request failed: ${response.status}`);
  const blob = await response.blob();
  return URL.createObjectURL(blob);
}
```

For a large Blob fallback, show honest progress, abort after sustained no-progress, preserve the usable poster experience on failure, and revoke the object URL during teardown.

### Readiness

- Do not seek until metadata/duration is available.
- After media becomes ready, seek immediately to the current scroll position rather than frame zero.
- Keep the poster visible until the requested frame is decoded.
- On error or timeout, remove the loading state and retain the complete static experience.
- Prime muted inline playback on the first user gesture only where device testing proves necessary.

## Scroll-to-time controller

Keep scroll target, smoothed progress, and media seeking outside React/Vue component state. Coalesce seeks so a decoder never receives an unbounded backlog.

```js
export function createScrubController({ video, progress, render }) {
  let target = 0;
  let shown = 0;
  let raf = 0;
  let last = 0;
  let seeking = false;
  let queuedTime = null;
  let destroyed = false;

  const clamp01 = value => Math.max(0, Math.min(1, value));

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

  function tick(now) {
    if (destroyed) return;
    const dt = Math.min(100, now - (last || now));
    last = now;
    const response = 0.16;
    shown += (target - shown) *
      (1 - Math.pow(1 - response, dt / 16.667));

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
    target = clamp01(progress());
    if (!raf) raf = requestAnimationFrame(tick);
  }

  function failSeek() {
    seeking = false;
    queuedTime = null;
  }

  video.addEventListener('seeked', finishSeek);
  video.addEventListener('error', failSeek);

  return {
    update,
    destroy() {
      destroyed = true;
      if (raf) cancelAnimationFrame(raf);
      video.removeEventListener('seeked', finishSeek);
      video.removeEventListener('error', failSeek);
      queuedTime = null;
    }
  };
}
```

Attach `update` to a passive scroll listener only while the cinematic region is near the viewport. Use `IntersectionObserver` to suspend work offscreen.

Delta-gate DOM changes:

- Cache active chapter IDs and toggle only when they change.
- Throttle scroll-driven counters/readouts to roughly 10Hz and update only when the displayed value changes.
- Drive transforms/opacity with CSS custom properties when practical.
- Avoid layout reads and writes interleaved in animation frames.

## Chapter pacing and legibility

Represent chapters as data:

```js
const chapters = [
  { id: 'opening', start: 0.00, end: 0.22 },
  { id: 'reveal',  start: 0.22, end: 0.54 },
  { id: 'proof',   start: 0.54, end: 0.78 },
  { id: 'arrival', start: 0.78, end: 1.00 }
];
```

Give each caption a short eased entrance, long fully visible plateau, and short eased exit. Keep the first caption settled at page load and the final caption settled at the ending.

```js
const clamp = (v, lo = 0, hi = 1) => Math.max(lo, Math.min(hi, v));
const smoothstep = (edge0, edge1, value) => {
  const t = clamp((value - edge0) / Math.max(0.0001, edge1 - edge0));
  return t * t * (3 - 2 * t);
};

function bandOpacity(progress, start, end) {
  const ramp = Math.min(0.025, (end - start) / 3);
  const enter = smoothstep(start, start + ramp, progress);
  const leave = 1 - smoothstep(end - ramp, end, progress);
  return enter * leave;
}
```

Validate with normal and aggressive wheel/touch-like scroll steps. A headline that appears only during careful dragging is not readable.

Every text band needs:

- A calm region planned into the footage
- A global subtle scrim
- A local gradient/scrim active with the band
- A restrained text shadow or opaque backing for small labels
- Contrast evaluated against the busiest/worst frame in its range

Do not darken the entire film until it loses its value. Move the text, shorten it, strengthen its local backing, or adjust the media composition.

## Responsive and reduced-motion modes

Default to an intentionally designed static hero for:

- `prefers-reduced-motion: reduce`
- Small portrait phones
- Portrait touch devices where the crop destroys the action lane
- Landscape phones with insufficient height
- Devices/network conditions that fail the tested media budget

Use identical media-query logic in CSS and JavaScript so the hidden version does not download unexpectedly. Listen for changes, including rotation and live reduced-motion changes.

Static mode must include:

- Approved poster or ending art
- Complete headline, value proposition, and CTA
- No video request
- No long empty scroll region
- Final states for decorative scroll drawings/entrances

Use a mobile scrub only when the encoded media is small, the portrait crop remains intentional, and real-device testing passes.

## Framework integration

- Keep chapter content in ordinary data/HTML.
- Create the media controller inside an effect/lifecycle hook and destroy it on unmount.
- Do not put `currentTime`, every scroll offset, or every character animation in framework state.
- Cancel rAF, observers, listeners, abort controllers, timeouts, and object URLs.
- Preserve server-rendered readable content in frameworks that support SSR.
- Lazy-load cinematic code/media only on routes that use it.
- Respect the project's existing smooth-scroll library; do not add Lenis or GSAP automatically.

## Teardown and testing

Test:

1. Direct media URL and range behavior
2. Cold load with poster first
3. Top, middle, and ending positions
4. Fast forward and reverse scrub
5. Repeated direction changes
6. Aggressive flick scrolling
7. Tab hidden/visible
8. Cinematic region offscreen
9. Missing/blocked video
10. Slow or stalled network
11. Rotation and resize across static/scrub gates
12. Reduced motion enabled before load and changed live
13. Mobile touch scrolling
14. Console and performance timeline
15. Component unmount/remount without duplicate listeners or leaked object URLs

The controller must rest when converged and when offscreen. A permanently running animation loop is a defect.
