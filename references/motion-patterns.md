# Motion Patterns

## Contents

1. Selection matrix
2. Static premium composition
3. Standard cinematic video
4. Single-shot scroll scrub
5. Keyframe bridge sequence
6. True 3D
7. Prompt grammar

## Selection matrix

| Pattern | Best use | Cost/risk | Default fallback |
| --- | --- | --- | --- |
| Static + CSS | Professional services, SEO pages, most local businesses | Lowest | None needed |
| Hero video | Emotional atmosphere without scroll dependence | Low-medium | Poster image |
| Single-shot scrub | One product, one reveal, one continuous physical journey | Medium | Approved master still and static chapter art |
| Keyframe bridge | Several story states that must remain visually controlled | High | Approved keyframes and a shorter single-shot alternative |
| True 3D | User must rotate, configure, inspect, or manipulate geometry | Highest | Rendered turntable/video |

## Static premium composition

Create perceived value through art direction rather than effects: strong typography, asymmetric grid, restrained palette, useful whitespace, deliberate crops, custom illustration or photography, proof, and a clear CTA. Use transform/opacity motion only and keep interaction feedback under roughly 300 ms.

## Standard cinematic video

Use a normal muted inline video when time-based playback is sufficient. Supply `poster`, desktop/mobile sources, and a pause affordance when the video persists or conveys meaningful content. Do not autoplay audio.

## Single-shot scroll scrub

Generate one controlled 6–10 second continuous shot by default. Map scroll progress `0..1` to `video.currentTime` `0..duration`. Use semantic chapters over the film. Do not export hundreds of separate images unless browser/device testing proves direct video seeking inadequate. Read `cinematic-production.md`, `scrub-engineering.md`, and `visual-qa.md` before production.

Footage contract:

- One centered hero subject
- One continuous move or transformation
- No cuts, whip pans, handheld shake, or speed ramps
- Locked exposure, white balance, grade, and subject identity
- Minimal motion blur because paused frames must remain attractive
- Different but satisfying start and end compositions
- Dark or quiet background with protected text zones
- No generated copy, logos, UI, or watermarks

Continuity contract:

- Generate one approved master hero still before video when a recurring product, person, vehicle, property, or environment must stay identifiable.
- Do not animate the still until the user approves it.
- Pass that same master still as an identity/look reference to every related generation when the provider supports references.
- Keep wardrobe, materials, proportions, architecture, light direction, palette, and identifying details unchanged.
- Favor a slightly softer but consistent clip over a sharper clip whose subject changes.
- Spend extra takes on the hero first; it carries most of the perceived cinematic quality.
- Reject the first generated clip when it fails the video scorecard; a completed generation is not an approved asset.

Implementation contract:

- Use an exact first-frame poster for every deployed encode.
- Coalesce seeks while the decoder is busy.
- Use Blob URLs or verified byte-range support for seek reliability.
- Prime muted inline media on the first user gesture where iOS requires it.
- Avoid per-frame React state.
- Revoke Blob URLs and cancel animation frames on teardown.
- On reduced motion, skip video fetching and show static chapter art.

## Keyframe bridge sequence

Use 4–6 approved keyframes to define story beats, then create `N-1` transition clips. This costs more but can reduce subject and environment drift.

Sequence:

1. Define each keyframe as a story state, not merely a pretty image.
2. Generate one master hero still and use it as the shared identity/look reference.
3. Lock a byte-consistent visual grammar: palette, materials, lens, camera height, light direction, environment, and subject details.
4. Generate still candidates and review them before video.
5. Generate each bridge with explicit start/end references when supported.
6. Extract the actual last frame from each accepted bridge and use it as the following start when possible.
7. Match camera direction and velocity across joins.
8. Use a minimal crossfade only for encoder drift; never to hide unrelated endpoints.

## True 3D

Use Three.js/WebGL only for geometry-dependent interaction. Define a hard performance budget, lazy-load the experience, provide a static fallback, cap device pixel ratio, compress models and textures, and suspend rendering when the scene is offscreen. Do not choose true 3D solely because a reference site looks dimensional.

## Prompt grammar

Describe camera direction without naming a living director or copying a protected franchise. Specify:

`subject + story change + camera path + lens class + composition + lighting + material language + palette + speed + start state + end state + continuity constraints + exclusions`

Example:

> A precision-machined component emerges from charcoal mist as its outer shell separates into a clean exploded view. Slow centered push-in with a subtle clockwise orbit, long-lens product-film compression, subject held within the middle 50% of frame, graphite and warm brass palette, soft top-left key light, locked exposure, constant speed, no cuts, no people, no text, no logos, no flicker, no camera shake, minimal motion blur, 16:9.
