import { c as create_ssr_component, a as subscribe } from "../../chunks/index2.js";
import { m as manager } from "../../chunks/stores.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "section.svelte-cwvxqz{background-color:var(--c1);padding:2em;border-radius:4px}h1.svelte-cwvxqz{width:100%}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => value);
  $$result.css.add(css);
  $$unsubscribe_manager();
  return `${$$result.head += `<!-- HEAD_svelte-ruftz3_START -->${$$result.title = `<title>Home</title>`, ""}<meta name="description" content="SExpense splitter app"><!-- HEAD_svelte-ruftz3_END -->`, ""}

<section class="svelte-cwvxqz"><h1 class="svelte-cwvxqz">Welcome to expense splitter</h1>
	<button>Use the app</button>
</section>`;
});
export {
  Page as default
};
