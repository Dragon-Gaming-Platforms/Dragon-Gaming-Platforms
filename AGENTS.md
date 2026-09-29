# AGENTS.md — AI Agent & Contributor Technical Guide

Welcome to the **Dragon Gaming Platforms** codebase. This document is an extensive reference and operational standard for AI coding agents and human developers maintaining, expanding, and optimizing this repository.

---

## 1. Project Overview & Design Philosophy

**Dragon Gaming Platforms** is a lightweight, responsive, and completely static web gaming platform and utility hub. It hosts a verified catalog of web games, WebAssembly emulators, web proxies, and tools.

### Core Architectural Principles:
1. **100% Static & Serverless:** The platform operates entirely on static HTML5, CSS3, WebAssembly, and vanilla JavaScript. It requires no dynamic backend server, Node runtime, or database.
2. **Universal Portability:** Works out-of-the-box on **GitHub Pages**, Cloudflare Pages, Vercel, static Nginx/Apache servers, or directly from local file storage via `python3 -m http.server`.
3. **Single-File Distribution:** Supports standalone single-file distribution (`singlefile.html` / `secure-singlefile.html`) for offline play and restricted network environments.
4. **Legality & Open-Source First:** Only strictly legal, permissively licensed open-source (MIT, BSD, Apache-2.0, GPL, CC-BY-SA) or authorized freeware software is included. **Zero pirated ROMs or proprietary rips are permitted.**
5. **Offline Reliability:** Game assets, wasm engines, audio, and styles must be vendored locally with relative paths to prevent external CDN 404s and network failures.

---

## 2. Directory Structure & Key Files

```
Dragon-Gaming-Platforms/
├── index.html                  # Main web portal entry point (Navbar, Hero, Game Viewer, Shelves)
├── games.js                    # Core client database (GAMES_DATA), search, filtering, and engine logic
├── cdn.games.js                # CDN edition of database using absolute base URLs
├── styles.css                  # Dark sci-fi theme stylesheet (Orbitron & Rajdhani fonts)
├── singlefile.html             # Fully bundled standalone single-file version of the entire platform
├── secure-singlefile.html      # Secure, self-contained single-file build of the GUST proxy browser
├── CREDITS.md                  # Comprehensive upstream open-source attributions and licenses
├── THIRD_PARTY.md              # Scope documentation detailing third-party vs original project code
├── AGENTS.md                   # This specification guide for AI agents and maintainers
├── LICENSE                     # MIT License for platform source code
├── README.md                   # Project intro and live-demo links
├── assets/                     # Shared site assets (e.g. dragon-login.png logo)
├── icons/                      # Icon assets (currently placeholder only)
├── scripts/                    # Maintainer helper scripts (e.g. add_10_games.py catalog authoring)
│
├── games/                      # Directory containing all standalone & multi-file games (~116 folders)
│   ├── drive-mad/              # Standalone offline WASM release of Drive Mad
│   ├── q1k3/                   # 3D Quake engine in 13KB WebGL (MIT)
│   ├── underrun/               # Twin-stick top-down shooter in 13KB WebGL (MIT)
│   ├── dante/                  # JS13k 1st place winner 3D adventure (MIT)
│   ├── space-cadet-pinball/    # 3D Pinball for Windows decompiled WebAssembly port (MIT)
│   ├── micropolisjs/           # Open-source SimCity engine port (GPL-3.0)
│   ├── 0hh1/ & 0hn0/           # Binary and deduction logic puzzle games by Q42 (MIT)
│   ├── 2048/                   # Sliding number merge puzzle (MIT)
│   ├── singlefiles/            # Self-contained single-file HTML games (Eaglercraft, Balatro, etc.)
│   └── ...                     # 240+ additional cataloged open-source games
│
├── emulators/                  # WebAssembly & in-browser retro console emulators
│   ├── infinitemac.html        # Classic Macintosh emulator (System 1.0 - Mac OS 9.2.2) via WASM
│   ├── anuraOS.html            # Web desktop OS emulator container
│   ├── Emulatorjs/             # Universal multi-system emulator (NES, SNES, GBA, N64, Genesis, PS1)
│   ├── binjgb/                 # Game Boy / Game Boy Color emulator (WASM)
│   ├── iodinegba/              # Game Boy Advance emulator (JS)
│   ├── puzzlescript/           # PuzzleScript game creation suite / player
│   └── v86/                    # x86 PC virtual machine in the browser (WASM)
│
├── browsers/                   # Web proxy frontend portals
│   ├── GUST.html               # GUST unblocked browser portal
│   ├── Scramjet.html           # WebAssembly-powered proxy interface
│   └── gust/                   # GUST browser supporting assets
│
└── other/                      # Utilities & developer security tools
    └── CyberChef/              # The Cyber Swiss Army Knife for encryption, encoding, and analysis
```

> **Catalog totals:** the `GAMES_DATA` catalog currently holds **346 items** (336 `games`, 7 `emulators`, 3 `other`). Keep the counts shown in `index.html`/`singlefile.html` (navbar, hero, meta description) in step with reality when the catalog changes.

> **Asset hosting:** large or heavy games may live in the companion repository [Dragon-Gaming-Platforms/Dragon-Gaming-Assets](https://github.com/Dragon-Gaming-Platforms/Dragon-Gaming-Assets) instead of this repository. It is served by GitHub Pages from the **same origin** at `https://dragon-gaming-platforms.github.io/Dragon-Gaming-Assets/`, has its own independent 1 GB Pages budget, and no 20 MB-per-file cap (GitHub allows up to 100 MB per file; never use Git LFS — Pages does not serve LFS files). Catalog entries for games hosted there use **absolute** paths in all three catalogs, e.g. `"path": "https://dragon-gaming-platforms.github.io/Dragon-Gaming-Assets/games/<slug>/"`. Attribution still lives in this repository's `THIRD_PARTY.md` / `CREDITS.md`.

> **Catalog auto-sync:** the [Sync Assets-Repo Games to Catalog](.github/workflows/sync-assets-catalog.yml) workflow (manual trigger from the **Actions** tab) scans the assets repository's `games/` folders and adds any missing entries to all three catalogs with absolute asset-repo URLs, bumping every count string (search placeholder, navbar `Games (N)`, the `N+` numbers in the meta description and hero subtitle, and the AGENTS.md totals), committing as `github-actions[bot]`, and redeploying Pages (it deploys itself because pushes made with `GITHUB_TOKEN` do not trigger `static.yml`). It is **add-only** — it never edits or removes existing entries; id conflicts, orphaned entries and unreadable manifests are reported as warnings instead. Optional per-game metadata lives in `games/<slug>/game.json` in the assets repo (keys: `name`, `desc`, `controls`, `shelf`, `tags`, `badge`, `creator` — all optional, sensible defaults otherwise). Attribution rows in `THIRD_PARTY.md` are not automated — add them manually for new games.

> **Pages deploys publish only site files:** both deploy workflows (`static.yml` on push, and the sync workflow's self-deploy) strip repo plumbing from the runner's working tree before packaging the Pages artifact: `scripts`, `.github`, `games-to-add.md`, `AGENTS.md`, `README.md`, `.gitignore` plus Git metadata stay in the repository but are never published. `.nojekyll` (required — it disables Jekyll processing), `LICENSE`, `THIRD_PARTY.md`, and `CREDITS.md` are intentionally published. If a new non-site file lands at the repo root, add it to the removal list in **both** workflows.

---

## 3. Database Catalog Schema (`GAMES_DATA`)

All games, emulators, and tools are cataloged in `games.js`, `cdn.games.js`, and embedded in `singlefile.html`. Every entry in the `GAMES_DATA` array must strictly follow this object structure:

```javascript
{
  "id": "unique-game-slug",           // Unique lowercase hyphenated string identifier
  "name": "Display Title",            // User-facing game or tool name
  "path": "./games/slug/index.html",   // Relative path to local entrypoint
  "category": "games",                // "games" | "emulators" | "other"
  "tags": ["3D", "Action", "Retro"],  // Array of search/filter tags
  "shelf": "Arcade & Action",         // UI grouping shelf name
  "badge": "3D FPS",                  // Short badge text shown on game card (e.g., "WASM", "JS13k", "Hot")
  "desc": "Description text...",      // One-sentence summary of the gameplay or functionality
  "controls": "WASD: Move | Mouse: Shoot | Space: Jump" // Clear keyboard/mouse/touch instructions
}
```

### Standard Category Shelves:
- `Arcade & Action`
- `Puzzle & Logic`
- `Strategy & Idle`
- `Sports & Racing`
- `RPG & Adventure`
- `Interactive Stories & Experiments`
- `Emulators`
- `Web Browsers`
- `Tools & Utilities`

---

## 4. Mandatory Synchronization Rules

Whenever adding, updating, or fixing a game, emulator, or utility, **ALL THREE catalog files must be updated together**:

1. **`games.js`**: Standard relative paths (e.g. `"path": "./games/drive-mad/index.html"`).
2. **`cdn.games.js`**: Absolute CDN paths using `CDN_BASE + "games/..."` (e.g. `"https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/games/drive-mad/index.html"`).
3. **`singlefile.html`**: The inline `const GAMES_DATA = [...]` array inside `singlefile.html` must match `games.js`.
4. **`CREDITS.md`**: Add upstream author attribution, repository URL, and license.

---

## 5. Strict Constraints for AI Agents

1. **No Pirated Content:**
   - Never ingest pirated games, commercial ROMs, or copyright-infringing repositories (such as `brickyosu/ugs-files`).
   - Only vendor permissive open-source code (MIT, BSD, Apache, GPL, MPL, CC-BY-SA, Public Domain).
2. **No Git Submodules (`.gitmodules`):**
   - Vendor all game folders directly into `games/` or `emulators/`.
   - Ensure you delete all nested `.git` folders (`rm -rf games/<folder>/.git`) after cloning or copying assets. Nested `.git` folders break zip downloads and git status tracking.
3. **GitHub Pages Size Limit (< 1,000 MB):**
   - The total published site size (working tree excluding `.git`) must remain **under 1,000 MB (1 GB)** to adhere to GitHub Pages hosting limits.
   - Always run the size verification check before committing large datasets.
4. **Subpath & Static Scoping Safety:**
   - GitHub Pages serves repositories from subpaths (e.g., `user.github.io/Dragon-Gaming-Platforms/`).
   - **Never hardcode absolute domain root paths** (e.g., `/games/` or `/service/`) in HTML/JS assets. Always use relative paths (`./games/` or `../`).
   - Note on Service Worker proxies (Scramjet/Ultraviolet): GitHub Pages cannot set `Service-Worker-Allowed: /` headers. Proxies requiring root Service Worker interception should remain external iframe wrappers rather than hardcoded root rewrites.
5. **No Broken Links or Missing Assets:**
   - Avoid external CDN links that may break, throw 404s, or trigger CORS blocks. All game scripts, data files, wasm binaries, and audio should reside in the repo.
6. **EmulatorJS ROM Policy:**
   - EmulatorJS includes a built-in drag-and-drop zone where users can load their own legally owned ROMs directly in the browser. Do not commit copyrighted ROM files to the repository.

---

## 6. Verification & Quality Assurance Commands

Before committing any change, run the following verification steps:

### A. JavaScript Syntax Check
```bash
node -c games.js && node -c cdn.games.js
```

### B. Catalog Path Resolution Check
Ensure every single game path declared in `GAMES_DATA` exists on disk:
```bash
python3 -c "
import json, re, os

with open('games.js') as f:
    text = f.read()

match = re.search(r'const GAMES_DATA = (\[.*?\]);', text, re.DOTALL)
data = json.loads(match.group(1))
print(f'Total catalog items: {len(data)}')

missing = [d for d in data if not os.path.exists(d['path'].lstrip('./'))]
if missing:
    print(f'ERROR: {len(missing)} missing files:')
    for m in missing:
        print(' -', m['name'], m['path'])
    exit(1)
else:
    print('SUCCESS: All catalog items verified on disk!')
"
```

### C. Repository & Site Size Check
Ensure the published site is well within the 1,000 MB GitHub Pages limit:
```bash
python3 -c "
import os

def get_dir_size(path, exclude_git=False):
    total = 0
    for root, dirs, files in os.walk(path):
        if exclude_git and '.git' in root.split(os.sep):
            continue
        for f in files:
            fp = os.path.join(root, f)
            if not os.path.islink(fp):
                total += os.path.getsize(fp)
    return total

repo_root = '.'
total_size = get_dir_size(repo_root, exclude_git=False) / (1024 * 1024)
site_size = get_dir_size(repo_root, exclude_git=True) / (1024 * 1024)

print(f'Total Repo Size (with .git): {total_size:.2f} MB')
print(f'Published Site Size (without .git): {site_size:.2f} MB / 1000.00 MB limit')
"
```

### D. Local Web Server Test
```bash
python3 -m http.server 8080 --bind 0.0.0.0
# Test via browser at http://localhost:8080 or curl endpoints:
curl -I http://localhost:8080/index.html
```

---

## 7. UI & Theme Standards

- **Color Palette:**
  - Background: Deep Dark Space (`#09090f`, `#111119`, `#181824`)
  - Accent Red/Neon: `#ff3344`, `#ff5566`
  - Text: Bright White (`#ffffff`), Secondary Gray (`#8e8ea0`)
  - Borders: Neon subtle translucent (`rgba(255, 51, 68, 0.2)`, `#252538`)
- **Typography:**
  - Headings & Badges: `'Orbitron', sans-serif`
  - Body & UI Controls: `'Rajdhani', sans-serif`
- **Game Viewer Overlay (`#gameViewer`):**
  - Full-screen iframe container overlay that traps focus when a game is launched.
  - Features: Close (`Esc` / backdrop click), Restart (reloads iframe `src`), Popout (opens game in fresh new tab), Fullscreen (`requestFullscreen`), Favorite bookmarking (`localStorage`), and Controls Cheat Sheet drawer.

---

## 8. Summary Checklist for Agents

- [ ] Vendored game is 100% legal open-source / permissive license.
- [ ] Nested `.git` folder removed from vendored directory.
- [ ] `index.html` entrypoint verified and tested with local HTTP server (`200 OK`).
- [ ] `games.js`, `cdn.games.js`, and `singlefile.html` updated and in sync.
- [ ] `CREDITS.md` updated with author, project URL, and license.
- [ ] Published site size verified under 1,000 MB limit.
- [ ] All code committed cleanly to branch
