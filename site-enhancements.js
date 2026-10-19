/* Main-site-only progressive enhancements. Portable single-file builds do not load this. */
(() => {
  'use strict';

  const viewer = document.getElementById('gameViewer');
  const viewerWindow = document.getElementById('viewerWindow');
  const iframe = document.getElementById('viewerIframe');
  const closeButton = document.getElementById('viewerClose');
  const filterRoot = document.getElementById('filterBarRoot');
  const status = document.getElementById('siteConnectionStatus');
  if (!viewer || !viewerWindow || !iframe) return;

  const catalog = (() => {
    try {
      return typeof GAMES_DATA !== 'undefined' && Array.isArray(GAMES_DATA) ? GAMES_DATA : [];
    } catch (_) {
      return [];
    }
  })();

  // Improve dynamically rendered search controls without changing the shared
  // game engine that is also embedded in the portable single-file releases.
  function syncSearchShareButton(input, button) {
    const hasQuery = Boolean(input.value.trim());
    input.classList.toggle('site-search-has-text', hasQuery);
    button.hidden = !hasQuery;
  }

  function patchSearchAccessibility() {
    if (filterRoot && !filterRoot.hasAttribute('tabindex')) filterRoot.setAttribute('tabindex', '-1');
    const input = document.getElementById('gameSearchInput');
    if (input && !input.hasAttribute('aria-label')) {
      input.setAttribute('aria-label', 'Search games, emulators, and tools');
    }
    const searchWrap = input?.closest('.filter-bar__search-wrap');
    let shareSearchButton = searchWrap?.querySelector('.site-search-share-button');
    if (input && searchWrap && !shareSearchButton) {
      shareSearchButton = document.createElement('button');
      shareSearchButton.type = 'button';
      shareSearchButton.className = 'site-search-share-button';
      shareSearchButton.textContent = 'Share';
      shareSearchButton.setAttribute('aria-label', 'Share this search query');
      shareSearchButton.title = 'Share a link to this search query';
      searchWrap.appendChild(shareSearchButton);
      input.addEventListener('input', () => syncSearchShareButton(input, shareSearchButton));
      shareSearchButton.addEventListener('click', async () => {
        const query = input.value.trim();
        if (!query) return;
        const url = new URL(location.href);
        url.search = '';
        url.hash = '';
        url.searchParams.set('search', query);
        await shareOrCopyLink(url.href, `Search: ${query} — Dragon Gaming Platforms`, 'Search link copied to clipboard.');
      });
    }
    if (input && shareSearchButton) syncSearchShareButton(input, shareSearchButton);

    const clear = document.getElementById('searchClearBtn');
    if (clear && !clear.hasAttribute('aria-label')) clear.setAttribute('aria-label', 'Clear search');
    if (clear && input && shareSearchButton && clear.dataset.siteShareSync !== 'true') {
      clear.dataset.siteShareSync = 'true';
      clear.addEventListener('click', () => {
        window.setTimeout(() => syncSearchShareButton(input, shareSearchButton), 0);
      });
    }
    const results = document.getElementById('resultsCountLabel');
    if (results) {
      results.setAttribute('role', 'status');
      results.setAttribute('aria-live', 'polite');
      results.setAttribute('aria-atomic', 'true');
    }
  }

  patchSearchAccessibility();
  if (filterRoot) {
    new MutationObserver(patchSearchAccessibility).observe(filterRoot, { childList: true, subtree: true });
  }

  // Keep a short, private-on-this-device list so players can quickly return to
  // games they've opened before. Only catalog IDs are stored, never game URLs.
  const RECENT_GAMES_KEY = 'dgp.recent-games.v1';
  const RECENT_GAMES_LIMIT = 6;
  const catalogIds = new Set(catalog.map((item) => item.id));
  let recentGameIds = [];
  let recentShelf = null;
  let recentList = null;
  let renderRecentGames = () => {};

  try {
    const saved = JSON.parse(localStorage.getItem(RECENT_GAMES_KEY) || '[]');
    if (Array.isArray(saved)) {
      recentGameIds = [...new Set(saved.filter((id) => typeof id === 'string' && catalogIds.has(id)))].slice(0, RECENT_GAMES_LIMIT);
    }
  } catch (_) { /* Local storage may be disabled or unavailable. */ }

  const catalogRoot = document.getElementById('catalogRoot');
  if (catalogRoot?.parentNode) {
    recentShelf = document.createElement('section');
    recentShelf.className = 'site-recent-shelf';
    recentShelf.setAttribute('aria-labelledby', 'siteRecentTitle');
    recentShelf.hidden = true;

    const recentHeader = document.createElement('div');
    recentHeader.className = 'site-recent-shelf__header';
    const recentTitle = document.createElement('h2');
    recentTitle.id = 'siteRecentTitle';
    recentTitle.textContent = 'Recently played';
    const clearRecent = document.createElement('button');
    clearRecent.type = 'button';
    clearRecent.className = 'site-recent-shelf__clear';
    clearRecent.textContent = 'Clear history';
    clearRecent.setAttribute('aria-label', 'Clear recently played games from this device');
    recentHeader.append(recentTitle, clearRecent);

    recentList = document.createElement('div');
    recentList.className = 'site-recent-shelf__list';
    recentList.setAttribute('role', 'list');
    recentShelf.append(recentHeader, recentList);
    catalogRoot.parentNode.insertBefore(recentShelf, catalogRoot);

    renderRecentGames = function renderRecentGames() {
      recentList.replaceChildren();
      const recentGames = recentGameIds
        .map((id) => catalog.find((item) => item.id === id))
        .filter(Boolean);
      recentShelf.hidden = recentGames.length === 0;
      for (const item of recentGames) {
        const link = document.createElement('a');
        link.className = 'site-recent-shelf__item';
        link.setAttribute('role', 'listitem');
        link.setAttribute('aria-label', `Play ${item.name} again`);
        const url = new URL(location.href);
        url.search = '';
        url.hash = '';
        url.searchParams.set('play', item.id);
        link.href = url.href;

        const thumb = document.createElement('span');
        thumb.className = 'site-recent-shelf__thumb';
        thumb.setAttribute('aria-hidden', 'true');
        const placeholder = document.createElement('span');
        placeholder.textContent = '🎮';
        thumb.appendChild(placeholder);
        if (item.image) {
          const image = document.createElement('img');
          image.src = item.image;
          image.alt = '';
          image.loading = 'lazy';
          image.decoding = 'async';
          image.addEventListener('load', () => { placeholder.hidden = true; }, { once: true });
          image.addEventListener('error', () => image.remove(), { once: true });
          thumb.appendChild(image);
        }
        const name = document.createElement('span');
        name.className = 'site-recent-shelf__name';
        name.textContent = item.name;
        link.append(thumb, name);
        recentList.appendChild(link);
      }
    };

    function clearRecentGames() {
      recentGameIds = [];
      try { localStorage.removeItem(RECENT_GAMES_KEY); } catch (_) { /* Keep the in-page clear usable. */ }
      renderRecentGames();
      if (recentShelf.hidden) {
        const fallbackFocus = document.getElementById('gameSearchInput') || filterRoot;
        fallbackFocus?.focus({ preventScroll: true });
      }
    }

    clearRecent.addEventListener('click', clearRecentGames);
    window.addEventListener('storage', (event) => {
      if (event.key !== RECENT_GAMES_KEY && event.key !== null) return;
      try {
        const saved = JSON.parse(event.newValue || '[]');
        recentGameIds = Array.isArray(saved)
          ? [...new Set(saved.filter((id) => typeof id === 'string' && catalogIds.has(id)))].slice(0, RECENT_GAMES_LIMIT)
          : [];
      } catch (_) { recentGameIds = []; }
      renderRecentGames();
    });
    renderRecentGames();
  }

  function rememberRecentGame(item) {
    if (!item || !recentShelf || recentGameIds[0] === item.id) return;
    recentGameIds = [item.id, ...recentGameIds.filter((id) => id !== item.id)].slice(0, RECENT_GAMES_LIMIT);
    try { localStorage.setItem(RECENT_GAMES_KEY, JSON.stringify(recentGameIds)); } catch (_) { /* Recent games still work until this page closes. */ }
    renderRecentGames();
  }

  // Give the overlay dialog semantics, isolate the background for assistive
  // technology, trap focus, and return focus to the control that opened it.
  viewer.setAttribute('role', 'dialog');
  viewer.setAttribute('aria-labelledby', 'viewerGameName');
  viewer.setAttribute('aria-hidden', 'true');
  viewerWindow.setAttribute('tabindex', '-1');
  let dialogOpen = false;
  let returnFocus = null;
  let backgroundState = [];

  function focusableControls() {
    return [...viewer.querySelectorAll(
      'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), iframe, [tabindex]:not([tabindex="-1"])'
    )].filter((element) => !element.hidden && element.getAttribute('aria-hidden') !== 'true');
  }

  function suppressBackground() {
    backgroundState = [...document.body.children]
      .filter((element) => element !== viewer)
      .map((element) => ({
        element,
        inert: element.hasAttribute('inert'),
        ariaHidden: element.getAttribute('aria-hidden'),
      }));
    backgroundState.forEach(({ element }) => {
      element.setAttribute('inert', '');
      element.setAttribute('aria-hidden', 'true');
    });
  }

  function restoreBackground() {
    backgroundState.forEach(({ element, inert, ariaHidden }) => {
      if (!element.isConnected) return;
      if (inert) element.setAttribute('inert', '');
      else element.removeAttribute('inert');
      if (ariaHidden === null) element.removeAttribute('aria-hidden');
      else element.setAttribute('aria-hidden', ariaHidden);
    });
    backgroundState = [];
  }

  function openAccessibleDialog() {
    if (dialogOpen) return;
    dialogOpen = true;
    returnFocus = document.activeElement;
    viewer.setAttribute('aria-hidden', 'false');
    viewer.setAttribute('aria-modal', 'true');
    suppressBackground();
    requestAnimationFrame(() => {
      if (dialogOpen) (closeButton || viewerWindow).focus({ preventScroll: true });
    });
    document.addEventListener('keydown', trapDialogTab, true);
    document.addEventListener('focusin', keepFocusInDialog, true);
  }

  function closeAccessibleDialog() {
    if (!dialogOpen) return;
    dialogOpen = false;
    viewer.setAttribute('aria-hidden', 'true');
    viewer.removeAttribute('aria-modal');
    document.removeEventListener('keydown', trapDialogTab, true);
    document.removeEventListener('focusin', keepFocusInDialog, true);
    restoreBackground();
    const target = returnFocus && returnFocus.isConnected ? returnFocus : document.getElementById('gameSearchInput');
    returnFocus = null;
    if (target && typeof target.focus === 'function') {
      requestAnimationFrame(() => target.focus({ preventScroll: true }));
    }
  }

  function trapDialogTab(event) {
    if (!dialogOpen || event.key !== 'Tab') return;
    const controls = focusableControls();
    if (!controls.length) {
      event.preventDefault();
      viewerWindow.focus();
      return;
    }
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (event.shiftKey && (document.activeElement === first || document.activeElement === viewerWindow)) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  }

  function keepFocusInDialog(event) {
    if (dialogOpen && !viewer.contains(event.target)) {
      (closeButton || viewerWindow).focus({ preventScroll: true });
    }
  }

  function syncDialogState() {
    if (viewer.classList.contains('active')) openAccessibleDialog();
    else closeAccessibleDialog();
  }

  new MutationObserver(syncDialogState).observe(viewer, { attributes: true, attributeFilter: ['class'] });
  syncDialogState();

  // Add a stable, shareable link for the currently running game. Shared URLs use
  // ?play=<catalog-id>; opening one launches the matching catalog card.
  const actions = viewer.querySelector('.game-viewer__actions');
  const closeControl = document.getElementById('viewerClose');
  let activeGame = null;
  let toastTimer = 0;
  const shareButton = document.createElement('button');
  shareButton.type = 'button';
  shareButton.className = 'game-viewer__btn site-share-button';
  shareButton.title = 'Share this game';
  shareButton.setAttribute('aria-label', 'Share this game');
  shareButton.disabled = true;
  shareButton.innerHTML = '<span aria-hidden="true">🔗</span><span class="game-viewer__btn-text">Share</span>';
  if (actions) actions.insertBefore(shareButton, closeControl || null);

  const toast = document.createElement('div');
  toast.className = 'site-toast';
  toast.setAttribute('role', 'status');
  toast.setAttribute('aria-live', 'polite');
  toast.hidden = true;
  viewer.appendChild(toast);

  function announce(message) {
    toast.textContent = message;
    toast.hidden = false;
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => { toast.hidden = true; }, 2400);
  }

  function getActiveCatalogItem() {
    const source = iframe.getAttribute('src');
    if (!source) return null;
    let resolved;
    try { resolved = new URL(source, document.baseURI).href; } catch (_) { return null; }
    const visibleName = document.getElementById('viewerGameName')?.textContent;
    return catalog.find((item) => {
      try {
        return item.name === visibleName && new URL(item.path, document.baseURI).href === resolved;
      } catch (_) {
        return false;
      }
    }) || null;
  }

  function refreshShareTarget() {
    if (!viewer.classList.contains('active')) return;
    activeGame = getActiveCatalogItem();
    shareButton.disabled = !activeGame;
    rememberRecentGame(activeGame);
  }

  function shareUrlFor(item) {
    const url = new URL(location.href);
    url.search = '';
    url.hash = '';
    url.searchParams.set('play', item.id);
    return url.href;
  }

  async function copyShareUrl(url) {
    if (navigator.clipboard && window.isSecureContext) {
      try {
        await navigator.clipboard.writeText(url);
        return;
      } catch (_) { /* Fall through to the selection-based copy for older browsers. */ }
    }
    const field = document.createElement('textarea');
    field.value = url;
    field.setAttribute('readonly', '');
    field.style.position = 'fixed';
    field.style.opacity = '0';
    viewer.appendChild(field);
    field.select();
    const copied = document.execCommand('copy');
    field.remove();
    if (!copied) throw new Error('Clipboard copy was blocked');
  }

  async function shareOrCopyLink(url, title, copiedMessage) {
    if (navigator.share) {
      try {
        await navigator.share({ title, url });
        return;
      } catch (error) {
        if (error && error.name === 'AbortError') return;
      }
    }
    try {
      await copyShareUrl(url);
      announce(copiedMessage);
    } catch (_) {
      announce('Could not copy automatically. Try the browser share menu.');
    }
  }

  shareButton.addEventListener('click', async () => {
    if (!activeGame) return;
    await shareOrCopyLink(
      shareUrlFor(activeGame),
      `${activeGame.name} — Dragon Gaming Platforms`,
      'Game link copied to clipboard.'
    );
  });

  const shareObserver = new MutationObserver(refreshShareTarget);
  shareObserver.observe(iframe, { attributes: true, attributeFilter: ['src'] });
  shareObserver.observe(viewer, { attributes: true, attributeFilter: ['class'] });

  const pageParams = new URLSearchParams(location.search);
  const sharedId = pageParams.get('play');
  const sharedSearch = pageParams.get('search');
  const randomShortcut = pageParams.get('random') === '1';
  if (sharedId || sharedSearch !== null || randomShortcut) {
    const launchUrlIntent = () => {
      if (!sharedId && !randomShortcut && sharedSearch !== null) {
        const input = document.getElementById('gameSearchInput');
        if (input) {
          input.value = sharedSearch;
          input.dispatchEvent(new Event('input', { bubbles: true }));
          input.focus({ preventScroll: true });
        }
        return;
      }

      let targetId = sharedId;
      if (!targetId && randomShortcut) {
        const games = catalog.filter((item) => item.category === 'games');
        if (games.length) targetId = games[Math.floor(Math.random() * games.length)].id;
      }
      if (!targetId) return;
      const card = [...document.querySelectorAll('.game-card[data-id]')]
        .find((element) => element.dataset.id === targetId);
      if (card) {
        card.focus({ preventScroll: true });
        card.click();
      } else if (catalog.some((item) => item.id === targetId)) {
        announce('That game is in the catalog, but its card is not available in the current view.');
      }
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', launchUrlIntent, { once: true });
    } else {
      launchUrlIntent();
    }
  }

  // A small live status in the footer makes online/offline behavior visible,
  // especially after a first visit installs the service worker.
  function updateConnectionStatus() {
    if (!status) return;
    const serviceWorkersAvailable = 'serviceWorker' in navigator && window.isSecureContext;
    if (isRunningStandalone()) {
      status.textContent = !navigator.onLine
        ? 'Installed app — offline'
        : (navigator.serviceWorker?.controller ? 'Installed app — offline cache active' : 'Installed app — online');
      status.dataset.state = navigator.onLine ? 'ready' : 'offline';
    } else if (!navigator.onLine) {
      status.textContent = 'Offline — previously cached pages may still work';
      status.dataset.state = 'offline';
    } else if (!serviceWorkersAvailable) {
      status.textContent = 'Online — offline caching requires a secure site';
      status.dataset.state = 'limited';
    } else if (navigator.serviceWorker.controller) {
      status.textContent = 'Online — offline cache active';
      status.dataset.state = 'ready';
    } else {
      status.textContent = 'Online — preparing offline cache';
      status.dataset.state = 'pending';
    }
  }

  const installButton = document.getElementById('installAppButton');
  let deferredInstallPrompt = null;
  function isRunningStandalone() {
    if (navigator.standalone === true) return true;
    try { return window.matchMedia('(display-mode: standalone)').matches; } catch (_) { return false; }
  }

  if (installButton) {
    installButton.hidden = true;
    installButton.addEventListener('click', async () => {
      if (!deferredInstallPrompt) return;
      const promptEvent = deferredInstallPrompt;
      deferredInstallPrompt = null;
      installButton.disabled = true;
      installButton.textContent = 'Opening install prompt…';
      try {
        await promptEvent.prompt();
        const choice = await promptEvent.userChoice;
        installButton.hidden = true;
        if (choice?.outcome === 'accepted' && status) {
          status.textContent = 'App installed — connection status updates here';
          status.dataset.state = 'ready';
        }
      } catch (_) {
        installButton.hidden = true;
      } finally {
        installButton.disabled = false;
        installButton.textContent = 'Install app';
      }
    });

    window.addEventListener('beforeinstallprompt', (event) => {
      if (isRunningStandalone()) return;
      event.preventDefault();
      deferredInstallPrompt = event;
      installButton.hidden = false;
    });
    window.addEventListener('appinstalled', () => {
      deferredInstallPrompt = null;
      installButton.hidden = true;
      if (status) {
        status.textContent = 'Installed app — connection status updates here';
        status.dataset.state = 'ready';
      }
    });
  }

  const updateButton = document.getElementById('updateAppButton');
  let updateRegistration = null;
  let updateRequested = false;
  let updateActivationTimer = 0;
  let lastUpdateCheck = 0;

  function refreshUpdateButton() {
    if (!updateButton) return;
    const updateWaiting = updateRegistration?.waiting && navigator.serviceWorker.controller;
    updateButton.hidden = !updateWaiting;
    if (updateWaiting) {
      updateButton.disabled = false;
      updateButton.textContent = 'Update ready';
      updateButton.title = 'A newer site worker is ready; reload when convenient.';
    }
  }

  function observeUpdateRegistration(registration) {
    updateRegistration = registration;
    lastUpdateCheck = Date.now();
    refreshUpdateButton();
    registration.addEventListener('updatefound', () => {
      const installing = registration.installing;
      if (!installing) return;
      installing.addEventListener('statechange', () => {
        if (installing.state === 'installed') refreshUpdateButton();
      });
    });
  }

  async function applyWaitingUpdate() {
    const waiting = updateRegistration?.waiting;
    if (!waiting || !updateButton) return;
    const accepted = window.confirm(
      'A site update is ready. Applying it reloads this page and can end an active game or lose unsaved progress. Continue?'
    );
    if (!accepted) return;

    updateRequested = true;
    updateButton.disabled = true;
    updateButton.textContent = 'Applying update…';
    try {
      waiting.postMessage({ type: 'DGP_ACTIVATE_UPDATE' });
      updateActivationTimer = window.setTimeout(() => {
        if (!updateRequested) return;
        updateRequested = false;
        updateButton.disabled = false;
        updateButton.textContent = 'Update ready — retry';
      }, 15000);
    } catch (_) {
      updateRequested = false;
      updateButton.disabled = false;
      updateButton.textContent = 'Update ready — retry';
    }
  }

  if (updateButton && 'serviceWorker' in navigator && window.isSecureContext) {
    updateButton.hidden = true;
    updateButton.addEventListener('click', applyWaitingUpdate);
    const checkForUpdate = () => {
      if (!updateRegistration || document.visibilityState !== 'visible') return;
      if (Date.now() - lastUpdateCheck < 10 * 60 * 1000) return;
      lastUpdateCheck = Date.now();
      updateRegistration.update().catch(() => {});
    };
    document.addEventListener('visibilitychange', checkForUpdate);
    window.addEventListener('focus', checkForUpdate);
  }

  updateConnectionStatus();
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', () => {
      updateConnectionStatus();
      refreshUpdateButton();
      if (updateRequested) {
        updateRequested = false;
        window.clearTimeout(updateActivationTimer);
        location.reload();
      }
    });
    navigator.serviceWorker.ready.then((registration) => {
      updateConnectionStatus();
      if (updateButton && window.isSecureContext) observeUpdateRegistration(registration);
    }).catch(() => {});
  }
})();
