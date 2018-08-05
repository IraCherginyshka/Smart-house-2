'use strict';

class TvSet extends Device {
  constructor(model) {
    super(model);
    this._channel = 0;
    this._volume = 0;
  }


  setChannel() {
    let newChannel = +prompt('Введите номер канала', '');
    if (0 <= newChannel && newChannel <= 100) {
      this._channel = newChannel;
    } else {
      alert('Номер канала должен быть в диапазоне от 1 до 100');
    }
  }
  upChannel() {
    if (this._channel < 100 ) {
      this._channel++;
    }
  }
  downChannel() {
    if (this._channel > 0) {
      this._channel--;
    }
  }
  getChannel() {
    return this._channel;
  }
  upVolume() {
    if (this._volume < 10 ) {
      this._volume++;
    }
  }
  downVolume() {
    if (this._volume > 0) {
      this._volume--;
    }
  }
  getVolume() {
    return this._volume;
  }
}
