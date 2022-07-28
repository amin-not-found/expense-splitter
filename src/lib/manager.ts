import clone from 'just-clone';
import { Expense, Splitter, Transaction } from './splitter';
import { Mode } from './state';

export class Manager {
	constructor(
		private splitter: Splitter = new Splitter(),
		private _mode: Mode = Mode.None,
		private _data: string[] = [],
		private _currentExpense: null | Expense = null,
		private _backupExpense: null | Expense = null
	) {}

	get mode(): Mode {
		return this._mode;
	}
	get data() {
		return this._data;
	}
	get expenses(): Expense[] {
		return this.splitter.expenses;
	}
	get people(): Set<string> {
		return this.splitter.people;
	}
	get currentExpense(): Expense | null {
		return this._currentExpense;
	}

	setState(mode: Mode, data: string[]) {
		this._mode = mode;
		this._data = data;
	}

	setNormalState() {
		this.setState(Mode.None, []);
	}

	addPerson(name: string) {
		return this.splitter.addPerson(name);
	}
	// FIXME : Sometimes removing a person removes unrelated expenses
	removePerson(name: string) {
		return this.setState(Mode.RemovePerson, [name]);
	}
	createExpense() {
		if (!this._currentExpense) this._currentExpense = new Expense(this.expenses.length.toString());
		this.setState(Mode.CreateExpense, []);
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
	}
	editExpense(expense: Expense) {
		this._backupExpense = this._currentExpense;
		// Deep copy expense so it doesn't change instantly,
		// but with user clicking "save button"
		this._currentExpense = clone(expense);
		this.setState(Mode.EditExpense, [expense.name]);
	}
	// Asks user if sure first time that gets called,
	// deletes second time(when the mode is set to delte)
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

	evaluate(): Map<string, Transaction[]> {
		const res = new Map<string, Transaction[]>();
		for (const person of this.splitter.people) {
			res.set(person, []);
		}
		const transactions = this.splitter.evaluate();
		for (const transaction of transactions) {
			res.get(transaction.giver)?.push(transaction);
		}
		return res;
	}
}
