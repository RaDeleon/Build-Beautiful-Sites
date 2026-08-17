# Build Beautiful Sites

A cross-platform AI skill for planning, art-directing, building, optimizing, and shipping premium conversion-focused websites in Claude Code, Codex, and ChatGPT.

Created by **Angelo De Leon**.

> Creative system: Build Beautiful Sites by AD

The skill's command name is `build-beautiful-sites`. The display name is **Build Beautiful Sites**.

### What it does

Build Beautiful Sites helps Claude, Codex, and ChatGPT produce high-end websites with:

* Strong positioning and conversion strategy
* Premium visual art direction
* Cinematic hero sections
* Scroll-scrub storytelling
* Responsive motion systems
* Image and video generation prompts
* A consistent master-reference workflow
* Production-quality frontend implementation
* Accessibility and reduced-motion support
* Mobile-specific media strategies
* Performance optimization
* Honest copy that does not invent testimonials, metrics, certifications, or client claims
* QA documentation and implementation handoffs

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

Higgsfield is useful when you want cinematic AI video, transitions, product shots, or motion assets. The finished website does not depend on Higgsfield at runtime.

### Requirements

You need:

* Claude Code, Codex, or ChatGPT with Skills support
* An existing website repository or permission to create one
* A frontend environment such as Next.js, React, Astro, or static HTML
* Optional access to an image or video generator
* Optional `ffmpeg` installation for the included media optimizer

### Skill structure

```text
build-beautiful-sites/
├── SKILL.md
├── README.md
├── LICENSE
├── agents/
│   └── openai.yaml
├── assets/
│   └── icon.svg
├── references/
│   ├── agent-routing.md
│   ├── loud-pack.md
│   ├── motion-patterns.md
│   ├── operational-prompts.md
│   ├── production-blueprint.md
│   ├── quality-gates.md
│   └── vertical-recipes.md
└── scripts/
    └── optimize_cinematic_media.sh
```

Copy the entire folder when installing the skill. Do not copy only `SKILL.md`, because the skill relies on its references and scripts. Keep the `LICENSE` file with it — see [License](#license).

## Getting the skill

Cloning this repository gives you a folder named `Build-Beautiful-Sites`. The installed skill folder must be lowercase `build-beautiful-sites` so it matches the `name` field in `SKILL.md`. Clone the repository, then use the clone path wherever the install commands below say `/path/to/build-beautiful-sites`:

```bash
git clone https://github.com/RaDeleon/Build-Beautiful-Sites.git
```

The `cp -R <source> <destination>/build-beautiful-sites` form in each install command renames the folder for you.

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
- Page and section architecture
- Motion plan
- Asset manifest
- Production implementation plan
- Estimated media-generation credits

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

## Using the Loud Pack

The Loud Pack is stored at:

```text
references/loud-pack.md
```

You can ask the skill to use a specific prompt by number, name, or industry.

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

### 1. Inspect

The agent reviews:

* Repository structure
* Framework and dependencies
* Current routes
* Existing components
* Current design system
* Existing assets
* Build and deployment setup
* User-provided business facts

### 2. Plan

The agent creates or updates:

```text
docs/site-brief.md
docs/creative-direction.md
docs/implementation-plan.md
docs/asset-manifest.md
```

### 3. Choose the motion level

The skill uses the lightest motion technique capable of delivering the desired effect:

1. CSS transitions and keyframes
2. Lightweight JavaScript
3. Scroll-linked animation
4. Optimized video
5. Image sequences
6. WebGL or 3D only when justified

### 4. Approve creative direction

Before expensive media generation, review:

* Visual direction
* Hero concept
* Master reference image
* Section sequence
* Keyframes
* Mobile treatment
* Reduced-motion fallback
* Media-generation estimate

### 5. Generate or source assets

The preferred order is:

1. Approved client assets
2. Existing repository assets
3. Assets generated with the current agent’s tools
4. Manually generated assets from ChatGPT, Gemini, Higgsfield, or another provider
5. Clearly documented placeholders

### 6. Build

The agent implements:

* Semantic page structure
* Responsive layouts
* Reusable components
* Real navigation
* Conversion actions
* Accessible interactions
* Motion and scroll behavior
* Media loading and fallback behavior

### 7. Optimize

The agent checks:

* Image dimensions and compression
* Video codecs and file size
* Mobile-specific sources
* Poster images
* Lazy loading
* Preload strategy
* Reduced-motion behavior
* Text readability
* Layout stability

### 8. Test

The agent tests:

* Desktop
* Mobile
* Keyboard navigation
* Reduced motion
* Missing media
* Slow loading
* Failed media requests
* Main conversion paths
* Production build

### 9. Report

The final QA record should be saved as:

```text
docs/qa-report.md
```

## Working with Higgsfield or another video provider

When a supported media provider is connected, the agent should:

1. Create the site plan first
2. Define the master visual reference
3. Generate low-cost stills or keyframes
4. Obtain approval
5. Estimate credit usage
6. Generate only the required motion assets
7. Save prompts and asset metadata
8. Optimize the selected files for the web
9. Implement static and reduced-motion fallbacks

When no provider is connected, the agent should produce provider-ready prompts and an asset manifest. You can generate the assets manually and add them to the repository before asking the agent to continue.

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
* Short loops for web sections
* No audio unless essential
* 4K only for final assets that genuinely need it

## Media optimization

The skill includes:

```text
scripts/optimize_cinematic_media.sh
```

It requires `ffmpeg`.

### Desktop video

```bash
./scripts/optimize_cinematic_media.sh \
  desktop \
  input.mp4 \
  public/media/hero-desktop.mp4
```

### Mobile video

```bash
./scripts/optimize_cinematic_media.sh \
  mobile \
  input.mp4 \
  public/media/hero-mobile.mp4
```

### Poster image

```bash
./scripts/optimize_cinematic_media.sh \
  poster \
  input.mp4 \
  public/media/hero-poster.jpg
```

Keep the original source files outside the public production bundle when possible.

## Expected project documentation

The skill may create the following files in the website repository:

| File                          | Purpose                                                                    |
| ----------------------------- | -------------------------------------------------------------------------- |
| `docs/site-brief.md`          | Audience, offer, goals, facts, assumptions, and constraints                |
| `docs/creative-direction.md`  | Visual system, typography, composition, motion, and media direction        |
| `docs/implementation-plan.md` | Components, routes, dependencies, execution order, and technical decisions |
| `docs/asset-manifest.md`      | Asset source, prompt, version, location, license, and fallback             |
| `docs/qa-report.md`           | Testing results, known issues, performance notes, and launch status        |

Relevant authored documents may include:

```text
Creative system: Build Beautiful Sites by AD
```

The skill should not automatically place Angelo De Leon’s name or `AD` on the public client website, in metadata, legal pages, client-facing footers, or client brand materials unless explicitly requested.

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
* Ask for approval before paid media generation.
* Use client assets before generating replacements.
* Preserve the repository’s existing architecture unless change is justified.
* Build real semantic pages, not screenshot recreations.
* Support keyboard navigation and visible focus states.
* Include reduced-motion behavior.
* Provide static fallbacks for important motion content.
* Avoid making the website dependent on an AI provider at runtime.
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

If the top-level skills directory was created after the session began, start a new Claude Code session.

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

### The video is too large

Ask the agent to:

* Create separate desktop and mobile versions
* Shorten the loop
* Remove audio
* Lower the bitrate
* Add a poster image
* Avoid autoplaying nonessential media
* Use reduced-motion fallbacks
* Run the included optimization script

### The media provider is unavailable

Ask for a manual handoff:

```text
Create provider-ready prompts for every missing asset.

For each asset, include its purpose, dimensions, aspect ratio,
duration, camera motion, subject consistency requirements,
negative constraints, output filename, and where it belongs
in the repository.
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

Create the master-reference plan and proposed hero keyframes first.
Estimate media-generation credits before generating animations.
```

## Recommended final instruction

Add this to important production requests:

```text
Treat this as a production website, not a visual demo.

Complete the real page structure, responsive behavior, navigation,
conversion actions, accessibility, reduced-motion fallbacks, media
optimization, error states, production build, and QA documentation.

Use only verified business facts. Clearly label any remaining
placeholders or assumptions.
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
For commercial licensing or resale rights, contact Angelo De Leon at
[radeleon415@gmail.com](mailto:radeleon415@gmail.com).

---

**Build Beautiful Sites**
Created by **Angelo De Leon**
Creative system: **Build Beautiful Sites by AD**
