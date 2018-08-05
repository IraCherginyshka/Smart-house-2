'use strict';

class ElectricFire extends Device {
  constructor(model) {
    super(model);
    this._power = 0;
  }
  increasePower() {
    if (this._power < 10) {
      this._power++;
    }
  }
  decreasePower() {
    if (this._power > 0) {
      this._power--;
    }
  }
  getPower() {
      return this._power;
  }
}
