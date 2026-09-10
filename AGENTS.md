# Odyss Development Rules

These rules apply to all work in this repository.

## Before Making Changes

- Read the relevant product, roadmap, architecture, decisions, and task documentation. Start with [the architecture](docs/ARCHITECTURE.md) and [technical decisions](docs/DECISIONS.md) for technical work.
- Inspect the existing code and configuration before editing.
- Keep each task small, clearly scoped, and aligned with the current roadmap phase.
- Do not expand the agreed v1 scope without explicit approval.

## Product and Architecture

- Keep Odyss Cloud and self-hosted Odyss on the same application core.
- Build Odyss as one TypeScript strict-mode Next.js App Router modular monolith on Node.js 24 LTS; do not introduce microservices.
- Use the approved PostgreSQL, Drizzle, Better Auth, Tailwind, Zod, Vitest, React Testing Library, Playwright, npm, and Docker Compose foundation described in the architecture document.
- Keep internal modules and their public boundaries clear; provider-specific and deployment-specific details must not leak into domain logic.
- Keep media metadata separate from personal user tracking data.
- Use internal Odyss IDs as primary identifiers; external provider IDs are references, not primary identifiers.
- Keep metadata integrations behind the provider-independent boundary; TMDB is a development provider, not an approved commercial dependency.
- Derive dashboard statistics from canonical tracking data instead of storing duplicate statistics.
- Control Cloud and self-hosted differences through validated environment configuration, never committed secrets or separate application forks.
- Preserve clear extension points for future features without implementing post-v1 functionality prematurely.

## Quality and Delivery

- Test and verify every implementation task at a level appropriate to the change.
- Never commit or push unless explicitly requested.
- After every task, report changed files, verification performed, and any remaining concerns.
