/*
 * Dragon Gaming Platforms — site-scoped offline cache.
 *
 * This worker is intentionally independent of Scramjet/GUST and any game-owned
 * workers. It only stores same-origin site-shell files and visited local game
 * assets. Cross-origin game hosts (including Dragon-Gaming-Assets) are bypassed.
 */
const CURRENT_VER = 'v1.2.2';
const SHELL_CACHE = `dgp-shell-${CURRENT_VER}`;
const RUNTIME_CACHE = 'dgp-runtime-v1';
const SITE_ROOT = new URL(self.registration.scope);
const SHELL_URLS = ['index.html', 'styles.css', 'games.js', '404.html']
  .map((path) => new URL(path, SITE_ROOT).href);

// Soft bounds for this worker's runtime cache. The byte count uses the response
// Content-Length when present and a conservative estimate otherwise; the entry
// cap is a second guard for servers that omit Content-Length.
const MAX_RUNTIME_BYTES = 150 * 1024 * 1024;
const MAX_RUNTIME_ENTRIES = 300;
const MAX_RUNTIME_AGE_MS = 24 * 60 * 60 * 1000;
const UNKNOWN_RESOURCE_BYTES = 1024 * 1024;
const MAX_SINGLE_RESOURCE_BYTES = 40 * 1024 * 1024;
const MANAGED_PREFIXES = ['games/', 'emulators/', 'other/', 'browsers/', 'thumbs/', 'assets/'];
const EXCLUDED_FILES = new Set([
  'singlefile.html',
  'cdn.singlefile.html',
  'secure-singlefile.html',
  'cdn.games.js',
]);

function relativePath(url) {
  const path = new URL(url).pathname;
  const rootPath = SITE_ROOT.pathname;
  if (!path.startsWith(rootPath)) return null;
  return path.slice(rootPath.length);
}

function isExcluded(url) {
  const path = relativePath(url);
  return path !== null && EXCLUDED_FILES.has(path);
}

function isManagedAsset(url) {
  const path = relativePath(url);
  return path !== null && MANAGED_PREFIXES.some((prefix) => path.startsWith(prefix));
}

function isShellUrl(url) {
  return SHELL_URLS.includes(new URL(url).href);
}

function resourceSize(response) {
  const recorded = Number(response.headers.get('x-dgp-cache-size'));
  if (Number.isFinite(recorded) && recorded > 0) return recorded;
  const length = Number(response.headers.get('content-length'));
  return Number.isFinite(length) && length > 0 ? length : UNKNOWN_RESOURCE_BYTES;
}

function cacheable(request, response) {
  if (request.method !== 'GET' || request.headers.has('range')) return false;
  if (new URL(request.url).origin !== SITE_ROOT.origin || isExcluded(request.url)) return false;
  if (!response || response.status !== 200 || response.type !== 'basic') return false;
  if (response.headers.get('cache-control')?.toLowerCase().includes('no-store')) return false;
  if (response.headers.get('cache-control')?.toLowerCase().includes('private')) return false;
  if (response.headers.get('vary')?.trim() === '*') return false;
  const size = resourceSize(response);
  return size <= MAX_SINGLE_RESOURCE_BYTES;
}

function annotatedResponse(response, touchedAt = Date.now()) {
  const headers = new Headers(response.headers);
  const estimatedSize = resourceSize(response);
  // Fetch exposes decoded bodies; do not retain transfer metadata that could
  // describe the original compressed wire representation instead.
  headers.delete('content-encoding');
  headers.delete('content-length');
  headers.delete('transfer-encoding');
  headers.delete('content-range');
  headers.set('x-dgp-cache-size', String(estimatedSize));
  headers.set('x-dgp-cache-touched', String(touchedAt));
  // Keep the original fetch time when refreshing the LRU timestamp on a hit.
  if (!headers.has('x-dgp-cache-fetched')) headers.set('x-dgp-cache-fetched', String(Date.now()));
  return new Response(response.clone().body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}

async function pruneRuntimeCache(cache) {
  const keys = await cache.keys();
  const records = await Promise.all(keys.map(async (request, order) => {
    const response = await cache.match(request);
    return {
      request,
      order,
      touched: Number(response?.headers.get('x-dgp-cache-touched')) || 0,
      size: Number(response?.headers.get('x-dgp-cache-size')) || UNKNOWN_RESOURCE_BYTES,
    };
  }));

  let bytes = records.reduce((total, item) => total + item.size, 0);
  let count = records.length;
  records.sort((a, b) => a.touched - b.touched || a.order - b.order);
  for (const item of records) {
    if (bytes <= MAX_RUNTIME_BYTES && count <= MAX_RUNTIME_ENTRIES) break;
    if (await cache.delete(item.request)) {
      bytes -= item.size;
      count -= 1;
    }
  }
}

async function putRuntime(request, response) {
  if (!cacheable(request, response)) return;
  const cache = await caches.open(RUNTIME_CACHE);
  await cache.put(request, annotatedResponse(response));
  await pruneRuntimeCache(cache);
}

async function touchRuntime(cache, request, response) {
  // Rewriting the cache entry refreshes its LRU timestamp without changing the
  // response body or any game-owned files.
  await cache.put(request, annotatedResponse(response));
  await pruneRuntimeCache(cache);
}

self.addEventListener('install', (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    await Promise.all(SHELL_URLS.map(async (url) => {
      const response = await fetch(new Request(url, { cache: 'reload' }));
      if (!response.ok) throw new Error(`Could not precache ${url}: ${response.status}`);
      await cache.put(url, response);
    }));
    // Deliberately do not call skipWaiting(): an update must not take over a
    // game session midway through play. It activates when existing tabs close.
  })());
});

self.addEventListener('activate', (event) => {
  event.waitUntil((async () => {
    const names = await caches.keys();
    await Promise.all(names
      .filter((name) => name.startsWith('dgp-shell-') && name !== SHELL_CACHE)
      .map((name) => caches.delete(name)));
    await self.clients.claim();
  })());
});

async function handleNavigation(request) {
  try {
    const response = await fetch(request);
    if (cacheable(request, response) && isManagedAsset(request.url)) {
      await putRuntime(request, response.clone());
    }
    return response;
  } catch (error) {
    const cached = await caches.match(request);
    if (cached) return cached;
    const shell = await caches.open(SHELL_CACHE);
    const app = await shell.match(new URL('index.html', SITE_ROOT).href);
    if (app) return app;
    throw error;
  }
}

async function handleShellResource(request, cachedPromise, refresh) {
  try {
    const cached = await cachedPromise;
    if (cached) return cached;
    return await refresh;
  } catch (error) {
    const shell = await caches.open(SHELL_CACHE);
    const fallback = await shell.match(request);
    if (fallback) return fallback;
    throw error;
  }
}

function runtimeEntryIsFresh(response) {
  const fetchedAt = Number(response?.headers.get('x-dgp-cache-fetched')) || 0;
  return fetchedAt > 0 && Date.now() - fetchedAt < MAX_RUNTIME_AGE_MS;
}

async function handleRuntimeAsset(request, cachedPromise, refresh) {
  try {
    const cached = await cachedPromise;
    if (cached) return cached;
    return await refresh();
  } catch (error) {
    const runtime = await caches.open(RUNTIME_CACHE);
    const fallback = await runtime.match(request);
    if (fallback) return fallback;
    throw error;
  }
}

self.addEventListener('fetch', (event) => {
  const request = event.request;
  const url = new URL(request.url);
  if (request.method !== 'GET' || url.origin !== SITE_ROOT.origin || isExcluded(url)) return;

  if (request.mode === 'navigate') {
    event.respondWith(handleNavigation(request));
    return;
  }

  if (isShellUrl(url.href)) {
    const cachedPromise = caches.open(SHELL_CACHE).then((cache) => cache.match(request));
    const refresh = fetch(request).then(async (response) => {
      if (cacheable(request, response)) {
        const shell = await caches.open(SHELL_CACHE);
        await shell.put(request, response.clone());
      }
      return response;
    });
    event.waitUntil(refresh.catch(() => {}));
    event.respondWith(handleShellResource(request, cachedPromise, refresh));
    return;
  }

  if (isManagedAsset(url.href)) {
    const cachedPromise = caches.open(RUNTIME_CACHE).then((cache) => cache.match(request));
    const refresh = () => fetch(request).then(async (response) => {
      await putRuntime(request, response.clone());
      return response;
    });
    const cacheMaintenance = cachedPromise.then(async (cached) => {
      if (!cached) return;
      const runtime = await caches.open(RUNTIME_CACHE);
      await touchRuntime(runtime, request, cached.clone());
      // Fresh hits are cache-only (saving repeat downloads). Older entries
      // revalidate in the background once a day and remain usable offline.
      if (!runtimeEntryIsFresh(cached)) await refresh().catch(() => {});
    });
    event.waitUntil(cacheMaintenance.catch(() => {}));
    event.respondWith(handleRuntimeAsset(request, cachedPromise, refresh));
  }
});
