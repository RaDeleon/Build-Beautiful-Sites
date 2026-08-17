# Quality Gates

## Contents

1. Truth and rights
2. Conversion
3. Visual system
4. Accessibility
5. Performance
6. Motion and media
7. Responsive behavior
8. Technical delivery
9. Approval and evidence

## Truth and rights

- No invented testimonials, clients, awards, certifications, locations, results, prices, or metrics.
- No copied reference-site text, logos, proprietary graphics, or near-identical page composition.
- Every production asset has a recorded source and usage-rights note.
- AI assets are reviewed for distorted product details, misleading claims, and unintended trademarks.

## Conversion

- One clear primary action is visible early and repeated at a decision point.
- Headline communicates audience, outcome, or differentiated value—not just atmosphere.
- Proof is adjacent to major claims.
- Forms have useful validation, success, error, spam, and destination behavior.
- Every CTA resolves to a working target.

## Visual system

Check against the values in `design-system.md`, not against taste:

- Typography, spacing, color, radius, border, shadow, and motion come from one token set. No ad-hoc per-section values.
- Two type families at most. Display type at least 4× body at desktop. Body measure ≤ 68ch.
- One accent hue, at most three uses per viewport. Canvas is tinted, not pure black or white.
- Primary text ≥ 7:1 and secondary ≥ 4.5:1, verified against the worst media frame behind them.
- At most two elevation levels. No colored or wide-blur glow.
- Adjacent sections differ on at least two of: column count, alignment, media presence, background tone, density.
- Exactly one signature element, and removing it would visibly weaken the design.
- Interaction feedback under 150 ms; entrance travel ≤ 24 px; entrances play once.
- Effects support hierarchy instead of competing with it.
- Mobile art direction is composed, not merely scaled down.

## Accessibility

- Semantic landmarks and logical headings.
- Keyboard access and visible focus.
- Sufficient text and UI contrast.
- Meaningful alt text; decorative generated media is marked appropriately.
- Reduced motion preserves all information and avoids downloading intensive decorative video.
- Autoplayed media is muted; persistent meaningful motion can be paused.

## Performance

Measure rather than claiming. Unless the project defines stricter budgets, target:

- LCP at or below 2.5 s on a representative mobile profile
- CLS at or below 0.1
- INP at or below 200 ms when measurable
- Initial JavaScript appropriate to the framework and page complexity
- No cinematic media on the critical path to readable content

### Media budget

A cinematic hero and a 2.5 s mobile LCP are in direct tension. They are
reconciled by one rule: **the LCP element is the poster or the headline, never
the film.** Paint the poster and the copy from static markup, set the video
source only inside the motion-capable path, and the film's weight stops
competing with the LCP measurement.

Within that, hold these ceilings unless the project defines stricter ones.
Measure with `scripts/inspect_cinematic_media.sh` — do not estimate.

| Asset | Target | Hard ceiling |
| --- | --- | --- |
| Desktop scrub film, 6–10 s | 5 MB | 8 MB |
| Mobile scrub encode, 6–10 s | 2 MB | 3 MB |
| Poster and ending frame, each | 100 KB | 150 KB |
| Critical bytes before readable content | 200 KB | 300 KB |
| Aggregate page media, desktop | 6 MB | 8 MB |
| Aggregate page media, mobile | 2.5 MB | 3.5 MB |

Chained films are measured as one total, not per segment. Short GOP encoding
inflates size deliberately; that cost buys responsive seeking and is not the
first thing to cut.

When an encode exceeds its ceiling, remediate in this order:

1. Shorten the clip — a beat removed beats every beat compressed.
2. Reduce output width.
3. Raise CRF.
4. Reduce keyframe density last; it is what makes scrubbing work at all.
5. Drop to standard video, then to the approved still.

If a cinematic concept cannot meet the budget after step 5, the mode was wrong for the project. Say so and propose a lighter production mode rather than shipping a hero that fails on the devices the audience actually uses.

## Motion and media

- Cinematic mode has an approved production package, master still, and final video; every paid generation stayed within an approved ceiling.
- Generated footage is inspected as film, sampled frames, paused frames, and reverse scrub.
- Exact poster matches the first displayed frame.
- No black flash, blank stage, autoplay audio, visible watermark, or generated text artifacts.
- No identity, product-geometry, wardrobe, architecture, material, reflection, lighting, or horizon drift.
- Final frame is a composed resting state that works with navigation and copy.
- Fast scroll does not build an unbounded seek backlog.
- Reverse scroll is tested, including every seam.
- Media failure shows a useful static composition.
- Center-safe subject and copy remain legible across crops.
- Offscreen or unneeded animation work is suspended.
- After three similar failed generations, the concept changes instead of burning further credits on prompt edits.

## Responsive behavior

Test at minimum:

- 375 px portrait touch viewport
- 768 px tablet-like viewport
- 1440 px desktop viewport
- Landscape/rotation behavior when cinematic media is central
- Slow network and cold cache

Verify navigation, copy wrapping, touch targets, safe areas, crop, sticky behavior, form inputs, and browser chrome height changes.

## Technical delivery

- Project lint/typecheck/tests and production build pass, or failures are explained with scope.
- Routes, canonical metadata, social metadata, sitemap/robots, favicon, error states, and redirects are correct when applicable.
- No exposed secrets or client-only API credentials.
- No dead links, console errors, duplicate listeners, runaway animation loops, or unreleased Blob URLs.
- Deployment target and rollback path are documented.

## Approval and evidence

- The user approved the direction/production package before paid media.
- The user approved the selected master still before animation.
- The user approved every final cinematic clip before final integration.
- Desktop and mobile rendered checkpoints were inspected and weak sections were revised.
- QA records commands, breakpoints, media metadata, payloads, measured performance conditions, failures, fixes, and remaining risks.
- The final status is labeled concept, production candidate, deployed, or client-ready.
- Client-ready requires the user's rendered review, working conversion paths, approved final media, and verified live behavior.
