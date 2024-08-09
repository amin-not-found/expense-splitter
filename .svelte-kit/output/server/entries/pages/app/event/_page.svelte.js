import { c as create_ssr_component, d as add_attribute, e as escape, a as subscribe, b as each, v as validate_component, f as add_styles, i as is_promise, n as noop } from "../../../../chunks/index2.js";
import { m as manager, c as config } from "../../../../chunks/stores.js";
import { E as Error, M as ModalController } from "../../../../chunks/ModalController.js";
import { L as Loading } from "../../../../chunks/Loading.js";
import { M as Modal } from "../../../../chunks/Modal.js";
const ExpenseItem_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: "tr.svelte-15rqrj9:hover{box-shadow:0 1px 15px -5px var(--c3);transform:scale(1)}tr.svelte-15rqrj9:nth-child(odd){background-color:var(--c2)}td.svelte-15rqrj9{text-align:center;padding:0.3em;padding-left:0.4em}@media(max-width: 500px){td.svelte-15rqrj9{font-size:0.9em}}.symbol.svelte-15rqrj9{font-size:1.8em}.selected.svelte-15rqrj9{background-color:var(--c3) !important;color:var(--c1);-webkit-transition:background-color 150ms linear;-ms-transition:background-color 150ms linear;transition:background-color 150ms linear}input.svelte-15rqrj9{accent-color:var(--c2)}",
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
  $$result.css.add(css$6);
  return `<tr class="${["svelte-15rqrj9", isSelected ? "selected" : ""].join(" ").trim()}"><td class="unselectable svelte-15rqrj9"><input type="checkbox"${add_attribute("value", expense.name, 0)} class="unselectable svelte-15rqrj9"${add_attribute("checked", isSelected, 1)}></td>
	<td class="svelte-15rqrj9">${escape(expense.name)}</td>
	<td class="svelte-15rqrj9">${escape(expense.payer)}</td>
	<td class="svelte-15rqrj9">${escape(expense.amount.toLocaleString())}</td>
	<td class="svelte-15rqrj9">${escape(debtors(expense.debtors))}</td>
	<td class="symbol svelte-15rqrj9">› </td>
</tr>`;
});
const ExpenseList_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".control.svelte-wwru6c{margin-left:10%;width:80%;border-radius:20px;height:3em;box-shadow:0 0 10px #ccc}table.svelte-wwru6c{margin:5%;margin-top:24px;margin-bottom:32px;width:90%;border-spacing:0;border:1px solid var(--c3);border-radius:10px;box-shadow:4px 4px 10px var(--c2);overflow:hidden}tr.svelte-wwru6c{border-bottom:1px solid var(--c3)}th.svelte-wwru6c{font-weight:lighter;padding:0.4em}.delete.svelte-wwru6c{background-color:var(--c4)}#add-wrapper.svelte-wwru6c{display:flex;justify-content:center}#add.svelte-wwru6c{padding:0.9em;padding-left:1.5em;padding-right:1.5em;border-radius:12px;font-size:larger}",
  map: null
};
const ExpenseList = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let anySelected;
  let $manager, $$unsubscribe_manager;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  let selected = $manager.expenses.map(() => false);
  $$result.css.add(css$5);
  let $$settled;
  let $$rendered;
  do {
    $$settled = true;
    anySelected = selected.some((v) => v);
    $$rendered = `
<div id="add-wrapper" class="svelte-wwru6c"><button id="add" class="svelte-wwru6c">Add new expense</button></div>

<table class="svelte-wwru6c"><thead><tr class="svelte-wwru6c"><th class="svelte-wwru6c"></th>
			<th class="svelte-wwru6c">Name </th>
			<th class="svelte-wwru6c">Payer </th>
			<th class="svelte-wwru6c">Amount</th>
			<th class="svelte-wwru6c">Debtor </th></tr></thead>
	<tbody>${each($manager.expenses, (expense, index) => {
      return `${validate_component(ExpenseItem, "ExpenseItem").$$render(
        $$result,
        { expense, isSelected: selected[index] },
        {
          isSelected: ($$value) => {
            selected[index] = $$value;
            $$settled = false;
          }
        },
        {}
      )}`;
    })}</tbody></table>

${anySelected ? `<div><button class="control delete svelte-wwru6c">Delete selected expenses</button>
		<button class="control svelte-wwru6c">Deselect expenses</button></div>` : ``}
<button class="control svelte-wwru6c">Select all expenses</button>`;
  } while (!$$settled);
  $$unsubscribe_manager();
  return $$rendered;
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
  return `<div class="svelte-165g6a4"><span class="svelte-165g6a4">${escape(name)}</span>
	<button class="svelte-165g6a4">✕</button>
</div>`;
});
const PersonList_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: "div.svelte-rh9ot1{margin:10px}#person-input.svelte-rh9ot1{margin-bottom:20px;border-radius:20px;box-shadow:0 0 10px var(--c2)}#person-input.svelte-rh9ot1:focus-within{outline:var(--c2) solid 2px}input.svelte-rh9ot1{margin:0;padding:1em;width:80%;border-radius:20px 0 0 20px;height:3em;outline:none;background-color:var(--c2);color:var(--c5)}input.svelte-rh9ot1::placeholder{color:var(--c3)}button.svelte-rh9ot1{margin:0;width:20%;border-radius:0 20px 20px 0;border-left:0;height:3em}button.svelte-rh9ot1:focus{outline:none;border:none}",
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
  return `<div id="person-input" class="svelte-rh9ot1"><input type="text" maxlength="35" placeholder="New person name" class="svelte-rh9ot1"${add_attribute("value", newPerson, 0)}><button class="svelte-rh9ot1">Add</button></div>
${validate_component(Error, "Error").$$render($$result, { error }, {}, {})}
<div class="svelte-rh9ot1">${each(people, (person) => {
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
  return `<div class="svelte-9aarws"><h4>${escape(creditor)} owes:</h4>
	<ul class="svelte-9aarws">${each(debts, (debt) => {
    return `<li class="svelte-9aarws"><span class="svelte-9aarws">${escape(debt.amount.toLocaleString())}</span> to ${escape(debt.receiver)}</li>`;
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
    records = manager.evaluateExpenses();
  }
  evaluate();
  if ($$props.gap === void 0 && $$bindings.gap && gap !== void 0)
    $$bindings.gap(gap);
  if ($$props.minColWidth === void 0 && $$bindings.minColWidth && minColWidth !== void 0)
    $$bindings.minColWidth(minColWidth);
  $$result.css.add(css$1);
  nCols = Math.min(records.size, Math.floor(masonryWidth / (minColWidth + gap)) || 1);
  itemsToCols = Array.from(records).reduce(
    (cols, item, idx) => {
      if (item[1].length > 0)
        cols[idx % cols.length].push(item);
      return cols;
    },
    Array.from({ length: nCols }, () => [])
  );
  return `<div class="btn-wrapper svelte-1gehjtz"><button class="svelte-1gehjtz">Settle debts</button></div>
<div class="masonry svelte-1gehjtz"${add_styles({ "gap": `${gap}px` })}>${each(itemsToCols, (col) => {
    return `<div class="col svelte-1gehjtz" style="${"gap: " + escape(gap, true) + "px;"}">${each(col, (item) => {
      return `<div>${validate_component(Result, "Result").$$render($$result, { creditor: item[0], debts: item[1] }, {}, {})}
				</div>`;
    })}
		</div>`;
  })}</div>

<br>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: "hr.svelte-56kbh8{border:1px solid var(--c2);border-radius:5px;margin:20px;margin-left:50px;margin-right:50px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $manager, $$unsubscribe_manager;
  let $config, $$unsubscribe_config;
  $$unsubscribe_manager = subscribe(manager, (value) => $manager = value);
  $$unsubscribe_config = subscribe(config, (value) => $config = value);
  const eventId = $config.currentEvent;
  let promise;
  console.log("eventId", eventId);
  if (eventId > 0) {
    promise = manager.initEvent(eventId);
  }
  window.clearPeople = function() {
    $manager.killPeople($manager.people);
  };
  window.addPeople = function(n) {
    for (let i = 0; i < n; i++) {
      manager.addPerson(i.toString());
    }
  };
  window.timeEvaluate = function() {
    console.time();
    manager.evaluateExpenses();
    console.timeEnd();
  };
  $$result.css.add(css);
  $$unsubscribe_manager();
  $$unsubscribe_config();
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	${validate_component(Modal, "Modal").$$render($$result, {}, {}, {
        default: () => {
          return `${validate_component(Loading, "Loading").$$render($$result, {}, {}, {
            default: () => {
              return `Loading the event..`;
            }
          })}`;
        }
      })}
	<div class="empty spave"></div>
`;
    }
    return function(_) {
      return `
	${validate_component(PersonList, "PersonList").$$render($$result, {}, {}, {})}
	<hr class="svelte-56kbh8">
	${validate_component(ExpenseList, "ExpenseList").$$render($$result, {}, {}, {})}
	${validate_component(ModalController, "ModalController").$$render($$result, {}, {}, {})}
	<hr class="svelte-56kbh8">
	${validate_component(Results, "Results").$$render($$result, {}, {}, {})}
`;
    }();
  }(promise)}`;
});
export {
  Page as default
};
