

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.9450995c.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/ModalController.f8213627.js","_app/immutable/chunks/stores.a5f0f004.js","_app/immutable/chunks/singletons.fa271610.js","_app/immutable/chunks/Modal.5afdcc6d.js"];
export const stylesheets = ["_app/immutable/assets/4.59cbfd55.css","_app/immutable/assets/ModalController.c18533c9.css","_app/immutable/assets/Modal.e2c2d818.css"];
export const fonts = [];
