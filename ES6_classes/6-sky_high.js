import Building from './5-building.js';

export default class SkyHighBuilding extends Building {
  constructor(sqft, floors) {
    super(sqft); // assign sqft to parent class
    this._floors = floors;
  }

  // Getter for floors
  get floors() {
    return this._floors;
  }

  // Getter for sqft (optional but explicit if required)
  get sqft() {
    return super.sqft;
  }

  // Override evacuationWarningMessage
  evacuationWarningMessage() {
    return `Evacuate slowly the ${this._floors} floors.`;
  }
}
