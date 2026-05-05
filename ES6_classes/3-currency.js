export default class Currency {
	constructor(code,name) {
		this.code = code;
		this.name = name;
	}

	get code() {
		return this._code;
	}

	set code(newCode) {
		return this._code = newCode;
	}

	get name() {
		return this._name
	}

	set name(newName) {
		this._name = newName;
	}

	displayFullCurrency() {
		return `${this.name} (${this._code})`;
	}
}
