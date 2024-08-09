import { dev } from '$app/environment';
import { goto } from '$app/navigation';
import { base } from '$app/paths';
import clone from 'just-clone';
import { Database, EventOrder, ExpenseEvent } from './database';
import { Expense, Splitter, Transaction } from './splitter';
import { config } from './stores';

// TODO : use enum instead of string for errors. also maybe throw errors instead of returning them

export enum Mode {
	None,
	CreateEvent,
	CreateExpense,
	EditExpense,
	ShowExpense,
	DeleteExpense,
	RemovePerson
}

export class Manager {
	constructor(
		private splitter: Splitter = new Splitter(new ExpenseEvent()),
		private _mode: Mode = Mode.None,
		private _data: string[] = [],
		private _currentExpense: null | Expense = null,
		private _backupExpense: null | Expense = null,
		private _installEvent: null | Event = null,
		private _db: Database = new Database()
	) {}

	get mode(): Mode {
		return this._mode;
	}
	get data() {
		return this._data;
	}
	get expenses(): Expense[] {
		return this.splitter.event.expenses;
	}
	get people(): Set<string> {
		return this.splitter.event.attendees;
	}
	get currentExpense(): Expense | null {
		return this._currentExpense;
	}
	get installEvent() {
		return this._installEvent;
	}

	setState(mode: Mode, data: string[]) {
		this._mode = mode;
		this._data = data;
	}

	setNormalState() {
		this.setState(Mode.None, []);
	}

	eventDialog() {
		this.setState(Mode.CreateEvent, []);
	}

	updateEvent() {
		this._db.updateEvent(this.splitter.event);
	}

	async createEvent(eventName: string) {
		// TODO : handle error
		if (this.mode !== Mode.CreateEvent) return;
		const eventId = await this._db.createEvent(eventName);
		if (!eventId) throw "Couldn't create event";
		config.setCurrentEvent(eventId);
		await this.initEvent(eventId);
	}

	async initEvent(eventId: number) {
		// TODO : handle error
		const event = await this._db.getEvent(eventId);
		if (!event) throw "Couldn't fetch created event";

		event.openedTime = Date.now();
		this._db.updateEvent(event);

		this.splitter.fromDBObj(event);
		console.log('[Database] Loaded the event');

		this.goToRoute('/app/event');
		this.setNormalState();
	}

	async getEvents(order = EventOrder.Created) {
		return await this._db.getEvents(order);
	}

	addPerson(name: string) {
		const error = this.splitter.addPerson(name);
		if (error) return error;
		this.updateEvent();
		this._db.addAttendee(name, this.splitter.event);
		return error;
	}

	// FIXME : Sometimes removing a person removes unrelated expenses
	removePerson(name: string) {
		return this.setState(Mode.RemovePerson, [name]);
	}

	killPeople(people: Iterable<string>) {
		if (!dev) {
			throw 'Should be running on dev to call killPeople.';
		}
		for (const name of people) {
			this.splitter.removePerson(name);
			this._db.removeAttendee(name, this.splitter.event);
		}
	}

	createExpense() {
		if (!this._currentExpense) this._currentExpense = new Expense(this.expenses.length.toString());
		this.setState(Mode.CreateExpense, []);
	}

	editExpense(expense: Expense) {
		this._backupExpense = this._currentExpense;
		// Deep copy expense so it doesn't change instantly,
		// but with user clicking "save button"
		this._currentExpense = clone(expense);
		this.setState(Mode.EditExpense, [expense.name]);
	}

	submitExpense(): undefined | string {
		let error: undefined | string;
		// TODO : maybe better error message
		if (!this._currentExpense) return 'Something went wrong';
		switch (this._mode) {
			case Mode.CreateExpense:
				error = this.splitter.addExpense(this._currentExpense);
				break;
			case Mode.EditExpense:
				error = this.splitter.replaceExpense(this._data[0], this._currentExpense);
				break;
		}
		if (error) return error;
		this.flushExpenseMemory();
		this.setNormalState();
		this._db.updateEvent(this.splitter.event);
	}

	// Asks user if sure first time that gets called,
	// deletes second time(when the mode is set to delete)
	deleteExpenses(...names: string[]) {
		this.setState(Mode.DeleteExpense, names);
	}
	// TODO : rewrite this to be simpler
	confirmDelete() {
		switch (this._mode) {
			case Mode.DeleteExpense:
				this._data.forEach((name) => {
					this.splitter.deleteExpense(name);
				});
				break;
			case Mode.RemovePerson:
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

	evaluateExpenses(): Map<string, Transaction[]> {
		// TODO : Store evaluated expenses in DB
		const res = new Map<string, Transaction[]>();
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

	goToRoute(path: string) {
		path = path.startsWith('/') ? path : `/${path}`;
		goto(`${base}${path}`);
	}

	dismissModal() {
		if (this._mode == Mode.EditExpense) {
			this.flushExpenseMemory();
		}
		this.setNormalState();
	}

	setInstallEvent(e: Event | null) {
		this._installEvent = e;
	}

	async initDB() {
		await this._db.initDB();
	}
}
