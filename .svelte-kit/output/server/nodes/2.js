

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.ecc88443.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/Loading.4d5898d3.js","_app/immutable/chunks/Modal.5afdcc6d.js","_app/immutable/chunks/stores.a5f0f004.js","_app/immutable/chunks/singletons.fa271610.js"];
export const stylesheets = ["_app/immutable/assets/Loading.aa1c008f.css","_app/immutable/assets/Modal.e2c2d818.css"];
export const fonts = [];
