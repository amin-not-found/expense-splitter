import { c as create_ssr_component, e as escape, b as each } from "./index2.js";
const Loading_svelte_svelte_type_style_lang = "";
const css = {
  code: ".wrapper.svelte-1l27cbv{margin:auto;width:var(--size);height:var(--size)}.circle.svelte-1l27cbv{border-radius:100%;animation-fill-mode:both;position:absolute;opacity:0;width:var(--size);height:var(--size);background-color:var(--c3);animation:svelte-1l27cbv-bounce var(--duration) linear infinite}@keyframes svelte-1l27cbv-bounce{0%{opacity:0;transform:scale(0)}5%{opacity:1}100%{opacity:0;transform:scale(1)}}.container.svelte-1l27cbv{font-size:larger;text-align:center;margin:10px;margin-top:15px}",
  map: null
};
const Loading = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { duration = 0.8 } = $$props;
  let { size = "150" } = $$props;
  if ($$props.duration === void 0 && $$bindings.duration && duration !== void 0)
    $$bindings.duration(duration);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  $$result.css.add(css);
  return `<div class="wrapper svelte-1l27cbv" style="${"--size: " + escape(size, true) + "px; --duration: " + escape(duration + "s", true) + ";"}">${each([...Array(3).keys()], (version) => {
    return `<div class="circle svelte-1l27cbv" style="${"animation-delay: " + escape(duration / 3 * (version - 1) + "s", true) + ";"}"></div>`;
  })}</div>
<div class="container svelte-1l27cbv">${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Loading as L
};
