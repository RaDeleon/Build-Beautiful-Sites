# Premium Cinematic Website Production Blueprint

## Contents

1. Phase 0 — discovery
2. Phase 1 — strategy
3. Phase 2 — creative direction
4. Phase 3 — storyboard and media
5. Phase 4 — implementation
6. Phase 5 — integration
7. Phase 6 — quality assurance
8. Phase 7 — launch

## Phase 0 — discovery

Inspect the existing project before proposing technology. Record:

- Framework, package manager, routes, components, CSS method, tests, and deployment configuration
- Brand assets, fonts, content, photography, video, and legal constraints
- Target hosting and whether static export, server rendering, WordPress, or a CMS is required
- Available media-generation tools and whether they are manual UI subscriptions or programmatic APIs
- Current agent: Claude Code or Codex, including which image/video/browser/preview tools are actually available

Output `docs/site-brief.md` with known facts, assumptions, open decisions, and scope boundaries.

## Phase 1 — strategy

Define:

- Primary audience and highest-value job to be done
- Offer and differentiator
- Primary CTA and secondary CTA
- Proof available now versus proof still needed
- Top objections and the content that answers each
- Desired user path and conversion event
- Page inventory and section order

Never invent client names, testimonials, awards, certifications, case-study results, prices, addresses, or statistics. Mark missing proof explicitly.

## Phase 2 — creative direction

Build an original design system from principles:

- Three to five brand attributes
- Palette roles with accessible contrast
- Display and body typography intent, with licensed/web-safe choices
- Grid, maximum content width, spacing scale, corner language, border and shadow rules
- Image treatment, crop behavior, texture, and icon language
- Motion grammar: speed, easing, direction, frequency, and reduced-motion substitution

When given a reference site or screenshots, extract its design grammar into neutral tokens. Do not reuse its name, copy, logos, exact layout sequence, proprietary art, or signature trade dress.

Output `docs/creative-direction.md` before high-cost media generation.

## Phase 3 — storyboard and media

Choose a motion pattern using `motion-patterns.md`.

For a single-shot scrub:

1. Write 3–6 semantic chapters.
2. Create and approve one master hero still for identity and visual continuity.
3. Create a six-panel storyboard image representing one continuous journey, using the master still as a reference when supported.
4. Review subject identity, protected copy areas, crop safety, palette, lighting, and start/end payoff.
5. Generate one continuous film only after the storyboard passes.

For keyframe bridges:

1. Write 4–6 story beats.
2. Generate one master hero still, then generate and approve all keyframes using it as a shared reference.
3. Generate only the bridges needed between approved frames.
4. Extract boundary frames and inspect both directions at each seam.

Create `docs/asset-manifest.md`. Keep raw and rejected media outside production/public folders. Put only selected optimized assets into the site.

## Phase 4 — implementation

Build the information hierarchy first, then the cinematic layer.

Recommended component boundaries:

- Site shell and navigation
- Hero or cinematic stage
- Semantic chapter data
- Proof/case-study section
- Offer/process section
- Conversion section and form
- Footer/legal navigation
- Media controller isolated from page content

Requirements:

- Essential copy is ordinary HTML.
- The page is useful before JavaScript and before media loads wherever the chosen framework permits.
- Animation updates transforms, opacity, or media time without forcing layout on every frame.
- The mobile composition is intentional, not a scaled desktop canvas.
- Reduced-motion mode uses static art and preserves the complete story.

## Phase 5 — integration

Complete only integrations within scope, but never imply they work when they are placeholders:

- Contact/lead forms with validation, success, error, spam, and destination checks
- CRM or email routing
- Analytics and consent handling
- CMS editing model
- SEO metadata, canonical URLs, structured data when justified, sitemap, and robots rules
- Open Graph/social image
- Privacy, terms, cookie, accessibility, and legal links supplied by the client

## Phase 6 — quality assurance

Run the project's tests, type checks, lint, and production build. Then execute the checklist in `quality-gates.md`. Test at least:

- Narrow mobile, modern desktop, keyboard-only, and reduced motion
- Slow network and disabled/failed video
- Rapid forward and reverse scroll
- First visit with cold cache
- Form success and failure
- Every navigation and CTA target

Write measured results and remaining risks to `docs/qa-report.md`.

## Phase 7 — launch

Before launch:

- Remove or clearly flag placeholders and invented material.
- Confirm production environment variables and domains without exposing secrets.
- Verify redirects, canonical domain, SSL, analytics, forms, social preview, favicon, and error page.
- Preserve a rollback path.
- Report whether the result is a concept, production candidate, or launched site.
