export const manifest = {
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt","svelte-welcome.png","svelte-welcome.webp","service-worker.js"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain",".webp":"image/webp"},
	_: {
		entry: {"file":"_app/immutable/start-2cefd847.js","imports":["_app/immutable/start-2cefd847.js","_app/immutable/chunks/index-dffa484d.js","_app/immutable/chunks/index-263b6c91.js","_app/immutable/chunks/singletons-822f6284.js"],"stylesheets":[]},
		nodes: [
			() => import('./nodes/0.js'),
			() => import('./nodes/1.js'),
			() => import('./nodes/4.js'),
			() => import('./nodes/3.js'),
			() => import('./nodes/2.js')
		],
		routes: [
			{
				type: 'page',
				id: "",
				pattern: /^\/$/,
				names: [],
				types: [],
				path: "/",
				shadow: null,
				a: [0,2],
				b: [1]
			},
			{
				type: 'page',
				id: "app",
				pattern: /^\/app\/?$/,
				names: [],
				types: [],
				path: "/app",
				shadow: null,
				a: [0,3],
				b: [1]
			},
			{
				type: 'page',
				id: "app/expense",
				pattern: /^\/app\/expense\/?$/,
				names: [],
				types: [],
				path: "/app/expense",
				shadow: null,
				a: [0,4],
				b: [1]
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
