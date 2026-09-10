# Odyss Roadmap

This roadmap sequences the agreed v1 without selecting implementation technologies. A phase is complete only when its goal and completion criteria are met and its behavior is verified.

## Phase 0: Product Documentation, Design References, Stack Decisions, and Data Model

**Goal:** Establish the shared understanding needed to build one maintainable core for cloud-hosted and self-hosted Odyss.

**Completion criteria:**

- Product scope, primary user flows, and explicit non-goals are documented and consistent.
- Design references and the intended visual direction are documented.
- Technology stack decisions are recorded with their constraints and rationale.
- The initial data model separates media metadata from personal tracking data, uses internal Odyss IDs, and identifies derived dashboard values.
- Cloud and self-hosted operating requirements are defined without creating separate application cores.

## Phase 1: Project Foundation, Database, Migrations, Design Tokens, Themes, and Tests

**Goal:** Create a reliable, testable application foundation and persistence layer.

**Completion criteria:**

- The project structure and development workflows are documented and reproducible.
- The database schema and migration workflow support the approved initial data model.
- Design tokens and standard light and dark themes are available to the application.
- Automated test foundations cover critical configuration and persistence behavior.
- Local verification succeeds in the documented development environment.

## Phase 2: Navigation and UI Skeleton

**Goal:** Establish the responsive application shell and routes for the complete v1 experience.

**Completion criteria:**

- Navigation reaches Profile, Dashboard, Library, Search and Add, Movie Detail, and Series Detail surfaces.
- Loading, empty, error, and unavailable states have consistent patterns.
- The application shell works with standard light and dark themes.
- The skeleton is responsive and accessible enough to support feature development.
- UI behavior is covered by appropriate automated tests.

## Phase 3: Complete Vertical Movie Flow

**Goal:** Deliver the first end-to-end usable workflow with real persistence and dashboard effects.

**Completion criteria:**

- A user can search for or manually enter a movie.
- Quick Add and Add with Details create a library record with an approved status.
- A user can update status, rating, started and finished dates, rewatch count, favorite state, and private notes.
- Movie Detail presents metadata separately from personal tracking data.
- Completing a movie updates the Library and derived Dashboard data.
- The complete movie flow is tested from entry through persistence and display.

## Phase 4: Series, Seasons, and Episodes

**Goal:** Extend the complete tracking flow to TV series and granular viewing progress.

**Completion criteria:**

- A user can add a series and set it to Watching or another approved status.
- Season and episode progress can be updated and persisted.
- A user can complete a season and then the series.
- Individual-season logging is optional and works independently of the default series-grouped presentation.
- Season-specific posters are supported.
- Series Detail and derived Dashboard updates are verified with automated tests.

## Phase 5: Complete Library Functionality

**Goal:** Make the personal library efficient to browse, organize, and customize.

**Completion criteria:**

- Library search, approved filters, and sorting work for movies and series.
- Users can switch between series-grouped and individual-season displays.
- List, Compact, and Grid layouts are complete.
- Basic Customize Library options persist the supported user preferences.
- Empty, large, mixed-media, and filtered libraries are tested.

## Phase 6: Real Dashboard Statistics and Activity

**Goal:** Turn canonical tracking and activity data into a useful personal dashboard.

**Completion criteria:**

- Overview, Status breakdown, Favorites, Achievements, Genre Profile, Recent Activity, and Insights use real user data.
- Results respond correctly to adds, edits, progress changes, completions, and removals.
- Derived statistics are computed from canonical records rather than stored as duplicate sources of truth.
- Basic achievement behavior stays within v1 and does not introduce ranks, XP, or cosmetic progression.
- Accuracy and representative edge cases are covered by automated tests.

## Phase 7: Accounts, Cloud/Self-Hosted Configuration, Export, Import, and Backup

**Goal:** Make the shared core operable for personal cloud and self-hosted use while protecting user ownership of data.

**Completion criteria:**

- Account boundaries and personal-data access are enforced.
- Cloud and self-hosted configuration modes use the same application core.
- Users can export, restore or import the supported v1 data format, and perform a documented backup and recovery flow.
- Import scope is deliberately limited to Odyss's v1 portability and recovery needs; broad third-party imports remain outside v1.
- Configuration, data portability, and recovery behavior are tested and documented.

## Phase 8: Accessibility, Performance, Security, Responsive Design, and Documentation

**Goal:** Prepare the v1 product for dependable public use and contribution.

**Completion criteria:**

- Key workflows meet documented accessibility expectations.
- Performance is measured and acceptable against documented targets.
- Security review findings for v1 surfaces are resolved or explicitly documented.
- Supported screen sizes provide a complete responsive experience.
- User, self-hosting, backup/recovery, contributor, and operational documentation is complete.
- The full automated test suite and release verification pass.
