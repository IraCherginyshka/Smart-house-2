'use strict';

class Device {
  constructor(model) {
    this._model = model;
    this._status = false;
  }
  set model(model) {
      this._model = model;
  }
  get model() {
      return this._model;
  }
  on() {
    this._status = true;
  }
  off() {
    this._status = false;
  }
  get status() {
    if (this._status === true) {
      return 'Вкл';
    } else {
      return 'Выкл';
    }
  }
}
