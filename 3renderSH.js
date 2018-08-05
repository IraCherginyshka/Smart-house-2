'use strict';

var myHouse = new SmartHouse('Irka', 'Харьков');

function renderHouse(h) {
  var newDiv = document.createElement('div');
  newDiv.id = 'house';
  newDiv.className = 'classDiv';

  var label1 = document.createElement('label');
  label1.id = 'owner';
  label1.innerText = 'Владелец';

  var owner = document.createElement('input');
  owner.type = 'text';
  owner.value = h.getOwner();
  owner.className = 'information';
  owner.addEventListener('input', function () {
    h.setOwner(owner.value);
  });

  var label2 = document.createElement('label');
  label2.id = 'adress';
  label2.innerText = 'Адрес';

  var adress = document.createElement('input');
  adress.type = 'text';
  adress.value = h.getAdress();
  adress.className = 'information';
  adress.addEventListener('input', function () {
    h.setAdress(adress.value);
  });

  var btn1 = document.createElement('button');
  btn1.type = 'button';
  btn1.innerText = ' + Добавить телевизор';
  btn1.className = 'addDevice';
  btn1.addEventListener('click', function () {
    var addModel = prompt('Введите название модели телевизора','');
    renderTV(addModel);
  });
/*
  var btn2 = document.createElement('button');
  btn2.type = 'button';
  btn2.innerText = ' + Добавить кондиционер';
  btn2.className = 'addDevice';
  btn2.addEventListener('click', function () {
    //renderConditioning(myHouse);
    myHouse.addAirCondition(new AirConditioning);
  });
*/
  var btn3 = document.createElement('button');
  btn3.type = 'button';
  btn3.innerText = ' + Добавить камин';
  btn3.className = 'addDevice';
  btn3.addEventListener('click', function () {
    var addModel = prompt('Введите название модели камина','');
    renderFire(addModel);
  });

  document.body.appendChild(newDiv);
  document.getElementById('house').appendChild(label1);
  document.getElementById('owner').appendChild(owner);
  document.getElementById('house').appendChild(label2);
  document.getElementById('adress').appendChild(adress);
  document.getElementById('house').appendChild(btn1);
  //document.getElementById('house').appendChild(btn2);
  document.getElementById('house').appendChild(btn3);
}

function renderTV (model) {
  var t = new TvSet (model);
  myHouse.addTV(t);
  var number = myHouse._tv.length - 1;

  var tvDiv = document.createElement('div');
  tvDiv.id = 'tv';
  tvDiv.className = 'classD';

  var label1 = document.createElement('label');
  label1.id = 'model';
  label1.innerText = 'Модель';

  var model = document.createElement('input');
  model.type = 'text';
  model.placeholder = 'Введите данные';
  model.value = t.getModel();
  model.className = 'information';
  model.addEventListener('input', function () {
    t.setModel(model.value);
  });

  var state = document.createElement('div');
  state.className = 'classDivSmall';
  state.innerText = t.getStatus();

  var onBtn = document.createElement("button");
  onBtn.type = "button";
  onBtn.innerHTML = "Вкл.";
  onBtn.className = "on";
  onBtn.addEventListener('click', function () {
    t.on();
    state.innerText = t.getStatus();
  });

  var offBtn = document.createElement("button");
  offBtn.type = "button";
  offBtn.innerHTML = "Выкл.";
  offBtn.className = "off";
  offBtn.addEventListener('click', function () {
    t.off();
    state.innerText = t.getStatus();
  });

  var p = document.createElement('p');
  p.innerText = 'Канал';

  var channel = document.createElement('div');
  channel.className = 'classDivSmall';
  channel.innerText = t.getChannel();
  channel.addEventListener('click', function () {
    t.setChannel();
    channel.innerText = t.getChannel();
  });

  var btnUp = document.createElement('input');
  btnUp.type = 'button';
  btnUp.value = '▲';
  btnUp.className = 'button';
  btnUp.addEventListener('click', function () {
    t.upChannel();
    channel.innerText = t.getChannel();
  });

  var btnDown = document.createElement('input');
  btnDown.type = 'button';
  btnDown.value = '▼';
  btnDown.className = 'button';
  btnDown.addEventListener('click', function () {
    t.downChannel();
    channel.innerText = t.getChannel();
  });

  var p1 = document.createElement('p');
  p1.innerText = 'Громкость';

  var volume = document.createElement('div');
  volume.className = 'classDivSmall';
  volume.innerText = t.getVolume();

  var btnUpVolume = document.createElement('input');
  btnUpVolume.type = 'button';
  btnUpVolume.value = '▲';
  btnUpVolume.className = 'button';
  btnUpVolume.addEventListener('click', function () {
    t.upVolume();
    volume.innerText = t.getVolume();
  });

  var btnDownVolume = document.createElement('input');
  btnDownVolume.type = 'button';
  btnDownVolume.value = '▼';
  btnDownVolume.className = 'button';
  btnDownVolume.addEventListener('click', function () {
    t.downVolume();
    volume.innerText = t.getVolume();
  });

  var deleteBtn = document.createElement('button');
  deleteBtn.type = 'button';
  deleteBtn.innerHTML = 'Удалить';
  deleteBtn.className = 'off';
  deleteBtn.addEventListener('click', function () {
    var i = myHouse._tv.indexOf(t);
    myHouse.deleteTV(i);
    document.getElementsByClassName('classD')[i].remove();
  });

  document.body.appendChild(tvDiv);
  document.getElementsByClassName('classD')[number].appendChild(label1);
  document.getElementsByClassName('classD')[number].appendChild(model);
  document.getElementsByClassName('classD')[number].appendChild(state);
  document.getElementsByClassName('classD')[number].appendChild(onBtn);
  document.getElementsByClassName('classD')[number].appendChild(offBtn);
  document.getElementsByClassName('classD')[number].appendChild(p);
  document.getElementsByClassName('classD')[number].appendChild(channel);
  document.getElementsByClassName('classD')[number].appendChild(btnUp);
  document.getElementsByClassName('classD')[number].appendChild(btnDown);
  document.getElementsByClassName('classD')[number].appendChild(p1);
  document.getElementsByClassName('classD')[number].appendChild(volume);
  document.getElementsByClassName('classD')[number].appendChild(btnUpVolume);
  document.getElementsByClassName('classD')[number].appendChild(btnDownVolume);
  document.getElementsByClassName('classD')[number].appendChild(deleteBtn);


}



function renderFire (model) {
  var f = new ElectricFire(model);
  myHouse.addElectricFire(f);
  var number = myHouse._fire.length - 1;

  var fireDiv = document.createElement('div');
  fireDiv.id = 'fire';
  fireDiv.className = 'classD1';

  var label1 = document.createElement('label');
  label1.id = 'model';
  label1.innerText = 'Модель';

  var model = document.createElement('input');
  model.type = 'text';
  model.placeholder = 'Введите данные';
  model.value = f.getModel();
  model.className = 'information';
  model.addEventListener('input', function () {
    f.setModel(model.value);
  });

  var state = document.createElement('div');
  state.className = 'classDivSmall';
  state.innerText = f.getStatus();

  var onBtn = document.createElement("button");
  onBtn.type = "button";
  onBtn.innerHTML = "Вкл.";
  onBtn.className = "on";
  onBtn.addEventListener('click', function () {
    f.on();
    state.innerText = f.getStatus();
  });

  var offBtn = document.createElement("button");
  offBtn.type = "button";
  offBtn.innerHTML = "Выкл.";
  offBtn.className = "off";
  offBtn.addEventListener('click', function () {
    f.off();
    state.innerText = f.getStatus();
  });

  var p = document.createElement('p');
  p.innerText = 'Мощность';

  var power = document.createElement('div');
  power.innerText = f._power;
  power.className = 'classDivSmall';

  var increasePower = document.createElement('input');
  increasePower.type = 'button';
  increasePower.value = '▲';
  increasePower.className = 'button';
  increasePower.addEventListener('click', function () {
    f.increasePower();
    power.innerText = f._power;
  });

  var decreasePower = document.createElement('input');
  decreasePower.type = 'button';
  decreasePower.value = '▼';
  decreasePower.className = 'button';
  decreasePower.addEventListener('click', function () {
    f.decreasePower();
    power.innerText = f._power;
  });

  var deleteBtn = document.createElement("button");
  deleteBtn.type = "button";
  deleteBtn.innerHTML = "Удалить";
  deleteBtn.className = "off";
  deleteBtn.addEventListener('click', function () {
    var i = myHouse._fire.indexOf(f);
    myHouse.deleteElectricFire(i);
    document.getElementsByClassName('classD1')[i].remove();
  });

  document.body.appendChild(fireDiv);
  document.getElementsByClassName('classD1')[number].appendChild(label1);
  document.getElementsByClassName('classD1')[number].appendChild(model);
  document.getElementsByClassName('classD1')[number].appendChild(state);
  document.getElementsByClassName('classD1')[number].appendChild(onBtn);
  document.getElementsByClassName('classD1')[number].appendChild(offBtn);
  document.getElementsByClassName('classD1')[number].appendChild(p);
  document.getElementsByClassName('classD1')[number].appendChild(power);
  document.getElementsByClassName('classD1')[number].appendChild(increasePower);
  document.getElementsByClassName('classD1')[number].appendChild(decreasePower);
  document.getElementsByClassName('classD1')[number].appendChild(deleteBtn);

}

renderHouse(myHouse);
