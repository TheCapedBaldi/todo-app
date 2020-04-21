const VERSION = 6;
const CACHE_NAME = `stolen-cra-cache-${VERSION}`;
const BUILD_FOLDER = "";
const PRECACHE_MANIFEST = `${BUILD_FOLDER}/resources-manifest.json`;

/**
 * Background service that the browser will execute in the background.
 * Not much needed for this proj apart from relying on cached data, but
 * good to add for features like push notifications and background async.
 * More info: https://developers.google.com/web/fundamentals/primers/service-workers/
 */
self.addEventListener("install", (event) => {
  event.waitUntil(
    new Promise((resolve) => {
      caches
        .open(CACHE_NAME)
        .then(async (cache) => {
          const resp = await fetch(PRECACHE_MANIFEST);
          const jsonResp = await resp.json();
          const value = await cache.addAll([
            "/",
            ...jsonResp.TO_CACHE.map((name) => `${BUILD_FOLDER}/${name}`),
          ]);
          return resolve(value);
        })
        .catch((err) => console.error("SW errors", err));
    })
  );
});

self.addEventListener("activate", function onActivate(event) {
  event.waitUntil(
    caches.keys().then((keys) => {
      return keys
        .filter((key) => key !== CACHE_NAME)
        .forEach((key) => caches.delete(key));
    })
  );
});

self.addEventListener("fetch", function onFetch(event) {
  if (event.request.url.indexOf(location.origin) === 0) {
    event.respondWith(cacheOrNetwork(event));
  }
});

async function cacheOrNetwork(event) {
  const clonedRequest = event.request.clone();
  const resp = await caches.match(event.request);
  return resp || fetch(clonedRequest);
}
