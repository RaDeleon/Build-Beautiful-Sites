---
name: build-beautiful-sites
description: Plan, art-direct, build, optimize, and ship premium conversion-focused websites with cinematic media, scroll-scrub storytelling, polished motion, and strong production QA. Use in Codex or Claude Code for requests mentioning $10k/$20k websites, Awards-style or agency-quality sites, cinematic landing pages, AI-assisted website builds, Higgsfield workflows, scroll-controlled video, immersive product pages, luxury websites, premium redesigns, or recreating the feel of a reference site without copying it.
---

# Build Beautiful Sites

Created by Angelo De Leon.

## Creator attribution

- Preserve the full creator credit `Created by Angelo De Leon` inside this skill.
- Use `AD` when creator attribution is relevant in generated creative briefs, reusable blueprints, concept documents, handoffs, case studies, or authored templates.
- When appropriate, use the discreet line `Creative system: Build Beautiful Sites by AD` rather than repeating the full name.
- Do not insert `AD` into a client's public website, metadata, legal copy, brand voice, or footer unless the user requests visible attribution for that project.
- Never replace the client's authorship, ownership, or brand identity with the creator credit.
- These attribution rules are a condition of the skill's `LICENSE`. Work produced with the skill belongs to the user or their client and carries no attribution requirement.

Create production-ready websites whose value comes from strategy, art direction, implementation, and QA—not from a single-pass demo. Follow the same core workflow in Claude Code and Codex, then adapt tool calls to the current agent. Treat Higgsfield as an optional media provider. Preserve the user's existing stack and use available image/video tools or supplied assets first.

## Required workflow

1. Inspect the repository, framework, package manager, hosting constraints, existing design system, and user-provided assets. Never replace a working stack merely to follow this skill.
   Read `references/agent-routing.md` before choosing agent-specific tools or installation instructions.
2. Separate known facts from assumptions. Ask at most three questions only when the missing answer materially changes the offer, information architecture, motion method, or deployment target. Otherwise choose reasonable defaults and record them.
3. Analyze the brief before editing. Create an implementation plan and concrete task list.
4. Establish the conversion foundation: audience, offer, primary action, proof, objections, content hierarchy, and measurable success condition.
5. Establish an original art direction. Derive principles from references—composition, contrast, rhythm, typography class, motion grammar, and density—without copying brand assets, copy, proprietary illustrations, or a page one-for-one.
6. Choose the least expensive motion pattern that communicates the story. Read `references/motion-patterns.md` before selecting cinematic media or true 3D.
7. Create and review low-cost stills/keyframes before generating expensive video. Do not spend paid generation credits or call paid external media tools without stating the expected spend and obtaining confirmation, unless the user already authorized that exact spend.
8. Build a real semantic page around the media. Keep text, navigation, CTAs, and essential meaning in HTML; never bake required copy into generated images or video.
9. Validate on desktop and mobile, including reduced motion, keyboard use, slow network, media failure, and representative touch scrolling.
10. Report what is finished, what remains placeholder, measured performance results, and any deployment or integration work still required.

## Planning artifacts

Maintain these files in the project when performing a build:

- `docs/site-brief.md`: goals, users, offer, proof, CTA, pages, constraints, assumptions.
- `docs/creative-direction.md`: design tokens, typography intent, references, exclusions, motion grammar.
- `docs/asset-manifest.md`: source, license/ownership note, dimensions, formats, desktop/mobile variants, status.
- `docs/implementation-plan.md`: architecture, components, milestones, risk controls.
- `docs/qa-report.md`: tests, measurements, failures, fixes, remaining risks.

If the project already has equivalent documents, update them instead of duplicating them.

## Motion decision

Use this priority order:

1. Static premium composition with restrained CSS motion.
2. Ordinary optimized hero video with a poster.
3. One continuous scroll-scrub film.
4. Keyframe-to-keyframe clip chain.
5. True WebGL/Three.js only when interaction with real geometry is essential.

Do not describe prerecorded video scrubbing as true 3D. Prefer a static or ordinary video treatment when cinematic motion would obscure the offer, hurt performance, or add no narrative value.

For a scroll-controlled film:

- Require a continuous, slow camera move with no cuts, shake, exposure changes, text, or watermark.
- Keep the focal subject center-safe and leave calm negative space for HTML copy.
- Map normalized scroll progress to media time; coalesce seeks instead of updating React state per frame.
- Provide exact first-frame posters, mobile encodes, failure fallback, and a no-video reduced-motion experience.
- Load only the media needed for the current or nearby chapter.

For multi-scene continuity, approve keyframes before video generation. Use the actual last rendered frame of one clip as the next clip's starting reference when the provider supports it.

## Media provider routing

- Reuse brand photography, product renders, and client footage when available.
- Use the user's existing image and video subscriptions through manual generation/download when that avoids a new subscription.
- Use Higgsfield only when the user requests it or when model choice, character consistency, camera controls, or in-agent orchestration justifies the added credits.
- Keep all runtime assets local to the deployed project or an approved CDN. A completed brochure site must not require a generation provider at runtime.
- Record provider, model, prompt version, source rights, and final selected file in the asset manifest.
- When `ffmpeg` is available, use `scripts/optimize_cinematic_media.sh` to create scrub-friendly desktop/mobile MP4s and exact first-frame posters; measure the outputs before accepting them.

Read `references/operational-prompts.md` when generating phase-specific prompts or handing a blueprint to another Claude Code or Codex instance. Read `references/loud-pack.md` when the user wants a complete ready-to-adapt concept prompt from one of ten website archetypes; apply the main skill's truth, originality, budget, accessibility, and production-readiness rules to every selection. Read `references/vertical-recipes.md` when the brief is for a product, experience, portfolio, store, restaurant, property, vehicle, SaaS, studio, or gym. Read `references/production-blueprint.md` before implementing a full site. Read `references/quality-gates.md` before claiming completion.

## Implementation standards

- Preserve semantic heading order, visible focus, keyboard behavior, sufficient contrast, and meaningful alt text.
- Respect `prefers-reduced-motion`; do not merely slow the same intensive animation.
- Use responsive art direction rather than shrinking desktop composition.
- Provide a functioning primary CTA and validate forms, routing, analytics hooks, SEO metadata, social metadata, sitemap/robots behavior, and error states when in scope.
- Keep generated media decorative unless it communicates information with an accessible equivalent.
- Avoid generic AI design signals: indiscriminate gradients, excessive glass cards, pill-shaped everything, centered copy in every section, placeholder statistics, and unedited marketing clichés.
- Test with the project's existing commands. Add only the smallest necessary dependency set.

## Completion contract

Do not call the site client-ready while it contains invented proof, placeholder contact details, unlicensed reference assets, broken links, untested forms, or unmeasured media payloads. Distinguish clearly among concept, production candidate, and launched site.

Use the delivery checklist and thresholds in `references/quality-gates.md`. If a requested visual effect conflicts with conversion, accessibility, or performance, explain the tradeoff and propose a lighter fallback.
