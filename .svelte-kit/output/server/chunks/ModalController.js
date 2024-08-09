import { c as create_ssr_component, a as subscribe, e as escape, b as each, d as add_attribute, v as validate_component } from "./index2.js";
import { m as manager, M as Mode } from "./stores.js";
import { M as Modal } from "./Modal.js";
const DeleteDialog_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "span.svelte-144lea8{font-size:large}div.svelte-144lea8{margin-top:1%;padding:4%;padding-bottom:2%;display:flex;flex-direction:row-reverse;align-content:stretch}button.svelte-144lea8{flex:auto;margin:2%;margin-bottom:0;padding:10px;border-radius:10px}#confirm-btn.svelte-144lea8{background-color:var(--c4)}",
  map: null
};
const DeleteDialog = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  function getMessage() {
    if (!$manager.data) {
      return "";
    }
    let message = "Are you sure you want to";
    if ($manager.mode == Mode.RemovePerson) {
      message += ` remove "${$manager.data}"?`;
    } else {
      let num = $manager.data.length;
      message += ` delete ${num} expense`;
      message += num > 1 ? "s?" : "?";
    }
    return message;
  }
  $$result.css.add(css$3);
  $$unsubscribe_manager();
  return `<span class="svelte-144lea8">${escape(getMessage())}</span>
<div class="svelte-144lea8"><button class="svelte-144lea8">No </button>
	<button id="confirm-btn" class="svelte-144lea8">Yes </button>
</div>`;
});
const DebtorsSelect_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "#debtors.svelte-19vpr12{border:1px solid var(--c2);border-radius:5px;padding:1%;margin-top:1.5%;margin-bottom:4%}button.svelte-19vpr12{margin:0.13em;border-radius:4px;padding:0.5em}.person.svelte-19vpr12{background-color:var(--c2);color:var(--c5)}#controls.svelte-19vpr12{margin-top:2%}",
  map: null
};
const DebtorsSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let people;
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  let { selected } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  $$result.css.add(css$2);
  people = Array.from($manager.people);
  $$unsubscribe_manager();
  return `<label for="debtors">Debtors:</label>
<div id="debtors" class="svelte-19vpr12">${each(people, (person) => {
    return `${selected.has(person) ? `<button class="person svelte-19vpr12">✓ ${escape(person)}</button>` : `<button class="person svelte-19vpr12">+ ${escape(person)}</button>`}`;
  })}
	<div id="controls" class="svelte-19vpr12"><button class="ctrl svelte-19vpr12">Select all</button>
		<button class="ctrl svelte-19vpr12">Deselect all</button></div>
</div>`;
});
const CreditorSelect = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let people;
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  let { selected } = $$props;
  if ($$props.selected === void 0 && $$bindings.selected && selected !== void 0)
    $$bindings.selected(selected);
  people = Array.from($manager.people);
  $$unsubscribe_manager();
  return `<label for="creditor">Creditor:</label>
<select id="creditor"><option${add_attribute("value", null, 0)} disabled>Select a person</option>${each(people, (person) => {
    return `<option${add_attribute("value", person, 0)}>${escape(person)}</option>`;
  })}</select>`;
});
const Error_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: "p.svelte-4lo66r{padding:10px;background-color:var(--c4);color:var(--c1);border-radius:12px}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css$1);
  return `${error ? `<p class="svelte-4lo66r">${escape(error)}</p>` : ``}`;
});
const ExpenseEditor_svelte_svelte_type_style_lang = "";
const css = {
  code: "button.svelte-dws4n0,input[type='submit'].svelte-dws4n0{border-radius:7px;padding:0.6em;padding-left:7%;padding-right:7%;margin:1%}#btns.svelte-dws4n0{display:flex;justify-content:center}#delete.svelte-dws4n0{background-color:var(--c4)}",
  map: null
};
const ExpenseEditor = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  let { dismiss } = $$props;
  let expense = $manager.currentExpense;
  let error = "";
  if ($$props.dismiss === void 0 && $$bindings.dismiss && dismiss !== void 0)
    $$bindings.dismiss(dismiss);
  $$result.css.add(css);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form><label for="name">Expense name:</label>
	<input id="name" type="text"${add_attribute("value", expense.name, 0)}>

	${validate_component(CreditorSelect, "CreditorSelect").$$render(
      $$result,
      { selected: expense.payer },
      {
        selected: ($$value) => {
          expense.payer = $$value;
          $$settled = false;
        }
      },
      {}
    )}

	<label for="amount">Amount:</label>
	<input id="amount" type="number"${add_attribute("value", expense.amount, 0)}>

	${validate_component(DebtorsSelect, "DebtorsSelect").$$render(
      $$result,
      { selected: expense.debtors },
      {
        selected: ($$value) => {
          expense.debtors = $$value;
          $$settled = false;
        }
      },
      {}
    )}

	${validate_component(Error, "Error").$$render($$result, { error }, {}, {})}

	<div id="btns" class="svelte-dws4n0">${$manager.mode == Mode.EditExpense ? `<button id="delete" class="svelte-dws4n0">Delete</button>` : ``}

		<button class="svelte-dws4n0">Close</button>

		<input type="submit" class="svelte-dws4n0"></div>
</form>`;
  } while (!$$settled);
  $$unsubscribe_manager();
  return $$rendered;
});
const EventForm = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let eventName = "";
  let { dismiss } = $$props;
  if ($$props.dismiss === void 0 && $$bindings.dismiss && dismiss !== void 0)
    $$bindings.dismiss(dismiss);
  return `<form><label for="event-input">Event name:</label>
	<input id="event-input" type="text" placeholder="New event" selected${add_attribute("value", eventName, 0)}>
	<input type="submit" value="Create"></form>
<button>Close</button>`;
});
const ModalController = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible;
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  const modesNeedingEditor = [Mode.CreateExpense, Mode.EditExpense];
  const modesNeedingDelete = [Mode.RemovePerson, Mode.DeleteExpense];
  visible = $manager.mode !== Mode.None;
  $$unsubscribe_manager();
  return `${$manager.mode != Mode.None ? `${validate_component(Modal, "Modal").$$render($$result, { visible }, {}, {
    default: () => {
      return `${modesNeedingEditor.includes($manager.mode) ? `${validate_component(ExpenseEditor, "ExpenseEditor").$$render($$result, { dismiss: manager.dismissModal }, {}, {})}` : `${modesNeedingDelete.includes($manager.mode) ? `${validate_component(DeleteDialog, "DeleteDialog").$$render($$result, {}, {}, {})}` : `${$manager.mode == Mode.EditExpense ? `${validate_component(ExpenseEditor, "ExpenseEditor").$$render($$result, { dismiss: manager.dismissModal }, {}, {})}` : `${$manager.mode == Mode.CreateEvent ? `${validate_component(EventForm, "EventForm").$$render($$result, { dismiss: manager.dismissModal }, {}, {})}` : ``}`}`}`}`;
    }
  })}` : ``}`;
});
export {
  Error as E,
  ModalController as M
};
