import { n as noop, b as safe_not_equal } from "./index-bb7e8702.js";
import clone from "just-clone";
import Big from "big.js";
const subscriber_queue = [];
function writable(value, start = noop) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if (safe_not_equal(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe(run, invalidate = noop) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || noop;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe };
}
class Config {
  constructor() {
    this.config = /* @__PURE__ */ new Map();
  }
  get darkTheme() {
    return false;
  }
  toggleTheme() {
    localStorage.setItem("dark", (!this.darkTheme).toString());
  }
}
function* range(start, end) {
  for (; start <= end; ++start) {
    yield start;
  }
}
function last(arr) {
  return arr[arr.length - 1];
}
function* numericCombinations(n, r, loc = []) {
  const idx = loc.length;
  if (idx === r) {
    yield loc;
    return;
  }
  for (const next of range(idx ? last(loc) + 1 : 0, n - r + idx)) {
    yield* numericCombinations(n, r, loc.concat(next));
  }
}
function* combinations(arr, r) {
  for (const idxs of numericCombinations(arr.length, r)) {
    yield idxs.map((i) => arr[i]);
  }
}
class Expense {
  constructor(name, amount = 0, payer = "", ...debtors) {
    this.name = name;
    this.amount = amount;
    this.payer = payer;
    this.debtors = new Set(debtors);
  }
}
class Transaction {
  constructor(giver, reciver, amount) {
    this.giver = giver;
    this.reciver = reciver;
    this.amount = amount;
  }
}
class Splitter {
  constructor(people = /* @__PURE__ */ new Set()) {
    this.people = people;
    this.expenses = [];
  }
  addPerson(name) {
    if (!name) {
      return "Person name can't be empty.";
    }
    if (this.people.has(name)) {
      return `A person with name "${name}" already exists`;
    }
    this.people.add(name);
    return null;
  }
  removePerson(name) {
    for (let i = 0; i < this.expenses.length; i++) {
      const expense = this.expenses[i];
      expense.debtors.delete(name);
      if (expense.payer === name) {
        this.expenses.splice(i, 1);
        i--;
      }
    }
    this.people.delete(name);
  }
  addExpense(expense) {
    const error = this.validateExpense(expense);
    if (error)
      return error;
    if (this.expenses.some((e) => e.name === expense.name))
      return `An expense with "${expense.name}" as name already exists`;
    this.expenses = [...this.expenses, expense];
  }
  replaceExpense(name, newExpense) {
    const error = this.validateExpense(newExpense);
    if (error)
      return error;
    const index = this.expenses.findIndex((expense) => expense.name == name);
    if (index < 0) {
      return `Expense with ${name} as name doesn't exist`;
    }
    this.expenses.splice(index, 1, newExpense);
  }
  deleteExpense(name) {
    const index = this.expenses.findIndex((expense) => expense.name == name);
    if (index < 0) {
      return `Expense with ${name} as name name doesn't exist`;
    }
    this.expenses.splice(index, 1);
  }
  validateExpense(expense) {
    if (!expense.payer)
      return "Please select someone as the payer";
    if (!expense.amount)
      return "Please enter an amount for the expense";
    if (!expense.debtors.size)
      return "Please enter at least one debtor";
    if (expense.debtors.size == 1 && expense.debtors.has(expense.payer))
      return "There should be at least one debtor other than the payer";
  }
  getNetBalances() {
    const res = /* @__PURE__ */ new Map();
    this.people.forEach((name) => res.set(name, Big(0)));
    for (const expense of this.expenses) {
      const amount = Big(expense.amount);
      res.set(expense.payer, res.get(expense.payer).minus(amount));
      const debt = amount.div(expense.debtors.size);
      expense.debtors.forEach((name) => res.set(name, res.get(name).add(debt)));
    }
    return res;
  }
  naiveSettle(balances) {
    const res = [];
    while (balances.length > 1) {
      const lastIdx = balances.length - 1;
      const giver = balances[lastIdx].name;
      const receiver = balances[0].name;
      let transactionAmount = 0;
      switch (balances[0].amount.abs().cmp(balances[lastIdx].amount.abs())) {
        case 0:
          transactionAmount = balances[lastIdx].amount.toNumber();
          balances.splice(lastIdx, 1);
          balances.splice(0, 1);
          break;
        case -1:
          transactionAmount = balances[0].amount.abs().toNumber();
          balances[lastIdx].amount = balances[lastIdx].amount.add(balances[0].amount);
          balances.splice(0, 1);
          break;
        case 1:
          transactionAmount = balances[lastIdx].amount.toNumber();
          balances[0].amount = balances[0].amount.add(balances[lastIdx].amount);
          balances.splice(lastIdx, 1);
          break;
      }
      res.push(new Transaction(giver, receiver, transactionAmount));
    }
    return res;
  }
  settleBalances(balances) {
    const res = [];
    balances = balances.filter((b) => !b.amount.eq(0));
    balances = balances.sort((b1, b2) => b1.amount.minus(b2.amount).toNumber());
    let len = balances.length;
    let size = 2;
    while (size < len - 2) {
      let skip;
      let sum;
      for (const comb of combinations(balances, size)) {
        skip = false;
        sum = comb.reduce((s, b) => s.add(b.amount), Big(0));
        if (sum.eq(0)) {
          res.concat(this.naiveSettle(comb));
          for (const i of comb) {
            balances.splice(balances.indexOf(i), 1);
            --len;
            skip = true;
          }
        }
        if (skip) {
          --size;
          break;
        }
      }
      ++size;
    }
    return res.concat(this.naiveSettle(balances));
  }
  evaluate() {
    const balances = Array.from(this.getNetBalances(), ([name, amount]) => ({
      name,
      amount
    }));
    return this.settleBalances(balances);
  }
}
var Mode = /* @__PURE__ */ ((Mode2) => {
  Mode2[Mode2["None"] = 0] = "None";
  Mode2[Mode2["CreateExpense"] = 1] = "CreateExpense";
  Mode2[Mode2["EditExpense"] = 2] = "EditExpense";
  Mode2[Mode2["ShowExpense"] = 3] = "ShowExpense";
  Mode2[Mode2["DeleteExpense"] = 4] = "DeleteExpense";
  Mode2[Mode2["RemovePerson"] = 5] = "RemovePerson";
  return Mode2;
})(Mode || {});
class Manager {
  constructor(splitter = new Splitter(), _mode = Mode.None, _data = [], _currentExpense = null, _backupExpense = null) {
    this.splitter = splitter;
    this._mode = _mode;
    this._data = _data;
    this._currentExpense = _currentExpense;
    this._backupExpense = _backupExpense;
  }
  get mode() {
    return this._mode;
  }
  get data() {
    return this._data;
  }
  get expenses() {
    return this.splitter.expenses;
  }
  get people() {
    return this.splitter.people;
  }
  get currentExpense() {
    return this._currentExpense;
  }
  setState(mode, data) {
    this._mode = mode;
    this._data = data;
  }
  setNormalState() {
    this.setState(Mode.None, []);
  }
  addPerson(name) {
    return this.splitter.addPerson(name);
  }
  removePerson(name) {
    return this.setState(Mode.RemovePerson, [name]);
  }
  createExpense() {
    if (!this._currentExpense)
      this._currentExpense = new Expense(this.expenses.length.toString());
    this.setState(Mode.CreateExpense, []);
  }
  submitExpense() {
    let error;
    if (!this._currentExpense)
      return "Something went wrong";
    switch (this._mode) {
      case Mode.CreateExpense:
        error = this.splitter.addExpense(this._currentExpense);
        break;
      case Mode.EditExpense:
        error = this.splitter.replaceExpense(this._data[0], this._currentExpense);
        break;
    }
    if (error)
      return error;
    this.flushExpenseMemory();
    this.setNormalState();
  }
  editExpense(expense) {
    this._backupExpense = this._currentExpense;
    this._currentExpense = clone(expense);
    this.setState(Mode.EditExpense, [expense.name]);
  }
  deleteExpenses(...names) {
    this.setState(Mode.DeleteExpense, names);
  }
  confirmDelete() {
    switch (this._mode) {
      case Mode.DeleteExpense:
        this._data.forEach((name) => {
          this.splitter.deleteExpense(name);
        });
        break;
      case Mode.RemovePerson:
        this._data.forEach((name) => this.splitter.removePerson(name));
        break;
      default:
        return;
    }
  }
  flushExpenseMemory() {
    this._currentExpense = this._backupExpense;
    this._backupExpense = null;
  }
  dismissModal() {
    if (this._mode == Mode.EditExpense) {
      this.flushExpenseMemory();
    }
    this.setNormalState();
  }
  evaluate() {
    var _a;
    const res = /* @__PURE__ */ new Map();
    for (const person of this.splitter.people) {
      res.set(person, []);
    }
    const transactions = this.splitter.evaluate();
    for (const transaction of transactions) {
      (_a = res.get(transaction.giver)) == null ? void 0 : _a.push(transaction);
    }
    return res;
  }
}
function mockedSplitter() {
  const splitter = new Splitter();
  splitter.addPerson("MEe");
  splitter.addPerson("MEe2");
  splitter.addPerson("YoU");
  splitter.addPerson("ThEy");
  splitter.addPerson("uS");
  let expense;
  expense = new Expense("test", 1e4, "MEe", "MEe2");
  splitter.addExpense(expense);
  expense = new Expense("test1", 1e4, "MEe2", "MEe2", "YoU");
  splitter.addExpense(expense);
  expense = new Expense("test2", 347800, "YoU", "MEe", "MEe2", "YoU", "uS", "ThEy");
  splitter.addExpense(expense);
  expense = new Expense("test3", 123456, "ThEy", "MEe", "MEe2", "YoU");
  splitter.addExpense(expense);
  expense = new Expense("test4", 123456, "uS", "ThEy", "MEe", "MEe2", "YoU");
  splitter.addExpense(expense);
  return splitter;
}
function createManager() {
  const { subscribe, update } = writable(new Manager(mockedSplitter()));
  const wrapFunc = (method) => (...args) => {
    let ret;
    update((value) => {
      ret = value[method](...args);
      return value;
    });
    return ret;
  };
  new Manager();
  const methods = {
    addPerson: wrapFunc("addPerson"),
    removePerson: wrapFunc("removePerson"),
    createExpense: wrapFunc("createExpense"),
    submitExpense: wrapFunc("submitExpense"),
    editExpense: wrapFunc("editExpense"),
    deleteExpenses: wrapFunc("deleteExpenses"),
    confirmDelete: wrapFunc("confirmDelete"),
    dismissModal: wrapFunc("dismissModal"),
    evaluate: wrapFunc("evaluate")
  };
  return { subscribe, ...methods };
}
function createConfig() {
  const { subscribe, update } = writable(new Config());
  const wrapFunc = (method) => (...args) => {
    let ret;
    update((value) => {
      ret = value[method](...args);
      localStorage.setItem("", JSON.stringify([...value.config.entries()]));
      return value;
    });
    return ret;
  };
  new Config();
  const methods = {
    toggleTheme: wrapFunc("toggleTheme")
  };
  return { subscribe, ...methods };
}
const manager = createManager();
const config = createConfig();
export {
  Mode as M,
  config as c,
  manager as m
};
