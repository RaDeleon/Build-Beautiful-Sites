# Visual and Motion QA

Use this reference during media approval, implementation checkpoints, and final review.

## Contents

1. Review checkpoints
2. Media review
3. Design rejection test
4. Rendered breakpoint review
5. Motion and interaction review
6. Conversion and truth review
7. Evidence and completion

## Review checkpoints

Do not wait until the end:

1. **Direction checkpoint:** review the production package, reference principles, page structure, visual world, and signature element.
2. **Still checkpoint:** review master-still candidates at desktop and mobile crops.
3. **Film checkpoint:** review the full clip, sampled frames, ending, and reverse scrub.
4. **First-render checkpoint:** inspect the implemented hero and the first complete below-fold flow.
5. **Responsive checkpoint:** inspect representative desktop, tablet, and phone layouts.
6. **Pre-launch checkpoint:** repeat functional, accessibility, performance, and failure tests on the production build.

At each checkpoint, identify blockers, fix them, render again, and compare. Do not merely list known defects.

Before starting, confirm the current surface can actually render and inspect the
page. Claude Desktop chat and ChatGPT cannot without a browser or preview
connector. Where inspection is impossible, do not soften these checkpoints into
opinions about the source code — leave them open in `docs/qa-report.md` and hand
the build to a surface that can render it.

## Media review

Use `scripts/inspect_cinematic_media.sh` to generate metadata and sample frames.

### Master-still scorecard

Pass only when:

- The subject is immediately recognizable and physically coherent.
- The image feels specific to the brand rather than like generic “luxury AI.”
- Perspective, light, shadows, materials, and reflections agree.
- The copy zone is calm without looking like an artificial empty panel.
- Desktop navigation and headline can sit without covering the subject.
- The mobile/static crop remains a complete composition.
- No accidental text, watermark, trademark, logo, or misleading feature appears.
- The still can carry the page if video never loads.

### Film scorecard

Pass only when:

- The first frame matches or naturally extends the approved still.
- The camera follows one readable path at a usable speed.
- Identity, geometry, wardrobe, architecture, and materials remain stable.
- Secondary motion feels alive but not chaotic.
- Exposure, grade, reflections, and horizon do not pulse or jump.
- Random paused frames remain attractive.
- The copy lane stays usable through every caption band.
- The ending settles and works with navigation/copy.
- Forward and reverse scrub both feel continuous.
- Any seams are invisible or motivated.

Record rejected versions and reasons. Do not delete the evidence until the selected media is safely archived.

## Design rejection test

Ask these questions while looking at the rendered page:

1. If the video disappeared, would the typography and layout still look professionally directed?
2. Does the first screen communicate an offer or meaningful emotional promise, not only atmosphere?
3. Could this exact palette, grid, type pairing, and card system belong to dozens of AI landing pages?
4. Is there one memorable signature element whose removal would materially weaken the design?
5. Are adjacent sections distinct in composition while remaining part of one system?
6. Is every effect serving hierarchy, story, feedback, or continuity?
7. Are gradients, glass, glow, pills, counters, marquees, HUDs, particles, and parallax present because the concept needs them?
8. Does the page use real proof and real product/brand material where visitors need credibility?
9. Does the static/mobile version feel designed rather than downgraded?
10. Would a skeptical buyer know what to do next?

Rebuild a weak section when the underlying hierarchy or composition is wrong. Do not mask it with more decoration.

## Rendered breakpoint review

Capture or inspect at minimum:

- 1440 × 900 desktop
- 1280 × 800 desktop
- 768 × 1024 tablet-like portrait
- 390 × 844 modern phone
- 375 × 667 short phone

Check:

- Hero crop, focal position, copy lane, navigation collision, and viewport-height behavior
- Heading wraps, orphan words, clipped descenders, and line-length rhythm
- Section spacing and transitions
- Alignment, grid edges, and repeated layout skeletons
- Contrast over the worst media frame
- Touch targets and safe areas
- Sticky behavior and scroll length
- Images that appear as unequal or missing members of a set
- Footer, forms, legal/navigation links, and error/success states

Do not infer mobile quality from a narrow desktop resize alone. Use touch/coarse-pointer behavior when the test environment supports it.

## Motion and interaction review

Test:

- Slow and fast scroll
- Aggressive wheel flicks
- Touch-like large scroll deltas
- Reverse scroll through every chapter and seam
- Repeated direction changes
- Initial load before media readiness
- Media error and timeout
- Reduced motion before load and toggled live
- Tab backgrounding and returning
- Offscreen animation suspension
- Keyboard navigation and focus visibility
- Hover and pointer behavior after entrance animations finish
- The primary CTA and every interactive story moment

Motion fails when it:

- Delays comprehension
- Runs while offscreen or after convergence
- Causes scroll jank or layout shift
- Requires the user to drag slowly to read
- Snaps instead of easing
- Replays stale entrance delays on hover
- Becomes the only way to understand content
- Persists under reduced motion without a justified accessible equivalent

## Conversion and truth review

- One primary CTA is visible early and repeated when the visitor has enough information.
- Each section answers a buyer question, provides proof, handles an objection, or advances the decision.
- Copy sounds like the actual brand, not a generic AI manifesto.
- Claims are verified and proof sits near the claim.
- No invented testimonials, logos, client names, statistics, certifications, prices, availability, addresses, or product features.
- Generated imagery does not imply a facility, room, amenity, product variant, employee, result, or interface that does not exist.
- Forms state where submissions go and succeed/fail truthfully.
- Demo interactions and fictional concepts are labeled honestly.

## Evidence and completion

Write `docs/qa-report.md` with:

- Build/test commands and results
- Breakpoints inspected
- Screenshots or artifact paths when available
- Media metadata and payload sizes
- Measured performance results and test conditions
- Accessibility and keyboard results
- Reduced-motion, failure, and slow-network results
- Issues found, fixes made, and retest evidence
- Accepted exceptions and remaining risks
- Classification: concept, production candidate, deployed, or client-ready

Client-ready requires:

- Blocking checks pass or are explicitly accepted.
- The user's rendered review is complete.
- The final approved media is integrated.
- Conversion paths work.
- No placeholder or invented material is presented as real.
- The live experience is verified on the deployment target.
