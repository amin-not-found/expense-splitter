

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/event/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.de236cb7.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/Modal.a14953a2.js","_app/immutable/chunks/stores.d1fff28e.js","_app/immutable/chunks/singletons.4caf7dee.js","_app/immutable/chunks/ModalController.1bc59598.js","_app/immutable/chunks/Loading.4d5898d3.js"];
export const stylesheets = ["_app/immutable/assets/5.e552e149.css","_app/immutable/assets/Modal.e2c2d818.css","_app/immutable/assets/ModalController.c18533c9.css","_app/immutable/assets/Loading.aa1c008f.css"];
export const fonts = [];
