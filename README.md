# <div align="center">Dragon Gaming Platforms</div>

<div align="center">
  <img src="https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/assets/dragon-login.png" height="425" />

[![Deploy Dragon Gaming Platforms](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/actions/workflows/static.yml/badge.svg?branch=main)](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/actions/workflows/static.yml)
[![Site CI](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/actions/workflows/ci.yml/badge.svg?branch=main)](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/actions/workflows/ci.yml)
[![Sync Assets-Repo Games to Catalog](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/actions/workflows/sync-assets-catalog.yml/badge.svg)](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/actions/workflows/sync-assets-catalog.yml)
[![Sync Thumbnails to Catalog](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/actions/workflows/sync-thumbnails.yml/badge.svg)](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/actions/workflows/sync-thumbnails.yml)
</div>

## Introduction

[*Dragon Gaming Platforms*](https://Dragon-Gaming-Platforms.github.io/Dragon-Gaming-Platforms) is a website to play web games, run emulators and securely browse the web. It is completely static HTML5 so it can be hosted practically anywhere. 

visit the live demo [Here](https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms)

It is recommended that you [Fork](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/fork) this repo for a more stable experience with GitHub Pages
## Features

1. A singlefile version at [singlefile.html](./singlefile.html)
2. Tab cloaking
3. Eruda Developer Consle
4. Export and import buttons for local storage
5. A whole host of games!
6. Easy GitHub Pages deployment through [static.yml](./.github/workflows/static.yml) after [forking.](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Platforms/fork)
7. Optional offline support for the main site through a scope-limited service worker
8. Shareable game/search links and a recently played shelf
9. Keyboard/screen-reader improvements and a live connection indicator
10. Installable progressive web app (where supported by the browser)
11. A custom, fork-aware GitHub Pages 404 page
12. Additional game hosting at [Dragon Gaming Platforms Assets](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Assets)
13. Thumbnail hosting at [Dragon Gaming Platforms Thumbnail Assets repository](https://github.com/Dragon-Gaming-Platforms/Thumbnail-Assets/)
14. Automated catalog, manifest, service-worker, and browser-flow checks in [Site CI](./.github/workflows/ci.yml)
## Offline access

The main site (`index.html`) registers a service worker on HTTPS/localhost. After the first online visit it keeps the site shell available, then caches local game pages and assets as you use them (soft budget: about 150 MB / 300 resources, refreshed in the background after 24 hours). Visit a game online at least once before expecting it to work offline. Cross-origin games and proxy traffic are not cached. The `singlefile.html`, `cdn.singlefile.html`, and `secure-singlefile.html` distributions are unchanged and do not depend on the worker. To unregister the worker and clear its caches, open the site with `?dgp-reset=1` appended to the URL; the 404 page also provides a reset link.

Open a game and choose **Share** for a direct link; links use `?play=<game-id>` and launch the selected catalog entry automatically. Search queries can be shared with `?search=<query>`, and the installed app offers **Browse** and **Random game** home-screen shortcuts. The main site also keeps up to six recently played game IDs in this browser's local storage; use **Clear history** on the shelf to remove them. On browsers that support installation, the footer reveals an **Install app** button when the browser is ready to offer it. The main site also provides a keyboard skip link, announces search-result changes to screen readers, keeps focus inside the game viewer, and honors reduced-motion preferences.

## Service-worker update lifecycle

The browser checks `sw.js` when the page registers the worker and periodically afterward. The main page also calls the browser's update check when a hidden tab becomes visible or regains focus, with a 10-minute cooldown. A changed worker installs beside the active one and waits rather than taking over an open game session. The footer then shows **Update ready**; confirming it sends the waiting worker an activation message and reloads this tab after control changes. If you do nothing, the old worker keeps serving the current session.

The precached shell is keyed by both `CURRENT_VER` and `CACHE_SCHEMA`; the version workflow updates the former, while maintainers increment the latter when worker cache behavior or the shell list changes, or when a changed shell asset needs an immediate fresh cache. Activation removes old shell caches. The separate runtime cache survives releases: a visited game asset is considered fresh for 24 hours; its next use after that triggers a background refresh while the cached copy remains usable offline if the network fails. The 150 MB/300-entry limits are soft estimates. `?dgp-reset=1` removes this worker and its caches if recovery is needed.

[__Credits__](./CREDITS.md)
