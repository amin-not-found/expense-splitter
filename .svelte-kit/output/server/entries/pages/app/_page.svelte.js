import { c as create_ssr_component, a as subscribe, e as escape, b as each, d as add_attribute, v as validate_component } from "../../../chunks/index2.js";
import { M as ModalController } from "../../../chunks/ModalController.js";
import { m as manager, E as EventOrder } from "../../../chunks/stores.js";
const EventItem_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".event.svelte-rr90db{margin:5px;margin-bottom:10px;padding:7px;background-color:var(--c2);color:var(--c5);border-radius:7px}.event.svelte-rr90db:hover{box-shadow:0px 0px 7px 1px var(--c2)}.event-name.svelte-rr90db{font-size:x-large}",
  map: null
};
const EventItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => value);
  let { event } = $$props;
  let created = new Date(event.createdTime).toLocaleString();
  let opened = new Date(event.openedTime).toLocaleString();
  if ($$props.event === void 0 && $$bindings.event && event !== void 0)
    $$bindings.event(event);
  $$result.css.add(css$2);
  $$unsubscribe_manager();
  return `<div class="event svelte-rr90db"><spacn class="event-name svelte-rr90db">${escape(event.name)}</spacn>
	<br>
	Created at ${escape(created)}
	<br>
	Last opened at ${escape(opened)}
</div>`;
});
const EventList_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".wrapper.svelte-jwhlex{display:flex;flex-wrap:wrap;justify-content:space-evenly}button.svelte-jwhlex{width:47%;height:2.7em;border-radius:9px}select.svelte-jwhlex{border-radius:9px;width:47%;height:2.5em}@media(max-device-width: 360px){button.svelte-jwhlex{width:90%}select.svelte-jwhlex{width:86%}}",
  map: null
};
const EventList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  let { sortOrder = EventOrder.Created } = $$props;
  const orders = [EventOrder.Created, EventOrder.Name, EventOrder.Opened];
  let events = [];
  function setEvents(order) {
    $manager.getEvents(order).then((_events) => {
      if (!_events)
        return;
      if (order === EventOrder.Name)
        events = _events;
      else
        events = _events.reverse();
    }).catch((a) => console.log("[Database] Error:", a));
  }
  if ($$props.sortOrder === void 0 && $$bindings.sortOrder && sortOrder !== void 0)
    $$bindings.sortOrder(sortOrder);
  $$result.css.add(css$1);
  {
    setEvents(sortOrder);
  }
  $$unsubscribe_manager();
  return `<div class="wrapper svelte-jwhlex"><select id="sort-by" class="svelte-jwhlex">${each(orders, (order) => {
    return `<option${add_attribute("value", order, 0)}>↓ ${escape(order)}
			</option>`;
  })}</select>
	<button class="svelte-jwhlex">Create new event </button></div>

${each(events, (event) => {
    return `${validate_component(EventItem, "EventItem").$$render($$result, { event }, {}, {})}`;
  })}`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "h1.svelte-a258sk{margin:0.7em}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${$$result.head += `<!-- HEAD_svelte-11dqd79_START -->${$$result.title = `<title>App</title>`, ""}<!-- HEAD_svelte-11dqd79_END -->`, ""}

<section>${validate_component(ModalController, "ModalController").$$render($$result, {}, {}, {})}
	<h1 class="svelte-a258sk">Events:</h1>
	${validate_component(EventList, "EventList").$$render($$result, {}, {}, {})}
</section>`;
});
export {
  Page as default
};
