import { c as create_ssr_component } from "../../_app/immutable/chunks/index-bb7e8702.js";
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-cwvxqz{background-color:var(--c1);padding:2em;border-radius:4px}h1.svelte-cwvxqz{width:100%}",
  map: null
};
const Routes = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `${$$result.title = `<title>Home</title>`, ""}<meta name="${"description"}" content="${"SExpense splitter app"}" data-svelte="svelte-ruftz3">`, ""}

<section class="${"svelte-cwvxqz"}"><h1 class="${"svelte-cwvxqz"}">Welcome to expense splitter</h1>
	<button>Use the app</button>
</section>`;
});
export {
  Routes as default
};
