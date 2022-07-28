const c = [
  "/expense-splitter/_app/immutable/start-2cefd847.js",
  "/expense-splitter/_app/immutable/pages/__layout.svelte-c6925e50.js",
  "/expense-splitter/_app/immutable/assets/__layout-5cfde90d.css",
  "/expense-splitter/_app/immutable/error.svelte-55168e73.js",
  "/expense-splitter/_app/immutable/pages/app/expense.svelte-8af75522.js",
  "/expense-splitter/_app/immutable/assets/expense-85cb8b94.css",
  "/expense-splitter/_app/immutable/pages/app/index.svelte-480e8933.js",
  "/expense-splitter/_app/immutable/pages/index.svelte-04332f53.js",
  "/expense-splitter/_app/immutable/assets/index-69c4089e.css",
  "/expense-splitter/_app/immutable/chunks/index-dffa484d.js",
  "/expense-splitter/_app/immutable/chunks/index-263b6c91.js",
  "/expense-splitter/_app/immutable/chunks/singletons-822f6284.js",
  "/expense-splitter/_app/immutable/chunks/stores-235862f0.js",
  "/expense-splitter/_app/immutable/chunks/navigation-26d96b74.js"
], o = [
  "/expense-splitter/favicon.png",
  "/expense-splitter/robots.txt",
  "/expense-splitter/svelte-welcome.png",
  "/expense-splitter/svelte-welcome.webp"
], a = [
  "/expense-splitter/app",
  "/expense-splitter/app/expense",
  "/expense-splitter"
], l = "1658992344955", p = self, i = `cache-${l}`, u = c.concat(o).concat(a);
p.addEventListener("install", (e) => {
  console.log("[ServiceWorker] Install"), console.log(a), e.waitUntil(caches.open(i).then((s) => s.addAll(u)).then(() => {
    p.skipWaiting();
  }));
});
p.addEventListener("activate", (e) => {
  console.log("[ServiceWorker] Activate"), e.waitUntil(caches.keys().then((s) => Promise.all(s.map((t) => {
    if (t !== i)
      return console.log("[ServiceWorker] Removing old cache", t), caches.delete(t);
  })))), p.clients.claim();
});
p.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET" || e.request.headers.has("range"))
    return;
  const s = new URL(e.request.url);
  !s.protocol.startsWith("http") || s.hostname === self.location.hostname && s.port !== self.location.port || e.request.cache !== "only-if-cached" && (console.log("[ServiceWorker] Fetch", e.request.url), e.respondWith(caches.open(`offline-${l}`).then(async (t) => {
    try {
      const n = await fetch(e.request);
      return t.put(e.request, n.clone()), n;
    } catch (n) {
      const r = await t.match(e.request);
      if (r)
        return r;
      throw n;
    }
  })));
});
