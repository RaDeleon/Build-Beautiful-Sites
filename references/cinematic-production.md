# Cinematic Production

Use this reference only when the selected mode is Standard Video, Cinematic Scrub, or a keyframe sequence. Cinematic quality comes from controlled source media and disciplined rejection, not from asking the coding agent to improvise a film.

## Contents

1. Scope tiers
2. Story laws
3. Production package
4. Provider routing
5. Cost discipline
6. Master-still gate
7. Video prompt construction
8. Video gate
9. Chained journeys
10. Failure and fallback rules

## Scope tiers

Choose the smallest tier that carries the story:

| Tier | Deliverable | Typical media | Use when |
| --- | --- | --- | --- |
| S | Static premium | Approved key art plus restrained page motion | Film is unnecessary or unavailable |
| V1 | Single journey | One continuous 6–10 second clip | One reveal, orbit, approach, descent, assembly, or arrival |
| V2 | Chained journey | Two to four approved clips joined into a 12–24 second master | The story crosses several physical states or spaces |
| V3 | Choreographed campaign | Several planned films, stills, and interactions | A campaign site needs multiple directed chapters |
| 3D | Live geometry | Optimized model, textures, camera, and interaction | Visitors must manipulate spatial/product state |

Do not sell scope by adding more clips. A strong V1 is preferable to a drifting V3.

## Story laws

Apply these before writing a generation prompt:

1. **Design the page first.** Define the visitor's question, page chapters, copy, CTA, and emotion at each beat. Storyboard the film to carry those beats.
2. **Make motion agree with scroll.** Down-scroll should feel like arrival, descent, opening, assembly, approach, or forward travel. Avoid a dominant movement that visually fights the scroll direction.
3. **Use one focal subject and one readable journey per clip.** Avoid simultaneous transformations, unrelated subjects, and unmotivated cuts.
4. **Plan the ending first.** The final frame becomes the resting composition. Leave room for navigation, copy, and the next section.
5. **Lock the path but keep the world alive.** Use a stable camera path and subject trajectory while allowing believable secondary motion such as fabric, dust, steam, reflections, light, or particles.
6. **Compose for HTML.** Reserve a calm copy zone and keep the focal action out of it. Essential type never belongs in generated media.
7. **Favor reliable subjects.** Atmosphere, materials, fluids, distant silhouettes, light, fabric, and simple products tolerate generation better than hands, recognizable interfaces, complex mechanisms, crowded faces, or exact architecture.
8. **Make boundary crossings physical.** When the camera crosses water, fog, glass, dust, a doorway, or darkness, define the lens/lighting transition so the event feels real.
9. **Preserve identity.** Lock product geometry, character details, wardrobe, architecture, material finish, palette, light direction, lens class, camera height, and grade through references and provider controls.
10. **Treat every paused frame as a composition.** Scrub footage exposes frames out of normal playback context. Avoid aggressive blur, flicker, exposure pumping, and fast subject deformation.
11. **Do not request generated copy.** Exclude text, letters, logos, UI, captions, subtitles, watermarks, and accidental brand marks.
12. **Change the concept after repeated failure.** After three materially similar failed generations, stop rewriting the same prompt. Choose a more reliable visual mechanism.

## Production package

Write this package before paid generation:

- Mode and tier
- Primary conversion goal
- Page/section sequence
- Verbatim approved hero and chapter copy
- Visual world: palette, materials, environment, lighting, lens, grade, atmosphere
- Master subject identity details
- Desktop composition and protected copy zones
- Mobile/static composition
- Numbered storyboard with start state, action, camera path, ending, and page purpose
- Provider and candidate models
- Generation settings and reference plan
- Cost per attempt, total approved ceiling, and reserved retry budget
- Output filenames and repository destinations
- Acceptance and rejection criteria

Save it as `docs/production-package.md`. Add `Creative system: Build Beautiful Sites by AD` when internal attribution is appropriate.

## Provider routing

Use this order:

1. Approved client footage or renders
2. Approved stills animated through a capable image-to-video provider
3. Provider-generated master still plus controlled image-to-video
4. Static premium mode

Do not begin with unrestricted text-to-video when identity, product geometry, architecture, or composition matters.

### Higgsfield route

Use Higgsfield when the user chooses it and the current agent can access its connector or the user can run the approved prompts manually.

- In Claude interfaces that support custom connectors, the current MCP endpoint is `https://mcp.higgsfield.ai/mcp`; verify current vendor instructions before guiding setup.
- A connected Higgsfield workflow may expose image/video models, references, camera/motion controls, palette, lighting, lens, physics, edits, uploads, balance, and cost checks. Discover the current tool schema instead of assuming method names.
- Connector generations deduct credits even when a web plan advertises unlimited generations. Confirm current plan behavior, model cost, and balance for the actual route being used.
- A prompt-level spending ceiling is not a hard provider limit. Ask before every generation unless the user explicitly authorized a bounded batch.
- Upload reference files through the provider's supported upload/reference flow. Do not assume an ordinary chat attachment automatically becomes a provider reference.
- Download accepted outputs from the provider and store them with the project; the deployed website must not call Higgsfield.

### Claude, Codex, ChatGPT, and Gemini roles

- Use Claude or Codex for research, direction, prompts, code, processing, testing, and documentation.
- Use ChatGPT or Gemini image capabilities for concept boards, key art, master still candidates, edits, and posters when available and suitable.
- Use any video provider only after the same still and video gates. A different model does not waive production discipline.
- If the current agent cannot operate the selected provider, create a precise manual-generation handoff and wait for the returned assets.

## Cost discipline

Before paid work:

1. Query the current model catalog and exact request schema.
2. Check account balance when available.
3. Preflight the same proposed shot across viable models/settings.
4. Present cost per attempt, total planned cost, and remaining retry reserve.
5. Obtain approval for a clearly bounded amount.
6. Record actual cost and generation ID in `docs/asset-manifest.md`.

Prototype with the lowest resolution that reveals composition and motion problems. Use final 1080p output only after direction is approved. Use 4K/upscaling only when the delivery needs it; web scrub assets will be resized and re-encoded.

## Master-still gate

Generate or select two to four candidates. The starting still must function as both brand art and frame zero.

Inspect:

- Subject identity and physically believable geometry
- Exact product, wardrobe, architecture, material, and brand details
- Unintended logos, trademarks, text, faces, or objects
- Camera height, lens feel, horizon, and perspective
- Lighting direction and color grade
- Protected desktop copy zone
- Center-safe crop and mobile/static crop
- Space for persistent navigation
- Whether the planned motion can begin naturally from this pose
- Whether the still alone is good enough for the fallback experience

Show the best candidates with an honest recommendation. Do not animate until one is approved.

### Master-still prompt

```text
[SUBJECT] in the first state of [JOURNEY]. Frame edge-to-edge as one coherent
environment. Place the focal subject at [POSITION] with a calm [LEFT/RIGHT/
CENTER] region for HTML copy. Camera [HEIGHT/ANGLE], [LENS CLASS]. Lighting
[SOURCE, DIRECTION, QUALITY]. Materials [MATERIALS]. Palette [PALETTE].
Atmosphere [SUBTLE AMBIENT LIFE]. Premium editorial product-film finish,
physically coherent geometry, 16:9.

Continuity locks: [IDENTITY, PROPORTIONS, WARDROBE, ARCHITECTURE, MATERIALS,
LIGHT DIRECTION, COLOR GRADE].

Exclude text, letters, logos, UI, watermark, extra objects, clipped subject,
distorted geometry, inconsistent shadows, busy copy zone, and people unless
specified.
```

Describe the calm copy region as part of the world, such as receding shadow, soft wall, sky, water, or depth. Do not request literal black side panels or empty bars.

## Video prompt construction

Configure structured provider controls first when they exist:

- Identity and style references
- Era/genre only when relevant
- Palette and lighting
- Camera body/lens
- Camera path
- Subject motion
- Physics
- Start/end references
- Duration, resolution, aspect ratio, and audio

Use the prompt for action and constraints the controls do not already express.

```text
One continuous [DURATION]-second shot with no cuts. Start exactly from the
approved reference frame. [SUBJECT] moves from [START STATE] to [END STATE]
along [EXPLICIT TRAJECTORY]. Camera follows with a [SLOW PUSH/ORBIT/TRACK/
RISE/DESCENT], constant readable speed, [LENS CLASS], stable horizon.

Keep [SUBJECT IDENTITY AND GEOMETRY] unchanged. Natural secondary motion:
[FABRIC/DUST/STEAM/REFLECTIONS/LIGHT]. Environment remains consistent:
[LIGHT, MATERIALS, PALETTE, GRADE]. Maintain a calm [COPY ZONE] region.
[BOUNDARY MOMENT IF ANY]. End fully settled on [FINAL COMPOSITION] and hold.

Exclude cuts, montage, speed ramps, whip pans, shake, flicker, exposure
pumping, morphing, sliding, extra objects, identity drift, geometry changes,
heavy motion blur, text, logos, captions, UI, audio, and watermark.
```

Avoid mixing an orbit, dolly, crane, zoom, and handheld movement in one short clip. One primary camera behavior is usually strongest.

## Video gate

Inspect the entire clip at normal speed, frame-by-frame samples, paused random frames, and reverse scrub.

Reject when any blocker appears:

- Product, face, wardrobe, vehicle, room, logo, or material identity changes
- Wheels, hands, controls, architecture, lettering, or familiar anatomy deform
- Subject slides, teleports, duplicates, floats, or intersects surfaces
- Reflections, shadows, exposure, white balance, or horizon flicker
- Camera path jumps, accelerates abruptly, or loses the focal subject
- Motion direction fights the scroll story
- Copy zone becomes busy or crosses the action lane
- Opening frame differs from the approved still without reason
- Ending drifts, crops the subject, collides with navigation, or fails to feel complete
- Watermark, text, UI, or unintended trademark appears
- The clip works only at playback speed but looks broken when paused/scrubbed

Extract start, quarter, middle, three-quarter, and ending frames with `scripts/inspect_cinematic_media.sh`. Share an honest critique and obtain explicit approval.

Try a region/local edit when the provider can fix one isolated defect without changing approved composition. Re-render the shot when the problem is global. Change the concept after three related failures.

## Chained journeys

For V2/V3:

1. Approve the complete storyboard and full budget first.
2. Generate segment 1 from the master still.
3. Gate segment 1.
4. Extract the actual final rendered frame as a lossless PNG.
5. Use that frame as the next segment's start reference.
6. Continue the same motion vector, speed, light direction, lens logic, and grade.
7. End intermediate segments mid-motion. Reserve the composed resting ending for the final segment.
8. Place seams inside motion, blur, darkness, lens crossings, particle sweeps, or lighting changes. Fine texture may be re-imagined between generations even when position matches.
9. Gate every segment independently.
10. Concatenate accepted raw segments, encode once when possible, and inspect every seam in both directions.

Use a brief crossfade only to soften texture discontinuity between otherwise matching segments. Do not use a crossfade to hide unrelated scenes or broken motion.

## Failure and fallback rules

- If the master still is weak, regenerate the still rather than spending video credits.
- If the clip is good except for a drifting tail, trim to the last stable composition before re-rendering.
- If a precise product or building will not remain accurate, use client renders, real photography, a more distant composition, or static mode.
- If cinematic media is unavailable, deliver the production package and static experience. Do not substitute generic stock or unrelated AI footage.
- If performance cannot meet budget, shorten, compress, defer, use a standard video, or use the approved still.
- The static/mobile/reduced-motion experience must look intentional, not like an apology for missing video.
