export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/app/__layout.svelte"),
	() => import("../../src/routes/app/event.svelte"),
	() => import("../../src/routes/app/index.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 5], [1]],
	"app": [[0, 2, 4], [1]],
	"app/event": [[0, 2, 3], [1]]
};