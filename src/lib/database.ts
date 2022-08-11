import { openDB, type IDBPDatabase, type DBSchema } from 'idb';
import type { Expense, Transaction } from './splitter';

export class ExpenseEvent {
	openedTime: number;
	constructor(
		public createdTime = Date.now(),
		public name: string = '',
		public attendees = new Set<string>(),
		public expenses: Expense[] = [],
		public evaluatedDebts: Transaction[] = []
	) {
		this.openedTime = this.createdTime;
	}
}

export enum EventOrder {
	Name = 'name',
	Opened = 'openedTime',
	Created = 'createdTime'
}

export enum Error {
	Unsupported = 'Indexeddb unsupported by browser',
	NoSuchEvent = "Such an event doesn't exist",
	NoSuchPerson = "Such a person doesn't exist"
}

export interface ExpenseDB extends DBSchema {
	people: {
		key: string;
		value: {
			name: string;
			events: number[];
		};
	};
	events: {
		value: ExpenseEvent;
		// CreatedTime: should be good enough for key. Because events are created on client
		// by a user and it's almost impossible to create two events at the same time
		key: number;
		indexes: { name: string; openedTime: number; createdTime: number };
	};
}

// TODO : Actually handle return values from database transactions
export class Database {
	dbName = 'expense-splitter';
	dbVersion = 1;
	private _db: IDBPDatabase<ExpenseDB> | undefined;
	async initDB() {
		if (!('indexedDB' in window)) return;
		this._db = await openDB<ExpenseDB>(this.dbName, this.dbVersion, { upgrade: this.upgradeDb });
		console.log('[Database] initialized');
	}

	confirmSupport() {
		if (this._db === undefined) throw Error.Unsupported;
	}

	upgradeDb(db: IDBPDatabase<ExpenseDB>, oldVersion: number) {
		switch (oldVersion) {
			// Don't break so db can get updated version by version
			case 0: {
				db.createObjectStore('people', { keyPath: 'name' });
				const events = db.createObjectStore('events', { keyPath: 'createdTime' });
				events.createIndex(EventOrder.Name, 'name');
				events.createIndex(EventOrder.Created, 'createdTime');
				events.createIndex(EventOrder.Opened, 'openedTime');
			}
		}
	}

	async createEvent(name: string) {
		this.confirmSupport();
		const time = Date.now();

		const eventId = await this._db?.add('events', new ExpenseEvent(time, name));
		return eventId;
	}

	async getEvent(id: number) {
		this.confirmSupport();
		return await this._db?.get('events', id);
	}

	async getEvents(order: EventOrder) {
		this.confirmSupport();
		return await this._db?.getAllFromIndex('events', order);
	}

	async updateEvent(event: ExpenseEvent) {
		this.confirmSupport();
		await this._db?.put('events', event);
	}

	async addAttendee(attendee: string, event: ExpenseEvent) {
		this.confirmSupport();
		const person = await this._db?.get('people', attendee);
		if (!person) {
			this._db?.add('people', { name: attendee, events: [event.createdTime] });
			return;
		}
		person.events.push(event.createdTime);
		this._db?.put('people', person);
	}

	async removeAttendee(attendee: string, event: ExpenseEvent) {
		this.confirmSupport();
		const person = await this._db?.get('people', attendee);
		if (!person) {
			throw Error.NoSuchPerson;
		}
		person.events = person.events.filter((v) => v != event.createdTime);
		if (person.events.length < 1) {
			this._db?.delete('people', attendee);
			return;
		}
		this._db?.put('people', person);
	}
}
