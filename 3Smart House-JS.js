'use strict';

class SmartHouse {
  constructor(owner, adress) {
  this._owner = owner;
  this._adress = adress;
  this._tv = [];
  this._fire = [];
  }
  setOwner(owner) {
    this._owner = owner;
  }
  setAdress(adress) {
    this._adress = adress;
  }
  getOwner() {
    return this._owner;
  }
  getAdress() {
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
  getTV() {
    return this._tv;
  }
  getElectricFire() {
    return this._fire;
  }
}
