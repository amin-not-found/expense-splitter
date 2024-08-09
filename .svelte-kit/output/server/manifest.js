export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "expense-splitter/_app",
	assets: new Set(["asset-generator/icon.svg","favicon.png","icon.svg","icons/icon-128x128.png","icons/icon-144x144.png","icons/icon-192x192.png","icons/icon-384x384.png","icons/icon-48x48.png","icons/icon-512x512.png","icons/icon-72x72.png","icons/icon-96x96.png","manifest_237170714c8996b2a9e23fac663a8e4c5b5305d26.zip","robots.txt","web-manifest.json","service-worker.js"]),
	mimeTypes: {".svg":"image/svg+xml",".png":"image/png",".zip":"application/zip",".txt":"text/plain",".json":"application/json"},
	_: {
		client: {"start":"_app/immutable/entry/start.79e7caae.js","app":"_app/immutable/entry/app.bd14b6ea.js","imports":["_app/immutable/entry/start.79e7caae.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/singletons.fa271610.js","_app/immutable/entry/app.bd14b6ea.js","_app/immutable/chunks/index.737bebd0.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('./nodes/0.js')),
			__memo(() => import('./nodes/1.js'))
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
