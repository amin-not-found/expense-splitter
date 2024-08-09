import { w as writable } from "./index.js";
import { openDB } from "idb";
import { b as base } from "./paths.js";
import clone from "just-clone";
import Big from "big.js";
class Config {
  config = /* @__PURE__ */ new Map();
  get darkTheme() {
    return false;
  }
  get currentEvent() {
    const eventId = parseInt(localStorage.getItem("current-event") ?? "-1");
    return eventId ? eventId : -1;
  }
  setCurrentEvent(eventID) {
    localStorage.setItem("current-event", eventID.toString());
  }
  toggleTheme() {
    localStorage.setItem("dark", (!this.darkTheme).toString());
  }
}
class ExpenseEvent {
  constructor(createdTime = Date.now(), name = "", attendees = /* @__PURE__ */ new Set(), expenses = [], evaluatedDebts = []) {
    this.createdTime = createdTime;
    this.name = name;
    this.attendees = attendees;
    this.expenses = expenses;
    this.evaluatedDebts = evaluatedDebts;
    this.openedTime = this.createdTime;
  }
}
var EventOrder = /* @__PURE__ */ ((EventOrder2) => {
  EventOrder2["Name"] = "name";
  EventOrder2["Opened"] = "openedTime";
  EventOrder2["Created"] = "createdTime";
  return EventOrder2;
})(EventOrder || {});
class Database {
  constructor() {
    this.dbName = "expense-splitter";
    this.dbVersion = 1;
  }
  async initDB() {
    if (!("indexedDB" in window))
      return;
    this._db = await openDB(this.dbName, this.dbVersion, { upgrade: this.upgradeDb });
    console.log("[Database] initialized");
  }
  confirmSupport() {
    if (this._db === void 0)
      throw "Indexeddb unsupported by browser";
  }
  upgradeDb(db, oldVersion) {
    switch (oldVersion) {
      case 0: {
        db.createObjectStore("people", { keyPath: "name" });
        const events = db.createObjectStore("events", { keyPath: "createdTime" });
        events.createIndex("name", "name");
        events.createIndex("createdTime", "createdTime");
        events.createIndex("openedTime", "openedTime");
      }
    }
  }
  async createEvent(name) {
    this.confirmSupport();
    const time = Date.now();
    const eventId = await this._db?.add("events", new ExpenseEvent(time, name));
    return eventId;
  }
  async getEvent(id) {
    this.confirmSupport();
    return await this._db?.get("events", id);
  }
  async getEvents(order) {
    this.confirmSupport();
    return await this._db?.getAllFromIndex("events", order);
  }
  async updateEvent(event) {
    this.confirmSupport();
    await this._db?.put("events", event);
  }
  async addAttendee(attendee, event) {
    this.confirmSupport();
    const person = await this._db?.get("people", attendee);
    if (!person) {
      this._db?.add("people", { name: attendee, events: [event.createdTime] });
      return;
    }
    person.events.push(event.createdTime);
    this._db?.put("people", person);
  }
  async removeAttendee(attendee, event) {
    this.confirmSupport();
    const person = await this._db?.get("people", attendee);
    if (!person) {
      throw "Such a person doesn't exist";
    }
    person.events = person.events.filter((v) => v != event.createdTime);
    if (person.events.length < 1) {
      this._db?.delete("people", attendee);
      return;
    }
    this._db?.put("people", person);
  }
}
function client_method(key) {
  {
    if (key === "before_navigate" || key === "after_navigate" || key === "on_navigate") {
      return () => {
      };
    } else {
      const name_lookup = {
        disable_scroll_handling: "disableScrollHandling",
        preload_data: "preloadData",
        preload_code: "preloadCode",
        invalidate_all: "invalidateAll"
      };
      return () => {
        throw new Error(`Cannot call ${name_lookup[key] ?? key}(...) on the server`);
      };
    }
  }
}
const goto = /* @__PURE__ */ client_method("goto");
function* range(start, end) {
  for (; start <= end; ++start) {
    yield start;
  }
}
function last(arr) {
  return arr[arr.length - 1];
}
function* numericCombinations(n, r, loc = []) {
  const index = loc.length;
  if (index === r) {
    yield loc;
    return;
  }
  for (const next of range(index ? last(loc) + 1 : 0, n - r + index)) {
    yield* numericCombinations(n, r, loc.concat(next));
  }
}
function* combinations(arr, r) {
  for (const indices of numericCombinations(arr.length, r)) {
    yield indices.map((i) => arr[i]);
  }
}
class Expense {
  constructor(name, amount = 0, payer = "", ...debtors) {
    this.name = name;
    this.amount = amount;
    this.payer = payer;
    this.debtors = new Set(debtors);
  }
  debtors;
}
class Transaction {
  constructor(giver, receiver, amount) {
    this.giver = giver;
    this.receiver = receiver;
    this.amount = amount;
  }
}
class Splitter {
  constructor(event) {
    this.event = event;
  }
  fromDBObj(event) {
    this.event = event;
  }
  // return error if person already exist
  addPerson(name) {
    if (!name) {
      return "Person name can't be empty.";
    }
    if (this.event.attendees.has(name)) {
      return `A person with name "${name}" already exists`;
    }
    this.event.attendees.add(name);
    return null;
  }
  removePerson(name) {
    for (let i = 0; i < this.event.expenses.length; i++) {
      const expense = this.event.expenses[i];
      expense.debtors.delete(name);
      if (expense.payer === name) {
        this.event.expenses.splice(i, 1);
        i--;
      }
    }
    this.event.attendees.delete(name);
  }
  addExpense(expense) {
    const error = this.validateExpense(expense);
    if (error)
      return error;
    if (this.event.expenses.some((e) => e.name === expense.name))
      return `An expense with "${expense.name}" as name already exists`;
    this.event.expenses.push(expense);
  }
  replaceExpense(name, newExpense) {
    const error = this.validateExpense(newExpense);
    if (error)
      return error;
    const index = this.event.expenses.findIndex((expense) => expense.name == name);
    if (index < 0) {
      return `Expense with ${name} as name doesn't exist`;
    }
    this.event.expenses.splice(index, 1, newExpense);
  }
  deleteExpense(name) {
    const index = this.event.expenses.findIndex((expense) => expense.name == name);
    if (index < 0) {
      return `Expense with ${name} as name name doesn't exist`;
    }
    this.event.expenses.splice(index, 1);
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
    this.event.attendees.forEach((name) => res.set(name, Big(0)));
    for (const expense of this.event.expenses) {
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
  Mode2[Mode2["CreateEvent"] = 1] = "CreateEvent";
  Mode2[Mode2["CreateExpense"] = 2] = "CreateExpense";
  Mode2[Mode2["EditExpense"] = 3] = "EditExpense";
  Mode2[Mode2["ShowExpense"] = 4] = "ShowExpense";
  Mode2[Mode2["DeleteExpense"] = 5] = "DeleteExpense";
  Mode2[Mode2["RemovePerson"] = 6] = "RemovePerson";
  return Mode2;
})(Mode || {});
class Manager {
  constructor(splitter = new Splitter(new ExpenseEvent()), _mode = 0, _data = [], _currentExpense = null, _backupExpense = null, _installEvent = null, _db = new Database()) {
    this.splitter = splitter;
    this._mode = _mode;
    this._data = _data;
    this._currentExpense = _currentExpense;
    this._backupExpense = _backupExpense;
    this._installEvent = _installEvent;
    this._db = _db;
  }
  get mode() {
    return this._mode;
  }
  get data() {
    return this._data;
  }
  get expenses() {
    return this.splitter.event.expenses;
  }
  get people() {
    return this.splitter.event.attendees;
  }
  get currentExpense() {
    return this._currentExpense;
  }
  get installEvent() {
    return this._installEvent;
  }
  setState(mode, data) {
    this._mode = mode;
    this._data = data;
  }
  setNormalState() {
    this.setState(0, []);
  }
  eventDialog() {
    this.setState(1, []);
  }
  updateEvent() {
    this._db.updateEvent(this.splitter.event);
  }
  async createEvent(eventName) {
    if (this.mode !== 1)
      return;
    const eventId = await this._db.createEvent(eventName);
    if (!eventId)
      throw "Couldn't create event";
    config.setCurrentEvent(eventId);
    await this.initEvent(eventId);
  }
  async initEvent(eventId) {
    const event = await this._db.getEvent(eventId);
    if (!event)
      throw "Couldn't fetch created event";
    event.openedTime = Date.now();
    this._db.updateEvent(event);
    this.splitter.fromDBObj(event);
    console.log("[Database] Loaded the event");
    this.goToRoute("/app/event");
    this.setNormalState();
  }
  async getEvents(order = EventOrder.Created) {
    return await this._db.getEvents(order);
  }
  addPerson(name) {
    const error = this.splitter.addPerson(name);
    if (error)
      return error;
    this.updateEvent();
    this._db.addAttendee(name, this.splitter.event);
    return error;
  }
  // FIXME : Sometimes removing a person removes unrelated expenses
  removePerson(name) {
    return this.setState(6, [name]);
  }
  killPeople(people) {
    {
      throw "Should be running on dev to call killPeople.";
    }
  }
  createExpense() {
    if (!this._currentExpense)
      this._currentExpense = new Expense(this.expenses.length.toString());
    this.setState(2, []);
  }
  editExpense(expense) {
    this._backupExpense = this._currentExpense;
    this._currentExpense = clone(expense);
    this.setState(3, [expense.name]);
  }
  submitExpense() {
    let error;
    if (!this._currentExpense)
      return "Something went wrong";
    switch (this._mode) {
      case 2:
        error = this.splitter.addExpense(this._currentExpense);
        break;
      case 3:
        error = this.splitter.replaceExpense(this._data[0], this._currentExpense);
        break;
    }
    if (error)
      return error;
    this.flushExpenseMemory();
    this.setNormalState();
    this._db.updateEvent(this.splitter.event);
  }
  // Asks user if sure first time that gets called,
  // deletes second time(when the mode is set to delete)
  deleteExpenses(...names) {
    this.setState(5, names);
  }
  // TODO : rewrite this to be simpler
  confirmDelete() {
    switch (this._mode) {
      case 5:
        this._data.forEach((name) => {
          this.splitter.deleteExpense(name);
        });
        break;
      case 6:
        this._data.forEach((name) => {
          this.splitter.removePerson(name);
          this._db.removeAttendee(name, this.splitter.event);
        });
        break;
      default:
        return;
    }
    this.updateEvent();
  }
  evaluateExpenses() {
    const res = /* @__PURE__ */ new Map();
    for (const person of this.splitter.event.attendees) {
      res.set(person, []);
    }
    const transactions = this.splitter.evaluate();
    for (const transaction of transactions) {
      res.get(transaction.giver)?.push(transaction);
    }
    return res;
  }
  flushExpenseMemory() {
    this._currentExpense = this._backupExpense;
    this._backupExpense = null;
  }
  goToRoute(path) {
    path = path.startsWith("/") ? path : `/${path}`;
    goto(`${base}${path}`);
  }
  dismissModal() {
    if (this._mode == 3) {
      this.flushExpenseMemory();
    }
    this.setNormalState();
  }
  setInstallEvent(e) {
    this._installEvent = e;
  }
  async initDB() {
    await this._db.initDB();
  }
}
function mockedSplitter() {
  const splitter = new Splitter(new ExpenseEvent());
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
function wrapFuncGenerator(updateFunc) {
  return (method) => (...args) => {
    let ret;
    updateFunc((value) => {
      ret = value[method](...args);
      return value;
    });
    return ret;
  };
}
function createManager() {
  const { subscribe, update } = writable(new Manager(mockedSplitter()));
  const wrapFunc = wrapFuncGenerator(update);
  const methods = {
    eventDialog: wrapFunc("eventDialog"),
    createEvent: wrapFunc("createEvent"),
    initEvent: wrapFunc("initEvent"),
    addPerson: wrapFunc("addPerson"),
    removePerson: wrapFunc("removePerson"),
    killPeople: wrapFunc("killPeople"),
    createExpense: wrapFunc("createExpense"),
    submitExpense: wrapFunc("submitExpense"),
    editExpense: wrapFunc("editExpense"),
    deleteExpenses: wrapFunc("deleteExpenses"),
    confirmDelete: wrapFunc("confirmDelete"),
    dismissModal: wrapFunc("dismissModal"),
    evaluateExpenses: wrapFunc("evaluateExpenses"),
    setInstallEvent: wrapFunc("setInstallEvent")
  };
  return { subscribe, ...methods };
}
function createConfig() {
  const { subscribe, update } = writable(new Config());
  const wrapFunc = wrapFuncGenerator(update);
  const methods = {
    toggleTheme: wrapFunc("toggleTheme"),
    setCurrentEvent: wrapFunc("setCurrentEvent")
  };
  return { subscribe, ...methods };
}
const manager = createManager();
const config = createConfig();
export {
  EventOrder as E,
  Mode as M,
  config as c,
  manager as m
};
