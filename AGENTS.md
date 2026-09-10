# Odyss Development Rules

These rules apply to all work in this repository.

## Before Making Changes

- Read the relevant product, roadmap, architecture, and task documentation.
- Inspect the existing code and configuration before editing.
- Keep each task small, clearly scoped, and aligned with the current roadmap phase.
- Do not expand the agreed v1 scope without explicit approval.

## Product and Architecture

- Keep Odyss Cloud and self-hosted Odyss on the same application core.
- Keep media metadata separate from personal user tracking data.
- Use internal Odyss IDs as primary identifiers; external provider IDs are references, not primary identifiers.
- Derive dashboard statistics from canonical tracking data instead of storing duplicate statistics.
- Preserve clear extension points for future features without implementing post-v1 functionality prematurely.

## Quality and Delivery

- Test and verify every implementation task at a level appropriate to the change.
- Never commit or push unless explicitly requested.
- After every task, report changed files, verification performed, and any remaining concerns.
