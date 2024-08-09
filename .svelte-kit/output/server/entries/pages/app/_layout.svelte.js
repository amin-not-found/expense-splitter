import { c as create_ssr_component, a as subscribe, i as is_promise, n as noop, v as validate_component } from "../../../chunks/index2.js";
import { L as Loading } from "../../../chunks/Loading.js";
import { M as Modal } from "../../../chunks/Modal.js";
import { m as manager } from "../../../chunks/stores.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  let dbPromise = $manager.initDB();
  $$unsubscribe_manager();
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {
            default: () => {
              return `Initializing database..`;
            }
          })}`;
        }
      })}
	
`;
    }
    return function() {
      return `
	${slots.default ? slots.default({}) : ``}
`;
    }();
  }(dbPromise)}`;
});
export {
  Layout as default
};
