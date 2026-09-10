# Odyss v1 Product Specification

## Product Vision

Odyss is an open-source personal movie and TV-series library and tracker. It gives people a modern, customizable place to organize their viewing, understand their habits, and retain ownership of their personal tracking data through either Odyss Cloud or a self-hosted installation.

Both deployment models must use one shared application core. Media metadata must remain separate from personal tracking data so that catalog information and a person's statuses, progress, ratings, dates, rewatches, favorites, and notes have clear ownership and lifecycles.

## v1 Product Principles

- Personal ownership and self-hosting are first-class requirements.
- Odyss Cloud and self-hosted installations provide the same core product experience.
- Internal Odyss IDs identify application entities. IDs from metadata providers are stored only as external references.
- Dashboard statistics are derived from canonical library and activity data rather than duplicated as independently maintained values.
- The data model should leave sensible extension points without adding post-v1 product behavior.

## v1 Scope

### Media

v1 supports movies and TV series, including their seasons and episodes where series progress requires them.

### Personal Profile

Each user has a personal profile that anchors their library, dashboard, favorites, achievements, genre profile, activity, and insights. Social profiles and friend interactions are not part of v1.

### Tracking Data

Users can track:

- A status: Watching, Completed, On Hold, Dropped, or Plan to Watch
- A rating from 1 to 10
- Started and finished dates
- Rewatch count
- Private notes
- Favorite items
- Season and episode progress for TV series
- Individual seasons as optional logging entries
- Season-specific posters where available or selected

Personal tracking records belong to the user and remain distinct from shared media metadata.

Season entries and episode progress require the parent series to be in the same user's library. If a user records progress before adding that series, Odyss must add the parent series first or create the library entry and progress together in one transaction.

Favorites are limited to media already in the user's library. Removing a library entry also removes its favorite.

Library and season statuses are explicit user-controlled workflow states and may differ from episode-derived progress. Dashboard status totals use the explicit library status, while season and series completion percentages use episode progress. Odyss may suggest a status change but does not silently change status in v1, and changing status never deletes episode progress.

### Dashboard

The dashboard summarizes real data from the user's library and activity. It contains:

- **Overview:** a concise summary of library and viewing progress
- **Status breakdown:** distribution across the five tracking statuses
- **Favorites:** the user's favorite movies and series
- **Achievements:** basic v1 milestones based on ordinary tracking activity
- **Genre Profile:** a summary of watched genres
- **Recent Activity:** recent additions and tracking updates
- **Insights:** useful patterns calculated from library and viewing data

Dashboard values must be calculated from canonical records and events; derived totals must not be maintained as duplicate sources of truth.

### Library

The library is the main place to browse and manage tracked media. It supports:

- Movies and TV series
- A series-grouped view or a view that shows individual seasons
- Search within the user's library
- Filters and sorting
- List, Compact, and Grid layouts
- Basic Customize Library options for supported grouping, layout, filtering, sorting, and display preferences

### Search and Add

Users can discover and add media through:

- **Quick Add:** add an item with a minimal status choice
- **Add with Details:** set available tracking details while adding an item
- **Manual Entry:** create an entry when normal search metadata is unavailable or unsuitable

TMDB is the initial development metadata provider behind a provider-independent boundary. The production provider remains undecided until commercial terms are resolved. Search results and manually entered items must ultimately use internal Odyss IDs. Private manual media has no external provider mappings in v1; promotion, merging, and deduplication of manual media are deferred.

### Movie Detail

The movie detail experience presents media metadata alongside the user's separate tracking record. Users can add the movie, change its status, update dates, rating, rewatch count, favorite state, and private notes, and mark it complete.

### Series Detail

The series detail experience presents series, season, and episode information alongside personal tracking data. Users can update status, season and episode progress, ratings, dates, rewatch count, favorite state, and private notes. Users can optionally log individual seasons and use season-specific posters.

### Appearance

v1 includes standard light and dark themes. A full theme editor is outside v1.

## Core User Flows

### Movie Flow

Search → Add → choose status → Library → update progress or rating → Movie Detail → Complete → Dashboard updates

For movies, progress means updates to the personal tracking state, such as status, dates, rating, or completion.

### Series Flow

Add Series → Watching → update season or episode progress → complete season → complete series → Dashboard updates

Completing a season does not require it to appear as an independent library item; individual-season logging is optional.

## Explicitly Outside v1

- Books
- Native mobile applications
- Social and friends features
- Advanced recommendations
- AI features
- Deep achievement systems
- Broad import support
- A full theme editor
- Franchise/Universe Progress
- Profile ranks, XP, and cosmetic frames

## Post-v1 Architectural Considerations

These possibilities may inform clean boundaries and identifiers, but must not be implemented in v1:

- **Franchise/Universe Progress:** derived automatically from ordinary viewing data rather than separately recorded progress.
- **Generic collections:** collections that can contain nested groups such as universes, sagas, and phases.
- **Optional Profile Progression:** ranks and XP with cosmetic frames that remain permanently unlocked once earned.

No post-v1 consideration should add v1 screens, stored state, background processing, or user-facing behavior before it is explicitly approved.

## v1 Success Criteria

v1 is complete when a user can run or use Odyss through a supported deployment, maintain a personal movie and TV-series library through the defined flows, inspect accurate dashboard modules derived from their activity, choose a standard light or dark theme, and export, import, and back up their personal data within the deliberately limited v1 scope.
