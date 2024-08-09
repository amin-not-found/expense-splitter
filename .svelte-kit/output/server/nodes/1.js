

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.b584f2ce.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/singletons.fa271610.js"];
export const stylesheets = [];
export const fonts = [];
