

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.24964f06.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/stores.d1fff28e.js","_app/immutable/chunks/singletons.4caf7dee.js"];
export const stylesheets = ["_app/immutable/assets/3.69c4089e.css"];
export const fonts = [];
