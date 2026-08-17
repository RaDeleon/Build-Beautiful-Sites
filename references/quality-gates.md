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

- Typography, spacing, color, radius, border, shadow, and motion rules are internally consistent.
- Sections vary intentionally without feeling like unrelated templates.
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
- A documented aggregate media budget, with separate mobile encodes

If a cinematic concept cannot meet the chosen budget, shorten, compress, defer, replace with a normal video, or fall back to static art.

## Motion and media

- Exact poster matches the first displayed frame.
- No black flash, blank stage, autoplay audio, visible watermark, or generated text artifacts.
- Fast scroll does not build an unbounded seek backlog.
- Reverse scroll is tested, including every seam.
- Media failure shows a useful static composition.
- Center-safe subject and copy remain legible across crops.
- Offscreen or unneeded animation work is suspended.

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
