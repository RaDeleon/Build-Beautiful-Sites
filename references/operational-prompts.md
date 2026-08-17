# Operational Prompts

## Contents

1. One-message master prompt
2. Reference extraction prompt
3. Story and keyframe prompt
4. Image prompt template
5. Video prompt template
6. Build prompt
7. QA and polish prompt
8. Feedback translator prompt

Replace bracketed fields. Do not send every prompt blindly; use the smallest prompt that fits the current phase.

## One-message master prompt

```text
Act as a senior brand strategist, conversion designer, art director, frontend engineer, and QA lead. Build a premium, original website for [CLIENT/OFFER].

First inspect the repository and supplied materials. Then:
1. Analyze the business goal, audience, offer, proof, objections, primary CTA, hosting constraints, and available assets.
2. Separate facts from assumptions. Ask only questions whose answers materially alter scope or direction; otherwise record reasonable assumptions.
3. Create docs/site-brief.md, docs/creative-direction.md, docs/implementation-plan.md, and docs/asset-manifest.md.
4. Produce an original design language inspired by [REFERENCE PRINCIPLES OR URL/SCREENSHOTS], but do not copy its identity, text, assets, exact composition, or page sequence.
5. Select the lightest motion treatment that supports the story. Choose among restrained CSS motion, normal hero video, single-shot scroll-scrub, keyframe-bridge sequence, or true 3D. Explain the choice before paid media generation.
6. When a product, person, vehicle, property, or environment repeats, generate one approved master hero still and use it as the identity/look reference for every related image or clip. Review all stills/keyframes before generating video. Do not spend paid credits without stating expected cost and receiving approval.
7. Implement the site in the existing stack. Keep all essential content semantic and accessible; media is enhancement.
8. Add responsive behavior, mobile-specific media, exact posters, reduced-motion treatment, keyboard support, media-failure fallback, SEO/social metadata, and working conversion paths.
9. Run tests, lint/typecheck/build, inspect the rendered result at representative mobile and desktop sizes, and write docs/qa-report.md with measurements and remaining risks.

Do not stop after the first visually impressive draft. Iterate until the agreed acceptance criteria pass. Clearly distinguish real content from placeholders and concept work from production-ready work.
```

## Reference extraction prompt

```text
Analyze the supplied reference strictly as design research. Extract:
- hierarchy and section rhythm
- grid and alignment logic
- spacing and density
- typography categories and scale relationships
- palette roles and contrast strategy
- image treatment and crop behavior
- interaction and motion grammar
- what creates perceived value
- what would hurt conversion, accessibility, or performance

Return an original design blueprint expressed as reusable principles and neutral tokens. Do not copy the reference's name, copy, assets, exact page sequence, distinctive illustrations, or signature composition. Propose at least three meaningful departures that make the result ours.
```

## Story and keyframe prompt

```text
Turn this offer into a visual story with [4–6] beats. Each beat must have:
- business purpose
- visitor takeaway
- physical visual state
- one focal subject/action
- short HTML headline and supporting sentence
- protected negative-space location for copy
- transition direction into the next beat

Keep one consistent world grammar: [PALETTE], [MATERIALS], [LIGHT DIRECTION], [LENS CLASS], [CAMERA HEIGHT], [ENVIRONMENT], [SUBJECT DETAILS]. Make the first state establish the problem or desire and the final state deliver a clear payoff aligned with [CTA].

Create one master hero still first. Use it as the shared identity/look reference for every keyframe and clip when the provider supports reference media.
```

## Image prompt template

```text
[SUBJECT AND STORY STATE]. [COMPOSITION AND CAMERA HEIGHT], [LENS CLASS], focal subject held within the center-safe middle 50% of frame, protected [LEFT/RIGHT/CENTER] negative space for HTML copy. [LIGHTING], [MATERIALS], [PALETTE], [ATMOSPHERE], premium editorial product-film finish, physically coherent detail, 16:9.

Continuity: exactly preserve [SUBJECT IDENTITY], [ENVIRONMENT], [LIGHT DIRECTION], [CAMERA LOGIC], and [COLOR GRADE].
Exclude: text, letters, logos, UI, watermark, extra objects, people unless specified, distorted geometry, busy background, clipped subject, inconsistent shadows.
```

## Video prompt template

```text
Create one continuous [DURATION]-second shot beginning from [START STATE] and resolving at [END STATE]. [SUBJECT ACTION OR TRANSFORMATION]. Camera: [SLOW PUSH/ORBIT/RISE/TRACK], steady constant speed, [LENS CLASS], subject center-safe, protected [COPY ZONE] negative space. [LIGHTING], [MATERIALS], [PALETTE], locked exposure and white balance, minimal motion blur, premium restrained product-film grade, 16:9, audio off.

No cuts, transitions, speed ramps, shake, whip pans, flicker, exposure pumping, subject drift, morphing details, extra objects, people unless specified, text, logos, captions, UI, or watermark. The first and final frames must both work as polished still compositions.
```

## Build prompt

```text
Implement the approved design in the existing repository. Preserve its framework, conventions, and package manager. Build semantic content first and isolate the cinematic media controller from page structure.

For scroll-controlled video:
- map normalized document/chapter progress to video.currentTime
- coalesce seek requests and avoid per-frame React state
- provide exact first-frame posters and separate mobile encoding
- lazy-load only active/nearby media
- handle iOS inline-media priming where necessary
- fall back to static posters on failure
- under prefers-reduced-motion, fetch no cinematic video and show the complete story using static art
- clean up listeners, animation frames, object URLs, and media nodes

Maintain strong keyboard/focus behavior, contrast, responsive composition, working CTAs, SEO/social metadata, and no invented proof. Run the relevant checks and show concrete results.
```

## QA and polish prompt

```text
Audit this site as a skeptical senior designer, accessibility reviewer, performance engineer, and conversion strategist. Do not redesign reflexively.

1. Inspect the rendered result at narrow mobile and desktop sizes.
2. Test keyboard-only use, reduced motion, slow network, media failure, fast forward/reverse scroll, cold load, navigation, CTAs, and forms.
3. Measure production build output and media payloads. Run the available automated checks.
4. Identify generic AI visual patterns, weak hierarchy, unsupported claims, placeholder material, inconsistent spacing/type, poor crops, janky motion, and conversion dead ends.
5. Prioritize findings by user/business impact, fix the highest-impact issues, retest, and record evidence in docs/qa-report.md.

Do not call the site client-ready until every blocker is resolved or explicitly accepted.
```

## Feedback translator prompt

```text
Translate my subjective design feedback into specific, minimal implementation changes. Preserve everything I did not criticize.

My feedback: [FEELING-BASED NOTE]

First identify the likely design variables behind the feeling—hierarchy, scale, spacing, contrast, typography, crop, timing, easing, density, or interaction feedback. Propose the smallest high-confidence adjustment, implement it, compare the rendered result, and report exactly what changed. Do not respond to “make it premium” by adding generic gradients, glass cards, glow, or extra animation.
```
