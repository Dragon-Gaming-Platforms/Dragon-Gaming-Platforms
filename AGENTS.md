# Dragon Gaming Platforms — Engineering & Operations Handbook

> **Audience:** AI agents, maintainers, reviewers, and contributors working in this repository.
>
> **Purpose:** This is the technical documentation hub for the main site, its catalog, offline/PWA behavior, tests, automated workflows, fork support, and safe contribution practices. The public-facing introduction remains in [`README.md`](README.md); upstream attributions belong in [`CREDITS.md`](CREDITS.md) and [`THIRD_PARTY.md`](THIRD_PARTY.md).

---

## Contents

1. [Project at a glance](#1-project-at-a-glance)
2. [First five minutes](#2-first-five-minutes)
3. [Repository map](#3-repository-map)
4. [Source-of-truth and protected snapshots](#4-source-of-truth-and-protected-snapshots)
5. [Catalog contract](#5-catalog-contract)
6. [Search and result rendering](#6-search-and-result-rendering)
7. [Main-page boot sequence](#7-main-page-boot-sequence)
8. [Public URL routes](#8-public-url-routes)
9. [Main-site enhancements](#9-main-site-enhancements)
10. [Browser storage and save backups](#10-browser-storage-and-save-backups)
11. [Accessibility and interaction conventions](#11-accessibility-and-interaction-conventions)
12. [Styles, themes, and responsive behavior](#12-styles-themes-and-responsive-behavior)
13. [PWA installation](#13-pwa-installation)
14. [Service-worker lifecycle and cache model](#14-service-worker-lifecycle-and-cache-model)
15. [Offline behavior and recovery](#15-offline-behavior-and-recovery)
16. [GitHub Pages deployment](#16-github-pages-deployment)
17. [GitHub Actions workflow directory](#17-github-actions-workflow-directory)
18. [CI and automated tests](#18-ci-and-automated-tests)
19. [Maintainer scripts](#19-maintainer-scripts)
20. [Adding or updating catalog items](#20-adding-or-updating-catalog-items)
21. [Images and thumbnails](#21-images-and-thumbnails)
22. [Asset hosting and repository-size budget](#22-asset-hosting-and-repository-size-budget)
23. [Forks, subpaths, and URL safety](#23-forks-subpaths-and-url-safety)
24. [Security, privacy, and legal review](#24-security-privacy-and-legal-review)
25. [Versioning and release operations](#25-versioning-and-release-operations)
26. [Contribution and pull-request workflow](#26-contribution-and-pull-request-workflow)
27. [Common change recipes](#27-common-change-recipes)
28. [Troubleshooting](#28-troubleshooting)
29. [Glossary](#29-glossary)
30. [Pre-merge checklist](#30-pre-merge-checklist)

---

## 1. Project at a glance

Dragon Gaming Platforms (DGP) is a static browser-gaming portal and utility hub. The main page assembles a catalog of browser games, emulators, browser frontends, and tools into a filterable UI. Game content may be local to this repository or hosted in the companion asset repository.

### Architectural principles

- **Static delivery:** the main site is HTML, CSS, JavaScript, and static game assets. It has no application server, database service, package build, or server-side runtime.
- **Progressive enhancement:** `index.html` plus `games.js` are the core application. `site-enhancements.js` and `site-enhancements.css` add main-site-only sharing, recent-game history, accessibility, PWA, and connection improvements.
- **Fork-aware paths:** project Pages sites live below a repository path. Use relative URLs or resolve paths against the current page/worker scope; do not assume the site is hosted at `/`.
- **Offline support is opt-in by platform:** the main page registers `sw.js` only where secure service workers are available. Offline caching is bounded and is not a promise that every game works offline.
- **Legal and attributed content:** add only content that can lawfully be redistributed. Preserve and update attributions rather than removing or weakening them.
- **The main page is the normal development target:** standalone exports and CDN variants are separate distribution artifacts, not automatic mirrors of every main-site change.

### Current catalog snapshot

The main `GAMES_DATA` catalog currently contains **744 entries**: **734 games, 7 emulators, and 3 tools/other entries**. The total and displayed counts change as the catalog changes. `scripts/tests/site.test.cjs` checks ID uniqueness and verifies the main navigation count against the catalog; it also checks that the hero's approximate count does not exceed the catalog total.

---

## 2. First five minutes

### Requirements

- A modern browser for manual testing.
- Node.js 22 or newer for syntax checks and the built-in test runner.
- Python 3 for optional catalog/helper scripts and a local static server.
- No repository-level `npm install` is needed. CI installs its pinned `jsdom` test dependency into the runner's temporary directory; the dependency is not part of the deployed app.

### Run locally

```bash
# From the repository root
node --check games.js
node --check site-enhancements.js
node --check sw.js
node --check scripts/tests/site.test.cjs
node --test scripts/tests/site.test.cjs
python3 -m http.server 8080 --bind 0.0.0.0
```

Open `http://localhost:8080/` in a browser. A local HTTP server is preferable to `file://`: it gives the app normal relative URL, fetch, and service-worker conditions (service workers still require HTTPS or localhost).

The browser integration test uses `jsdom`. To run the full suite locally without adding dependencies to the repository:

```bash
npm install --prefix /tmp/dgp-test-deps --no-save --no-audit --no-fund jsdom@26.1.0
NODE_PATH=/tmp/dgp-test-deps/node_modules node --test scripts/tests/site.test.cjs
```

Temporary test dependencies and scratch artifacts belong outside the repository (for example, `/tmp`). Do not commit generated dry-run output or temporary test files.

---

## 3. Repository map

| Path | Responsibility | Notes |
|---|---|---|
| `index.html` | Main application shell, page structure, manifest links, and worker registration/reset bootstrap | Main site entry point. Keep all paths fork-relative. |
| `games.js` | Main-site catalog (`GAMES_DATA`) and application engine | Canonical catalog/search/filter implementation for the main page. |
| `styles.css` | Main theme and component styles | Keep layout responsive; most visual rules live here. |
| `site-enhancements.js` | Main-only search/game sharing, recent-games shelf, accessible modal handling, PWA UI, connection and update notices | Not loaded by standalone documents. |
| `site-enhancements.css` | Main-only enhancement styles | Includes recent-game and paginated-search controls. |
| `manifest.webmanifest` | Install metadata, icons, start URL, and app shortcuts | All manifest paths must work below a project/fork subpath. |
| `pwa/` | PNG install icons and editable SVG source | Keep icon dimensions and manifest declarations in sync. |
| `sw.js` | Scoped shell/runtime service worker | Main page registers it; never allow automatic takeover of an active game. |
| `404.html` | Custom Pages not-found page and reset/recovery link | Self-contained so it can render even when the shell is unavailable. |
| `cdn.games.js` | CDN-oriented catalog build | Separate artifact; do not edit in main-only work unless explicitly asked. |
| `singlefile.html` | Bundled portable build | Protected distribution snapshot; do not edit or regenerate unless explicitly requested. |
| `cdn.singlefile.html` | Standalone player that loads a CDN catalog | Separate published artifact; keep untouched unless asked. |
| `secure-singlefile.html` | Separate secure/proxy browser single-file build | Protected artifact; keep untouched unless asked. |
| `games/` | Local game projects and entrypoints | Some entries are standalone HTML; others need nested assets. |
| `emulators/` | Emulator frontends and supporting files | Do not commit copyrighted ROM images. |
| `browsers/` | Browser/proxy frontends such as GUST and Scramjet | Proxy code has special service-worker and origin behavior. |
| `other/` | Tools and utilities, including CyberChef | Often ships nested docs and supporting files. |
| `thumbs/` | Repository-hosted catalog thumbnails | Published by Pages; keep images small and licensed. |
| `assets/` | Shared DGP branding and site assets | Includes the main logo. |
| `scripts/` | Maintainer scripts and tests | Removed from the Pages artifact by deploy workflows. |
| `scripts/tests/site.test.cjs` | Node built-in test suite plus optional jsdom integration | The CI workflow provides `jsdom`. |
| `.github/workflows/` | Pages deployment, CI, and manual catalog/fork utilities | Review permissions and file side effects before dispatching workflows. |
| `README.md` | Public project overview and user-facing setup | Keep it concise; link to this handbook for engineering details. |
| `CREDITS.md`, `THIRD_PARTY.md` | Attribution and third-party code/reference inventory | Add required attribution when adding external projects or art. |
| `LICENSE` | Repository license | Do not assume this license overrides upstream licenses. |

The repository intentionally contains large game trees and vendored assets. Do not copy the repository into another checkout or add build output merely to test a change.

---

## 4. Source-of-truth and protected snapshots

### Main-site source of truth

- `games.js` is the main page's catalog and browser engine.
- `index.html` is the main page shell; `styles.css` styles it.
- `site-enhancements.js` and `site-enhancements.css` are main-site-only. Keep portable documents independent unless the task explicitly includes them.

### Separate release snapshots

`cdn.games.js`, `singlefile.html`, `cdn.singlefile.html`, and `secure-singlefile.html` are separate release artifacts. They may contain a different catalog, version, or embedded engine snapshot. For main-site-only improvements, **leave those files alone**; sync them only when their changes are explicitly requested. A catalog change in the main site does not silently authorize editing every alternate distribution.

Some manual automations intentionally write to more than one snapshot. Read the workflow's file list and side effects before dispatching it. In particular, the version, asset-catalog, thumbnail, and fork-repoint workflows can touch protected variants on their target branch. Do not dispatch those workflows unless the task calls for those side effects.

### Preserve approved references and assets

When editing HTML/CSS/JS, do not remove existing approved references to Google Analytics (`gtag`), Google Fonts, jsDelivr, proxy/search destinations, or catalog art (including an apparently orphaned thumbnail) just because they appear unused. Confirm actual usage and ask for authorization before deleting approved references. Do not migrate games or assets to another repository unless explicitly requested.

---

## 5. Catalog contract

`games.js` starts with a JSON-compatible `const GAMES_DATA = [...]` literal followed by the engine. The current parser/test suite relies on that shape. Keep the data literal valid JSON: double-quoted keys/strings, valid commas, no comments embedded inside the literal, and no executable expressions in catalog values.

### Expected entry shape

```json
{
  "id": "unique-game-slug",
  "category": "games",
  "name": "Display Title",
  "tags": ["games", "arcade", "retro"],
  "path": "./games/example/index.html",
  "image": "thumbs/example.jpg",
  "shelf": "Arcade & Action",
  "badge": "HTML5",
  "desc": "One concise sentence describing what the player does.",
  "controls": "WASD: move; Space: jump"
}
```

`image`, `badge`, descriptive detail, and `controls` may be absent where appropriate. Core requirements are a stable unique `id`, display `name`, recognized `category`, nonempty `path`, searchable tags, and a meaningful description when known. Existing catalog records and the engine are the definitive schema.

### Field conventions

- **`id`:** stable, lowercase, unique slug; links use `?play=<id>`. Do not rename an ID casually: saved favorites/recents and shared links depend on it.
- **`category`:** one of `games`, `emulators`, or `other`. UI category counts and sections are derived from this property.
- **`name`:** human-facing title. This is the strongest search field and is used by the viewer and accessibility labels.
- **`tags`:** lowercase-ish search/filter terms. Include relevant genre, platform/technology, and content-type terms. The general catalog tag convention includes `games` on game entries, but use the existing neighboring records as the source of truth.
- **`path`:** relative to the current repository Pages base for local files, e.g. `./games/<slug>/index.html`; absolute URLs are used for approved companion-repository content. Do not start project Pages paths with `/`.
- **`image`:** optional small thumbnail path or approved screenshot URL. Missing thumbnails fall back to the category placeholder.
- **`shelf`:** one of the established browsing groups where practical: `Arcade & Action`, `Puzzle & Logic`, `Strategy & Idle`, `Sports & Racing`, `RPG & Adventure`, `Interactive Stories & Experiments`, `Emulators`, `Web Browsers`, or `Tools & Utilities`.
- **`badge`:** short visible label; keep it concise.
- **`desc`:** concise searchable description. Search is accent-insensitive and indexes this field, but title/tag matches rank higher.
- **`controls`:** short keyboard, touch, or mouse hint. Avoid claiming controls that are not supported by the game.

### Main-site counts

When the main catalog changes, check:

1. The exact Games count in `index.html` navigation.
2. The approximate `N+` copy in the hero and metadata; it must not claim more than the actual total.
3. The filter bar's placeholder if it hard-codes a count in `games.js`.
4. The current count note in this handbook when a substantial catalog change makes it stale.

The CI suite verifies the nav count and that the hero estimate is plausible. `scripts/sync_assets_catalog.py --recount-only` can recount approved catalog count strings, but it writes multiple catalog artifacts; inspect and authorize that scope before running it.

---

## 6. Search and result rendering

Search lives in the `games.js` engine; the main-only script augments the dynamically rendered search field with sharing behavior. The current search flow is designed to avoid rebuilding hundreds of cards for every keystroke.

### Search pipeline

1. At startup, the engine builds an in-memory index for each catalog item. It normalizes title, tags, category, and description once: Unicode decomposition, combining-mark removal, lowercase conversion, and whitespace trimming.
2. The input handler updates the query immediately but uses a **100 ms trailing debounce** before recalculating and rendering results. Clearing the field and changing non-text filters render immediately.
3. Every normalized query word must occur in the combined indexed text. This allows multiword terms to match across title/tags/description.
4. With the default `Featured` sort, matches are ranked: exact title, title prefix, title substring, exact tag, tag prefix/substring, description, category, then cross-field/token matches. Name/description matches remain case-insensitive and accent-insensitive.
5. A search renders at most **36 cards per page**. **Show more results** appends the next page; the live result count reports displayed and total matching items. This is a UI rendering cap, not a limit on what is searchable.
6. One delegated click handler and one delegated keyboard handler are attached to `#catalogRoot`; do not re-add per-card listeners on every render. Favorite/play-count snapshots are read once for a render rather than parsed from localStorage once per card.

### Search maintenance rules

- Preserve working query behavior, category/tag/sort filters, random selection, shared search links, keyboard card activation, favorites, reset controls, and clear-history controls.
- Do not insert raw catalog strings into the DOM. Existing card templates escape user-visible values; new rendering must use `esc()` or `textContent`.
- Keep result counts in the live status element and ensure the "Show more" flow has a visible focus target for keyboard users.
- If changing page size, debounce timing, normalization, or matching semantics, update `scripts/tests/site.test.cjs` and this section.
- If modifying any cached shell file (`games.js`, `site-enhancements.js`, CSS, manifest, or `index.html`) in a way that must reach active clients immediately, bump `CACHE_SCHEMA` in `sw.js` and test the update path.

### Search tests

The jsdom integration verifies that a broad one-character query is debounced, initially renders no more than one page, loads the next page, ranks an exact title (`2048`) first, preserves delegated favorite/reset behavior, and restores `?search=2048` links. The integration also exercises recent history and game routes; it is not a full browser performance lab.

---

## 7. Main-page boot sequence

The main page is rendered in layers:

1. `index.html` creates the navigation, hero, filter/catalog roots, game-viewer overlay, footer, and app controls.
2. It loads `games.js`, whose inline catalog is available before the engine initializes.
3. The engine initializes on DOM readiness, attaches navigation/viewer/settings handlers, renders the filter bar and initial category shelves, and fills download/settings sections.
4. `site-enhancements.js` runs only on the main page, patches dynamic search accessibility, adds search/game share controls, adds the local recent-game shelf, manages dialog focus, install prompts, connection status, and update prompts.
5. The inline worker bootstrap handles `?dgp-reset=1` or registers `./sw.js` on a secure origin.

Keep the `#filterBarRoot`, `#catalogRoot`, `#gameViewer`, footer controls, and script order stable unless their consumers are updated and tested. The filter bar is dynamically replaced when category/tag state changes; main-only enhancements must tolerate that replacement (the MutationObserver re-patches new controls).

### Important engine areas

| Concern | Current implementation location |
|---|---|
| Catalog and search index | Start of `games.js`; `GAMES_DATA`, `normalizeSearchText`, `SEARCH_INDEX` |
| Browser storage keys | `KEY_*` constants near engine state |
| Favorites, recents, play counts | Storage helpers near the beginning of the engine |
| Viewer open/close/restart/popout/fullscreen | `openGame`, `closeGame`, and adjacent viewer functions |
| Filtering/search/cards | `getFilteredGames`, `cardHTML`, `renderFilterBar`, `renderFilteredGrid` |
| Settings/export/import | `settingsHTML`, `attachSettingsHandlers`, save-manager helpers |
| Keyboard shortcuts | `initKeyboardShortcuts` |
| Share/PWA/accessibility/offline notices | `site-enhancements.js` |
| Caching policies | `sw.js` |

Function names are a guide, not a stable public API. Prefer small local changes over rewriting the application engine.

---

## 8. Public URL routes

All query routes are scoped to the current Pages base and preserve the repository subpath.

| URL | Behavior | Owner |
|---|---|---|
| `?play=<catalog-id>` | Opens the matching catalog game on load | Main engine and enhancements |
| `?search=<query>` | Restores a search term in the search bar; the engine filters after its short debounce | Main engine and enhancements |
| `?random=1` | Opens a random item in the `games` category | Main engine/enhancements |
| `?dgp-reset=1` | Unregisters this site's worker, deletes only DGP shell/runtime caches, then removes the parameter and reloads | `index.html` bootstrap and `404.html` link |
| `#filterBarRoot` | Jumps to the browsing/search controls | Main document and PWA Browse shortcut |

Share links use `URL` and `URLSearchParams`; do not hand-concatenate unescaped query values. The game share URL and search share URL intentionally remove stale query/hash state before adding their one supported route parameter.

---

## 9. Main-site enhancements

`site-enhancements.js` must remain safe when optional browser APIs are absent. Its current responsibilities include:

- **Search sharing:** injects a share/copy control into the live search wrap, updates visibility with query text, and creates `?search=` links.
- **Game sharing:** resolves the active viewer item against the canonical catalog and shares/copies `?play=<id>`.
- **Recently played shelf:** stores up to six catalog IDs under `dgp.recent-games.v1`, validates/deduplicates them on read, provides replay links and a clear button, updates across tabs, and avoids storing game URLs. This is separate from the engine's own 12-item Recent category.
- **Accessible game dialog:** applies dialog semantics, makes background siblings inert/hidden, traps focus, and returns focus after close.
- **PWA controls:** surfaces the install prompt only when the browser sends `beforeinstallprompt`; shows the waiting-worker update button only after a new worker is ready.
- **Connection status:** reports online/offline/cache state without claiming that uncached remote games are available offline.
- **Search-bar accessibility:** labels the dynamic input and clear button, announces result counts, and patches replacement controls after filter-bar rerenders.

Do not put required core game functionality in this enhancement file if the standalone/CDN variant needs it. Conversely, do not edit portable documents merely to mirror a main-only enhancement unless that is explicitly requested.

---

## 10. Browser storage and save backups

DGP uses browser-origin storage. Values are local to the site origin/profile, not a shared server account.

| Key | Purpose |
|---|---|
| `dgp_favorites` | Favorite catalog IDs |
| `dgp_recent_played` | Engine's Recent category IDs (up to 12) |
| `dgp_play_counts` | Per-game play counts used by Most Played and card labels |
| `dgp_theme` | Selected color theme |
| `dgp_cloak_preset` | Tab title/favicon preset and optional custom values |
| `dgp_panic_key`, `dgp_panic_url` | User-selected panic shortcut and destination |
| `dgp_eruda_enabled` | Developer-console toggle |
| `dgp_particles_enabled`, `dgp_crt_enabled` | Visual effects preferences |
| `dgp.recent-games.v1` | Main-only recent shelf; a short validated list of IDs |

The Save Manager exports localStorage, sessionStorage, visible cookies, and IndexedDB databases (where browser APIs permit). The backup is a local JSON download named `dragon-saves-YYYY-MM-DD.json`; treat it as potentially sensitive user data. Import restores values to the current origin and may overwrite existing keys. Clear All Data clears localStorage and sessionStorage and reloads; it does not promise to clear third-party iframe storage or every cookie/IndexedDB store.

When adding a storage key, decide whether it belongs in the save export (all localStorage keys are currently enumerated), document version/compatibility if the data shape changes, and make reads resilient to missing/corrupt values. Never upload backups or browser state automatically.

---

## 11. Accessibility and interaction conventions

- Use semantic headings, labels, buttons, links, and meaningful accessible names.
- For dynamic status/count updates, use a polite live region; avoid announcing every character if an update can be coalesced.
- Search uses `/` as a shortcut only when focus is not already in an input/textarea. Escape closes the active game; `F` toggles fullscreen outside form controls; a configurable panic key is a separate user setting.
- Game cards are keyboard operable (`Enter`/`Space`) and use delegated handlers. Favorite buttons must not activate the parent card.
- The viewer is a dialog: background content should not remain keyboard/assistive-technology accessible while it is open. Restore original `inert` and `aria-hidden` state on close.
- Return focus to the initiating control when closing dialogs. If a control's container disappears (for example, a recent shelf becomes empty), move focus to a sensible surviving control.
- Ensure visible focus states on new controls. `:focus-visible` rules are in `site-enhancements.css` and `styles.css`.
- Respect `prefers-reduced-motion`; do not add motion that cannot be reduced.
- Don't use color as the only status signal. Connection state also has descriptive text.
- If a new control is injected after DOM creation, make patching idempotent; do not register duplicate listeners every time a MutationObserver fires.

---

## 12. Styles, themes, and responsive behavior

The visual system is a dark neon/cyberpunk theme with CSS variables and Orbitron/Rajdhani typography. `styles.css` is the primary stylesheet; `site-enhancements.css` should hold new main-only styling.

- Theme selection sets `data-theme` on the root element and persists the selected theme.
- Particles and CRT are optional user toggles; avoid forcing expensive effects on low-power/mobile devices.
- Cards use lazy-loaded images with a placeholder fallback. Preserve stable aspect sizing to prevent layout shifts.
- The viewer toolbar and search controls have narrow-screen styles. Test at phone widths and large desktop widths after layout changes.
- Keep specificity low and use existing variables (`--theme-primary`, `--theme-bright`, `--bg-card`, `--text-primary`, etc.) before adding new hard-coded palette values.
- Any new horizontally scrollable shelf should support keyboard focus and touch scrolling without trapping page scroll.

---

## 13. PWA installation

`manifest.webmanifest` is intentionally fork-relative:

- `id`, `start_url`, and `scope` remain `./`.
- The app uses standalone/minimal-ui display modes and dark app colors.
- The manifest declares **Browse game library** (`./#filterBarRoot`) and **Play a random game** (`./?random=1`) shortcuts.
- Icons are in `pwa/` and use maskable-safe source art. Keep each manifest `src`, type, and declared dimensions in sync with the actual files.
- The footer's Install app button is only shown after a browser provides `beforeinstallprompt`; don't fake the event or show an inert install button on unsupported platforms.

PWA installability requires HTTPS/localhost and valid manifest/icon responses. A successful local JSON parse is not a full installability audit; manually inspect browser DevTools when changing manifest behavior.

---

## 14. Service-worker lifecycle and cache model

`sw.js` is site-scoped to the current repository's Pages subpath. It must not claim `/` at the domain root, intercept cross-origin pages, or modify proxy traffic.

### Shell cache

The shell includes the main app essentials: `index.html`, `styles.css`, `games.js`, `site-enhancements.css`, `site-enhancements.js`, `manifest.webmanifest`, two PWA PNG icons, and `404.html`. Shell cache names combine `CACHE_SCHEMA` and `CURRENT_VER` (currently schema 8 and app version `v2.1.0`; values can change).

- `CURRENT_VER` is the release/version label managed by the manual version workflow.
- `CACHE_SCHEMA` is a cache-policy/shell invalidation counter. Increment it when worker cache behavior changes or when a modified shell file must be fetched immediately by existing installations.
- Activation removes previous `dgp-shell-*` caches but preserves the runtime cache.
- Do not list portable exports or `cdn.games.js` in the shell cache.

### Runtime cache

- Only same-origin GET responses in configured managed prefixes (`games/`, `emulators/`, `other/`, `browsers/`, `thumbs/`, `assets/`) are eligible.
- Range requests, non-GET requests, excluded portable/CDN files, no-store/private responses, and large individual responses are bypassed.
- The runtime cache is bounded by a soft budget of about **150 MiB / 300 resources**, with a **40 MiB** per-resource ceiling and approximate size fallback when response headers do not provide lengths.
- Cached assets are considered fresh for **24 hours**; older entries can be refreshed in the background while the cached response remains a network-failure fallback.
- Caches are same-origin and scope-path checked. Games hosted outside this repository's worker scope are not cached merely because they may share a GitHub Pages hostname.

### Safe updates

A new worker installs and waits; it must not call `skipWaiting()` during normal installation. The footer asks the user before sending `DGP_ACTIVATE_UPDATE`. The worker accepts that message only from the site root or its `index.html`, then `controllerchange` causes the current tab to reload. Preserve this user-controlled lifecycle; a reload can end an active game or lose unsaved progress.

---

## 15. Offline behavior and recovery

- The initial online visit installs the shell. The worker does not pre-download all games.
- A local game/page or asset generally needs to be visited online before its runtime resource is available offline.
- Remote games, cross-origin asset repositories, proxy routes, and game-owned storage are not guaranteed to work offline.
- The footer connection label reports online/offline/cache status; it must not imply that every title is cached.
- `?dgp-reset=1` unregisters only registrations matching this worker URL and deletes only caches with the `dgp-shell-` / `dgp-runtime-` prefixes, then reloads without the query parameter.
- The custom `404.html` must work standalone and point to the correct scoped reset URL for a fork/subpath.

When debugging stale shell content, first inspect the active/waiting worker and caches in DevTools. If a new shell is staged, the user must accept Update ready; if recovery is necessary, use the reset route rather than indiscriminately deleting all browser caches or unregistering unrelated workers.

---

## 16. GitHub Pages deployment

The main deployment is `.github/workflows/static.yml` and targets `main` (plus manual dispatch). A merge into `main` results in a push deployment. The workflow uploads the repository as a Pages artifact after removing non-site files.

### Keep artifact rules aligned

Both `static.yml` and `sync-assets-catalog.yml` contain a removal step. It strips repository plumbing including `scripts`, `.github`, `AGENTS.md`, `README.md`, `.gitignore`, and Git metadata. Keep the removal lists synchronized. `LICENSE`, `CREDITS.md`, `THIRD_PARTY.md`, `.nojekyll`, and normal site content are intentionally published. `cdn.singlefile.html` is currently published.

The deploy workflow ignores changes confined to documented non-site files so it doesn't redeploy for docs/workflow-only pushes. If a new root-level maintenance file is added, update both workflow removal lists and path filters where appropriate.

### Deployment safety

- Static deployment has write permission only for Pages/id-token needs plus read-only source checkout.
- The deploy concurrency group is `pages`, shared with workflows that deploy to prevent racing artifacts.
- `GITHUB_TOKEN` pushes don't automatically trigger another workflow. Workflows that commit and also need deployment perform their own deploy steps.
- Don't add a site build step that copies large test tools, `.git`, or temporary dependencies into the Pages artifact.
- Before adding large files, measure the actual published tree and leave clear headroom below the hard Pages size limit.

---

## 17. GitHub Actions workflow directory

Read the full workflow before dispatching it. A workflow may push commits, update tags, deploy Pages, or touch protected snapshots.

| Workflow | Trigger | Purpose and side effects |
|---|---|---|
| `static.yml` — Deploy Dragon Gaming Platforms | Push to `main` (with `paths-ignore`) or manual | Packages the static site and deploys GitHub Pages. |
| `ci.yml` — Site CI | Pushes to branches and PRs touching relevant code/docs; manual | Sparse-checks the files needed, installs temporary `jsdom`, runs syntax and site integration tests. Read-only token. |
| `sync-assets-catalog.yml` | Manual only | Scans the public Dragon-Gaming-Assets repository and can add catalog entries/recount strings; includes dry-run/recount/deploy controls and writes multiple catalog snapshots. Don't dispatch without explicit scope approval. |
| `sync-thumbnails.yml` | Nightly schedule and manual | Reads the public Thumbnail-Assets repository and can update image references in multiple catalog snapshots; `force_refresh` and `dry_run` inputs control behavior. Inspect before dispatch if portable files must remain unchanged. |
| `UpdateVersion.yml` | Manual only | Validates a semantic version, updates `CURRENT_VER` in `games.js`, `singlefile.html`, and `sw.js` on `main`, commits, tags, and may deploy. This workflow deliberately writes a protected single-file snapshot. |
| `RepointForkUrls.yml` | Manual only; explicit opt-in gate defaults false | Rewrites exact origin Pages base URLs in four target files for a fork; details below. It does not open a PR. |

### RepointForkUrls safety contract

- It is **dispatch-only**. The boolean **“Are You SURE this workflow should run?”** defaults to false; false skips all work.
- It rewrites only the exact HTTP/HTTPS origin base `dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/` to the computed fork Pages target. It does not rewrite unrelated hosts or arbitrary URL text.
- It targets exactly `index.html`, `singlefile.html`, `secure-singlefile.html`, and `cdn.games.js` (per current workflow implementation).
- The workflow asserts that Dragon-Gaming-Assets URL counts are unchanged. Never modify that safety check or broaden the replacement to the asset repository.
- Its configured target scheme is currently HTTP; review the workflow and Pages/custom-domain requirements before changing that policy.
- It detects the origin repository and no-op cases. Domain/root overrides are optional and should be used only when the fork's Pages configuration requires them.
- It commits/pushes in its workflow context and does not create a PR. Do not use it as a substitute for regular development or to repoint the origin repository itself.

---

## 18. CI and automated tests

`/.github/workflows/ci.yml` runs on matching pushes, pull requests, and `workflow_dispatch`. It uses Node 22, actions/checkout and setup-node, and installs `jsdom@26.1.0` under `$RUNNER_TEMP` rather than adding project package files. Sparse checkout includes root files, `pwa/`, and `scripts/`; it deliberately excludes the hundreds of megabytes under game directories.

### Current test coverage

`node --test scripts/tests/site.test.cjs` verifies:

1. The main catalog can be parsed, IDs are nonempty and unique, required fields/categories/URLs are valid, and the navigation count matches.
2. The PWA manifest is valid, fork-relative, and references icons that exist.
3. The worker declares a positive cache schema, precaches required shell resources, and excludes portable/CDN snapshots.
4. `index.html` references its main CSS, catalog engine, enhancement CSS/JS, and manifest.
5. jsdom browser flows: recent history validation/deduplication/clear, debounced one-character search, 36-result pagination, ranking, delegated favorites/reset actions, `?search=`, `?play=`, and `?random=1`.

The browser flow test skips if jsdom is unavailable when run locally. CI always installs its pinned test dependency, so it should not skip there. Tests are not a substitute for checking in a real browser on mobile/desktop or verifying actual game-host availability.

### When changing CI

- Keep workflow permissions minimal; the CI workflow needs only `contents: read`.
- Keep npm dependencies in runner temp unless the project intentionally adopts a package manifest.
- Keep `paths` filters aligned in both push and pull-request triggers. Add `AGENTS.md`/`README.md` if a docs-only PR should require validation.
- Ensure sparse checkout still includes every file read by tests. Do not include bulky `games/`, `emulators/`, or `other/` directories without a concrete requirement.
- CI should test behavior, not write back or deploy. Deployment stays separate.

---

## 19. Maintainer scripts

| Script | Purpose | Use notes |
|---|---|---|
| `scripts/sync_assets_catalog.py` | Add missing games from a checked-out companion assets `games/` directory; optional `game.json` metadata and recount mode | Supports `--dry-run` and `--recount-only`; a real run can write `games.js`, `cdn.games.js`, `singlefile.html`, and count strings. Review outputs and exact file scope before use. |
| `scripts/add_10_games.py` | Hard-coded sample catalog authoring script | It rewrites `games.js`, `cdn.games.js`, and `singlefile.html`, then sorts the catalog. The sample list/fields may be stale; do not run it during main-site-only work or when portable snapshots are protected. Review every output first. |
| `scripts/tests/site.test.cjs` | Automated static and jsdom tests | Run with Node; jsdom is supplied by CI or a temporary local install. |

Do not add test-generated files or dry-run reports under the repository root. Use `/tmp` or runner temporary storage. Do not place downloaded third-party source or credentials in a test fixture.

---

## 20. Adding or updating catalog items

A safe main-catalog contribution normally follows this sequence:

1. Confirm the title is legal to redistribute and identify the upstream project, license, author, and source URL.
2. Decide whether the game is already hosted locally or belongs in an already authorized external repository. **Do not migrate files to another repository unless explicitly asked.**
3. If local, use an appropriate `games/<slug>/` or `emulators/<slug>/` structure with a working `index.html` entrypoint; preserve vendor licenses and nested docs needed by the project.
4. Add a unique ID and accurate metadata to `games.js`. Keep paths relative for local files and use only approved absolute URLs for external assets.
5. Add attribution to `CREDITS.md` and update any needed notes in `THIRD_PARTY.md`.
6. Update the main site counts and confirm image paths; don't silently modify `cdn.games.js` or portable exports as part of main-only work.
7. Run JavaScript syntax checks, the test suite, a local HTTP smoke test, and the site-size check.
8. Review the full diff for licenses, unexpected binaries, generated content, root-path assumptions, and protected files before opening a PR.

Do not add ROM files, copyrighted commercial games, nested `.git` repositories, accidental `.env` files, or large build caches. User-owned ROMs may be loaded by supported emulators in the browser; the repository must not distribute them.

---

## 21. Images and thumbnails

Catalog images are optional. Prefer small art with permission to display; do not hotlink private or ephemeral URLs.

- Local repository thumbnails live in `thumbs/` and use relative references such as `thumbs/<id>.jpg`.
- The image is lazy-loaded and decoded asynchronously; an error removes the failed image so the card placeholder is visible.
- The CSS card image region has a fixed visual height; keep assets reasonably close to the current wide card ratio to avoid unexpected crop/shift.
- Companion asset-repository game screenshots use an absolute URL to the asset repository when the game owns that screenshot.
- The separate Thumbnail-Assets workflow can repoint entries to another repository. It may affect multiple snapshots; do not dispatch it when those snapshots must remain untouched.
- Existing approved/orphan-looking thumbnails are not automatically deletable. Check catalog references, external workflows, and task authorization first.

The asset host has its own Pages limit; the main repository still must remain under its own 1 GB site budget.

---

## 22. Asset hosting and repository-size budget

The companion `Dragon-Gaming-Assets` repository is a separate GitHub Pages project. Some catalog entries use absolute URLs to its `games/<slug>/` tree. This is hosting, not permission to migrate a title or delete its source from this repository. Migration requires explicit approval and a separate size/ownership/release plan.

- GitHub blocks ordinary files above 100 MB and Pages does not serve Git LFS pointers. Do not use Git LFS for site content.
- Keep the published Pages tree under **1,000 MB** and leave headroom for future additions. Current repository tree size is roughly **935 MB**; it is close enough to the ceiling that large imports require explicit size measurement.
- Include actual binary assets in the measurement; `git diff --stat` alone is not a size check.
- The deployment artifact removes `.git`, `.github`, `scripts`, and selected root docs, but most game folders and static files are published.
- Avoid duplicate game bundles, generated archives, package-manager directories, build output, screenshots of unnecessary size, and test dependencies in the Pages tree.
- Before adding a large title, check whether it is already in the repo or companion asset host and inspect the complete uncompressed size, not just compressed download size.

Recommended size command from the repository root:

```bash
du -sh --exclude=.git .
```

For a precise artifact audit, use the same file-removal list as the deploy workflows, then measure the resulting staging tree without committing it to the repository. Keep any staging/dry-run output in a temporary directory.

---

## 23. Forks, subpaths, and URL safety

Project Pages uses a path such as `https://<owner>.github.io/Dragon-Gaming-Platforms/`. User/org Pages may be at the domain root. Forks may have a different owner, repository casing, custom domain, or root path.

- Use relative asset references such as `./styles.css`, `./pwa/...`, and `new URL('./sw.js', location.href)`.
- The manifest uses `./` scope/start URL and shortcuts; keep them that way unless a subpath-aware alternative is tested.
- The worker derives `SITE_ROOT` from `self.registration.scope`; do not replace it with a hard-coded root path.
- The custom 404 page must determine the repository base rather than linking to `/`.
- Avoid assumptions that `location.pathname` begins with a particular account name or that origin root is the project root.
- Proxy destinations, search provider URLs, and approved third-party embeds are separate from site asset paths. Don't rewrite them during relative-path cleanup.
- `RepointForkUrls.yml` is a deliberately narrow migration tool; its guardrails are documented in section 17.

Test any path changes at a non-root URL (for example, a local server mounted below `/Dragon-Gaming-Platforms/` or a GitHub Pages preview) when practical.

---

## 24. Security, privacy, and legal review

### User data

- Favorites, settings, recents, and game saves are client-side. Never transmit them to a new service without an explicit product/privacy decision.
- A Save Manager export includes broad origin storage and may contain third-party game data. Keep backups local and warn before destructive import/clear operations.
- Avoid logging user-entered panic URLs, search text, or save contents to analytics/console without a justified reason.

### Content and licensing

- Never add pirated content, commercial ROMs, or unauthorized proprietary game copies.
- Record upstream project, author, URL, and license in `CREDITS.md` and/or `THIRD_PARTY.md` as required.
- Preserve upstream license files/notices bundled with vendored games.
- Do not assume a repository-wide MIT license overrides the license of a vendored component.

### Script and workflow safety

- Treat catalog strings and metadata as untrusted input. Escape HTML or set DOM `textContent`; do not use `eval` or string-built executable code.
- Do not check in GitHub tokens, passwords, cookies, private keys, or downloaded user backups.
- Use the minimum GitHub Actions permissions. Workflows that commit/deploy need explicit permissions and a reviewable file list.
- Don't broaden URL replacement patterns or service-worker interception to proxy/third-party origins.
- For user-controlled destructive actions, explain consequences and require confirmation when appropriate.

---

## 25. Versioning and release operations

The main engine and service worker each expose a `CURRENT_VER` constant used for the version UI/cache name. `UpdateVersion.yml` is the official manual version-bump automation; it validates `MAJOR.MINOR.PATCH`, checks expected declarations, commits the changes to **main**, creates a tag, and may deploy Pages.

- The workflow currently updates `games.js`, `singlefile.html`, and `sw.js`. It intentionally does not edit `cdn.games.js`.
- Because it writes to main and a portable file, do not dispatch it as part of routine feature work unless the task explicitly includes a release/version update.
- A shell asset change may require a `CACHE_SCHEMA` bump even if the app release version is unchanged.
- A service-worker cache-schema bump is not a semantic application release and must not be used to bypass the user-confirmed update prompt.
- Confirm the worker's `CURRENT_VER` and `CACHE_SCHEMA` match the intended release approach; don't make generated version edits to protected files manually.

After a real release, verify the GitHub Actions tag/run, Pages deployment, current app version display, and update prompt from a browser. Never claim a deployment succeeded only because a commit was pushed.

---

## 26. Contribution and pull-request workflow

1. Work on the assigned task branch; do not rename the Arena-managed branch or push work to an unrelated branch.
2. Keep a scoped diff. Check `git status`, `git diff --check`, and protected-path changes before staging.
3. Run the CI suite locally when dependencies are available. If jsdom is absent, report that clearly rather than treating the skipped integration test as a pass.
4. Stage explicit file paths, especially when a task forbids edits to portable files or large assets.
5. Push the task branch and open a PR from that branch into `main` when the task or maintainer requests one; there is no blanket prohibition on opening PRs. A PR must summarize behavior, scope, tests, and any intentionally excluded distributions.
6. Wait for required CI/review checks. Merge only when explicitly requested or otherwise authorized, and never merge a failing or still-running PR. Use a deliberate merge method and an explicit PR number; do not enable automatic merging.
7. After merge, verify the PR state and the main deployment workflow separately. Leave the session branch status and final commit clear to the user.

For Arena tasks, `git` is used for local status/diff/commit/push, and `gh` is used for PRs, issues, checks, and releases. Never ask a user to provide GitHub credentials in chat; request reconnection through the platform if authentication fails.

---

## 27. Common change recipes

### Add a main-page UI control

1. Add markup in `index.html` only if it is structural; otherwise inject it from `site-enhancements.js` when the control belongs only to the main site.
2. Add a label, keyboard support, and visible focus style.
3. If the container is dynamically rebuilt, attach idempotently or use event delegation/MutationObserver.
4. Add responsive styles to `site-enhancements.css` for main-only controls or `styles.css` for core UI.
5. Verify the service-worker shell includes changed files; bump schema if existing installs need an immediate fresh shell.

### Change search behavior

1. Update the precomputed index, ranking/filter logic, debounce, or result page size in `games.js`.
2. Preserve category/tag/sort interactions, link restoration, favorites, load-more focus, and reset behavior.
3. Update the jsdom test for broad one-character queries and exact title ranking.
4. Test `?search=` and a normal typed query; check the live count and the page limit.

### Change a worker shell/runtime policy

1. Preserve the relative `SITE_ROOT` and excluded files.
2. Test both install/precache and the explicit update message validation.
3. Review the cache size/age limits and activation cleanup; don't evict runtime game content without a reason.
4. Bump `CACHE_SCHEMA` when shell contents or cache behavior must invalidate existing workers.
5. Keep the user confirmation and reload warning.

### Change a workflow

1. Read all triggers, permissions, checkout refs, writes, commit/push, tags, and deploy steps.
2. Prefer `workflow_dispatch` for operations that change catalogs, URLs, versions, or snapshots.
3. Add test/quality jobs as separate read-only workflows; do not make a test workflow deploy.
4. Keep Pages deploy artifact removal lists synchronized if root maintenance files change.
5. Validate YAML and manually inspect Actions run logs after pushing.

---

## 28. Troubleshooting

| Symptom | Likely cause | Checks / recovery |
|---|---|---|
| CSS/images fail only on a fork | Root-relative or origin-hardcoded asset path | Inspect `href`/`src`, resolve against the page base, and test a project subpath. |
| PWA won't install | Insecure origin, invalid manifest, missing icon, or install criteria not met | Check DevTools Application/Manifest and Network; install button only appears after `beforeinstallprompt`. |
| Worker reports waiting update | New shell is staged by design | Review the page before clicking Update ready; active games may reload. Use `?dgp-reset=1` only for recovery. |
| Old search shell persists after deploy | Existing cache is still active or worker update has not been accepted | Check registered/waiting worker and schema/version; don't delete all origin caches. |
| One-character search looks incomplete | Search result pagination is active | Read the count and use Show more results; 36 is the initial render page size. |
| Search returns no results unexpectedly | Category/tag filter, all-terms matching, or typo/spacing issue | Reset category/tag filters; check normalized indexed fields and query integration test. |
| Game card opens wrong/missing content | Duplicate/stale ID, malformed catalog path, inaccessible remote host | Check unique ID, path base, target entrypoint and console/network errors. |
| Thumbnail is blank | Missing/404 image or blocked remote screenshot | Check `image` URL/permissions; placeholder fallback is expected. |
| CI does not run on a docs PR | Workflow path filter excludes the changed path | Add the path if docs changes should require validation; otherwise run `workflow_dispatch`. |
| Pages artifact exceeds budget | Large vendored assets, duplicate build output, or stale data | Measure the published tree; remove only explicitly authorized redundant content and preserve attribution. |
| Save data disappears after import/clear | User action changed browser-local storage | Import a prior JSON backup if available; no server-side recovery exists. |
| Repoint workflow reports skipped | Opt-in gate false, origin repo, no matching source base, or already repointed | Read job summary. Do not broaden patterns to force a match; never alter Assets URLs. |

---

## 29. Glossary

- **Main site:** `index.html` plus `games.js`, `styles.css`, and main-only enhancement files.
- **Catalog:** `GAMES_DATA` in `games.js` (canonical for this main-site scope).
- **Portable snapshot:** a separate standalone/CDN distribution such as `singlefile.html`; not automatically synchronized by main-only changes.
- **Shell cache:** the small set of app files installed by `sw.js` for offline site navigation.
- **Runtime cache:** bounded same-origin game/page assets retained after use.
- **Pages base:** current repository path below the GitHub Pages origin; not always `/`.
- **Asset repository:** approved companion repo hosting some game files on a distinct Pages path; it is not this repo's service-worker scope.
- **DGP ID:** stable catalog `id` used by favorites, recents, and share links.
- **Recount:** recalculating literal UI counts after a catalog change; count automation may write multiple snapshots.

---

## 30. Pre-merge checklist

- [ ] Change is within the requested scope and does not migrate assets without authorization.
- [ ] `games.js` catalog IDs remain unique and displayed main-page counts are accurate.
- [ ] `cdn.games.js` and all portable files are unchanged unless explicitly requested.
- [ ] No approved third-party references or licensed thumbnails were removed casually.
- [ ] Paths work at a repository subpath; no accidental domain-root URLs were introduced.
- [ ] Search/filter, share routes, keyboard/focus behavior, and recent-game controls remain functional when applicable.
- [ ] `node --check games.js && node --check site-enhancements.js && node --check sw.js` passes for app changes.
- [ ] `node --test scripts/tests/site.test.cjs` passes; CI did not skip its jsdom integration.
- [ ] `git diff --check` passes and the diff contains no temp files, secrets, nested `.git`, or build caches.
- [ ] Published site size remains under **1,000 MB** with headroom.
- [ ] Worker cache schema/update behavior has been reviewed when shell assets change.
- [ ] Workflow changes were reviewed for permissions, triggers, protected-file writes, and deployment side effects.
- [ ] PR uses the assigned branch, required checks pass, and merge/deployment status is reported accurately.
