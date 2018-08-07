'use strict';

class SmartHouse {
  constructor(owner, adress) {
  this._owner = owner;
  this._adress = adress;
  this._tv = [];
  this._fire = [];
  }
  set owner(owner) {
    this._owner = owner;
  }
  set adress(adress) {
    this._adress = adress;
  }
  get owner() {
    return this._owner;
  }
  get adress() {
    return this._adress;
  }
  addTV(device) {
    this._tv.push(device);
  }
  deleteTV(x) {
    this._tv.splice(x, 1);
    return this._tv;
  }
  addElectricFire(device) {
    this._fire.push(device);
  }
  deleteElectricFire(x) {
    this._fire.splice(x, 1);
    return this._fire;
  }
  get tv() {
    return this._tv;
  }
  get electricFire() {
    return this._fire;
  }
}
