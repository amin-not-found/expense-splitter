export enum Mode {
	None,
	CreateExpense,
	EditExpense,
	ShowExpense,
	DeleteExpense,
	RemovePerson
}

export class State {
	// Every modal has an item which it's working on
	constructor(private _mode: Mode, private _itemId: string | null) {}
	setState(mode: Mode, itemId: string | null) {
		this._mode = mode;
		this._itemId = itemId;
	}
	get mode() {
		return this._mode;
	}
	get itemId() {
		return this._itemId;
	}
}
