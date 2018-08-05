'use strict';

class Device {
  constructor(model) {
    this._model = model;
    this._status = false;
  }
  setModel(model) {
      this._model = model;
  }
  getModel() {
      return this._model;
  }
  on() {
    this._status = true;
  }
  off() {
    this._status = false;
  }
  getStatus() {
    if (this._status === true) {
      return 'Вкл';
    } else {
      return 'Выкл';
    }
  }
}
