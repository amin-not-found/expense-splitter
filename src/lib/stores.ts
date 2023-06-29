import { writable, type Updater } from 'svelte/store';
import { Config } from './config';
import { ExpenseEvent } from './database';
import { Manager } from './manager';
import { Expense, Splitter } from './splitter';

// TODO : Delete
function mockedSplitter(): Splitter {
	const splitter = new Splitter(new ExpenseEvent());
	splitter.addPerson('MEe');
	splitter.addPerson('MEe2');
	splitter.addPerson('YoU');
	splitter.addPerson('ThEy');
	splitter.addPerson('uS');
	let expense: Expense;
	expense = new Expense('test', 10000, 'MEe', 'MEe2');
	splitter.addExpense(expense);
	expense = new Expense('test1', 10000, 'MEe2', 'MEe2', 'YoU');
	splitter.addExpense(expense);
	expense = new Expense('test2', 347800, 'YoU', 'MEe', 'MEe2', 'YoU', 'uS', 'ThEy');
	splitter.addExpense(expense);
	expense = new Expense('test3', 123456, 'ThEy', 'MEe', 'MEe2', 'YoU');
	splitter.addExpense(expense);
	expense = new Expense('test4', 123456, 'uS', 'ThEy', 'MEe', 'MEe2', 'YoU');
	splitter.addExpense(expense);
	return splitter;
}

type UpdateFunction<T> = (this: void, updater: Updater<T>) => void;

function wrapFuncGenerator<T>(updateFunc: UpdateFunction<T>) {
	return (method: string) =>
		(...args: unknown[]) => {
			let ret;
			updateFunc((value) => {
				// @ts-expect-error: it is dirty code but i don't have any way around it
				ret = value[method](...args);
				return value;
			});
			return ret;
		};
}

function createManager() {
	const { subscribe: subscribe, update: update } = writable(new Manager(mockedSplitter()));
	// we will wrap methods that we want svelte to update the components
	const wrapFunc = wrapFuncGenerator(update);
	const temp = new Manager();
	const methods = {
		eventDialog: wrapFunc('eventDialog') as unknown as typeof temp.eventDialog,
		createEvent: wrapFunc('createEvent') as unknown as typeof temp.createEvent,
		initEvent: wrapFunc('initEvent') as unknown as typeof temp.initEvent,
		addPerson: wrapFunc('addPerson') as unknown as typeof temp.addPerson,
		removePerson: wrapFunc('removePerson') as unknown as typeof temp.removePerson,
		killPeople: wrapFunc('killPeople') as unknown as typeof temp.killPeople,
		createExpense: wrapFunc('createExpense') as unknown as typeof temp.createExpense,
		submitExpense: wrapFunc('submitExpense') as unknown as typeof temp.submitExpense,
		editExpense: wrapFunc('editExpense') as unknown as typeof temp.editExpense,
		deleteExpenses: wrapFunc('deleteExpenses') as unknown as typeof temp.deleteExpenses,
		confirmDelete: wrapFunc('confirmDelete') as unknown as typeof temp.confirmDelete,
		dismissModal: wrapFunc('dismissModal') as unknown as typeof temp.dismissModal,
		evaluateExpenses: wrapFunc('evaluateExpenses') as unknown as typeof temp.evaluateExpenses,
		setInstallEvent: wrapFunc('setInstallEvent') as unknown as typeof temp.setInstallEvent
	};

	return { subscribe, ...methods };
}

function createConfig() {
	const { subscribe: subscribe, update: update } = writable(new Config());
	// we will wrap methods that we want svelte to update the components
	const wrapFunc = wrapFuncGenerator(update);
	// TODO : maybe find a better way that doesn't cause problems for typescript typing and hinting
	const temp = new Config();
	const methods = {
		toggleTheme: wrapFunc('toggleTheme') as unknown as typeof temp.toggleTheme,
		setCurrentEvent: wrapFunc('setCurrentEvent') as unknown as typeof temp.setCurrentEvent
	};

	return { subscribe, ...methods };
}

export const manager = createManager();

export const config = createConfig();
