/* ============================
   GAME DATA
   Category must be: "games" | "emulators" | "browsers"
   Path is relative to repo root (e.g. "games/my-game/")
   ============================ */
const GAMES_DATA = [
  {  
    "name": "Eaglercraft 1.12.2",
     "path": "./games/singlefiles/Eaglercraft-1.12.2.html",
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
    "path": "./games/singlefiles/Eaglercraft-1.8.8.html", 
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
    "name": "HexGL", 
    "path": "./games/HexGL/index.html", 
    "category": "games" 
  },
  { 
    "name": "Balatro", 
    "path": "./games/singlefiles/Balatro.html", 
    "category": "games" 
  }
];

/* ============================
   CATEGORY CONFIG
   ============================ */
const CATEGORIES = [
  { id: "games",      label: "Games",     icon: "\u{1F3AE}", iconChar: "\u{1F3AE}" },
  { id: "emulators",  label: "Emulators", icon: "\u{1F579}", iconChar: "\u{1F579}" },
  { id: "browsers",   label: "Browsers",  icon: "\u{1F310}", iconChar: "\u{1F310}" }
];

/* ============================
   RENDER ENGINE
   ============================ */
(function () {
  'use strict';

  const BASE_URL = 'https://dragon-gaming-platforms.github.io/Dragon-Gaming-Platforms/';

  // ---- Elements ----
  const navbar          = document.getElementById('navbar');
  const navLinks        = document.getElementById('navLinks');
  const hamburger       = document.getElementById('hamburger');
  const dropdownRoot    = document.getElementById('dropdownRoot');
  const dropdownToggle  = document.getElementById('dropdownToggle');
  const browseBtn       = document.getElementById('browseGamesBtn');
  const mainContainer   = document.getElementById('mainContent');
  const loadingEl       = document.getElementById('loadingState');
  const gameViewer      = document.getElementById('gameViewer');
  const viewerBackdrop  = document.getElementById('viewerBackdrop');
  const viewerWindow    = document.getElementById('viewerWindow');
  const viewerClose     = document.getElementById('viewerClose');
  const viewerIframe    = document.getElementById('viewerIframe');
  const viewerLoading   = document.getElementById('viewerLoading');
  const viewerGameName  = document.getElementById('viewerGameName');

  // ---- Scroll reveal observer ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  // ---- Navbar scroll effect ----
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
  });

  // ---- Mobile hamburger toggle ----
  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });

  // ---- Mobile dropdown toggle ----
  dropdownToggle.addEventListener('click', (e) => {
    e.preventDefault();
    // On mobile (hamburger visible), toggle class; desktop uses CSS :hover
    if (window.innerWidth <= 768) {
      dropdownRoot.classList.toggle('open');
    }
  });

  // ---- "Browse All" CTA scrolls smoothly ----
  browseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    document.getElementById('categoriesRoot').scrollIntoView({ behavior: 'smooth' });
  });

  // ---- Viewer open / close ----
  function openGameViewer(name, path) {
    const cleanPath = path.replace(/^\//, '').replace(/^\.\/?/, '');
    const gameUrl   = BASE_URL + cleanPath;

    viewerGameName.textContent = name;
    viewerIframe.src = '';
    viewerLoading.classList.remove('hidden');

    requestAnimationFrame(() => {
      gameViewer.classList.add('active');
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        viewerIframe.src = gameUrl;
      }, 200);
    });
  }

  function closeGameViewer() {
    gameViewer.classList.remove('active');
    document.body.style.overflow = '';

    setTimeout(() => {
      viewerIframe.src = '';
      viewerLoading.classList.add('hidden');
    }, 500);
  }

  viewerClose.addEventListener('click', closeGameViewer);
  viewerBackdrop.addEventListener('click', closeGameViewer);

  // ---- Escape to close viewer ----
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && gameViewer.classList.contains('active')) {
      closeGameViewer();
    }
  });

  // ---- Build card HTML ----
  function buildCard(item, delayIndex) {
    const iconMap = { games: '\u{1F3AE}', emulators: '\u{1F579}', browsers: '\u{1F310}' };
    const icon = iconMap[item.category] || '\u{1F3AE}';

    return `
      <div class="game-card fade-in" style="transition-delay:${delayIndex * 0.08}s"
           data-name="${escapeHTML(item.name)}"
           data-path="${escapeHTML(item.path)}">
        <div class="game-card__image">
          <span class="game-card__placeholder-icon">${icon}</span>
        </div>
        <div class="game-card__body">
          <h3 class="game-card__name">${escapeHTML(item.name)}</h3>
          <div class="game-card__path">${escapeHTML(item.path)}</div>
          <div class="game-card__status">
            <span class="game-card__status-dot"></span>
            <span class="game-card__status-text">Path Ready</span>
          </div>
        </div>
      </div>`;
  }

  // ---- Build a category section ----
  function buildCategorySection(cat, items) {
    const cards = items.map((item, i) => buildCard(item, i)).join('');
    const count = items.length;

    return `
      <section class="category-section fade-in" id="category-${cat.id}">
        <div class="container">
          <div class="category-section__header">
            <span class="category-section__icon">${cat.iconChar}</span>
            <h2 class="category-section__title">${escapeHTML(cat.label)}</h2>
            <span class="category-section__count">${count} ${count === 1 ? 'item' : 'items'}</span>
          </div>
          <div class="games-grid">${cards}</div>
        </div>
      </section>`;
  }

  // ---- Render everything ----
  function renderAll() {
    const grouped = {};
    CATEGORIES.forEach(cat => { grouped[cat.id] = []; });
    GAMES_DATA.forEach(item => {
      if (grouped[item.category]) grouped[item.category].push(item);
    });

    const sections = CATEGORIES
      .map(cat => buildCategorySection(cat, grouped[cat.id]))
      .join('');

    mainContainer.innerHTML = sections;
    document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

    // Attach card click handlers
    document.querySelectorAll('.game-card').forEach(card => {
      card.addEventListener('click', () => {
        openGameViewer(card.dataset.name, card.dataset.path);
      });
    });

    // Hide loading spinner
    if (loadingEl) loadingEl.style.display = 'none';
  }

  // ---- Utility ----
  function escapeHTML(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ---- Init ----
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', renderAll);
  } else {
    renderAll();
  }
})();
