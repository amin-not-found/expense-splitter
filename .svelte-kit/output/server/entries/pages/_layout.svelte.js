import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../chunks/index2.js";
import { m as manager, c as config } from "../../chunks/stores.js";
const app = "";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1f3uf7m{padding:20px;background-color:var(--c1)}button.svelte-1f3uf7m{padding:0.7em;color:var(--c3);background-color:var(--c2);border-radius:2em}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $manager, $$unsubscribe_manager;
  let $config, $$unsubscribe_config;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$result.css.add(css$1);
  $$unsubscribe_manager();
  $$unsubscribe_config();
  return `<footer class="svelte-1f3uf7m"><button class="svelte-1f3uf7m">Set theme to ${escape($config.darkTheme ? "light ☀️" : "dark 🌑")}</button>
	${$manager.installEvent != null ? `<button class="svelte-1f3uf7m">Install expense splitter ⬇️</button>` : ``}
	<p>Made by <a href="https://github.com/amin-pro">@amin-pro</a></p>
</footer>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-1gziw1k{margin:0 auto;margin-top:1%;margin-bottom:2%;padding:1rem;width:96%;max-width:1024px;box-sizing:border-box;border-radius:6px;background-color:var(--c1)}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $config, $$unsubscribe_config;
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$result.css.add(css);
  $$unsubscribe_config();
  return `${$$result.head += `<!-- HEAD_svelte-lruhyz_START -->${$config.darkTheme ? `<style>:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}
		</style>` : `<style>:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}
		</style>`}<!-- HEAD_svelte-lruhyz_END -->`, ""}

<main class="svelte-1gziw1k">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  Layout as default
};
