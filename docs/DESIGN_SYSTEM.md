# Odyss Design System

## Purpose

This document defines the initial reusable visual and interaction direction for Odyss. It translates approved product scope and visual references into coherent design rules without creating production UI, CSS, or assets.

## Source-of-Truth Hierarchy

When sources differ, use this order:

1. [PRODUCT_SPEC.md](PRODUCT_SPEC.md) decides which features and behavior exist in v1.
2. This design system decides reusable visual, interaction, accessibility, and responsive rules.
3. [Reference screenshots](design-references/README.md) provide composition, mood, density, and screen-level direction.

Reference screenshots are not pixel-perfect specifications. Their measurements, JPEG colors, sample data, unsupported navigation, and fictional metadata are not product requirements. A screenshot must never expand the Product Spec implicitly.

[`logo-dark-reference.jpg`](design-references/logo-dark-reference.jpg) is the authoritative identity reference for the symbol and ODYSS wordmark, but it is not a production-ready asset.

## Brand Identity

Odyss should feel personal, cinematic, refined, modern, and ownership-focused. The interface should feel deliberate and calm: media artwork supplies richness while the application frame stays restrained.

### Logo

The reference uses a vertically stacked lockup:

- A gold circular symbol with intentional breaks at the top and lower sides.
- A centered, symmetrical branching form that reads as an Odyss-specific wayfinder, compass, or journey mark.
- A pointed central upper form and grounded lower stem aligned to the symbol's vertical axis.
- A wide, geometric uppercase `ODYSS` wordmark below the symbol with generous letter spacing and distinctive letter geometry.

Preserve the symbol geometry, symmetry, stroke relationships, negative space, wordmark forms, and relative scale of the approved stacked lockup. Do not redraw individual letters, substitute a generic typeface for the wordmark, stretch the lockup, change its proportions, or invent an alternate logo.

Clear space should be proportional to the symbol rather than tied to a screenshot measurement. Maintain at least enough surrounding space for the central branch form and wordmark cap height to remain visually isolated from navigation, borders, text, or imagery. Minimum production size and exact clear-space units must be set from the future vector master.

- Gold is the primary brand accent.
- Dark mode uses a light wordmark.
- Light mode uses a dark wordmark.
- The symbol remains gold in both standard themes unless a later approved asset specification says otherwise.
- Do not crop the JPEG reference and ship it as a logo.

A clean transparent SVG master and production PNG exports remain required before production UI implementation. The reference's black background, compression, glow, and raster edges are not part of the logo geometry.

## Color System

JPEG pixel sampling is not an exact source of brand-color truth. The following dark-theme foundation is approved; supporting values are initial implementation tokens that must be tested in real components and adjusted if accessibility or visual testing requires it.

### Approved Dark-Theme Starting Tokens

| Token | Value | Use |
| --- | --- | --- |
| `color-background` | `#0B0D10` | Application canvas |
| `color-surface` | `#11151A` | Cards, panels, fields |
| `color-surface-elevated` | `#171C22` | Hover and visually elevated surfaces |
| `color-border` | `#242B33` | Dividers and component outlines |
| `color-text-primary` | `#E9EDF2` | Primary text and high-emphasis icons |
| `color-brand-gold` | `#D89A3D` | Brand and selected emphasis |

Gold signals brand emphasis, current selection, or a primary action. It should not replace semantic status colors and should not saturate large interface regions.

### Initial Supporting Tokens

These values are proposals subject to visual and contrast testing, not previously approved brand-color truth.

| Role | Dark theme | Light theme | Intended use |
| --- | --- | --- | --- |
| Background | Approved `#0B0D10` | `#F7F8FA` | Page canvas |
| Surface | Approved `#11151A` | `#FFFFFF` | Primary cards and panels |
| Elevated/hover surface | Approved `#171C22` | `#F0F2F5` | Hover, selection support, nested panels |
| Border | Approved `#242B33` | `#D9DEE5` | Outlines and dividers |
| Primary text | Approved `#E9EDF2` | `#171A1F` | Titles and body text |
| Secondary text | `#B3BBC6` | `#4B5563` | Supporting copy and metadata |
| Muted text | `#828C99` | `#687280` | Captions and low-emphasis metadata |
| Focus ring | `#F0B85A` | `#8A5A13` | Visible keyboard focus |
| Disabled surface | `#15191E` | `#ECEFF2` | Disabled controls |
| Disabled content | `#66717D` | `#7A8490` | Disabled labels and icons |
| Scrim/overlay | `rgba(0, 0, 0, 0.68)` | `rgba(17, 24, 39, 0.48)` | Modal and transient-layer backdrop |
| Error surface | `#2B1518` | `#FFF0F1` | Error message background |

Light and dark themes share semantic roles, component structure, and hierarchy. Theme switching changes token values rather than component layout.

### Status Colors

Status meaning must always be communicated with readable text and, where useful, an icon or shape in addition to color. The following are initial implementation tokens subject to contrast and visual testing:

| Status | Semantic color | Dark-theme starting value | Light-theme starting value |
| --- | --- | --- | --- |
| Watching | Green | `#4BC875` | `#167A3E` |
| Completed | Blue | `#5794FF` | `#2563D9` |
| On Hold | Yellow | `#F2B84B` | `#8A5A00` |
| Dropped | Red | `#F05B62` | `#C5313B` |
| Plan to Watch | Muted purple | `#9A7BE8` | `#6F52B5` |

Use semantic colors consistently in pills, dots, progress summaries, and charts. Charts must also provide labels, values, patterns, separation, or accessible descriptions.

### Contrast Expectations

- Normal text should meet at least WCAG AA contrast against its actual background; large text and meaningful component boundaries must meet their applicable AA thresholds.
- Focus indicators must be visible against both the component and adjacent page surface.
- Muted text cannot become the only presentation of required information.
- Disabled controls must remain identifiable while clearly distinct from enabled controls.
- Text placed over posters or photography requires a protective scrim, solid surface, or verified contrast treatment.
- Every proposed token must be tested in context before it becomes a stable production token.

## Typography

The references suggest a neutral, modern sans-serif with open shapes, clean numerals, and restrained weight changes. The exact font cannot be identified reliably from screenshots and remains an explicit production decision.

Use a compact role-based hierarchy:

| Role | Direction |
| --- | --- |
| Page title | Largest interface heading; confident, compact, semibold |
| Section title | Clear panel or region heading; medium-to-semibold emphasis |
| Card title | Prominent within a card without competing with page titles |
| Body | Comfortable reading size and line height; regular weight |
| Metadata | Slightly quieter than body text; concise and scannable |
| Label | Clear control or data label; medium weight where needed |
| Caption | Smallest supporting text; never below accessible readability |

Use a small, consistent set of font sizes and weights. Prefer hierarchy through size, spacing, and color before adding weight. Avoid excessive boldness. Reserve all-uppercase treatment for short labels or compact section eyebrows where it improves scanning; do not use it for paragraphs, controls, or long headings.

The logo wordmark is custom identity artwork and is not evidence for the application font.

## Layout and Responsive Behavior

### Desktop Structure

- A persistent left sidebar provides primary product navigation on wide screens.
- A top toolbar provides global search, the primary add action, relevant utilities, and account access.
- Main content begins with a clear page identity and primary controls, followed by progressively more detailed regions.
- Use fluid content width with intentional readable limits; avoid either a narrow fixed canvas or uncontrolled stretching on very wide displays.
- Align related cards and panels to a shared grid while allowing important content to span more columns.

### Cards, Panels, and Grids

- Cards use quiet borders, theme surfaces, modest radii, and internal spacing rather than heavy shadow.
- Nested panels must remain visually subordinate to their containing region.
- Grids adapt column count to available width and preserve a useful minimum card width.
- Unequal content should not force unrelated cards into awkward fixed heights unless alignment materially improves scanning.
- Media artwork should remain prominent without overpowering tracking information.

### Tables and Lists

- Library rows prioritize poster, title, year, progress, rating, status, and updated date.
- Column alignment, restrained dividers, and consistent row height support fast comparison.
- List and Compact layouts may adjust density, but must retain readable controls and status labels.
- Grid layout moves the same canonical information into poster-led cards rather than changing product behavior.
- On narrow screens, preserve essential columns, allow controlled horizontal scrolling where appropriate, or present a deliberate row/card adaptation. Do not squeeze every desktop column into unreadable widths.

### Posters

Use a consistent portrait poster frame, approximately the familiar 2:3 media-poster proportion unless source artwork requires a documented exception. Crop with controlled cover behavior, preserve meaningful subject placement where possible, and provide a stable placeholder with equivalent geometry.

### Tablet and Mobile

- Collapse or temporarily reveal the desktop sidebar as space decreases; the final mobile navigation pattern remains open.
- Allow the top toolbar to simplify, wrap, or move secondary actions into an accessible overflow.
- Stack dashboard modules by information priority rather than shrinking the desktop mosaic.
- Convert dense two-column detail screens into a clear single-column reading order.
- Make filter and sort controls wrap, scroll, or enter a focused control surface without losing their labels.
- Preserve touch targets, focus order, and reading order through every breakpoint.

Mobile must be designed responsively, not produced by scaling down a desktop screenshot. This document does not invent the final mobile navigation design.

## Component Language

### Sidebar Navigation

Use a restrained vertical rail with the approved logo lockup, icon-plus-label destinations, and a clearly marked current destination. Selection may use gold, a quiet surface, and a leading indicator, but it must remain understandable without color alone. Separate primary destinations from settings/account actions through spacing rather than excessive decoration.

### Top Toolbar

Keep global search visually primary and easy to reach. Place the principal add action nearby on wide screens. Account and utility controls should align consistently and retain text alternatives or accessible names when reduced to icons.

### Cards and Panels

Use surface and border tokens to group information. Headings, values, supporting text, and actions follow a consistent internal order. Avoid ornamental containers around every value; whitespace should do much of the grouping.

### Buttons

- Primary buttons use strong brand emphasis and clear action text.
- Secondary buttons use quieter filled or outlined treatments.
- Tertiary and icon buttons remain visibly interactive without competing with primary actions.
- Destructive actions use error semantics, confirmation proportional to risk, and explicit wording.

Every button needs hover, active, focus-visible, disabled, and loading behavior. Icon-only buttons require accessible names and tooltips where meaning is not obvious.

### Search Inputs

Search fields pair a familiar search icon with a persistent accessible label, visible placeholder, or both. Results and clear actions must be keyboard operable. Search scope must be explicit; people search is not part of v1.

### Tabs

Tabs organize peer views such as Movies and Series or Search, Add with Details, and Manual Entry. The active tab uses more than color, such as an underline and selected-state semantics. Tabs support arrow-key navigation where implemented as a tab pattern.

### Status Pills

Status pills combine the approved status label with a semantic color indicator. Keep shapes compact and borders subtle. Never expose only a colored dot without accessible text.

### Filter Controls and Dropdowns

Filters state their current value, make active filters evident, and provide a clear reset path. Dropdowns use predictable keyboard behavior, visible focus, adequate option spacing, and selected-state indicators. Do not hide essential filter state solely inside a closed menu.

### Poster Thumbnails

Thumbnails use the shared portrait frame, stable loading dimensions, descriptive alternative text where the image conveys identity, and a placeholder when art is missing. Decorative duplicates use empty alternative text.

### Progress Bars

Progress bars pair the visual fill with text such as watched and total episodes or a percentage. The accessible name exposes the same meaning. Use semantic progress color consistently, and do not rely on bar length alone.

### Data Tables and List Rows

Use semantic table structure when content is genuinely tabular. Row actions remain discoverable by keyboard and do not require hover. Sorting communicates column and direction. Responsive alternatives preserve labels and relationships between each value and its heading.

### Rating Display

Ratings show a numeric value from 1 to 10. A star may reinforce meaning but cannot replace the number or accessible label. Distinguish a user's rating from external metadata ratings in copy and structure.

### Empty States

Explain what is empty, why it may be empty, and the most relevant next action. Empty states should be calm and useful, not imply missing social activity or unsupported recommendation features. Illustration direction remains open.

### Modal and Detail Forms

Use a modal only for focused, interruptible work. Longer Add with Details or Manual Entry flows may use a dedicated panel or page. Forms group related tracking fields, retain labels, place validation near the relevant field, preserve entered values after errors, and provide clear submit and cancel actions.

### Interaction States

- **Hover:** a modest surface, border, or content change; never the only cue that an action exists.
- **Focus:** a high-contrast focus-visible ring with no keyboard focus suppression.
- **Active/selected:** combine color with shape, text, underline, icon, or position.
- **Disabled:** prevent interaction and communicate unavailability without masquerading as normal text.
- **Error:** pair error color with concise text and programmatic association.
- **Motion:** use brief, functional transitions for state continuity. Respect reduced-motion preferences and avoid decorative movement that competes with media content.

### Shared Visual Treatment

- Borders are thin and low-contrast but remain perceptible in both themes.
- Corner radii are restrained and consistent, generally small to medium rather than highly rounded.
- Spacing follows a compact token scale with repeated increments; exact values remain subject to prototype testing.
- Shadows are rare and subtle, reserved for true elevation such as transient layers.
- Icons use a consistent simple outline family, stroke character, optical size, and semantic labeling.
- Animation is restrained and purposeful.

## Screen-Specific Guidance

### Dashboard

- Lead with Overview statistics that answer the user's most common library questions at a glance.
- Show Status breakdown with labeled semantic colors and totals derived from explicit library status.
- Present Genre Profile as readable labeled distributions, not color-only bars.
- Keep Recent Activity chronological, concise, and connected to durable media identity.
- Treat v1 Achievements as a compact supporting module rather than a progression system.
- Present Favorites as a horizontal, poster-led collection that respects the user's explicit ordering.
- Group Insights into scannable comparisons without turning every metric into a separate decorative card.
- Use a clock icon for Days Watched so duration is not confused with a calendar date.
- Preserve a strong information hierarchy and generous breathing room; do not reproduce the screenshot's density when it creates clutter.

### Library

- Provide Movies and Series tabs as peer library views.
- Offer the five approved status filters with text labels and semantic indicators.
- Keep library search, filters, sorting, List/Compact/Grid controls, and Customize Library discoverable and logically grouped.
- Rows prioritize poster, title, year, progress, score, status, and updated date, with actions available without hover dependency.
- List, Compact, and Grid share the same underlying content and filters.
- Dark and light themes share layout, hierarchy, and status semantics; only theme tokens change.

### Add to Library

- Support Search/Results, Quick Add, Add with Details, and Manual Entry as distinct but connected paths.
- Use a selected-result detail panel to confirm media identity and expose appropriate tracking fields.
- Make the primary Add to Library action unambiguous and keep cancel/back behavior clear.
- Distinguish external ratings from the user's optional rating.
- People search or a People filter shown in a reference is not approved for v1 and must not be implemented.

### Series Detail

- Establish identity with poster, title, year, media type, and relevant metadata.
- Keep explicit status and rating distinct from episode-derived progress.
- Highlight the next episode when it can be derived from canonical progress.
- Provide Overview and Details without burying tracking actions.
- Keep quick actions concise and aligned with approved v1 behavior.
- Derive series statistics from canonical tracking data rather than storing screenshot values.
- Present Seasons and Episodes with season-specific posters, labeled progress, and clear expansion state.
- Expanded episodes support readable identity and watched state; collapsed seasons retain a useful summary.
- Unsupported sidebar modules, sample tabs, quick actions, and fictional content in the screenshot are directional only and are not requirements.

## Explicit Screenshot Exclusions

The following visual elements do not enter v1 merely because they appear in a reference:

- Discover
- Watchlist as a separate product area
- Calendar
- A separate Notes page
- People search or filtering
- Actor favorites
- Any navigation item, module, action, or content absent from [PRODUCT_SPEC.md](PRODUCT_SPEC.md)
- Sample users, avatars, titles, ratings, dates, progress, achievements, and statistics
- Fictional, approximate, or inaccurate sample metadata

Private notes remain part of approved media tracking, but the screenshot's separate Notes destination is not approved. Plan to Watch remains an approved status, but it does not imply a separate Watchlist product area.

## Accessibility

- All functionality must be operable by keyboard with a logical focus order.
- Focus is visibly indicated in both themes and is never removed without an accessible replacement.
- Inputs, icons, controls, charts, status indicators, and progress indicators have semantic labels or accessible names.
- Text, meaningful icons, controls, and focus indicators meet applicable contrast requirements.
- Status meaning is exposed as screen-reader text and never depends on color alone.
- Reduced-motion preferences disable or simplify nonessential transitions and animation.
- Interactive targets provide adequate size and spacing for touch use without making dense desktop layouts cumbersome.
- Tables remain usable on narrow screens through intentional column priority, controlled scrolling, or an accessible row/card adaptation.
- Dynamic results, errors, progress changes, and saved state are announced appropriately without excessive interruption.
- Poster alternative text describes media identity only when that information is not already conveyed by adjacent text.

## Open Design Decisions

- Exact production font
- Final light-theme supporting colors
- Exact spacing and radius scale after prototype testing
- Mobile navigation pattern
- Production SVG and PNG logo exports
- Final icon library
- Image placeholders and loading states
- Empty-state illustration direction

These decisions must be validated through accessible prototypes. Until then, implementation should use replaceable tokens and avoid treating screenshot details as fixed measurements.
