

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/app/event/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.11c17d5d.js","_app/immutable/chunks/index.737bebd0.js","_app/immutable/chunks/Modal.5afdcc6d.js","_app/immutable/chunks/stores.a5f0f004.js","_app/immutable/chunks/singletons.fa271610.js","_app/immutable/chunks/ModalController.f8213627.js","_app/immutable/chunks/Loading.4d5898d3.js"];
export const stylesheets = ["_app/immutable/assets/5.e552e149.css","_app/immutable/assets/Modal.e2c2d818.css","_app/immutable/assets/ModalController.c18533c9.css","_app/immutable/assets/Loading.aa1c008f.css"];
export const fonts = [];
