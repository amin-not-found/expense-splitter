const r = [
  "/expense-splitter/_app/immutable/start-02090a75.js",
  "/expense-splitter/_app/immutable/pages/__layout.svelte-0c321353.js",
  "/expense-splitter/_app/immutable/assets/__layout-2bb5dee5.css",
  "/expense-splitter/_app/immutable/error.svelte-d5f433e5.js",
  "/expense-splitter/_app/immutable/pages/app/__layout.svelte-8e7c2387.js",
  "/expense-splitter/_app/immutable/pages/app/event.svelte-9e9bd54c.js",
  "/expense-splitter/_app/immutable/assets/event-dabad7db.css",
  "/expense-splitter/_app/immutable/pages/app/index.svelte-4537a577.js",
  "/expense-splitter/_app/immutable/assets/index-178925e3.css",
  "/expense-splitter/_app/immutable/pages/index.svelte-a0ad2481.js",
  "/expense-splitter/_app/immutable/assets/index-69c4089e.css",
  "/expense-splitter/_app/immutable/chunks/index-2e9e6908.js",
  "/expense-splitter/_app/immutable/chunks/singletons-001d274c.js",
  "/expense-splitter/_app/immutable/chunks/stores-a14884fd.js",
  "/expense-splitter/_app/immutable/chunks/Loading-72a23643.js",
  "/expense-splitter/_app/immutable/assets/Loading-10ba07d6.css",
  "/expense-splitter/_app/immutable/chunks/Modal-8f96ab8e.js",
  "/expense-splitter/_app/immutable/assets/Modal-e2c2d818.css",
  "/expense-splitter/_app/immutable/chunks/ModalController-c4437854.js",
  "/expense-splitter/_app/immutable/assets/ModalController-c18533c9.css"
], c = [
  "/expense-splitter/asset-generator/icon.svg",
  "/expense-splitter/favicon.png",
  "/expense-splitter/icon.svg",
  "/expense-splitter/icons/icon-128x128.png",
  "/expense-splitter/icons/icon-144x144.png",
  "/expense-splitter/icons/icon-192x192.png",
  "/expense-splitter/icons/icon-384x384.png",
  "/expense-splitter/icons/icon-48x48.png",
  "/expense-splitter/icons/icon-512x512.png",
  "/expense-splitter/icons/icon-72x72.png",
  "/expense-splitter/icons/icon-96x96.png",
  "/expense-splitter/manifest_237170714c8996b2a9e23fac663a8e4c5b5305d26.zip",
  "/expense-splitter/robots.txt",
  "/expense-splitter/web-manifest.json"
], o = [
  "/expense-splitter/app",
  "/expense-splitter/app/event",
  "/expense-splitter"
], a = "1660208810800", p = self, l = `cache-${a}`, x = r.concat(c).concat(o);
p.addEventListener("install", (e) => {
  console.log("[ServiceWorker] Install"), e.waitUntil(
    caches.open(l).then((s) => s.addAll(x)).then(() => {
      p.skipWaiting();
    })
  );
});
p.addEventListener("activate", (e) => {
  console.log("[ServiceWorker] Activate"), e.waitUntil(
    caches.keys().then((s) => Promise.all(
      s.map((t) => {
        if (t !== l)
          return console.log("[ServiceWorker] Removing old cache", t), caches.delete(t);
      })
    ))
  ), p.clients.claim();
});
p.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url);
  !s.protocol.startsWith("http") || s.hostname === self.location.hostname && s.port !== self.location.port || e.request.cache !== "only-if-cached" && (console.log("[ServiceWorker] Fetch", e.request.url), e.respondWith(
    caches.open(`offline-${a}`).then(async (t) => {
      try {
        const n = await fetch(e.request);
        return t.put(e.request, n.clone()), n;
      } catch (n) {
        const i = await t.match(e.request);
        if (i)
          return i;
        throw n;
      }
    })
  ));
});
