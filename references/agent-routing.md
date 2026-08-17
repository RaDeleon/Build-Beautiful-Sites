# Claude, Codex, and ChatGPT Routing

## Contents

1. Shared contract
2. Claude
3. Codex
4. ChatGPT
5. Media/provider routing
6. Cross-agent handoff

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

## Claude

- Invoke as `/build-beautiful-sites` or through a matching natural-language request.
- Use a project installation at `.claude/skills/build-beautiful-sites/` or personal installation at `~/.claude/skills/build-beautiful-sites/`.
- When the user chooses Higgsfield and the connector is available, inspect its current tools, models, balance, reference/upload route, and costs before generation.
- The current official custom-connector endpoint is `https://mcp.higgsfield.ai/mcp`; verify vendor instructions when guiding a fresh connection.
- Connected generations may deduct credits regardless of unlimited web-app access. Never promise free or unlimited connector generations.
- If the connector cannot return downloadable files, have the user download approved outputs from their provider assets and place them in the documented project location.
- Inspect the real rendered application with available browser/preview capabilities rather than relying only on lint/build.

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

A new agent must inspect these artifacts and the repository before continuing. Do not regenerate approved media or rewrite approved copy without a reason.
