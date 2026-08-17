---
name: build-beautiful-sites
description: Plan, art-direct, produce, build, test, and ship premium conversion-focused websites, including cinematic Higgsfield/Seedance-style scroll experiences, controlled AI image-to-video, polished static sites, product stories, luxury landing pages, and true 3D when geometry is essential. Use in Claude Code, Codex, or ChatGPT for $10k/$20k website requests, Awwwards-style sites, premium redesigns, AI-assisted web production, scroll-scrub video, cinematic product launches, immersive portfolios, or recreating the principles of a reference experience without copying it.
---

# Build Beautiful Sites

Created by Angelo De Leon.

Build custom, production-ready websites whose value comes from strategy, art direction, controlled media production, implementation, iteration, and proof. Never treat a long prompt or the first generated clip as the finished product.

## Creator attribution

- Preserve `Created by Angelo De Leon` inside this skill.
- Use `AD` in relevant authored briefs, production packages, blueprints, handoffs, and case studies.
- Prefer the discreet line `Creative system: Build Beautiful Sites by AD` when attribution belongs in an internal deliverable.
- Do not put `AD` or Angelo De Leon on a client's public site, metadata, legal copy, brand voice, or footer unless the user requests it.
- Never override the client's ownership or authorship.

## Core contract

1. Preserve the user's repository, stack, hosting model, and existing design system unless a change is justified.
2. Separate verified facts from assumptions. Never invent proof, products, features, testimonials, prices, results, certifications, locations, availability, legal language, or contact details.
3. Design the conversion journey and page before producing cinematic media. Video serves the page; the page does not decorate arbitrary video.
4. Use the lightest production mode that can deliver the requested experience, but when the user explicitly wants the cinematic examples associated with this skill, use the strict Cinematic Scrub workflow rather than silently downgrading to generic motion.
5. Require explicit approval before any paid generation. State the exact or currently reported cost, remaining credits when available, and retry budget. A provider subscription or unlimited web plan may not cover connector/API generations; verify instead of assuming.
6. Require an approved master still before animation and an approved video before final integration. Never hide weak footage inside a polished layout.
7. Keep essential copy, navigation, CTAs, proof, and meaning in semantic HTML. Generated media is enhancement, not the only content layer.
8. Inspect the rendered result and iterate. Do not declare quality from source code, a successful build, or a single screenshot.
9. Distinguish concept, production candidate, deployed site, and client-ready site.

## Start by routing the job

Read `references/agent-routing.md` to identify the current agent, available browser/preview tools, media tools, connectors, repository constraints, and deployment path.

Choose one primary production mode:

| Mode | Use when | Required media gate |
| --- | --- | --- |
| Static premium | Trust, content, SEO, speed, or conversion matters more than film | Approve key art and rendered design |
| Standard video | Atmosphere can play by time without controlling the story | Approve poster and final clip |
| Cinematic scrub | Scrolling must reveal, travel, assemble, descend, orbit, or transform through a film | Approve storyboard, master still, every clip, and final scrub encode |
| True 3D | The user must manipulate real geometry, configuration, camera, or spatial state | Approve model/scene prototype and performance budget |

Read `references/motion-patterns.md` for the selection matrix. For Cinematic Scrub, read `references/cinematic-production.md`, `references/scrub-engineering.md`, and `references/visual-qa.md` before generating or implementing.

## Required workflow

### 1. Inspect and frame the problem

- Inspect the repository, framework, package manager, routes, components, content, tests, deployment configuration, and supplied assets.
- Identify the audience, offer, primary CTA, proof, objections, pages, conversion event, and success criteria.
- Ask no more than three questions at once, and only when the answers materially change scope, art direction, media production, or deployment.
- Create or update `docs/site-brief.md` with facts, assumptions, decisions, constraints, and missing proof.

### 2. Research and establish an original direction

- Research the audience's recurring pains, desired outcomes, and objections when current market language will improve the page. Paraphrase; do not copy review or competitor language into client copy.
- Analyze references as design grammar: hierarchy, rhythm, grid, typography class, contrast, imagery, motion, density, and perceived value.
- Produce an original direction with meaningful departures. Do not copy names, copy, assets, proprietary art, exact page order, or signature composition.
- Define one brand premise, one primary CTA, one visual world, one motion grammar, and one signature design element.
- Create `docs/creative-direction.md`.

### 3. Choose scope and write the production package

- Select the production mode and, for Cinematic Scrub, the tier defined in `references/cinematic-production.md`.
- Create `docs/production-package.md` containing the page structure, conversion story, section copy, visual world, palette roles, type intent, layout/copy zones, storyboard, media prompts, mobile treatment, reduced-motion treatment, asset plan, cost ceiling, and acceptance criteria.
- Use `references/loud-pack.md` when the user requests one of its ten ready-to-adapt archetypes. Treat each prompt as raw creative material; replace fictional facts and route it through this workflow.
- Use `references/vertical-recipes.md` to align the story with the client's industry.
- Obtain approval of the production package before paid generation or large implementation changes.

### 4. Produce media through gates

Follow `references/cinematic-production.md`.

Mandatory gates for Cinematic Scrub:

1. **Storyboard gate:** approve the journey, copy zones, ending, tier, provider, and total budget.
2. **Master-still gate:** inspect composition, identity, geometry, brand details, copy space, crop safety, and unwanted trademarks; obtain approval.
3. **Video gate:** inspect the whole clip plus sampled frames; reject morphing, flicker, geometry drift, camera jumps, broken continuity, unusable copy space, or a weak ending; obtain approval.
4. **Chain gate:** approve every segment before using its final rendered frame to start the next.
5. **Encode gate:** verify size, dimensions, duration, codec, pixel format, keyframe interval, first-frame poster, ending frame, and reverse-scrub behavior.

If no capable video provider is available, stop the cinematic media phase after producing an approved storyboard, master still, prompt package, file manifest, and integration specification. Do not generate a low-quality substitute merely to finish the page.

### 5. Process and record assets

- Keep raw, rejected, review, and source files outside production/public directories.
- Put only selected, optimized assets into the deployed site.
- Record source, ownership/license note, provider, model, references, prompt version, cost, dimensions, selected filename, rejection reasons, mobile variant, and fallback in `docs/asset-manifest.md`.
- Use `scripts/optimize_cinematic_media.sh` and `scripts/inspect_cinematic_media.sh` when `ffmpeg`/`ffprobe` are available.

### 6. Implement in the existing stack

- Read `references/production-blueprint.md` before a full build.
- Preserve working architecture. Use static HTML only when it fits; use the project's React, Next.js, Astro, CMS, commerce, or server stack when already required.
- Build semantic hierarchy, navigation, proof, offers, conversion paths, and forms before layering cinematic media.
- Isolate media control from page content and avoid per-frame framework state.
- Use responsive art direction, not a shrunken desktop composition.
- Provide a complete static experience for mobile, reduced motion, failure, and unsupported playback.
- Implement real form destinations, analytics, SEO/social metadata, routes, legal links, and integrations only when verified and in scope. Label prototypes honestly.

### 7. Run the visual iteration loop

Follow `references/visual-qa.md` and `references/quality-gates.md`.

- Render and inspect at desktop and mobile checkpoints.
- Critique hierarchy, typography, spacing, crop, contrast, rhythm, originality, motion, performance, and conversion.
- Reject generic AI patterns and rebuild weak sections instead of adding more gradients, glow, glass, cards, or animation.
- Test normal scroll, aggressive flicks, reverse scroll, rotation, keyboard use, reduced motion, missing video, slow network, cold load, navigation, CTA, and form outcomes.
- Record tests, measurements, fixes, accepted exceptions, and remaining risks in `docs/qa-report.md`.

### 8. Launch honestly

- Use the repository's deployment target rather than forcing one host.
- Verify the live URL, HTTPS, assets, media seeking, metadata, redirects, analytics, forms, errors, and representative device behavior.
- Measure rather than promise performance.
- Do not call a site client-ready until the user has reviewed the rendered experience and all blocking gates pass or are explicitly accepted.

## Media and provider rules

- Prefer approved client photography, renders, video, screenshots, and product assets.
- Use the current agent's image tools for boards, master stills, edits, and posters when suitable.
- Use a controlled image-to-video provider for cinematic motion. Higgsfield is the preferred integrated route when its connector is available and the user chooses it; another provider is acceptable if it supports the approved references and motion contract.
- Query the provider's current model catalog, schema, cost, limits, and reference requirements. Do not hard-code remembered versions or prices.
- Configure references, palette, lighting, lens, physics, camera path, and motion controls directly when the provider exposes them; do not force every decision into prose.
- For web scrub footage, generate without useful audio or strip audio during encoding.
- Never depend on a generation provider at runtime. Deploy local or approved-CDN media.

## Design floor

- Use a distinctive typography system, purposeful grid, controlled palette, deliberate crops, meaningful whitespace, and one signature element.
- Avoid indiscriminate gradients, excessive glass, pill-shaped everything, centered copy in every section, identical adjacent layouts, fake HUDs, placeholder statistics, and unedited marketing clichés.
- Keep accents rare. Tint canvases toward the visual world instead of defaulting to pure black or white.
- Make motion support physical story direction and hierarchy. Suspend offscreen work and animate transforms/opacity when possible.
- Preserve semantic landmarks, logical headings, visible focus, keyboard behavior, contrast, touch targets, meaningful alternatives, and `prefers-reduced-motion`.

## Completion contract

Do not claim completion while the build contains unapproved video, invented proof, placeholder contact details, broken links, nonfunctional conversion paths presented as real, unlicensed assets, untested forms, console errors, inaccessible essential content, or unmeasured cinematic payloads.

Use `references/quality-gates.md` as the final checklist. If the requested spectacle conflicts with truth, conversion, accessibility, device support, or performance, explain the tradeoff and propose a lighter production mode.

## Reference routing

- `references/agent-routing.md`: Claude/Codex/ChatGPT and provider handoff behavior.
- `references/cinematic-production.md`: tiers, story laws, still/video gates, Higgsfield/controlled-provider workflow, chaining, and cost discipline.
- `references/scrub-engineering.md`: robust scroll-video loading, seeking, pacing, responsive fallbacks, and teardown.
- `references/visual-qa.md`: screenshot critique, video rejection, motion tests, and revision loop.
- `references/motion-patterns.md`: choose static, video, scrub, keyframes, or true 3D.
- `references/operational-prompts.md`: phase-specific prompts for another Claude or Codex session.
- `references/loud-pack.md`: ten full archetype prompts with descriptions.
- `references/vertical-recipes.md`: production and conversion guidance by industry.
- `references/production-blueprint.md`: complete strategy-to-launch blueprint.
- `references/quality-gates.md`: truth, conversion, visual, accessibility, performance, motion, responsive, and delivery gates.
