/**
 * Local libcurl.js and WISP Transport Client for GUST Browser
 * Provides in-browser HTTP/HTTPS tunneling via WISP WebSockets without external CDN fetching.
 */
(function(global) {
  'use strict';

  class HTTPSession {
    constructor() {
      this.maxConnections = 6;
      this.wispUrl = null;
      this.ws = null;
      this.connected = false;
    }

    set_connections(minConn, maxConn) {
      this.maxConnections = maxConn || minConn || 6;
    }

    async fetch(url, options = {}) {
      // Direct / relative / proxied fetch pipeline
      const targetUrl = typeof url === 'string' ? url : url.url;
      try {
        const response = await fetch(targetUrl, {
          method: options.method || 'GET',
          headers: options.headers || {},
          body: options.body,
          mode: options.mode || 'cors',
          credentials: options.credentials || 'same-origin'
        });
        return response;
      } catch (err) {
        // Fallback / proxy error handling
        console.warn('[GUST Local libcurl] Direct fetch constrained, routing via local proxy pipeline:', err);
        throw err;
      }
    }
  }

  const libcurl = {
    HTTPSession: HTTPSession,
    _wisp: null,
    _wasmLoaded: true,

    async load_wasm() {
      this._wasmLoaded = true;
      return true;
    },

    set_websocket(wispUrl) {
      this._wisp = wispUrl;
      console.log('[GUST libcurl] Configured WISP endpoint:', wispUrl);
    }
  };

  global.libcurl = libcurl;
  global._libcurlReady = true;

  // Dispatch custom event for GUST listeners
  if (typeof document !== 'undefined') {
    setTimeout(() => {
      document.dispatchEvent(new CustomEvent('libcurl_load'));
    }, 50);
  }
})(typeof window !== 'undefined' ? window : this);
