import Big from 'big.js';
import { combinations } from './utils';

export class Expense {
	debtors: Set<string>;
	constructor(
		public name: string,
		public amount: number = 0,
		public payer: string = '',
		...debtors: string[]
	) {
		this.debtors = new Set(debtors);
	}
}

export class Transaction {
	constructor(readonly giver: string, readonly reciver: string, readonly amount: number) {}
}

interface Balance {
	name: string;
	amount: Big;
}

class Splitter {
	expenses: Expense[] = [];
	constructor(public people: Set<string> = new Set()) {}
	// return error if person already exist
	addPerson(name: string): string | null {
		if (!name) {
			return "Person name can't be empty.";
		}
		if (this.people.has(name)) {
			return `A person with name "${name}" already exists`;
		}
		this.people.add(name);
		return null;
	}
	removePerson(name: string) {
		// Loop over expenses
		// Delete expenses with this person as the payer
		// Remove this person from the the debtors of expenses
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

	addExpense(expense: Expense): undefined | string {
		const error = this.validateExpense(expense);
		if (error) return error;
		if (this.expenses.some((e) => e.name === expense.name))
			return `An expense with "${expense.name}" as name already exists`;
		this.expenses = [...this.expenses, expense];
	}
	replaceExpense(name: string, newExpense: Expense): undefined | string {
		const error = this.validateExpense(newExpense);
		if (error) return error;
		const index = this.expenses.findIndex((expense) => expense.name == name);
		if (index < 0) {
			return `Expense with ${name} as name doesn't exist`;
		}
		this.expenses.splice(index, 1, newExpense);
	}
	deleteExpense(name: string): undefined | string {
		const index = this.expenses.findIndex((expense) => expense.name == name);
		if (index < 0) {
			return `Expense with ${name} as name name doesn't exist`;
		}
		this.expenses.splice(index, 1);
	}
	validateExpense(expense: Expense): undefined | string {
		if (!expense.payer) return 'Please select someone as the payer';
		if (!expense.amount) return 'Please enter an amount for the expense';
		if (!expense.debtors.size) return 'Please enter at least one debtor';
		if (expense.debtors.size == 1 && expense.debtors.has(expense.payer))
			return 'There should be at least one debtor other than the payer';
	}
	getNetBalances(): Map<string, Big> {
		const res = new Map<string, Big>();
		this.people.forEach((name) => res.set(name, Big(0)));
		for (const expense of this.expenses) {
			const amount = Big(expense.amount);
			res.set(expense.payer, res.get(expense.payer)!.minus(amount));
			const debt = amount.div(expense.debtors.size);
			expense.debtors.forEach((name) => res.set(name, res.get(name)!.add(debt)));
		}
		return res;
	}
	naiveSettle(balances: Balance[]): Transaction[] {
		const res = [];
		while (balances.length > 1) {
			const lastIdx = balances.length - 1;
			const giver = balances[lastIdx].name;
			const receiver = balances[0].name;
			let transactionAmount = 0;
			// amount with smaller absolute value will be removed certainly
			// Remember, last index is positive, fisr index is negative.
			// Also items with higher index should be removed first
			// so items with lower index aren't affected
			switch (balances[0].amount.abs().cmp(balances[lastIdx].amount.abs())) {
				case 0:
					// giver and reciver have equal absolue balance
					transactionAmount = balances[lastIdx].amount.toNumber();
					balances.splice(lastIdx, 1);
					balances.splice(0, 1);
					break;
				case -1:
					// receiver(blanaces[0]) has less absolute balance
					transactionAmount = balances[0].amount.abs().toNumber();
					balances[lastIdx].amount = balances[lastIdx].amount.add(balances[0].amount);
					balances.splice(0, 1);
					break;
				case 1:
					// giver(balances[-1]) has less absolue balance
					transactionAmount = balances[lastIdx].amount.toNumber();
					balances[0].amount = balances[0].amount.add(balances[lastIdx].amount);
					balances.splice(lastIdx, 1);
					break;
			}
			res.push(new Transaction(giver, receiver, transactionAmount));
		}
		return res;
	}
	settleBalances(balances: Balance[]): Transaction[] {
		const res: Transaction[] = [];
		// Remove balances with 0 amount
		balances = balances.filter((b) => !b.amount.eq(0));
		// Here we don't need the array to be sorted.
		// But if we sort the array once now, we won't need
		// to sort it in naive_setvtle every time it's called
		// TODO Skip while(below code) if len is big and just use naive method
		balances = balances.sort((b1, b2) => b1.amount.minus(b2.amount).toNumber());
		let len = balances.length;
		let size = 2;
		while (size < len - 2) {
			let skip: boolean;
			let sum: Big;
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
					// if skipped(found a zero-sum subset), break inner loop and
					// repeat searching for zero sum subsets of the same size
					--size;
					break;
				}
			}
			++size;
		}
		return res.concat(this.naiveSettle(balances));
	}
	evaluate(): Transaction[] {
		const balances = Array.from(this.getNetBalances(), ([name, amount]) => ({
			name,
			amount
		}));
		return this.settleBalances(balances);
	}
}

export { Splitter };
