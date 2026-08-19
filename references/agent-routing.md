# Claude Desktop, Claude Code, Codex, and ChatGPT Routing

## Contents

1. Shared contract
2. Where the gates live
3. Claude Desktop
4. Claude Code
5. Codex
6. ChatGPT
7. Media/provider routing
8. Cross-agent handoff

## Shared contract

Use the same strategy, production gates, truth rules, asset records, accessibility standards, and quality evidence across agents. Adapt tool syntax and provider access only.

Before acting, inspect:

- Repository and project instructions
- Browser/preview/testing tools
- Image and video generation tools
- Connected providers and their current schemas
- Available balance/cost checks
- Deployment target

Never assume a consumer chat subscription includes API, connector, or programmatic generation access.

## Where the gates live

This skill is built on human visual approval. The master-still gate, the video
gate, and the chain gate all require the user to actually look at what the
provider returned, at a size where morphing, flicker, geometry drift, and a weak
ending are visible. A surface that cannot display returned media inline cannot
run those gates — it can only ask the user to trust the agent's description,
which is the failure this skill exists to prevent.

That is why Claude Desktop is the primary surface. A Higgsfield or other
connector generation comes back into the Desktop conversation as something the
user can see and judge immediately. Terminal surfaces cannot do this, so they
are handoff targets for repository, encode, and deploy work rather than places
to approve media.

| Gate or phase | Desktop chat | Cowork | Claude Code |
| --- | --- | --- | --- |
| 1–3 Brief, direction, production package | Yes | Yes | Yes |
| 4 Master-still gate, seen inline at review size | Yes | Yes | No — terminal |
| 4 Video gate, clip actually watched | Yes | Yes | No |
| 5 Encode gate, `ffmpeg` | Probe the container first | Probe the session first | Native |
| 5–6 Repository read and write | Files to download | Connected folders | Native |
| 7 Rendered visual QA | Connector required | Computer use, Pro and Max | Browser/preview tools |
| 8 Deploy | No | Connected folders plus credentials | Native |

Three rules follow:

- Never run a media gate on a surface where the user cannot see the media at
  review size. Move the gate; do not narrate the footage in its place.
- A surface that cannot render the page cannot pass the visual gates. Complete
  every phase up to the gate, record precisely what remains unverified in
  `docs/qa-report.md`, and hand off. Never describe an unrendered build as
  reviewed, tested, or client-ready.
- A surface that cannot reach the repository produces deliverables, not commits.
  Return named files matching the documented project paths so the next surface
  can place them without redoing creative work.

## Claude Desktop

The default surface. It runs the skill two ways, and the split is deliberate:
approve media in chat where it is visible, then implement in Cowork where the
files are.

### Installing

Desktop does not read `.claude/skills/`. Filesystem installation is Claude Code
only, and custom skills do not sync between surfaces — a skill installed for
Claude Code must be uploaded separately here.

- Enable code execution first, or skills will not run at all: Settings > Capabilities on Free, Pro, and Max; Organization settings > Skills on Team and Enterprise, where an owner must enable both code execution and skills.
- Package the `build-beautiful-sites` folder as a `.zip` with `SKILL.md` at the top level inside the folder, and make the folder name match the `name` field exactly.
- Upload through Customize > Skills > `+` > Create skill > Upload a skill.
- Re-upload after editing the skill. There is no live reload from disk.
- Upload failures are almost always an oversized archive, a folder name that does not match the `name` field, a missing `SKILL.md`, or invalid characters in the name or description.

### Chat tab — direction and media gates

- Invoke by name or through a matching natural-language request.
- This is where phases 1 through 4 belong. Returned stills and clips render in the conversation, so the master-still, video, and chain gates work as written.
- Present one candidate at a time against the scorecard in `references/visual-qa.md`. Name what to look at — composition, identity, geometry, copy space, crop safety, the ending — instead of asking a bare "does this look good?"
- Code runs in a sandboxed container, not on the user's machine, and cannot see the repository unless files are uploaded or a local connector supplies access.
- Deliver implementation work as downloadable files named for their documented destinations.
- Do not assume the container has `ffmpeg`. Probe for it before offering to encode, and record the required settings in `docs/asset-manifest.md` when it is absent.

### Cowork — implementation and QA

- Attach the project folder to the session; Claude reads and writes only in connected folders. This is where phases 5 through 8 happen.
- Cowork is paid-plan only, and reaches local files through the desktop app, which must be running.
- Outputs are delivered into the session to preview and download.
- Confirm `ffmpeg` and `ffprobe` in the session before relying on the media scripts.
- Memory from chat does not carry into Cowork, and Cowork consumes usage faster than ordinary chat. Carry approved decisions across in the `docs/` files rather than assuming continuity.

### Computer use

Computer use is what closes phase 7 on Desktop without a separate browser MCP.

- Enable it at Settings > General > Desktop app > Computer use, on the current Claude Desktop build for macOS or Windows.
- Research preview, Pro and Max only. Team and Enterprise have no access at this time, so on those plans phase 7 needs a browser or preview connector instead.
- It opens the browser, opens files, and runs dev tools; use it to load the built page and inspect the real rendered result at the breakpoints in `references/visual-qa.md`.
- Claude prefers connectors, then Chrome, then direct screen interaction, which is slower and more error-prone. Prefer a real dev server over screen driving where possible.
- The desktop must stay awake, permission is granted per application, and there is no sandbox between Claude and the applications it drives. Close sensitive windows before a QA pass.

### Connectors on Desktop

- Remote connectors work on every surface, and Anthropic reaches them from its cloud rather than from the user's machine, so the server must be publicly reachable.
- Local MCP servers and desktop extensions run only in Claude Desktop and Claude Code. Use them for filesystem access, localhost preview, and browser control.
- Higgsfield belongs on this surface for exactly the reason above: the generation returns where the user can see it and approve it.

### Connector behavior on any Claude surface

- When the user chooses Higgsfield and the connector is available, inspect its current tools, models, balance, reference/upload route, and costs before generation.
- The current official custom-connector endpoint is `https://mcp.higgsfield.ai/mcp`; verify vendor instructions when guiding a fresh connection.
- Connected generations may deduct credits regardless of unlimited web-app access. Never promise free or unlimited connector generations.
- If the connector cannot return downloadable files, have the user download approved outputs from their provider assets and place them in the documented project location.

## Claude Code

A handoff target, not the place to approve media. Generated stills and clips
cannot be reviewed at size in a terminal, so route the media gates to Desktop
and bring the approved assets here.

- Invoke as `/build-beautiful-sites` or through a matching natural-language request.
- Use a project installation at `.claude/skills/build-beautiful-sites/` or personal installation at `~/.claude/skills/build-beautiful-sites/`.
- Strongest for phases 5 through 8: repository, shell, media scripts, tests, and deployment are all in reach.
- Inspect the real rendered application with available browser/preview capabilities rather than relying only on lint/build.
- Accept an approved production package and asset manifest from Desktop and continue from them. Do not regenerate approved media here.

## Codex

- Invoke as `$build-beautiful-sites` or through a matching natural-language request.
- Use project installation at `.agents/skills/build-beautiful-sites/` or personal installation at `$HOME/.agents/skills/build-beautiful-sites/`.
- Use available image tools for boards, key art, master stills, edits, and posters.
- Use available website-building and frontend-testing capabilities while preserving project conventions.
- Use a configured Higgsfield MCP only when present and authorized. Otherwise create the provider-ready production package and manual handoff.
- Do not replace the approved provider with a weaker generic video generator just to complete the task.

## ChatGPT

- Invoke an installed skill with `@build-beautiful-sites`.
- Use image generation for boards, master still candidates, edits, crops, and static art when suitable.
- For repository implementation, hand the approved production package and assets to Codex or Claude Code when the current ChatGPT context cannot edit/test the target repository.
- Preserve the same filenames and documentation so the next agent can continue without restarting creative work.

## Media/provider routing

Choose by required outcome:

1. Approved client photography, footage, renders, screenshots, and product assets
2. Current agent's suitable still-image tools
3. Controlled image-to-video through the user's selected provider
4. Higgsfield connector when its references, camera controls, model choice, edits, and orchestration justify credit use
5. Static premium mode

For Cinematic Scrub, do not insert an unapproved placeholder film. If no capable provider is available, complete the storyboard, master still, prompts, asset manifest, and integration contract, then pause the cinematic integration.

Always query current provider capabilities. Do not assume remembered model names, resolution, duration, references, first/last frames, motion controls, pricing, or unlimited-plan coverage.

## Cross-agent handoff

Use:

- `docs/site-brief.md`
- `docs/creative-direction.md`
- `docs/production-package.md`
- `docs/implementation-plan.md`
- `docs/asset-manifest.md`
- `docs/qa-report.md`

Record:

- Facts and assumptions
- Approved mode, tier, concept, still, clips, and copy
- Provider/model/settings and actual costs
- Prompts and reference roles
- Rejected versions and reasons
- Selected filenames and repository destinations
- Pending approval and spending ceiling
- Test commands, measurements, and remaining risks
- Which gates the previous surface could not close, and why

A new agent must inspect these artifacts and the repository before continuing. Do not regenerate approved media or rewrite approved copy without a reason.

Desktop to Claude Code is the expected route rather than a failure: approve the
brief, direction, and production package on the surface the user is already in,
then continue where the repository, shell, renderer, and deployment target are
reachable. Carry the filenames across unchanged.
