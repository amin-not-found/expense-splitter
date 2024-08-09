
import root from '__GENERATED__/root.svelte';
import { respond } from '/Coding/expense-splitter/main/.svelte-kit/runtime/server/index.js';
import { set_paths, assets, base } from '/Coding/expense-splitter/main/.svelte-kit/runtime/paths.js';
import { set_prerendering } from '/Coding/expense-splitter/main/.svelte-kit/runtime/env.js';

const template = ({ head, body, assets, nonce }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\t<head>\n\t\t<meta charset=\"utf-8\" />\n\t\t<meta name=\"description\" content=\"Settle debts easily\" />\n\t\t<meta name=\"theme-color\" content=\"#d1d1e9\" />\n\n\t\t<!-- TODO: Move dollar on coin a bit higher and also ove arrows higher -->\n\t\t<link rel=\"icon\" href=\"" + assets + "/favicon.png\" />\n\t\t<link rel=\"manifest\" href=\"" + assets + "/web-manifest.json\" />\n\t\t<link rel=\"apple-touch-icon\" href=\"" + assets + "/icons/icon-192x192.png\" />\n\t\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t\t" + head + "\n\t</head>\n\t<body>\n\t\t" + body + "\n\t</body>\n</html>\n";

let read = null;

set_paths({"base":"/expense-splitter","assets":""});

let default_protocol = 'https';

// allow paths to be globally overridden
// in svelte-kit preview and in prerendering
export function override(settings) {
	default_protocol = settings.protocol || default_protocol;
	set_paths(settings.paths);
	set_prerendering(settings.prerendering);
	read = settings.read;
}

export class Server {
	constructor(manifest) {
		this.options = {
			csp: {"mode":"auto","directives":{"upgrade-insecure-requests":false,"block-all-mixed-content":false}},
			dev: false,
			floc: false,
			get_stack: error => String(error), // for security
			handle_error: (error, event) => {
				this.options.hooks.handleError({
					error,
					event,

					// TODO remove for 1.0
					// @ts-expect-error
					get request() {
						throw new Error('request in handleError has been replaced with event. See https://github.com/sveltejs/kit/pull/3384 for details');
					}
				});
				error.stack = this.options.get_stack(error);
			},
			hooks: null,
			hydrate: true,
			manifest,
			method_override: {"parameter":"_method","allowed":["PATCH","DELETE"]},
			paths: { base, assets },
			prefix: assets + '/_app/immutable/',
			prerender: {
				default: true,
				enabled: true
			},
			read,
			root,
			service_worker: base + '/service-worker.js',
			router: true,
			template,
			template_contains_nonce: false,
			trailing_slash: "never"
		};
	}

	async respond(request, options = {}) {
		if (!(request instanceof Request)) {
			throw new Error('The first argument to server.respond must be a Request object. See https://github.com/sveltejs/kit/pull/3384 for details');
		}

		if (!this.options.hooks) {
			const module = await import("./hooks.js");
			this.options.hooks = {
				getSession: module.getSession || (() => ({})),
				handle: module.handle || (({ event, resolve }) => resolve(event)),
				handleError: module.handleError || (({ error }) => console.error(error.stack)),
				externalFetch: module.externalFetch || fetch
			};
		}

		return respond(request, this.options, options);
	}
}
