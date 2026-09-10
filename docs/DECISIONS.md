# Odyss Technical Decisions

This lightweight Architecture Decision Record (ADR) log captures accepted technical direction. Consequences describe constraints for future implementation, not work completed by this document.

## Accepted Decisions

| ID | Decision | Status | Reason | Consequences |
| --- | --- | --- | --- | --- |
| ADR-001 | Use a modular monolith instead of microservices. | Accepted | Odyss needs clear boundaries without distributed-system operational cost. | One repository and deployable application; modules communicate through explicit internal boundaries. |
| ADR-002 | Use one shared core for Odyss Cloud and self-hosted installations. | Accepted | Both deployment models must remain the same product and avoid divergent behavior. | Deployment differences use configuration; cloud-only services cannot be required for self-hosting. |
| ADR-003 | Use Next.js App Router and TypeScript in strict mode. | Accepted | The application needs an integrated web foundation and strong static checking. | Application structure follows App Router conventions and must pass strict TypeScript checks. |
| ADR-004 | Use Node.js 24 LTS and npm. | Accepted | A fixed LTS runtime and standard package manager make development and deployment reproducible. | Supported environments use Node.js 24 LTS and npm-managed dependency metadata. |
| ADR-005 | Use PostgreSQL. | Accepted | Odyss requires durable relational storage for catalog, account, tracking, and activity data. | Cloud and self-hosted deployments must provide compatible PostgreSQL environments. |
| ADR-006 | Use Drizzle ORM with code-first schema definitions and committed SQL migrations. | Accepted | Schema changes should be typed, reviewable, versioned, and operationally explicit. | Generated SQL migrations are reviewed and committed; the same migration path serves all deployments. |
| ADR-007 | Use Better Auth with email and password for the initial implementation. | Accepted | Cloud and self-hosted modes need one account model with a focused v1 authentication method. | Registration policy and email delivery are configurable; social login is deferred. |
| ADR-008 | Use Tailwind CSS with Odyss-owned design tokens. | Accepted | Utility styling is useful, but product themes must remain controlled by Odyss rather than framework defaults. | Tailwind consumes Odyss CSS/theme variables; standard light and dark themes share those tokens. |
| ADR-009 | Use Zod for validation at system boundaries. | Accepted | External and untrusted values require consistent runtime validation. | Requests, forms, configuration, provider responses, and import data are validated before entering domain logic. |
| ADR-010 | Use Vitest, React Testing Library, and Playwright. | Accepted | Unit, component, and end-to-end behavior require complementary test levels. | Implementation tasks add appropriate coverage and maintain critical Playwright flows. |
| ADR-011 | Use Docker Compose as the first self-hosting target. | Accepted | v1 needs a reproducible multi-container deployment path that remains approachable for operators. | The initial self-hosting documentation targets Docker Compose; deployment artifacts come in a later roadmap phase. |
| ADR-012 | Integrate metadata through a provider-independent boundary. | Accepted | Catalog and tracking logic must not depend on one external provider's API or data shapes. | A `MetadataProvider` contract uses internal types; adapters translate provider-specific requests and responses. |
| ADR-013 | Use TMDB as the development provider only until commercial terms are resolved. | Accepted | TMDB enables development, but paid Cloud usage requires unresolved licensing and attribution review. | TMDB is not treated as commercially approved; production use requires an agreement or alternative provider. |
| ADR-014 | Use internal Odyss IDs for media entities. | Accepted | Stable application identity cannot depend on mutable or replaceable external providers. | TMDB, IMDb, and other IDs are provider mappings rather than primary identifiers. |
| ADR-015 | Derive dashboard statistics instead of maintaining duplicate counters. | Accepted | Canonical tracking data should remain the sole source of truth. | Dashboard values are calculated from tracking and activity records; performance optimizations must preserve rebuildability and consistency. |

## Open Decisions

The following decisions are intentionally unresolved:

- Exact open-source license
- TMDB commercial agreement or an alternative production metadata provider
- Poster and image storage, caching, delivery, attribution, and licensing policy
- Transactional email provider for Odyss Cloud
- Exact export and import format
- Backup and restore workflow
- Final deployment provider for Odyss Cloud

An open item must be recorded as an accepted decision before implementation depends on it.
