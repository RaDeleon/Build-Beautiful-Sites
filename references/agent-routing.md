# Claude Code, Claude Desktop, Codex, and ChatGPT Routing

## Contents

1. Shared contract
2. Surface capability gates
3. Claude Code
4. Claude Desktop
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

## Surface capability gates

The workflow is identical everywhere. What changes is which gates the current
surface can actually close. Establish this before promising an outcome.

| Capability | Claude Code | Claude Desktop chat | Cowork | Codex | ChatGPT |
| --- | --- | --- | --- | --- | --- |
| Read/write the repository | Native | Uploaded files only | Attached folders | Native | Rarely |
| Shell, `ffmpeg`, build tools | Native | Sandbox container; verify | Attached folders | Native | No |
| Rendered inspection | Browser/preview tools | Connector required | Connector required | Testing tools | No |
| Still generation | Connector or image tools | Connector required | Connector required | Image tools | Native |
| Deploy | Native | No | Folders plus credentials | Native | No |

Two rules follow from the table:

- A surface that cannot render the page cannot pass the visual gates. Complete
  every phase up to the gate, record precisely what remains unverified in
  `docs/qa-report.md`, and hand off. Never describe an unrendered build as
  reviewed, tested, or client-ready.
- A surface that cannot reach the repository produces deliverables, not commits.
  Return named files matching the documented project paths so the next surface
  can place them without redoing creative work.

## Claude Code

- Invoke as `/build-beautiful-sites` or through a matching natural-language request.
- Use a project installation at `.claude/skills/build-beautiful-sites/` or personal installation at `~/.claude/skills/build-beautiful-sites/`.
- Inspect the real rendered application with available browser/preview capabilities rather than relying only on lint/build.
- This is the reference surface: repository, shell, media scripts, tests, and deployment are all in reach. Prefer it for phases 5 through 8.

## Claude Desktop

Desktop runs this skill on two surfaces with different reach. Identify which one
is active before committing to a production mode.

### Installing

Desktop does not read `.claude/skills/`. Filesystem installation is Claude Code
only, and custom skills do not sync between surfaces — a skill installed for
Claude Code must be uploaded separately here.

- Enable code execution first, or skills will not run at all: Settings > Capabilities on Free, Pro, and Max; Organization settings > Skills on Team and Enterprise, where an owner must enable both code execution and skills.
- Package the `build-beautiful-sites` folder as a `.zip` with `SKILL.md` at the top level inside the folder.
- Upload through Customize > Skills > `+` > Create skill > Upload a skill.
- Re-upload after editing the skill. There is no live reload from disk.
- Upload failures are almost always an oversized archive, a folder name that does not match the `name` field, a missing `SKILL.md`, or invalid characters in the name or description.

### Chat tab

- Invoke by name or through a matching natural-language request.
- Code runs in a sandboxed container, not on the user's machine. It cannot see the repository unless files are uploaded or a local connector supplies access.
- Treat this as a direction and authoring surface. It is fully capable of phases 1 through 4: the brief, creative direction, production package, storyboard, prompts, copy, adapted tokens, and component source.
- Deliver work as downloadable files named for their documented destinations, and let the user commit them or continue in Claude Code.
- Do not run the media scripts here on repository media. Verify the container even has `ffmpeg` before offering to encode anything.

### Cowork

- Attach the project folder to the session. The agent reads, writes, and runs code inside attached roots, which is the Desktop surface where phases 5 through 8 can genuinely happen.
- Attach reference material read-only (`ro`) when it must not be modified.
- Cloud sessions reach local files only while the desktop app is open on that machine, and local MCP servers do not run in cloud sessions.
- Confirm `ffmpeg` and `ffprobe` inside the session before relying on the media scripts.

### Connectors on Desktop

- Remote connectors work on every surface, and Anthropic connects to them from its cloud rather than from the user's machine, so the server must be publicly reachable.
- Local MCP servers and desktop extensions run only in Claude Desktop and Claude Code. Use them for filesystem access, localhost preview, and browser control.
- Without a browser or preview connector there is no rendered inspection on Desktop, so phase 7 stays open and the work is a handoff, not a launch.

### Connector behavior on any Claude surface

- When the user chooses Higgsfield and the connector is available, inspect its current tools, models, balance, reference/upload route, and costs before generation.
- The current official custom-connector endpoint is `https://mcp.higgsfield.ai/mcp`; verify vendor instructions when guiding a fresh connection.
- Connected generations may deduct credits regardless of unlimited web-app access. Never promise free or unlimited connector generations.
- If the connector cannot return downloadable files, have the user download approved outputs from their provider assets and place them in the documented project location.

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
