/* ================================================================
   GAME DATA — edit only this array
   category: "games" | "emulators" | "browsers"
   path: relative to repo root, e.g. "games/my-game/"
   ================================================================ */
const GAMES_DATA = [ 
  {  
    "name": "Eaglercraft 1.12.2",
     "path": "./games/singlefiles/Eaglercraft-1.12.2-offline-WASM.html",
     "category": "games" 
  },
  { 
    "name": "Recoil",
    "path": "./games/singlefiles/Recoil.html",
    "category": "games" 
  },
  {
    "name": "Vex 8",
    "path": "./games/singlefiles/Vex-8.html",
    "category": "games"
  },
  { 
    "name": "Drive Mad",
    "path": "./games/singlefiles/Drive-Mad.html", 
    "category": "games" 
  },
  { 
    "name": "Bloons TD4", 
    "path": "./games/singlefiles/Bloons-TD4.html", 
    "category": "games" 
  },
  { 
    "name": "Escape Road", 
    "path": "./games/singlefiles/Escape-Road.html", 
    "category": "games" 
  },
  { 
    "name": "Hole.io", 
    "path": "./games/singlefiles/Hole.io.html", 
    "category": "games" 
  },
  { 
    "name": "Eaglercraft 1.8.8", 
    "path": "./games/singlefiles/Eaglercraft-1.8.8-offline-WASM.html", 
    "category": "games" 
  },
  { 
    "name": "Borg Games", 
    "path": "./games/singlefiles/Borg-Games.html", 
    "category": "games" 
  },
  { 
    "name": "Anura OS", 
    "path": "./emulators/anuraOS.html", 
    "category": "emulators" 
  },
  { 
    "name": "CyberChef", 
    "path": "./emulators/CyberChef/index.html", 
    "category": "emulators" 
  },
  { 
    "name": "EmulatorJS", 
    "path": "./emulators/Emulatorjs/index.html", 
    "category": "emulators" 
  },
  { 
    "name": "GUST", 
    "path": "./browsers/GUST.html", 
    "category": "browsers" 
  },
  { 
    "name": "Scramjet", 
    "path": "./browsers/Scramjet.html", 
    "category": "browsers" 
  },
  {
    "name": "Incognito",
    "path": "./browsers/Incognito.html",
    "category": "browsers"
  },
  {
    "name": "Interstellar",
    "path": "./browsers/Interstellar.html",
    "category": "browsers"
  },
  { 
    "name": "Blockrain", 
    "path": "./blockrain/index.html", 
    "category": "games" 
  },
  { 
    "name": "2048", 
    "path": "./games/2048/index.html", 
    "category": "games" 
  },
  { 
    "name": "1255 Burgomaster", 
    "path": "./games/1255-burgomaster/index.html", 
    "category": "games" 
  },
  { 
    "name": "3D.City", 
    "path": "./games/3d.city/index.html", 
    "category": "games" 
  },
  { 
    "name": "Ancient Beast", 
    "path": "./games/AncientBeast/index.html", 
    "category": "games" 
  },
  { 
    "name": "A Dark Room", 
    "path": "./games/adarkroom/index.html", 
    "category": "games" 
  },
  { 
    "name": "Aquastax", 
    "path": "./games/aquastax/index.html", 
    "category": "games" 
  },
  { 
    "name": "Arashi JS", 
    "path": "./games/arashi-js/index.html", 
    "category": "games" 
  },
  { 
    "name": "ASDF", 
    "path": "./games/asdf/index.html", 
    "category": "games" 
  },
  { 
    "name": "Ball and Wall", 
    "path": "./games/ball-and-wall/index.html", 
    "category": "games" 
  },
  { 
    "name": "Hextris", 
    "path": "./games/Hextris/index.html", 
    "category": "games" 
  },
  { 
    "name": "HexGL", 
    "path": "./games/HexGL/index.html", 
    "category": "games" 
  },
  { 
    "name": "OpenSC2K", 
    "path": "./games/OpenSC2K/index.html", 
    "category": "games" 
  },
  { 
    "name": "Space Company", 
    "path": "./games/SpaceCompany/index.html", 
    "category": "games" 
  },
  { 
    "name": "Sandspiel", 
    "path": "./games/sandspiel/index.html", 
    "category": "games" 
  },
  { 
    "name": "Teterjs", 
    "path": "./games/teterjs/index.html", 
    "category": "games" 
  },
  { 
    "name": "Moto x3m 2", 
    "path": "./games/singlefiles/Moto-x3m-2.html", 
    "category": "games" 
  },
  { 
    "name": "Snowrider 3D", 
    "path": "./games/singlefiles/Snowrider.html", 
    "category": "games" 
  },
  { 
    "name": "Dreadhead Parkour", 
    "path": "./games/singlefiles/dreadheadparkour.htm", 
    "category": "games" 
  },
  { 
    "name": "Balatro", 
    "path": "./games/singlefiles/Balatro.html", 
    "category": "games" 
  }
];

/* ================================================================
   ENGINE
   ================================================================ */
(function () {
  const CATEGORIES = [
    { id: "games",      label: "Games",     icon: "🎮" },
    { id: "emulators",  label: "Emulators", icon: "🕹️" },
    { id: "browsers",   label: "Browsers",  icon: "🌐" }
  ];

  const REPO_OWNER = 'Dragon-Gaming-Platforms';
  const REPO_NAME  = 'Dragon-Gaming-Platforms';
  const API_BASE   = `https://api.github.com/repos/${REPO_OWNER}/${REPO_NAME}`;
  const CURRENT_VER = 'v1.0.0';

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // ---- Elements (cached after DOM ready) ----
  let navbar, navLinks, hamburger, cloakBtn, dropdownRoot, dropdownToggle;
  let browseBtn, mainContainer, downloadRoot, settingsRoot, loadingEl;
  let gameViewer, viewerBackdrop, viewerClose, viewerIframe, viewerLoading, viewerGameName;
  let saveStatus;

  // ---- Eruda State ----
  let erudaLoaded = false;
  const ERUDA_KEY = 'dgp_eruda_enabled';
  function isErudaEnabled() { return localStorage.getItem(ERUDA_KEY) === 'true'; }
  function setErudaEnabled(v) { localStorage.setItem(ERUDA_KEY, v ? 'true' : 'false'); }
  function initEruda() {
    if (erudaLoaded) return;
    const s = document.createElement('script');
    s.src = 'https://cdn.jsdelivr.net/npm/eruda';
    s.onload = () => { if (typeof eruda !== 'undefined') { eruda.init(); erudaLoaded = true; } };
    document.body.appendChild(s);
  }
  function destroyEruda() { if (typeof eruda !== 'undefined' && eruda._isInit) { eruda.destroy(); erudaLoaded = false; } }
  function toggleEruda(enabled) { setErudaEnabled(enabled); if (enabled) initEruda(); else destroyEruda(); }

  // ---- Scroll reveal ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.15 });

  // ---- Smooth Scroll Helper ----
  function scrollToId(id) {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  // ---- Save Manager Logic ----
  function showSaveStatus(msg, type) {
    if (!saveStatus) return;
    saveStatus.textContent = msg;
    saveStatus.className = `save-status ${type}`;
    setTimeout(() => { saveStatus.textContent = ''; saveStatus.className = 'save-status'; }, 4000);
  }

  function exportSaves() {
    try {
      const backup = {
        meta: { exported: new Date().toISOString(), origin: location.origin },
        localStorage: {},
        sessionStorage: {},
        cookies: document.cookie
      };

      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        backup.localStorage[key] = localStorage.getItem(key);
      }
      for (let i = 0; i < sessionStorage.length; i++) {
        const key = sessionStorage.key(i);
        backup.sessionStorage[key] = sessionStorage.getItem(key);
      }

      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `dragon-saves-${new Date().toISOString().slice(0,10)}.json`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);

      showSaveStatus('✓ Saves exported successfully', 'success');
    } catch (err) {
      console.error('Export failed:', err);
      showSaveStatus('✕ Export failed: ' + err.message, 'error');
    }
  }

  function importSaves(file) {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const backup = JSON.parse(e.target.result);
        let count = 0;

        if (backup.localStorage) {
          Object.entries(backup.localStorage).forEach(([k, v]) => {
            localStorage.setItem(k, v);
            count++;
          });
        }
        if (backup.sessionStorage) {
          Object.entries(backup.sessionStorage).forEach(([k, v]) => {
            sessionStorage.setItem(k, v);
            count++;
          });
        }
        if (backup.cookies) {
          backup.cookies.split(';').forEach(c => {
            const [name, ...rest] = c.trim().split('=');
            if (name && rest.length) {
              document.cookie = `${name}=${rest.join('=')}; path=/; max-age=31536000`;
              count++;
            }
          });
        }

        showSaveStatus(`✓ Restored ${count} items. Refresh to apply.`, 'success');
        // Update Eruda toggle if state was imported
        const erudaToggle = $('#erudaToggle');
        if (erudaToggle) erudaToggle.checked = isErudaEnabled();
      } catch (err) {
        console.error('Import failed:', err);
        showSaveStatus('✕ Import failed: Invalid file', 'error');
      }
    };
    reader.readAsText(file);
  }

  // ---- Cloaked Tab ----
  function handleCloakClick() {
    const win = window.open('about:blank', '_blank');
    if (!win) { alert('Popup blocked! Please allow popups for this site.'); return; }
    
    fetch('./singlefile.html')
      .then(res => { if (!res.ok) throw new Error(`HTTP ${res.status}`); return res.text(); })
      .then(html => { win.document.open(); win.document.write(html); win.document.close(); })
      .catch(err => {
        console.error('Cloak fetch failed:', err);
        win.document.body.innerHTML = `<div style="display:flex;align-items:center;justify-content:center;height:100vh;background:#050505;color:#e60012;font-family:sans-serif;text-align:center;">
          <div><h2>🛡️ Cloaked Tab Active</h2><p style="color:#aaa;">singlefile.html not found or failed to load.</p></div></div>`;
      });
  }

  // ---- Viewer ----
  function openGame(name, path) {
    viewerGameName.textContent = name;
    viewerLoading.classList.remove('hidden');
    viewerIframe.src = '';
    requestAnimationFrame(() => {
      gameViewer.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => {
        viewerIframe.src = path;
        const reveal = () => { if (!viewerLoading.classList.contains('hidden')) viewerLoading.classList.add('hidden'); };
        viewerIframe.addEventListener('load', function onL() {
          viewerIframe.removeEventListener('load', onL);
          try {
            const d = viewerIframe.contentDocument || viewerIframe.contentWindow.document;
            if (d.readyState === 'complete' || d.readyState === 'interactive') reveal();
            else d.addEventListener('DOMContentLoaded', reveal, { once: true });
          } catch(e) {}
        });
        setTimeout(reveal, 3500);
      }, 100);
    });
  }
  function closeGame() {
    gameViewer.classList.remove('active');
    document.body.style.overflow = '';
    setTimeout(() => { viewerIframe.src = ''; viewerLoading.classList.add('hidden'); }, 500);
  }

  // ---- Build HTML ----
  function cardHTML(item, i) {
    const icons = { games: "🎮", emulators: "🕹️", browsers: "🌐" };
    return `<div class="game-card fade-in" style="transition-delay:${i*0.08}s" data-name="${esc(item.name)}" data-path="${esc(item.path)}">
      <div class="game-card__image"><span class="game-card__placeholder-icon">${icons[item.category]||"🎮"}</span></div>
      <div class="game-card__body">
        <h3 class="game-card__name">${esc(item.name)}</h3>
        <div class="game-card__path">${esc(item.path)}</div>
        <div class="game-card__status"><span class="game-card__status-dot"></span><span class="game-card__status-text">Ready</span></div>
      </div>
    </div>`;
  }

  function sectionHTML(cat, items) {
    const cards = items.map((g,i) => cardHTML(g,i)).join('');
    return `<section class="category-section fade-in" id="category-${cat.id}">
      <div class="container">
        <div class="section-header">
          <span class="section-icon">${cat.icon}</span>
          <h2 class="section-title">${cat.label}</h2>
          <span class="section-count">${items.length} ${items.length===1?'item':'items'}</span>
        </div>
        <div class="games-grid">${cards}</div>
      </div>
    </section>`;
  }

  function downloadHTML() {
    return `<section class="download-section fade-in" id="download">
      <div class="container">
        <div class="section-header">
          <span class="section-icon">⬇️</span>
          <h2 class="section-title">Download</h2>
        </div>
        <div class="download-versions">
          <div class="version-box"><div class="version-box__label">Current Version</div><div class="version-box__value">${CURRENT_VER}</div></div>
          <div class="version-box"><div class="version-box__label">Latest Version</div><div class="version-box__value" id="latestVersion"><span class="version-box__loading">Checking GitHub…</span></div></div>
        </div>
        <div class="download-actions" id="downloadActions">
          <a href="#" class="btn-download disabled" id="btnZip" download>⬇ Download ZIP</a>
          <a href="#" class="btn-download btn-download--secondary disabled" id="btnSingle" download>📄 Download Singlefile</a>
        </div>
        <div class="commit-log">
          <h3 class="commit-log__title">Recent Commits</h3>
          <div id="commitLog"><div class="commit-loading">Loading commit history…</div></div>
        </div>
      </div>
    </section>`;
  }

  function settingsHTML() {
    const checked = isErudaEnabled() ? 'checked' : '';
    return `<section class="settings-section fade-in" id="settings">
      <div class="container">
        <div class="section-header">
          <span class="section-icon">⚙️</span>
          <h2 class="section-title">Settings</h2>
        </div>
        <div class="settings-item">
          <div>
            <div class="settings-label">Eruda Developer Console</div>
            <div class="settings-desc">Inject a mobile-friendly dev tools console</div>
          </div>
          <label class="toggle-switch">
            <input type="checkbox" id="erudaToggle" ${checked}>
            <span class="toggle-slider"></span>
          </label>
        </div>
        
        <div class="settings-item" style="margin-top: 20px;">
          <div>
            <div class="settings-label">Save Data Manager</div>
            <div class="settings-desc">Export or import localStorage, sessionStorage & cookies</div>
          </div>
        </div>
        <div class="save-manager">
          <button class="btn-save btn-save--export" id="btnExportSaves">⬇ Export Saves</button>
          <label class="btn-save btn-save--import">
            ⬆ Import Saves
            <input type="file" id="btnImportSaves" accept=".json">
          </label>
        </div>
        <div class="save-status" id="saveStatus"></div>
      </div>
    </section>`;
  }

  function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  // ---- GitHub API ----
  async function fetchLatestRelease() {
    try { const res = await fetch(`${API_BASE}/releases/latest`); if (!res.ok) throw new Error(`HTTP ${res.status}`); return await res.json(); }
    catch(e) { console.error('Failed to fetch release:', e); return null; }
  }
  async function fetchCommits(limit = 15) {
    try { const res = await fetch(`${API_BASE}/commits?per_page=${limit}`); if (!res.ok) throw new Error(`HTTP ${res.status}`); return await res.json(); }
    catch(e) { console.error('Failed to fetch commits:', e); return []; }
  }
  function renderCommitLog(commits) {
    const el = $('#commitLog');
    if (!el || !commits.length) { if (el) el.innerHTML = '<div class="commit-loading">No commits found.</div>'; return; }
    el.innerHTML = commits.map(c => {
      const sha = c.sha.substring(0, 7);
      const date = new Date(c.commit.author.date).toLocaleDateString('en-US', { year:'numeric', month:'short', day:'numeric' });
      return `<div class="commit-item"><div class="commit-dot"></div><div class="commit-info">
        <div class="commit-msg">${esc(c.commit.message.split('\n')[0])}</div>
        <div class="commit-meta">
          <a href="${c.html_url}" class="commit-sha" target="_blank" rel="noopener">${sha}</a>
          <span class="commit-date">${date}</span>
          <span class="commit-author">${esc(c.commit.author.name)}</span>
        </div></div></div>`;
    }).join('');
  }
  function updateDownloadUI(release) {
    const verEl = $('#latestVersion'), btnZip = $('#btnZip'), btnSingle = $('#btnSingle');
    if (!release) { if (verEl) verEl.innerHTML = '<span style="color:var(--text-dim)">Could not fetch</span>'; return; }
    if (verEl) verEl.innerHTML = `<span class="highlight">${esc(release.tag_name || release.name || 'unknown')}</span>`;
    if (btnZip) { btnZip.href = release.zipball_url; btnZip.classList.remove('disabled'); }
    if (btnSingle) { btnSingle.href = `https://raw.githubusercontent.com/${REPO_OWNER}/${REPO_NAME}/${release.tag_name}/singlefile.html`; btnSingle.classList.remove('disabled'); }
  }

  // ---- Render & Init ----
  function init() {
    navbar = $('#navbar'); navLinks = $('#navLinks'); hamburger = $('#hamburger');
    cloakBtn = $('#cloakBtn'); dropdownRoot = $('#dropdownRoot'); dropdownToggle = $('#dropdownToggle');
    browseBtn = $('#browseGamesBtn'); mainContainer = $('#mainContent');
    downloadRoot = $('#downloadRoot'); settingsRoot = $('#settingsRoot'); loadingEl = $('#loadingState');
    gameViewer = $('#gameViewer'); viewerBackdrop = $('#viewerBackdrop'); viewerClose = $('#viewerClose');
    viewerIframe = $('#viewerIframe'); viewerLoading = $('#viewerLoading'); viewerGameName = $('#viewerGameName');
    saveStatus = $('#saveStatus');

    window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 40));
    hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));
    dropdownToggle.addEventListener('click', (e) => { e.preventDefault(); e.stopPropagation(); if (innerWidth <= 768) dropdownRoot.classList.toggle('open'); });
    if (cloakBtn) cloakBtn.addEventListener('click', handleCloakClick);
    
    $$('.nav-section-link').forEach(link => {
      link.addEventListener('click', (e) => { e.preventDefault(); scrollToId(link.getAttribute('href').substring(1)); navLinks.classList.remove('open'); dropdownRoot.classList.remove('open'); });
    });
    browseBtn.addEventListener('click', (e) => { e.preventDefault(); scrollToId('category-games'); });
    viewerClose.addEventListener('click', closeGame);
    viewerBackdrop.addEventListener('click', closeGame);
    document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && gameViewer.classList.contains('active')) closeGame(); });

    // Save buttons
    const btnExport = $('#btnExportSaves');
    const btnImport = $('#btnImportSaves');
    if (btnExport) btnExport.addEventListener('click', exportSaves);
    if (btnImport) btnImport.addEventListener('change', (e) => importSaves(e.target.files[0]));

    render();
  }

  function render() {
    const grouped = {};
    CATEGORIES.forEach(c => grouped[c.id] = []);
    GAMES_DATA.forEach(g => { if (grouped[g.category]) grouped[g.category].push(g); });
    mainContainer.innerHTML = CATEGORIES.map(c => sectionHTML(c, grouped[c.id])).join('');
    downloadRoot.innerHTML = downloadHTML();
    settingsRoot.innerHTML = settingsHTML();
    saveStatus = $('#saveStatus'); // Re-cache after render
    $$('.fade-in').forEach(el => observer.observe(el));
    $$('.game-card').forEach(card => { card.addEventListener('click', () => openGame(card.dataset.name, card.dataset.path)); });
    const erudaToggle = $('#erudaToggle');
    if (erudaToggle) erudaToggle.addEventListener('change', (e) => toggleEruda(e.target.checked));
    if (isErudaEnabled()) initEruda();
    fetchLatestRelease().then(updateDownloadUI);
    fetchCommits().then(renderCommitLog);
    if (loadingEl) loadingEl.style.display = 'none';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();