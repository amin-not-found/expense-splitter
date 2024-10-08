import adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

const dev = false;

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// Uses /docs for github pages
		adapter: adapter({ pages: 'docs', assets: 'docs' }),

		paths: {
			base: dev ? '' : '/expense-splitter'
		},

		serviceWorker: {
			register: true
		}
	}
};

export default config;
