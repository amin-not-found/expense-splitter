

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.dcb93394.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/ModalController.1bc59598.js","_app/immutable/chunks/stores.d1fff28e.js","_app/immutable/chunks/singletons.4caf7dee.js","_app/immutable/chunks/Modal.a14953a2.js"];
export const stylesheets = ["_app/immutable/assets/4.59cbfd55.css","_app/immutable/assets/ModalController.c18533c9.css","_app/immutable/assets/Modal.e2c2d818.css"];
export const fonts = [];
