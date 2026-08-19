# Build Beautiful Sites

A cross-platform AI skill for planning, art-directing, producing, building, testing, and shipping premium conversion-focused websites in Claude Code, Claude Desktop, Cowork, Codex, and ChatGPT.

Created by **Angelo De Leon**.

> Creative system: Build Beautiful Sites by AD

The skill's command name is `build-beautiful-sites`. The display name is **Build Beautiful Sites**.

### What it does

Build Beautiful Sites helps Claude Code, Claude Desktop, Cowork, Codex, and ChatGPT produce high-end websites with:

* Strong positioning and conversion strategy
* Premium visual art direction
* Cinematic hero sections
* Scroll-scrub storytelling with a robust seeking controller
* Controlled AI image-to-video production with approval gates
* Responsive motion systems
* Image and video generation prompts
* A consistent master-reference workflow
* Production-quality frontend implementation
* Accessibility and reduced-motion support
* Mobile-specific media strategies
* Performance optimization
* Honest copy that does not invent testimonials, metrics, certifications, or client claims
* Screenshot-level visual QA, not source-code-level guessing
* QA documentation and implementation handoffs

The core idea: the value is in strategy, art direction, controlled media production, implementation, iteration, and proof. A long prompt is not a website, and the first generated clip is not an approved asset.

The skill includes the **Loud Pack**, a collection of ten detailed creative prompt systems for:

1. Luxury products
2. Journey and transformation stories
3. Designer portfolios
4. Ecommerce products
5. Restaurants
6. Real estate
7. Automotive brands
8. SaaS products
9. Creative agencies
10. Gyms and fitness studios

## Production modes

The skill picks one primary production mode before it starts building, and it uses the lightest mode that can actually deliver what you asked for. If you explicitly want the cinematic scroll experience, it will not quietly downgrade you to generic CSS motion.

| Mode | Use when | Required media gate |
| --- | --- | --- |
| **Static premium** | Trust, content, SEO, speed, or conversion matters more than film | Approve key art and rendered design |
| **Standard video** | Atmosphere can play by time without controlling the story | Approve poster and final clip |
| **Cinematic scrub** | Scrolling must reveal, travel, assemble, descend, orbit, or transform through a film | Approve storyboard, master still, every clip, and final scrub encode |
| **True 3D** | The user must manipulate real geometry, configuration, camera, or spatial state | Approve model/scene prototype and performance budget |

Within Cinematic Scrub there are scope tiers, so you are not paying for a four-clip campaign when one shot tells the story:

| Tier | Deliverable | Typical media |
| --- | --- | --- |
| S | Static premium | Approved key art plus restrained page motion |
| V1 | Single journey | One continuous 6–10 second clip |
| V2 | Chained journey | Two to four approved clips joined into a 12–24 second master |
| V3 | Choreographed campaign | Several planned films, stills, and interactions |
| 3D | Live geometry | Optimized model, textures, camera, and interaction |

A strong V1 beats a drifting V3. Scrubbing a prerecorded film is never described as true 3D.

## The media gates

This is the part that separates the skill from a one-pass demo. In Cinematic Scrub mode the agent must stop and get your approval at five points:

1. **Storyboard gate** — approve the journey, copy zones, ending, tier, provider, and total budget.
2. **Master-still gate** — approve one still after inspecting composition, identity, geometry, brand details, copy space, crop safety, and stray trademarks.
3. **Video gate** — approve the clip after inspecting the whole film plus sampled frames. Morphing, flicker, geometry drift, camera jumps, broken continuity, unusable copy space, and weak endings are rejections, not notes.
4. **Chain gate** — approve every segment before its final rendered frame is used to start the next one.
5. **Encode gate** — verify size, dimensions, duration, codec, pixel format, keyframe interval, first-frame poster, ending frame, and reverse-scrub behavior.

Two rules that follow from this:

* A completed generation is not an approved asset. The agent is expected to reject its own first clip when it fails the scorecard.
* If no capable video provider is available, the agent stops after delivering the approved storyboard, master still, prompt package, asset manifest, and integration spec. It does not drop in generic stock or unrelated AI footage to finish the page.

After three materially similar failed generations, the agent is instructed to change the visual concept instead of burning more credits rewriting the same prompt.

### Do I need Higgsfield?

No.

Higgsfield is an optional media-generation provider. It is not required to:

* Plan a website
* Design the interface
* Write the copy
* Build the frontend
* Create interactions
* Implement scroll animations
* Optimize existing media
* Deploy the website

The skill can work with:

* Client-provided assets
* Images created in ChatGPT
* Images or videos created with Gemini
* Manually generated media
* Stock media
* Placeholder assets
* Other image or video generation providers
* Higgsfield, when available

Higgsfield is the preferred integrated route when you select it and the connector is available, because of its references, camera controls, model choice, and edits. Any other capable controlled image-to-video provider is acceptable. The finished website never depends on Higgsfield at runtime.

**Cost warning worth reading once:** a connector or API generation can deduct credits even when your web plan advertises unlimited generations. The skill is instructed to verify current model cost, schema, and balance for the actual route being used rather than assuming your subscription covers it. It will not promise you free connector generations.

### Requirements

You need:

* Claude Code, Claude Desktop, Cowork, Codex, or ChatGPT with Skills support
* An existing website repository or permission to create one
* A frontend environment such as Next.js, React, Astro, or static HTML
* Optional access to an image or video generator
* Optional `ffmpeg` and `ffprobe`, plus a real shell, for the included media optimizer and inspector

Not every surface reaches every phase. Claude Code and Codex hold the whole workflow. Claude Desktop's chat tab runs the skill in a sandbox that cannot see your repository, so it is a direction and authoring surface; Cowork reaches the folders you attach to the session. The skill is instructed to state which gates the current surface can close instead of quietly skipping the ones it cannot.

### Skill structure

```text
build-beautiful-sites/
├── SKILL.md
├── README.md
├── LICENSE
├── agents/
│   └── openai.yaml
├── assets/
│   ├── icon.svg
│   └── starter/
│       ├── scrub-controller.js
│       └── tokens.css
├── references/
│   ├── agent-routing.md
│   ├── cinematic-production.md
│   ├── design-system.md
│   ├── loud-pack.md
│   ├── motion-patterns.md
│   ├── operational-prompts.md
│   ├── production-blueprint.md
│   ├── quality-gates.md
│   ├── scrub-engineering.md
│   ├── vertical-recipes.md
│   └── visual-qa.md
└── scripts/
    ├── inspect_cinematic_media.sh
    └── optimize_cinematic_media.sh
```

What each reference does:

| File | Purpose |
| --- | --- |
| `references/design-system.md` | Typography, layout, color, depth, rhythm, signature element, motion values, and premium tells |
| `references/agent-routing.md` | Per-surface capability gates, installation, tool discovery, and provider handoff for Claude Code, Claude Desktop, Cowork, Codex, and ChatGPT |
| `references/cinematic-production.md` | Scope tiers, story laws, production package, still and video gates, chaining, cost discipline |
| `references/scrub-engineering.md` | Scroll-video loading, seeking controller, chapter pacing, responsive fallbacks, teardown |
| `references/visual-qa.md` | Screenshot critique, media scorecards, design rejection test, revision loop |
| `references/motion-patterns.md` | Choosing static, video, scrub, keyframes, or true 3D |
| `references/operational-prompts.md` | Phase-specific prompts for handing work to another Claude, Cowork, or Codex session |
| `references/loud-pack.md` | Ten full archetype concept prompts |
| `references/vertical-recipes.md` | Production and conversion guidance by industry |
| `references/production-blueprint.md` | The complete Phase 0–7 strategy-to-launch blueprint |
| `references/quality-gates.md` | Truth, conversion, visual, accessibility, performance, motion, responsive, delivery, and approval gates |

Copy the entire folder when installing the skill. Do not copy only `SKILL.md`, because the skill relies on its references, starter assets, and scripts. Keep the `LICENSE` file with it — see [License](#license).

## The design system

Most of what makes a site look generated is not a missing effect — it is a
missing decision. Timid hero scale, untouched letter-spacing, a flat 8px grid
everywhere, `#000` canvases, an accent used fifteen times. So the skill ships
values rather than adjectives.

`references/design-system.md` holds the reasoning. `assets/starter/tokens.css`
holds the values, with the rules written inline so they survive being adapted:

* Two type families maximum, display type at least 4× body size at desktop, body base 17px
* Tracking by role — negative on display, positive on small uppercase labels, zero on body
* Measure capped at 68ch for body and 18ch for headlines, so headlines wrap on purpose
* Twelve columns you are told not to fill, with three tiers of section spacing rather than one
* Tinted canvases, never pure black or white, with contrast minimums per text role
* One accent hue, at most three uses per viewport
* Depth in order — line, then tone, then a tight neutral shadow. No glow.
* Interaction feedback under 150ms, entrance travel under 24px, entrances that play once

Adapt the values to the client's visual world; keep the relationships. If the
project already has a token system, the skill extends it instead.

`assets/starter/scrub-controller.js` is the tested reference implementation of
the scroll-scrub engine — coalesced seeks, a loop that rests when progress
converges and while the region is offscreen, chapter helpers, and complete
teardown. Copy it rather than reimplementing it; the failure modes it avoids
are subtle and expensive to rediscover.

## Getting the skill

Cloning this repository gives you a folder named `Build-Beautiful-Sites`. The installed skill folder must be lowercase `build-beautiful-sites` so it matches the `name` field in `SKILL.md`. Clone the repository, then use the clone path wherever the install commands below say `/path/to/build-beautiful-sites`:

```bash
git clone https://github.com/RaDeleon/Build-Beautiful-Sites.git
```

The `cp -R <source> <destination>/build-beautiful-sites` form in each install command renames the folder for you.

If you plan to run the media scripts directly, make sure they kept their executable bit after copying:

```bash
chmod +x /path/to/build-beautiful-sites/scripts/*.sh
```

## Installing in Codex

### Project installation

Project installation is recommended when the skill should travel with a repository and be available to other contributors.

From the repository root:

```bash
mkdir -p .agents/skills
cp -R /path/to/build-beautiful-sites .agents/skills/build-beautiful-sites
```

Confirm that this file exists:

```text
.agents/skills/build-beautiful-sites/SKILL.md
```

In Codex, run:

```text
/skills
```

Then invoke the skill with:

```text
$build-beautiful-sites
```

### Personal installation

Use this option when you want the skill available in all your Codex projects.

```bash
mkdir -p "$HOME/.agents/skills"
cp -R /path/to/build-beautiful-sites "$HOME/.agents/skills/build-beautiful-sites"
```

Verify it with:

```text
/skills
```

Invoke it with:

```text
$build-beautiful-sites
```

If Codex does not display the skill, confirm that `SKILL.md` is directly inside the `build-beautiful-sites` folder, then reopen Codex or run `/skills` again.

Official Codex skill documentation: [Build skills for Codex and ChatGPT](https://learn.chatgpt.com/docs/build-skills)

## Installing in Claude Code

### Project installation

This is recommended when the skill belongs to a specific repository.

From the repository root:

```bash
mkdir -p .claude/skills
cp -R /path/to/build-beautiful-sites .claude/skills/build-beautiful-sites
```

Confirm that this file exists:

```text
.claude/skills/build-beautiful-sites/SKILL.md
```

Invoke it in Claude Code with:

```text
/build-beautiful-sites
```

### Personal installation

Use this option to make the skill available in all your Claude Code projects.

```bash
mkdir -p "$HOME/.claude/skills"
cp -R /path/to/build-beautiful-sites "$HOME/.claude/skills/build-beautiful-sites"
```

Invoke it with:

```text
/build-beautiful-sites
```

Claude normally detects changes to an existing skills directory automatically. If `.claude/skills` did not exist when the current session started, begin a new Claude Code session.

The `agents/openai.yaml` file contains OpenAI-specific presentation metadata. Claude can safely ignore it and will use `SKILL.md`, `references/`, and `scripts/`.

Official Claude Code skill documentation: [Extend Claude with skills](https://code.claude.com/docs/en/skills)

### Optional: connecting Higgsfield

Only needed if you want in-agent cinematic generation. In Claude interfaces that support custom connectors, the current endpoint is:

```text
https://mcp.higgsfield.ai/mcp
```

Verify the vendor's current setup instructions before relying on it. The skill is instructed to discover the connector's live tool schema, models, controls, balance, and costs at run time rather than assuming remembered method names or prices. If the connector cannot hand back downloadable files, the agent will ask you to download the approved outputs from your provider assets and drop them into the documented project location.

## Installing in Claude Desktop

Claude Desktop does not read `.claude/skills/`. Filesystem installation is Claude Code only, and custom skills do not sync between surfaces — a skill you already use in Claude Code has to be uploaded here separately.

### 1. Enable code execution

Skills do not run without it.

* Free, Pro, and Max: **Settings > Capabilities**, enable code execution and file creation
* Team and Enterprise: an owner enables both **Code execution and file creation** and **Skills** in **Organization settings > Skills**

### 2. Package the skill as a ZIP

`SKILL.md` must sit at the top level *inside* the folder, not at the top level of the archive, and the folder name must match the `name` field in `SKILL.md` exactly. This repository clones as `Build-Beautiful-Sites`, so rename the copy you package to `build-beautiful-sites` or the upload will be rejected.

```bash
cp -R /path/to/Build-Beautiful-Sites /tmp/build-beautiful-sites
cd /tmp
zip -r build-beautiful-sites.zip build-beautiful-sites -x '*.DS_Store' '*/.git/*'
```

### 3. Upload it

Go to **Customize > Skills**, press **+**, choose **Create skill**, then **Upload a skill**, and submit the ZIP. It appears in your skills list with a toggle.

Uploaded skills are private to your account. Re-upload the ZIP after editing the skill — there is no live reload from disk.

Official documentation: [Use skills in Claude](https://support.claude.com/en/articles/12512180-use-skills-in-claude)

### Which Desktop surface you are on

Desktop runs the skill two different ways, and the difference decides how far the workflow can go.

| Phase | Desktop chat | Cowork |
| --- | --- | --- |
| 1–3 Brief, creative direction, production package | Yes | Yes |
| 4 Storyboard, prompts, gate criteria | Yes | Yes |
| 4 Paid generation | Connector required | Connector required |
| 5 Encode and optimize media | No repository access | Yes, if `ffmpeg` is in the session |
| 6 Implement in the repository | Delivers files for you to commit | Yes, inside attached folders |
| 7 Rendered visual QA | Browser or preview connector required | Browser or preview connector required |
| 8 Deploy | No | Yes, with credentials |

**Chat tab.** Code runs in a sandboxed container on Anthropic's infrastructure, not on your machine. It cannot see your repository unless you upload files or connect a local MCP server. Use it for the brief, direction, production package, storyboard, prompts, copy, adapted tokens, and component source, and take the files it produces into Claude Code.

**Cowork.** Attach your project folder to the session and the agent reads, writes, and runs code inside it. Attach reference material read-only (`ro`) when it must not be modified. Cloud sessions can reach local files only while the desktop app is open on that machine, and local MCP servers do not run in cloud sessions.

**Connectors.** Remote connectors — including Higgsfield at `https://mcp.higgsfield.ai/mcp` — work on every surface, and Anthropic reaches them from its cloud, so the server must be publicly reachable. Local MCP servers and desktop extensions run only in Claude Desktop and Claude Code; those are what give you filesystem access, localhost preview, and browser control. Without a browser or preview connector there is no rendered inspection on Desktop, so phase 7 stays open and the result is a handoff rather than a launch.

## Using it in ChatGPT

If the skill has been installed through ChatGPT Skills, select it from the Skills interface or invoke it with:

```text
@build-beautiful-sites
```

Example:

```text
@build-beautiful-sites

Create a premium website for a luxury residential construction
company in Los Angeles. Start with the creative brief and asset
plan. Do not generate paid media until I approve the plan.
```

ChatGPT is strongest here for direction, copy, boards, key art, and master-still candidates. When the repository work needs real edits and tests, hand the production package and approved assets to Codex or Claude Code. The skill keeps filenames and documents consistent so the next agent continues instead of restarting the creative work.

## Recommended way to use the skill

For the best results, give the agent:

* Business name
* Industry
* Product or service
* Target customer
* Primary conversion goal
* Desired pages
* Existing brand colors
* Existing logo and assets
* Preferred visual direction
* Examples of websites you like
* Required technology
* Deployment target
* Whether AI-generated media is allowed
* Available media provider
* Budget or generation-credit limit

You do not need every answer before starting. The agent can inspect the repository, identify what is missing, and make clearly labeled assumptions.

### Recommended starter brief

```text
Use Build Beautiful Sites by AD for this project.

Business:
[BUSINESS NAME]

Industry:
[INDUSTRY]

What it sells:
[PRODUCT OR SERVICE]

Target customer:
[TARGET CUSTOMER]

Primary conversion:
[BOOK A CALL / BUY / REQUEST A QUOTE / JOIN / VISIT]

Required pages:
[PAGE LIST]

Visual direction:
[DESCRIBE THE MOOD]

Existing assets:
[LOGO, PHOTOS, VIDEO, BRAND GUIDE, OR NONE]

Technical requirements:
[FRAMEWORK, CMS, HOSTING, OR LET THE AGENT RECOMMEND]

Media provider:
[HIGGSFIELD / CHATGPT / GEMINI / OTHER / NONE]

Credit or budget limit:
[LIMIT]

First inspect the repository and create the planning documents.
Show me the proposed sections, motion system, asset list, and
estimated generation cost before generating paid media.
Do not invent business claims, testimonials, statistics, awards,
certifications, addresses, pricing, or legal language.
```

## Invocation examples

### Codex

```text
$build-beautiful-sites Build a premium conversion-focused website
for a boutique architecture firm. Inspect the current repository
first and preserve the existing framework.
```

### Claude Code

```text
/build-beautiful-sites Build a premium conversion-focused website
for a boutique architecture firm. Inspect the current repository
first and preserve the existing framework.
```

### Claude Desktop

```text
Use Build Beautiful Sites. Build a premium conversion-focused website
for a boutique architecture firm. Tell me first which phases this
surface can complete, then start with the creative direction.
```

In Cowork, attach the repository folder to the session first.

### ChatGPT

```text
@build-beautiful-sites Build a premium conversion-focused website
for a boutique architecture firm. Start with the creative direction.
```

## Planning-only mode

Use planning-only mode when you want to approve the concept before the agent changes code or uses generation credits.

```text
Use Build Beautiful Sites by AD in planning-only mode.

Inspect the repository and create:

- The site brief
- Creative direction
- The production package
- Page and section architecture
- Motion mode and tier recommendation
- Asset manifest
- Estimated media-generation credits and total ceiling

Show me the plan before editing the website.

Do not generate paid media yet.
Do not invent business facts.
```

## Direct-build mode

Use direct-build mode when your requirements and assets are already clear.

```text
Use Build Beautiful Sites by AD to build this website.

Inspect the repository, preserve the current framework, and implement
the approved direction. Use the supplied assets wherever possible.

Create responsive desktop and mobile layouts, accessible interactions,
reduced-motion fallbacks, optimized media delivery, and a QA report.

Do not replace working architecture without a clear technical reason.
Do not invent claims or use paid media generation without approval.
```

## Cinematic scrub mode

Use this when you specifically want the scroll-controlled film experience and you want the strict workflow rather than generic scroll animation.

```text
Use Build Beautiful Sites by AD in Cinematic Scrub mode.

Create docs/production-package.md first: conversion journey, page
sections, exact hero and chapter copy, the physical visual journey
and scroll direction, desktop copy zones, mobile and static
composition, one master-still prompt, one image-to-video prompt per
clip, continuity locks, rejection criteria, provider and model
options from the current catalog, exact cost per attempt with a
total ceiling and retry reserve, and output filenames.

Pause for storyboard approval. Then show me master-still candidates
and pause again. Only after I approve the still, preflight video
costs and ask before spending.

Inspect every clip at full length plus sampled frames before you
integrate it. Reject morphing, geometry drift, flicker, camera
jumps, broken copy space, and weak endings.
```

The skill ships a longer version of this as the cinematic media-director prompt in `references/operational-prompts.md`, along with a manual provider handoff prompt for when the video provider is not callable from your agent.

## Using the Loud Pack

The Loud Pack is stored at:

```text
references/loud-pack.md
```

You can ask the skill to use a specific prompt by number, name, or industry. Each archetype is preserved as written, but named models, settings, prices, frameworks, and dates in those prompts are treated as legacy language and translated to whatever provider you actually selected. Every archetype still routes through the production package and the media gates.

### By number

Codex:

```text
$build-beautiful-sites Use Loud Pack #5 as the creative foundation
for this restaurant website. Adapt it to the client's actual brand,
menu, location, and available assets.
```

Claude:

```text
/build-beautiful-sites Use Loud Pack #5 as the creative foundation
for this restaurant website. Adapt it to the client's actual brand,
menu, location, and available assets.
```

ChatGPT:

```text
@build-beautiful-sites Use Loud Pack #5 as the creative foundation
for this restaurant website. Adapt it to the client's actual brand,
menu, location, and available assets.
```

### By category

```text
Use the Loud Pack automotive concept for this project.

Preserve its cinematic reveal, scroll-controlled movement, premium
typography, and conversion structure, but adapt the visuals and copy
to the actual vehicle and brand.
```

### Combine the Loud Pack with your brief

```text
Use Loud Pack #8 for the visual and motion system.

The business is an AI workflow platform for accounting firms.
The primary conversion is booking a demo.
The audience is operations leaders at firms with 20–200 employees.
The product should feel capable, trustworthy, and modern rather
than experimental.

Use the Loud Pack as a creative framework, not as literal business
copy. Do not invent product features.
```

### Ask the agent to choose

```text
Review the Loud Pack and select the strongest starting concept for
this business. Explain your choice, identify what must be adapted,
and show me the creative direction before implementation.
```

## The ten Loud Pack systems

| Number | System         | Best suited for                                                  |
| -----: | -------------- | ---------------------------------------------------------------- |
|      1 | Luxury Product | Jewelry, watches, fragrance, fashion, premium objects            |
|      2 | Journey        | Transformations, travel, education, wellness, storytelling       |
|      3 | Portfolio      | Designers, photographers, filmmakers, artists, studios           |
|      4 | Ecommerce      | Product launches, consumer goods, direct-to-consumer brands      |
|      5 | Restaurant     | Restaurants, chefs, bars, hospitality, dining experiences        |
|      6 | Real Estate    | Luxury properties, developers, brokerages, architecture          |
|      7 | Automotive     | Vehicles, dealerships, automotive technology, performance brands |
|      8 | SaaS           | Software, AI products, technology platforms, B2B services        |
|      9 | Agency         | Creative agencies, marketing firms, production studios           |
|     10 | Gym            | Gyms, trainers, fitness studios, sports and wellness brands      |

The agent should adapt the selected system to the client. It should not blindly reuse placeholder copy, unsupported claims, or irrelevant design details.

## Recommended production workflow

### 1. Inspect and frame the problem

The agent reviews the repository structure, framework and dependencies, routes, existing components, current design system, existing assets, tests, build and deployment setup, and your supplied business facts. It then identifies the audience, offer, primary CTA, proof, objections, pages, conversion event, and success criteria, and writes `docs/site-brief.md`.

### 2. Research and establish an original direction

References are analyzed as design grammar — hierarchy, rhythm, grid, typography class, contrast, imagery, motion, density — not copied. The agent defines one brand premise, one primary CTA, one visual world, one motion grammar, and one signature element, and writes `docs/creative-direction.md`.

### 3. Choose scope and write the production package

The agent selects the production mode and tier, then writes `docs/production-package.md`:

```text
docs/site-brief.md
docs/creative-direction.md
docs/production-package.md
docs/implementation-plan.md
docs/asset-manifest.md
```

Approval of the production package comes before paid generation or large implementation changes.

### 4. Produce media through gates

Storyboard → master still → video → chain → encode. Each one is a stop, not a formality. See [The media gates](#the-media-gates).

### 5. Process and record assets

Raw, rejected, review, and source files stay outside the production and public directories. Only selected, optimized assets go into the deployed site. `docs/asset-manifest.md` records source, ownership and license note, provider, model, references, prompt version, cost, dimensions, selected filename, rejection reasons, mobile variant, and fallback.

### 6. Implement in the existing stack

Semantic hierarchy, navigation, proof, offers, conversion paths, and forms are built before cinematic media is layered on. Media control stays isolated from page content and out of per-frame framework state. Responsive art direction rather than a shrunken desktop composition. A complete static experience exists for mobile, reduced motion, failure, and unsupported playback.

### 7. Run the visual iteration loop

The agent renders and inspects at desktop and mobile checkpoints — 1440×900, 1280×800, 768×1024, 390×844, and 375×667 at minimum — and critiques hierarchy, typography, spacing, crop, contrast, rhythm, originality, motion, performance, and conversion. Weak sections get rebuilt rather than decorated. Tests cover normal scroll, aggressive flicks, reverse scroll, rotation, keyboard use, reduced motion, missing video, slow network, cold load, navigation, CTA, and form outcomes. Results go in `docs/qa-report.md`.

### 8. Launch honestly

The repository's existing deployment target is used rather than a forced host. Live URL, HTTPS, assets, media seeking, metadata, redirects, analytics, forms, errors, and representative device behavior are verified. Performance is measured, not promised.

### Status vocabulary

The skill distinguishes four states and will tell you which one you have:

| Status | Meaning |
| --- | --- |
| **Concept** | Direction and package exist; media and implementation are not final |
| **Production candidate** | Built and passing internal checks, not yet reviewed by you or deployed |
| **Deployed** | Live on the target, verified technically |
| **Client-ready** | You reviewed the rendered experience, blocking gates pass or are explicitly accepted, approved final media is integrated, conversion paths work, and nothing invented is presented as real |

## Working with Higgsfield or another video provider

When a supported media provider is connected, the agent should:

1. Create the site plan and production package first
2. Define the master visual reference
3. Query the provider's current model catalog, schema, limits, and costs
4. Generate low-cost stills or keyframes and obtain approval
5. Preflight cost per attempt, total ceiling, and retry reserve, then obtain bounded approval
6. Generate only the required motion assets
7. Gate every clip before integration
8. Save prompts, generation IDs, actual costs, and asset metadata
9. Optimize the selected files for the web
10. Implement static and reduced-motion fallbacks

When no provider is connected, the agent produces provider-ready prompts and an asset manifest. You generate the assets manually, add them to the repository, and the agent gates and integrates them. It will not substitute a weaker clip to appear finished.

### Credit-saving instruction

```text
Use the cheapest viable media workflow.

Start with still images or low-resolution previews. Do not generate
4K assets or long videos during exploration. Reuse approved master
references, keep clips short, and show me the estimated credit cost
before paid generation.
```

A sensible default is:

* Stills for concept approval
* 720p or 1080p for prototypes
* Short clips, 6–10 seconds, for web sections
* No audio, since scrub footage is muted and audio is stripped at encode
* 4K only for final assets that genuinely need it

## Media scripts

Both scripts are optional helpers. `optimize_cinematic_media.sh` needs `ffmpeg`; `inspect_cinematic_media.sh` needs both `ffmpeg` and `ffprobe`.

### Optimizing

```text
scripts/optimize_cinematic_media.sh desktop|mobile|poster|ending INPUT OUTPUT
```

Desktop and mobile encodes are H.264 in an MP4 with `yuv420p`, no audio, fast-start metadata, and a deliberately short GOP so scroll seeking stays responsive. Mobile is additionally capped at 720p tall.

```bash
./scripts/optimize_cinematic_media.sh desktop raw.mp4 public/media/hero-desktop.mp4
./scripts/optimize_cinematic_media.sh mobile  raw.mp4 public/media/hero-mobile.mp4
./scripts/optimize_cinematic_media.sh poster  raw.mp4 public/media/hero-poster.jpg
./scripts/optimize_cinematic_media.sh ending  raw.mp4 public/media/hero-ending.jpg
```

`poster` extracts the exact first frame, so the poster matches frame zero instead of flashing. `ending` extracts the final frame, which is what the static and reduced-motion experience uses as its resting composition.

### Inspecting

```text
scripts/inspect_cinematic_media.sh INPUT_VIDEO OUTPUT_DIRECTORY [PREFIX]
```

```bash
./scripts/inspect_cinematic_media.sh public/media/hero-desktop.mp4 review/hero
```

This writes codec, dimensions, pixel format, frame rate, duration, size, and bit rate to a metadata file, then extracts start, quarter, middle, three-quarter, and ending frames as JPEGs. Those five frames are what the video gate reviews — a clip that looks fine in motion can fall apart on a paused frame, and scrubbing exposes every paused frame.

Keep the original source files outside the public production bundle when possible.

### Media budget

A cinematic hero and a 2.5s mobile LCP pull against each other. The skill
reconciles them with one rule: **the LCP element is the poster or the headline,
never the film.** The poster and copy paint from static markup; the video source
is only set inside the motion-capable path.

Within that, these are the ceilings, measured with the inspect script rather
than estimated:

| Asset | Target | Hard ceiling |
| --- | --- | --- |
| Desktop scrub film, 6–10s | 5 MB | 8 MB |
| Mobile scrub encode, 6–10s | 2 MB | 3 MB |
| Poster and ending frame, each | 100 KB | 150 KB |
| Critical bytes before readable content | 200 KB | 300 KB |
| Aggregate page media, desktop | 6 MB | 8 MB |
| Aggregate page media, mobile | 2.5 MB | 3.5 MB |

Over the ceiling, the remediation order is: shorten the clip, reduce width,
raise CRF, and only then reduce keyframe density — that density is what makes
scrubbing responsive, so it is the last thing to give up. If a concept still
cannot fit, the mode was wrong for the project and the skill should say so.

## Expected project documentation

The skill may create the following files in the website repository:

| File                           | Purpose                                                                       |
| ------------------------------ | ----------------------------------------------------------------------------- |
| `docs/site-brief.md`           | Audience, offer, goals, facts, assumptions, and constraints                   |
| `docs/creative-direction.md`   | Visual system, typography, composition, motion, and media direction           |
| `docs/production-package.md`   | Mode and tier, page structure, approved copy, storyboard, copy zones, prompts, provider plan, cost ceiling, output filenames, and acceptance criteria |
| `docs/implementation-plan.md`  | Components, routes, dependencies, execution order, and technical decisions    |
| `docs/asset-manifest.md`       | Asset source, provider, model, prompt version, cost, license, location, rejections, and fallback |
| `docs/qa-report.md`            | Testing results, known issues, performance notes, and launch status           |

These files are also the cross-agent handoff format. A ChatGPT or Claude Desktop session can write the direction and package, Codex, Cowork, or Claude Code can implement it, and neither has to restart the creative work. This is the intended route when you start a project on Desktop: approve the direction there, then hand the same filenames to a surface that can render and deploy.

If the project already has equivalent documents, the skill updates them rather than duplicating them.

Relevant authored documents may include:

```text
Creative system: Build Beautiful Sites by AD
```

The skill should not automatically place Angelo De Leon's name or `AD` on the public client website, in metadata, legal pages, client-facing footers, or client brand materials unless explicitly requested.

## Production rules

The skill follows these rules:

* Do not invent testimonials.
* Do not invent statistics.
* Do not invent awards.
* Do not invent certifications.
* Do not invent pricing.
* Do not invent physical addresses.
* Do not invent product capabilities.
* Do not invent legal or compliance claims.
* Clearly label placeholders and assumptions.
* Ask for approval before paid media generation, with the current cost stated.
* Treat a completed generation as a candidate, not an approved asset.
* Use client assets before generating replacements.
* Preserve the repository's existing architecture unless change is justified.
* Build real semantic pages, not screenshot recreations.
* Keep essential copy, navigation, CTAs, and proof in semantic HTML.
* Support keyboard navigation and visible focus states.
* Include reduced-motion behavior.
* Provide static fallbacks for important motion content, designed rather than downgraded.
* Avoid making the website dependent on an AI provider at runtime.
* Judge quality from the rendered result, not from source code or a successful build.
* Verify the production build before declaring the project complete.

## Troubleshooting

### The skill does not appear in Codex

Confirm this file exists:

```text
.agents/skills/build-beautiful-sites/SKILL.md
```

Or, for a personal installation:

```text
$HOME/.agents/skills/build-beautiful-sites/SKILL.md
```

Then run:

```text
/skills
```

Use the exact invocation:

```text
$build-beautiful-sites
```

### The skill does not appear in Claude Code

Confirm this file exists:

```text
.claude/skills/build-beautiful-sites/SKILL.md
```

Or:

```text
$HOME/.claude/skills/build-beautiful-sites/SKILL.md
```

Use:

```text
/build-beautiful-sites
```

If the top-level skills directory was created after the session began, start a new Claude Code session. Also confirm that the folder name matches the `name` field in `SKILL.md` exactly.

### The skill does not appear in Claude Desktop

Desktop does not read `.claude/skills/`, so a Claude Code installation will never show up there. Upload the ZIP separately.

Check, in order:

* Code execution is enabled — **Settings > Capabilities**, or **Organization settings > Skills** on Team and Enterprise. Skills stay greyed out without it.
* The skill is toggled on in **Customize > Skills**.
* `SKILL.md` is inside the `build-beautiful-sites` folder within the archive, not loose at the archive root.
* The folder name matches the `name` field in `SKILL.md` exactly.
* The archive is not oversized, and the name and description contain no invalid characters.

Re-upload the ZIP after any edit; Desktop does not pick up file changes on its own.

### The scripts fail with "permission denied"

The executable bit did not survive the copy:

```bash
chmod +x scripts/*.sh
```

Or call them through bash instead:

```bash
bash scripts/optimize_cinematic_media.sh desktop raw.mp4 out/hero.mp4
```

### The agent is not using the Loud Pack

Reference it explicitly:

```text
Use Loud Pack #7 from references/loud-pack.md.
```

You can also ask the agent to quote the selected prompt number and explain how it is being adapted before it starts building.

### The agent wants to generate too much media

Use:

```text
Stop before paid media generation.

Show me the minimum required asset list, expected credit cost,
lower-cost alternatives, and which assets can be replaced with
CSS, existing images, or lightweight motion.
```

### The agent skipped the gates and built around unapproved footage

Use:

```text
Do not integrate that clip yet.

Extract the start, quarter, middle, three-quarter, and ending frames,
show me the whole clip and those frames, and give me an honest
critique against the film scorecard before we go further.
```

### The generations keep failing the same way

Use:

```text
Stop rewriting this prompt. Propose a different visual mechanism
that generates reliably — a more distant composition, a simpler
subject, atmosphere instead of mechanism, or client renders and
photography instead of generation.
```

### The video is too large

Ask the agent to:

* Create separate desktop and mobile versions
* Shorten the clip
* Remove audio
* Lower the bitrate or raise the CRF before sacrificing keyframe density
* Add a poster image
* Avoid autoplaying nonessential media
* Use reduced-motion fallbacks
* Run the included optimization script and measure the result

### The scroll-scrub feels janky or stalls

Ask the agent to check the items in `references/scrub-engineering.md`: seeks should be coalesced rather than queued per frame, the controller should rest once converged and when the region is offscreen, work should be suspended via `IntersectionObserver`, `currentTime` should not live in framework state, and the poster should stay visible until the requested frame decodes.

### The media provider is unavailable

Ask for a manual handoff:

```text
Create provider-ready prompts for every missing asset.

For each asset, include its purpose and page chapter, reference files
and their roles, dimensions, aspect ratio, duration, resolution,
audio setting, structured controls, camera motion, subject
consistency requirements, negative constraints, acceptance and
rejection criteria, output filename, and where it belongs in the
repository.
```

## Quick-start examples

### Premium local service business

```text
$build-beautiful-sites

Create a premium website for an upscale landscape architecture
company. The target customer is a homeowner planning a $100k+
outdoor renovation. The primary conversion is requesting a
consultation.

Use a restrained cinematic direction. Start in planning-only mode.
Do not invent project statistics, awards, testimonials, or service
areas.
```

### Restaurant

```text
/build-beautiful-sites

Use Loud Pack #5 for a modern coastal restaurant.

The site needs Home, Menu, About, Private Dining, and Contact pages.
The primary conversions are booking a table and submitting a private
event inquiry.

Use supplied food photography first. Create an asset plan for
anything missing, but do not generate paid video until approved.
```

### SaaS

```text
@build-beautiful-sites

Use Loud Pack #8 for a B2B workflow automation platform.

The audience is operations leaders. The primary conversion is
booking a demo. Keep the visual system credible and precise.
Use product UI and interface motion instead of generic AI imagery.

Do not invent integrations, security certifications, customer
logos, or performance claims.
```

### Luxury product

```text
$build-beautiful-sites

Use Loud Pack #1 to build a launch page for a premium mechanical
watch. Focus on materials, precision, craftsmanship, and product
detail.

Create the production package and master-still candidates first.
Preflight the current generation cost and give me a total ceiling
before any paid video.
```

### Cinematic scroll experience

```text
/build-beautiful-sites

Build a cinematic scroll experience for a small-batch whiskey brand.
Single continuous journey, V1 tier — one 6–10 second clip, no chain.

Down-scroll should feel like a descent into the barrel room. Reserve
a calm left copy lane. End on a settled hero composition that works
under the navigation.

Storyboard and master still first. I approve before you spend.
```

## Recommended final instruction

Add this to important production requests:

```text
Treat this as a production website, not a visual demo.

Complete the real page structure, responsive behavior, navigation,
conversion actions, accessibility, reduced-motion fallbacks, media
optimization, error states, production build, and QA documentation.

Inspect the rendered result at desktop and mobile rather than
judging quality from the code or a successful build.

Use only verified business facts. Clearly label any remaining
placeholders or assumptions, and tell me whether this is a concept,
a production candidate, deployed, or client-ready.
```

## License

Build Beautiful Sites is free to use, modify, and share, including on paid
client work, as long as you keep the creator credit intact and do not sell the
skill itself. Websites and other work you produce with it are yours, with no
attribution required.

| | |
| --- | --- |
| Use it, including commercially | Yes |
| Use it on paid client projects | Yes |
| Modify it for your own needs | Yes |
| Share it for free, modified or not | Yes, with credit retained |
| Remove the creator credit | No |
| Sell it, gate it behind payment, or bundle it into a paid product | No |
| Sell the websites you build with it | Yes, freely |

See [LICENSE](LICENSE) for the full terms. This is a source-available custom
license, not an OSI-approved open-source license, because it restricts resale.
For commercial licensing or resale rights, contact Angelo De Leon on GitHub at
[@RaDeleon](https://github.com/RaDeleon).

---

**Build Beautiful Sites**
Created by **Angelo De Leon**
Creative system: **Build Beautiful Sites by AD**
