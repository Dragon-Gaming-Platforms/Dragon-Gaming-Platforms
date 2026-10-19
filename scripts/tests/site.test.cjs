const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const test = require('node:test');

const ROOT = path.resolve(__dirname, '../..');
const read = (file) => fs.readFileSync(path.join(ROOT, file), 'utf8');

function extractCatalog(source) {
  const marker = source.indexOf('const GAMES_DATA =');
  assert.notEqual(marker, -1, 'games.js should declare GAMES_DATA');
  const start = source.indexOf('[', marker);
  assert.notEqual(start, -1, 'GAMES_DATA should start with an array');

  let depth = 0;
  let quote = null;
  let escaped = false;
  let lineComment = false;
  let blockComment = false;
  for (let index = start; index < source.length; index += 1) {
    const char = source[index];
    const next = source[index + 1];

    if (lineComment) {
      if (char === '\n') lineComment = false;
      continue;
    }
    if (blockComment) {
      if (char === '*' && next === '/') {
        blockComment = false;
        index += 1;
      }
      continue;
    }
    if (quote) {
      if (escaped) escaped = false;
      else if (char === '\\') escaped = true;
      else if (char === quote) quote = null;
      continue;
    }
    if (char === '/' && next === '/') {
      lineComment = true;
      index += 1;
    } else if (char === '/' && next === '*') {
      blockComment = true;
      index += 1;
    } else if (char === '"' || char === "'" || char === '`') {
      quote = char;
    } else if (char === '[' || char === '{') {
      depth += 1;
    } else if (char === ']' || char === '}') {
      depth -= 1;
      if (depth === 0) return JSON.parse(source.slice(start, index + 1));
      assert.ok(depth > 0, 'GAMES_DATA brackets should be balanced');
    }
  }
  assert.fail('GAMES_DATA array was not closed');
}

test('catalog records are valid and the main-page game count matches', () => {
  const catalog = extractCatalog(read('games.js'));
  assert.ok(catalog.length > 0, 'catalog should not be empty');
  const ids = new Set();
  const categories = new Set(['games', 'emulators', 'other']);

  for (const [index, item] of catalog.entries()) {
    assert.equal(typeof item.id, 'string', `catalog item ${index} needs an id`);
    assert.ok(item.id.trim(), `catalog item ${index} has a blank id`);
    assert.ok(!ids.has(item.id), `duplicate catalog id: ${item.id}`);
    ids.add(item.id);
    assert.equal(typeof item.name, 'string', `${item.id} needs a name`);
    assert.ok(item.name.trim(), `${item.id} has a blank name`);
    assert.ok(categories.has(item.category), `${item.id} has unsupported category ${item.category}`);
    assert.equal(typeof item.path, 'string', `${item.id} needs a game path`);
    assert.ok(item.path.trim(), `${item.id} has a blank game path`);
    assert.ok(['http:', 'https:'].includes(new URL(item.path, 'https://catalog.example/').protocol), `${item.id} has an invalid path`);
  }

  const gameCount = catalog.filter((item) => item.category === 'games').length;
  const indexHtml = read('index.html');
  const navCount = indexHtml.match(/Games\s*\((\d+)\)/);
  assert.ok(navCount, 'index.html should show a game count in the navigation');
  assert.equal(Number(navCount[1]), gameCount, 'navigation game count should match GAMES_DATA');

  const totalCount = catalog.length;
  const heroCount = indexHtml.match(/Play\s+(\d+)\+\s+classic games/i);
  assert.ok(heroCount, 'index.html should show an approximate library size');
  assert.ok(Number(heroCount[1]) <= totalCount, 'hero count must not exceed the actual catalog size');
});

test('PWA manifest is valid, fork-relative, and references existing icons', () => {
  const manifest = JSON.parse(read('manifest.webmanifest'));
  assert.equal(manifest.start_url, './');
  assert.equal(manifest.scope, './');
  assert.ok(Array.isArray(manifest.icons) && manifest.icons.length >= 1);
  assert.ok(Array.isArray(manifest.shortcuts) && manifest.shortcuts.length >= 1);

  const iconEntries = [...manifest.icons, ...manifest.shortcuts.flatMap((shortcut) => shortcut.icons || [])];
  for (const icon of iconEntries) {
    assert.ok(icon.src.startsWith('./'), `manifest icon must be fork-relative: ${icon.src}`);
    assert.ok(fs.existsSync(path.join(ROOT, icon.src.slice(2))), `missing PWA icon: ${icon.src}`);
  }
  for (const shortcut of manifest.shortcuts) {
    assert.ok(shortcut.name && shortcut.url, 'each shortcut needs a name and URL');
    const target = new URL(shortcut.url, 'https://site.example/Dragon-Gaming-Platforms/');
    assert.ok(target.pathname.startsWith('/Dragon-Gaming-Platforms/'), `shortcut escapes its site scope: ${shortcut.url}`);
  }
});

test('service-worker shell contains the main app and excludes portable distributions', () => {
  const worker = read('sw.js');
  const schema = worker.match(/const CACHE_SCHEMA = (\d+);/);
  assert.ok(schema && Number(schema[1]) > 0, 'worker should have a positive cache schema');
  const shell = worker.match(/const SHELL_URLS = \[([\s\S]*?)\]\s*\.map/);
  assert.ok(shell, 'worker should declare a shell cache list');
  const paths = [...shell[1].matchAll(/["']([^"']+)["']/g)].map((match) => match[1]);
  for (const required of ['index.html', 'styles.css', 'games.js', 'site-enhancements.css', 'site-enhancements.js', 'manifest.webmanifest', '404.html']) {
    assert.ok(paths.includes(required), `shell cache is missing ${required}`);
    assert.ok(fs.existsSync(path.join(ROOT, required)), `shell asset does not exist: ${required}`);
  }
  for (const excluded of ['singlefile.html', 'cdn.singlefile.html', 'secure-singlefile.html', 'cdn.games.js']) {
    assert.ok(!paths.includes(excluded), `portable distribution must not enter shell cache: ${excluded}`);
  }
});

test('main page loads the manifest, shared engine, and main-site enhancements', () => {
  const html = read('index.html');
  for (const reference of [
    'href="./manifest.webmanifest"',
    'href="styles.css"',
    'href="site-enhancements.css"',
    'src="games.js"',
    'src="site-enhancements.js"',
  ]) {
    assert.ok(html.includes(reference), `index.html is missing ${reference}`);
  }
});

test('recent, shared, and random game links work in the browser shell', async (t) => {
  let JSDOM;
  try {
    ({ JSDOM } = require('jsdom'));
  } catch (_) {
    t.skip('jsdom is installed by the CI workflow for browser integration tests');
    return;
  }

  const catalogScript = read('games.js');
  const enhancementScript = read('site-enhancements.js');
  const catalogIds = new Set(extractCatalog(catalogScript).map((item) => item.id));
  const pageHtml = read('index.html')
    .replace(/<script src="games\.js"><\/script>/, '')
    .replace(/<script src="site-enhancements\.js"><\/script>/, '');

  async function boot(search = '', initialHistory) {
    const dom = new JSDOM(pageHtml, {
      url: `https://site.example/Dragon-Gaming-Platforms/${search}`,
      runScripts: 'dangerously',
      pretendToBeVisual: true,
      beforeParse(window) {
        window.fetch = async () => ({ ok: false, status: 404, json: async () => ({}) });
        Object.defineProperty(window, 'isSecureContext', { configurable: true, value: true });
        if (initialHistory !== undefined) {
          window.localStorage.setItem('dgp.recent-games.v1', JSON.stringify(initialHistory));
        }
      },
    });
    const { window } = dom;
    for (const source of [catalogScript, enhancementScript]) {
      const script = window.document.createElement('script');
      script.textContent = source;
      window.document.body.appendChild(script);
    }
    if (window.document.readyState !== 'complete') {
      await new Promise((resolve) => window.addEventListener('load', resolve, { once: true }));
    }
    await new Promise((resolve) => window.setTimeout(resolve, 300));
    return dom;
  }

  const savedPage = await boot('', ['2048', 'not-a-catalog-id', '2048']);
  const savedWindow = savedPage.window;
  const shelf = savedWindow.document.querySelector('.site-recent-shelf');
  assert.ok(shelf && !shelf.hidden, 'valid saved history should be shown');
  assert.equal(shelf.querySelectorAll('.site-recent-shelf__item').length, 1, 'history should be validated and deduplicated');
  assert.match(shelf.querySelector('a').href, /[?&]play=2048(?:&|$)/, 'recent item should have a playable link');
  shelf.querySelector('.site-recent-shelf__clear').click();
  assert.equal(savedWindow.localStorage.getItem('dgp.recent-games.v1'), null, 'clear history should remove local storage');
  assert.ok(shelf.hidden, 'clear history should hide the empty shelf');
  assert.equal(savedWindow.document.activeElement.id, 'gameSearchInput', 'clearing history should preserve keyboard focus');
  savedPage.window.close();

  const sharedPage = await boot('?play=2048');
  const sharedWindow = sharedPage.window;
  assert.ok(sharedWindow.document.getElementById('gameViewer').classList.contains('active'), 'shared-game URL should launch the game');
  assert.equal(JSON.parse(sharedWindow.localStorage.getItem('dgp.recent-games.v1'))[0], '2048', 'launched game should be remembered');
  sharedPage.window.close();

  const randomPage = await boot('?random=1');
  const randomWindow = randomPage.window;
  const remembered = JSON.parse(randomWindow.localStorage.getItem('dgp.recent-games.v1'));
  assert.ok(randomWindow.document.getElementById('gameViewer').classList.contains('active'), 'random shortcut should launch a game');
  assert.ok(remembered.length === 1 && catalogIds.has(remembered[0]), 'random game should be recorded as a valid catalog ID');
  assert.ok(!randomWindow.document.querySelector('.site-recent-shelf').hidden, 'recent shelf should appear after launching a game');
  randomPage.window.close();
});
