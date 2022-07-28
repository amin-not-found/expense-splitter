import { c as create_ssr_component, a as subscribe, e as escape, v as validate_component } from "../../_app/immutable/chunks/index-bb7e8702.js";
import { c as config } from "../../_app/immutable/chunks/stores-7d46d1dd.js";
import "just-clone";
import "big.js";
const app = "";
const Footer_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "footer.svelte-1f3uf7m{padding:20px;background-color:var(--c1)}button.svelte-1f3uf7m{padding:0.7em;color:var(--c3);background-color:var(--c2);border-radius:2em}",
  map: null
};
const Footer = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $config, $$unsubscribe_config;
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$result.css.add(css$1);
  $$unsubscribe_config();
  return `<footer class="${"svelte-1f3uf7m"}"><button class="${"svelte-1f3uf7m"}">Set theme to ${escape($config.darkTheme ? "light \u2600\uFE0F" : "dark \u{1F311}")}</button>
	<button class="${"svelte-1f3uf7m"}">Install expense splitter \u2B07\uFE0F</button>
	<p>Made by @amin-pro</p>
</footer>`;
});
const __layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "main.svelte-m04eqt{margin:0 auto;margin-top:2%;margin-bottom:2%;padding:1rem;width:96%;max-width:1024px;box-sizing:border-box;border-radius:6px;background-color:var(--c1)}",
  map: null
};
const _layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $config, $$unsubscribe_config;
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  $$result.css.add(css);
  $$unsubscribe_config();
  return `${$$result.head += `${$config.darkTheme ? `<style data-svelte="svelte-lruhyz">:root {
				--c1: #2b2c34; /* Background */
				--c2: #6246ea; /* Secondary */
				--c3: #d1d1e9; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #fffffe; /* Text */
			}
		</style>` : `<style data-svelte="svelte-lruhyz">:root {
				--c1: #fffffe; /* Background */
				--c2: #d1d1e9; /* Secondary */
				--c3: #6246ea; /* Primary */
				--c4: #e45858; /* Error */
				--c5: #2b2c34; /* Text */
			}
		</style>`}`, ""}

<main class="${"svelte-m04eqt"}">${slots.default ? slots.default({}) : ``}</main>

${validate_component(Footer, "Footer").$$render($$result, {}, {}, {})}`;
});
export {
  _layout as default
};
