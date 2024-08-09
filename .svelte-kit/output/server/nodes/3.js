

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.9147435f.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/stores.a5f0f004.js","_app/immutable/chunks/singletons.fa271610.js"];
export const stylesheets = ["_app/immutable/assets/3.69c4089e.css"];
export const fonts = [];
