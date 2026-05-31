/* ================================================================
   GAME DATA — edit only this array
   category: "games" | "emulators" | "browsers"
   path: relative to repo root, e.g. "games/my-game/"
   ================================================================ */
const GAMES_DATA = [
  { name: "Recoil",       path: "games/singlefiles/Recoil.html", category: "games" },
  { name: "HexGL",        path: "games/HexGL/index.html",        category: "games" }
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

  const $ = (s) => document.querySelector(s);
  const $$ = (s) => document.querySelectorAll(s);

  // ---- Elements ----
  const navbar         = $('#navbar');
  const navLinks       = $('#navLinks');
  const hamburger      = $('#hamburger');
  const browseBtn      = $('#browseGamesBtn');
  const mainContainer  = $('#mainContent');
  const loadingEl      = $('#loadingState');
  const gameViewer     = $('#gameViewer');
  const viewerBackdrop = $('#viewerBackdrop');
  const viewerClose    = $('#viewerClose');
  const viewerIframe   = $('#viewerIframe');
  const viewerLoading  = $('#viewerLoading');
  const viewerGameName = $('#viewerGameName');

  // ---- Scroll reveal ----
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target); } });
  }, { threshold: 0.15 });

  // ---- Navbar scroll effect ----
  window.addEventListener('scroll', () => navbar.classList.toggle('scrolled', scrollY > 40));

  // ---- Hamburger ----
  hamburger.addEventListener('click', () => navLinks.classList.toggle('open'));

  // ---- Browse CTA ----
  browseBtn.addEventListener('click', (e) => {
    e.preventDefault();
    $('#categoriesRoot').scrollIntoView({ behavior: 'smooth' });
  });

  // ---- Viewer open / close ----
  function openGame(name, path) {
    viewerGameName.textContent = name;
    viewerLoading.classList.remove('hidden');
    viewerIframe.src = ''; // Clear previous source

    requestAnimationFrame(() => {
      gameViewer.classList.add('active');
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        viewerIframe.src = path;

        const revealGame = () => {
          if (!viewerLoading.classList.contains('hidden')) {
            viewerLoading.classList.add('hidden');
          }
        };

        viewerIframe.addEventListener('load', function onIframeLoad() {
          viewerIframe.removeEventListener('load', onIframeLoad);
          try {
            const innerDoc = viewerIframe.contentDocument || viewerIframe.contentWindow.document;
            if (innerDoc.readyState === 'complete' || innerDoc.readyState === 'interactive') {
              revealGame();
            } else {
              innerDoc.addEventListener('DOMContentLoaded', revealGame, { once: true });
            }
          } catch (e) {
            // Fallback to timeout if cross-origin
          }
        });

        // Safety timeout
        setTimeout(revealGame, 3500);
      }, 100);
    });
  }

  function closeGame() {
    gameViewer.classList.remove('active');
    document.body.style.overflow = '';
    // Clear src after animation to stop audio/processing
    setTimeout(() => { viewerIframe.src = ''; viewerLoading.classList.add('hidden'); }, 500);
  }

  viewerClose.addEventListener('click', closeGame);
  viewerBackdrop.addEventListener('click', closeGame);
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && gameViewer.classList.contains('active')) closeGame(); });

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
        <div class="category-section__header">
          <span class="category-section__icon">${cat.icon}</span>
          <h2 class="category-section__title">${cat.label}</h2>
          <span class="category-section__count">${items.length} ${items.length===1?'item':'items'}</span>
        </div>
        <div class="games-grid">${cards}</div>
      </div>
    </section>`;
  }

  function esc(s) { const d = document.createElement('div'); d.textContent = s; return d.innerHTML; }

  // ---- Render ----
  function render() {
    const grouped = {};
    CATEGORIES.forEach(c => grouped[c.id] = []);
    GAMES_DATA.forEach(g => { if (grouped[g.category]) grouped[g.category].push(g); });

    mainContainer.innerHTML = CATEGORIES.map(c => sectionHTML(c, grouped[c.id])).join('');
    $$('.fade-in').forEach(el => observer.observe(el));

    $$('.game-card').forEach(card => {
      card.addEventListener('click', () => openGame(card.dataset.name, card.dataset.path));
    });

    if (loadingEl) loadingEl.style.display = 'none';
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', render);
  else render();
})();