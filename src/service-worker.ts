import { build, files, prerendered, version } from '$service-worker';

const worker = self as unknown as ServiceWorkerGlobalScope;
const CACHE_NAME = `cache-${version}`;
const FILES = build.concat(files).concat(prerendered);

worker.addEventListener('install', (event) => {
	console.log('[ServiceWorker] Install');
	console.log(prerendered);
	event.waitUntil(
		caches
			.open(CACHE_NAME)
			.then((cache) => cache.addAll(FILES))
			.then(() => {
				worker.skipWaiting();
			})
	);
});

worker.addEventListener('activate', (event) => {
	console.log('[ServiceWorker] Activate');
	// Remove previous cached data from disk.
	event.waitUntil(
		caches.keys().then((keyList) => {
			return Promise.all(
				keyList.map((key) => {
					if (key !== CACHE_NAME) {
						console.log('[ServiceWorker] Removing old cache', key);
						return caches.delete(key);
					}
				})
			);
		})
	);
	worker.clients.claim();
});

worker.addEventListener('fetch', (event) => {
	if (event.request.method !== 'GET' || event.request.headers.has('range')) return;

	const url = new URL(event.request.url);

	// don't try to handle e.g. data: URIs
	if (!url.protocol.startsWith('http')) return;

	// ignore dev server requests
	if (url.hostname === self.location.hostname && url.port !== self.location.port) return;

	if (event.request.cache === 'only-if-cached') return;

	console.log('[ServiceWorker] Fetch', event.request.url);

	// for everything else, try the network first, falling back to
	// cache if the user is offline. (If the pages never change, you
	// might prefer a cache-first approach to a network-first one.)
	event.respondWith(
		caches.open(`offline-${version}`).then(async (cache) => {
			try {
				const response = await fetch(event.request);
				cache.put(event.request, response.clone());
				return response;
			} catch (err) {
				const response = await cache.match(event.request);
				if (response) return response;

				throw err;
			}
		})
	);
});
