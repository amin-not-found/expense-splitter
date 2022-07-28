import { c as create_ssr_component, d as add_attribute, e as escape, a as subscribe, f as each, v as validate_component, g as add_styles } from "../../../_app/immutable/chunks/index-bb7e8702.js";
import { m as manager, M as Mode } from "../../../_app/immutable/chunks/stores-7d46d1dd.js";
import "just-clone";
import "big.js";
const ExpenseItem_svelte_svelte_type_style_lang = "";
const css$b = {
  code: "tr.svelte-iqh9bi{-webkit-transition:background-color 150ms linear;-ms-transition:background-color 150ms linear;transition:background-color 150ms linear}tr.svelte-iqh9bi:hover{box-shadow:0 1px 15px -5px var(--c3);transform:scale(1)}tr.svelte-iqh9bi:nth-child(odd){background-color:var(--c2)}td.svelte-iqh9bi{text-align:center;padding:0.3em;padding-left:0.4em}@media(max-width: 500px){td.svelte-iqh9bi{font-size:0.9em}}.symbol.svelte-iqh9bi{font-size:1.8em}.selected.svelte-iqh9bi{background-color:var(--c3) !important;color:var(--c1);-webkit-transition:background-color 150ms linear;-ms-transition:background-color 150ms linear;transition:background-color 150ms linear}input.svelte-iqh9bi{accent-color:var(--c2)}",
  map: null
};
const ExpenseItem = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { expense } = $$props;
  let { isSelected = false } = $$props;
  let showCount = 2;
  function debtors(debtors2) {
    let names = debtors2.values();
    let res = names.next().value;
    let i = 1;
    while (i < showCount && i < debtors2.size) {
      res += `, ${names.next().value}`;
      i += 1;
    }
    if (i < debtors2.size) {
      res += ` and ${debtors2.size - i} ${i == debtors2.size - 1 ? "other" : "others"}`;
    }
    return res;
  }
  if ($$props.expense === void 0 && $$bindings.expense && expense !== void 0)
    $$bindings.expense(expense);
  if ($$props.isSelected === void 0 && $$bindings.isSelected && isSelected !== void 0)
    $$bindings.isSelected(isSelected);
  $$result.css.add(css$b);
  return `<tr class="${["svelte-iqh9bi", isSelected ? "selected" : ""].join(" ").trim()}"><td class="${"unselectable svelte-iqh9bi"}"><input type="${"checkbox"}"${add_attribute("value", expense.name, 0)} class="${"unselectable svelte-iqh9bi"}"${add_attribute("checked", isSelected, 1)}></td>
	<td class="${"svelte-iqh9bi"}">${escape(expense.name)}</td>
	<td class="${"svelte-iqh9bi"}">${escape(expense.payer)}</td>
	<td class="${"svelte-iqh9bi"}">${escape(expense.amount.toLocaleString())}</td>
	<td class="${"svelte-iqh9bi"}">${escape(debtors(expense.debtors))}</td>
	<td class="${"symbol svelte-iqh9bi"}">\u203A </td>
</tr>`;
});
const ExpenseList_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".control.svelte-wwru6c{margin-left:10%;width:80%;border-radius:20px;height:3em;box-shadow:0 0 10px #ccc}table.svelte-wwru6c{margin:5%;margin-top:24px;margin-bottom:32px;width:90%;border-spacing:0;border:1px solid var(--c3);border-radius:10px;box-shadow:4px 4px 10px var(--c2);overflow:hidden}tr.svelte-wwru6c{border-bottom:1px solid var(--c3)}th.svelte-wwru6c{font-weight:lighter;padding:0.4em}.delete.svelte-wwru6c{background-color:var(--c4)}#add-wrapper.svelte-wwru6c{display:flex;justify-content:center}#add.svelte-wwru6c{padding:0.9em;padding-left:1.5em;padding-right:1.5em;border-radius:12px;font-size:larger}",
  map: null
};
const ExpenseList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let anySelected;
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  let selected = $manager.expenses.map(() => false);
  $$result.css.add(css$a);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    anySelected = selected.some((v) => v);
    $$rendered = `
<div id="${"add-wrapper"}" class="${"svelte-wwru6c"}"><button id="${"add"}" class="${"svelte-wwru6c"}">Add new expense</button></div>

<table class="${"svelte-wwru6c"}"><thead><tr class="${"svelte-wwru6c"}"><th class="${"svelte-wwru6c"}"></th>
			<th class="${"svelte-wwru6c"}">Name </th>
			<th class="${"svelte-wwru6c"}">Payer </th>
			<th class="${"svelte-wwru6c"}">Amount</th>
			<th class="${"svelte-wwru6c"}">Debtor </th></tr></thead>
	<tbody>${each($manager.expenses, (expense, index) => {
      return `${validate_component(ExpenseItem, "ExpenseItem").$$render($$result, { expense, isSelected: selected[index] }, {
        isSelected: ($$value) => {
          selected[index] = $$value;
          $$settled = false;
        }
      }, {})}`;
    })}</tbody></table>

${anySelected ? `<div><button class="${"control delete svelte-wwru6c"}">Delete selected expenses</button>
		<button class="${"control svelte-wwru6c"}">Deselect expenses</button></div>` : ``}
<button class="${"control svelte-wwru6c"}">Select all expenses</button>`;
  } while (!$$settled);
  $$unsubscribe_manager();
  return $$rendered;
});
const DeleteDialog_svelte_svelte_type_style_lang = "";
const css$9 = {
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
  $$result.css.add(css$9);
  $$unsubscribe_manager();
  return `<span class="${"svelte-144lea8"}">${escape(getMessage())}</span>
<div class="${"svelte-144lea8"}"><button class="${"svelte-144lea8"}">No </button>
	<button id="${"confirm-btn"}" class="${"svelte-144lea8"}">Yes </button>
</div>`;
});
const DebtorsSelect_svelte_svelte_type_style_lang = "";
const css$8 = {
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
  $$result.css.add(css$8);
  people = Array.from($manager.people);
  $$unsubscribe_manager();
  return `<label for="${"debtors"}">Debtors:</label>
<div id="${"debtors"}" class="${"svelte-19vpr12"}">${each(people, (person) => {
    return `${selected.has(person) ? `<button class="${"person svelte-19vpr12"}">\u2713 ${escape(person)}</button>` : `<button class="${"person svelte-19vpr12"}">+ ${escape(person)}</button>`}`;
  })}
	<div id="${"controls"}" class="${"svelte-19vpr12"}"><button class="${"ctrl svelte-19vpr12"}">Select all</button>
		<button class="${"ctrl svelte-19vpr12"}">Deselect all</button></div>
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
  return `<label for="${"creditor"}">Creditor:</label>
<select id="${"creditor"}"><option${add_attribute("value", null, 0)} disabled>Select a person</option>${each(people, (person) => {
    return `<option${add_attribute("value", person, 0)}>${escape(person)}</option>`;
  })}</select>`;
});
const Error_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: "p.svelte-4lo66r{padding:10px;background-color:var(--c4);color:var(--c1);border-radius:12px}",
  map: null
};
const Error = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { error } = $$props;
  if ($$props.error === void 0 && $$bindings.error && error !== void 0)
    $$bindings.error(error);
  $$result.css.add(css$7);
  return `${error ? `<p class="${"svelte-4lo66r"}">${escape(error)}</p>` : ``}`;
});
const ExpenseEditor_svelte_svelte_type_style_lang = "";
const css$6 = {
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
  $$result.css.add(css$6);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    $$rendered = `<form><label for="${"name"}">Expense name:</label>
	<input id="${"name"}" type="${"text"}"${add_attribute("value", expense.name, 0)}>

	${validate_component(CreditorSelect, "CreditorSelect").$$render($$result, { selected: expense.payer }, {
      selected: ($$value) => {
        expense.payer = $$value;
        $$settled = false;
      }
    }, {})}

	<label for="${"amount"}">Amount:</label>
	<input id="${"amount"}" type="${"number"}"${add_attribute("value", expense.amount, 0)}>

	${validate_component(DebtorsSelect, "DebtorsSelect").$$render($$result, { selected: expense.debtors }, {
      selected: ($$value) => {
        expense.debtors = $$value;
        $$settled = false;
      }
    }, {})}

	${validate_component(Error, "Error").$$render($$result, { error }, {}, {})}

	<div id="${"btns"}" class="${"svelte-dws4n0"}">${$manager.mode == Mode.EditExpense ? `<button id="${"delete"}" class="${"svelte-dws4n0"}">Delete</button>` : ``}

		<input type="${"submit"}" class="${"svelte-dws4n0"}">

		<button class="${"svelte-dws4n0"}">Close</button></div>
</form>`;
  } while (!$$settled);
  $$unsubscribe_manager();
  return $$rendered;
});
const Modal_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: "#modal-bg.svelte-1artclr{position:fixed;z-index:1;left:0;top:0;width:100%;height:100%;background-color:rgba(0, 0, 0, 0.4)}#modal.svelte-1artclr{background-color:var(--c1);margin:auto;padding:20px;position:absolute;transform:translate(-50%, -50%);top:50%;left:50%;width:min(500px, 70%);border-radius:10px}",
  map: null
};
const Modal = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { visible } = $$props;
  let { dismiss } = $$props;
  if ($$props.visible === void 0 && $$bindings.visible && visible !== void 0)
    $$bindings.visible(visible);
  if ($$props.dismiss === void 0 && $$bindings.dismiss && dismiss !== void 0)
    $$bindings.dismiss(dismiss);
  $$result.css.add(css$5);
  return `${visible ? `<div id="${"modal-bg"}" class="${"svelte-1artclr"}"><div id="${"modal"}" class="${"svelte-1artclr"}">${slots.default ? slots.default({}) : ``}</div></div>` : ``}`;
});
const ModalController = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let visible;
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  const modesNeedingEditor = [Mode.CreateExpense, Mode.EditExpense];
  const modesNeedingDelete = [Mode.RemovePerson, Mode.DeleteExpense];
  visible = $manager.mode !== Mode.None;
  $$unsubscribe_manager();
  return `${$manager.mode != Mode.None ? `${validate_component(Modal, "Modal").$$render($$result, { visible, dismiss: manager.dismissModal }, {}, {
    default: () => {
      return `${modesNeedingEditor.includes($manager.mode) ? `${validate_component(ExpenseEditor, "ExpenseEditor").$$render($$result, { dismiss: manager.dismissModal }, {}, {})}` : `${modesNeedingDelete.includes($manager.mode) ? `${validate_component(DeleteDialog, "DeleteDialog").$$render($$result, {}, {}, {})}` : `${$manager.mode == Mode.EditExpense ? `${validate_component(ExpenseEditor, "ExpenseEditor").$$render($$result, { dismiss: manager.dismissModal }, {}, {})}` : ``}`}`}`;
    }
  })}` : ``}`;
});
const Person_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: "div.svelte-165g6a4{display:inline-block;padding-left:10px;margin:5px;border-radius:20px;height:2.5em;background-color:var(--c2);box-shadow:0 1px 5px var(--c2);user-select:none}button.svelte-165g6a4{height:2.5em;width:2.5em;border-radius:20px}span.svelte-165g6a4{margin:5px}",
  map: null
};
const Person = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { name } = $$props;
  if ($$props.name === void 0 && $$bindings.name && name !== void 0)
    $$bindings.name(name);
  $$result.css.add(css$4);
  return `<div class="${"svelte-165g6a4"}"><span class="${"svelte-165g6a4"}">${escape(name)}</span>
	<button class="${"svelte-165g6a4"}">\u2715</button>
</div>`;
});
const PersonList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-1ik4vd0{margin:10px}#person-input.svelte-1ik4vd0{margin-bottom:20px;border-radius:20px;box-shadow:0 0 10px var(--c2)}#person-input.svelte-1ik4vd0:focus-within{outline:var(--c2) solid 2px}input.svelte-1ik4vd0{margin:0;padding:1em;width:80%;border-radius:20px 0 0 20px;height:3em;outline:none;background-color:var(--c2)}button.svelte-1ik4vd0{margin:0;width:20%;border-radius:0 20px 20px 0;border-left:0;height:3em}button.svelte-1ik4vd0:focus{outline:none;border:none}",
  map: null
};
const PersonList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let people;
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  let newPerson = "";
  let error;
  $$result.css.add(css$3);
  people = Array.from($manager.people);
  $$unsubscribe_manager();
  return `<div id="${"person-input"}" class="${"svelte-1ik4vd0"}"><input type="${"text"}" maxlength="${"35"}" placeholder="${"New person name"}" class="${"svelte-1ik4vd0"}"${add_attribute("value", newPerson, 0)}><button class="${"svelte-1ik4vd0"}">Add</button></div>
${validate_component(Error, "Error").$$render($$result, { error }, {}, {})}
<div class="${"svelte-1ik4vd0"}">${each(people, (person) => {
    return `${validate_component(Person, "Person").$$render($$result, { name: person }, {}, {})}`;
  })}
</div>`;
});
const Result_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: "div.svelte-9aarws{background-color:var(--c2);border-radius:10px;padding:16px}ul.svelte-9aarws{list-style-type:none;padding-left:13px}li.svelte-9aarws:before{content:'- '}span.svelte-9aarws{color:var(--c3)}",
  map: null
};
const Result = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { creditor } = $$props;
  let { debts } = $$props;
  if ($$props.creditor === void 0 && $$bindings.creditor && creditor !== void 0)
    $$bindings.creditor(creditor);
  if ($$props.debts === void 0 && $$bindings.debts && debts !== void 0)
    $$bindings.debts(debts);
  $$result.css.add(css$2);
  return `<div class="${"svelte-9aarws"}"><h4>${escape(creditor)} owes:</h4>
	<ul class="${"svelte-9aarws"}">${each(debts, (debt) => {
    return `<li class="${"svelte-9aarws"}"><span class="${"svelte-9aarws"}">${escape(debt.amount.toLocaleString())}</span> to ${escape(debt.reciver)}</li>`;
  })}</ul>
</div>`;
});
const Results_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".btn-wrapper.svelte-1gehjtz.svelte-1gehjtz{text-align:center}button.svelte-1gehjtz.svelte-1gehjtz{padding:10px;border-radius:10px}div.masonry.svelte-1gehjtz.svelte-1gehjtz{margin:10px;display:flex;justify-content:center;overflow-wrap:anywhere;box-sizing:border-box}div.masonry.svelte-1gehjtz div.col.svelte-1gehjtz{display:grid;height:max-content;width:100%}",
  map: null
};
const Results = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nCols;
  let { gap = 13 } = $$props;
  let { minColWidth = 160 } = $$props;
  let itemsToCols;
  let masonryWidth;
  let records = /* @__PURE__ */ new Map();
  function evaluate() {
    records = manager.evaluate();
  }
  evaluate();
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.minColWidth === void 0 && $$bindings.minColWidth && minColWidth !== void 0)
    $$bindings.minColWidth(minColWidth);
  $$result.css.add(css$1);
  nCols = Math.min(records.size, Math.floor(masonryWidth / (minColWidth + gap)) || 1);
  itemsToCols = Array.from(records).reduce((cols, item, idx) => {
    if (item[1].length > 0)
      cols[idx % cols.length].push(item);
    return cols;
  }, Array.from({ length: nCols }, () => []));
  return `<div class="${"btn-wrapper svelte-1gehjtz"}"><button class="${"svelte-1gehjtz"}">Settle debts</button></div>
<div class="${"masonry svelte-1gehjtz"}"${add_styles({ "gap": `${gap}px` })}>${each(itemsToCols, (col) => {
    return `<div class="${"col svelte-1gehjtz"}" style="${"gap: " + escape(gap, true) + "px;"}">${each(col, (item) => {
      return `<div>${validate_component(Result, "Result").$$render($$result, { creditor: item[0], debts: item[1] }, {}, {})}
				</div>`;
    })}
		</div>`;
  })}</div>

<br>`;
});
const expense_svelte_svelte_type_style_lang = "";
const css = {
  code: "hr.svelte-56kbh8{border:1px solid var(--c2);border-radius:5px;margin:20px;margin-left:50px;margin-right:50px}",
  map: null
};
const Expense = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `${validate_component(PersonList, "PersonList").$$render($$result, {}, {}, {})}
<hr class="${"svelte-56kbh8"}">
${validate_component(ExpenseList, "ExpenseList").$$render($$result, {}, {}, {})}
${validate_component(ModalController, "ModalController").$$render($$result, {}, {}, {})}
<hr class="${"svelte-56kbh8"}">
${validate_component(Results, "Results").$$render($$result, {}, {}, {})}`;
});
export {
  Expense as default
};
