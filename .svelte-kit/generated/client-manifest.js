export { matchers } from './client-matchers.js';

export const components = [
	() => import("../../src/routes/__layout.svelte"),
	() => import("../runtime/components/error.svelte"),
	() => import("../../src/routes/app/expense.svelte"),
	() => import("../../src/routes/app/index.svelte"),
	() => import("../../src/routes/index.svelte")
];

export const dictionary = {
	"": [[0, 4], [1]],
	"app": [[0, 3], [1]],
	"app/expense": [[0, 2], [1]]
};