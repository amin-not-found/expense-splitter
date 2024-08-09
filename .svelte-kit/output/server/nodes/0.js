import * as universal from '../entries/pages/_layout.ts.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.ts";
export const imports = ["_app/immutable/nodes/0.64c88477.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/stores.a5f0f004.js","_app/immutable/chunks/singletons.fa271610.js"];
export const stylesheets = ["_app/immutable/assets/0.fb75186a.css"];
export const fonts = [];
