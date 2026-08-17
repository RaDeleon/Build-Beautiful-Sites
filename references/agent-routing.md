# Claude Code and Codex Routing

## Contents

1. Shared contract
2. Claude Code
3. Codex
4. Media routing
5. Cross-agent handoff

## Shared contract

Use the Agent Skills-compatible `SKILL.md` and supporting references unchanged in both agents. Keep strategy, planning artifacts, motion selection, implementation standards, and quality gates identical. Adapt only invocation syntax and available tool calls.

Before acting, inspect which repository, browser/preview, image, video, deployment, and connector tools are actually available. Never assume a chat subscription grants API access.

## Claude Code

- Invoke the skill as `/build-beautiful-sites` or with a natural-language request matching its description.
- Install as a personal skill at `~/.claude/skills/build-beautiful-sites/` or a project skill at `.claude/skills/build-beautiful-sites/`.
- Use a configured Higgsfield MCP/CLI only when present and authorized. Otherwise write provider-ready prompts and use approved local media.
- Use `/run` or `/verify` when available to inspect the real application rather than relying only on lint or a build.

## Codex

- Invoke the installed skill as `$build-beautiful-sites` or ask naturally for the matching workflow.
- Use available image-generation tools for stills, boards, edits, and posters when appropriate.
- Use the applicable website-building and frontend-testing capabilities when present; follow repository instructions and preserve existing project conventions.
- If no video-generation tool is available, produce the approved video prompt and asset specification, let the user generate it with an existing account, then integrate the returned file. Do not substitute an unapproved generic stock clip.

## Media routing

Choose in this order:

1. Approved client photography, footage, renders, and product assets
2. The current agent's available image/video tools
3. Manual generation through the user's existing ChatGPT or Gemini account
4. Connected Higgsfield MCP/CLI when its orchestration or model selection justifies credits
5. A documented placeholder only for an explicitly labeled concept

For provider-agnostic first passes, request 1080p, 16:9, no audio, 6–10 seconds per shot, constant slow motion, and web-safe copy zones. Query the provider's current schema instead of assuming a remembered model name or start/end-frame feature. Use 4K only after the composition and motion are approved and the delivery needs it.

## Cross-agent handoff

Keep handoffs file-based so Claude Code and Codex can continue each other's work:

- `docs/site-brief.md`
- `docs/creative-direction.md`
- `docs/implementation-plan.md`
- `docs/asset-manifest.md`
- `docs/qa-report.md`

Record prompts, selected outputs, rejected-output reasons, assumptions, pending approvals, test commands, and measured results. A new agent must inspect these artifacts and the repository before continuing; it must not restart the project or regenerate approved media without cause.
