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

  // Improve the dynamically rendered search controls without changing the shared
  // game engine that is also embedded in the portable single-file releases.
  function patchSearchAccessibility() {
    if (filterRoot && !filterRoot.hasAttribute('tabindex')) filterRoot.setAttribute('tabindex', '-1');
    const input = document.getElementById('gameSearchInput');
    if (input && !input.hasAttribute('aria-label')) {
      input.setAttribute('aria-label', 'Search games, emulators, and tools');
    }
    const clear = document.getElementById('searchClearBtn');
    if (clear && !clear.hasAttribute('aria-label')) clear.setAttribute('aria-label', 'Clear search');
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

  shareButton.addEventListener('click', async () => {
    if (!activeGame) return;
    const url = shareUrlFor(activeGame);
    if (navigator.share) {
      try {
        await navigator.share({ title: `${activeGame.name} — Dragon Gaming Platforms`, url });
        return;
      } catch (error) {
        if (error && error.name === 'AbortError') return;
      }
    }
    try {
      await copyShareUrl(url);
      announce('Game link copied to clipboard.');
    } catch (_) {
      announce('Could not copy automatically. Try the browser share menu.');
    }
  });

  const shareObserver = new MutationObserver(refreshShareTarget);
  shareObserver.observe(iframe, { attributes: true, attributeFilter: ['src'] });
  shareObserver.observe(viewer, { attributes: true, attributeFilter: ['class'] });

  const sharedId = new URLSearchParams(location.search).get('play');
  if (sharedId) {
    const launchSharedGame = () => {
      const card = [...document.querySelectorAll('.game-card[data-id]')]
        .find((element) => element.dataset.id === sharedId);
      if (card) {
        card.focus({ preventScroll: true });
        card.click();
      } else if (catalog.some((item) => item.id === sharedId)) {
        announce('That game is in the catalog, but its card is not available in the current view.');
      }
    };
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', launchSharedGame, { once: true });
    } else {
      launchSharedGame();
    }
  }

  // A small live status in the footer makes online/offline behavior visible,
  // especially after a first visit installs the service worker.
  function updateConnectionStatus() {
    if (!status) return;
    const serviceWorkersAvailable = 'serviceWorker' in navigator && window.isSecureContext;
    if (!navigator.onLine) {
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

  updateConnectionStatus();
  window.addEventListener('online', updateConnectionStatus);
  window.addEventListener('offline', updateConnectionStatus);
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.addEventListener('controllerchange', updateConnectionStatus);
    navigator.serviceWorker.ready.then(updateConnectionStatus).catch(() => {});
  }
})();
