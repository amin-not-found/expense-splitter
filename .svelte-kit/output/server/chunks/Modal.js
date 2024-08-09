import { c as create_ssr_component } from "./index2.js";
import { m as manager } from "./stores.js";
const Modal_svelte_svelte_type_style_lang = "";
const css = {
  code: "#modal-bg.svelte-1artclr{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.4)}#modal.svelte-1artclr{background-color:var(--c1);margin:auto;padding:20px;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;width:min(500px, 70%);border-radius:10px}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { visible = true } = $$props;
  let { dismiss = manager.dismissModal } = $$props;
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.dismiss === void 0 && $$bindings.dismiss && dismiss !== void 0)
    $$bindings.dismiss(dismiss);
  $$result.css.add(css);
  return `${visible ? `<div id="modal-bg" class="svelte-1artclr"><div id="modal" class="svelte-1artclr">${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
export {
  Modal as M
};
