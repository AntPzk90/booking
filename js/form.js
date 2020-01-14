"use strict";
(function(){
// валидация поля комнат и гостей ("непростая валидация")
var rooms = document.querySelector("#room_number");
var capacity = document.querySelector("#capacity");

function guestsCountValidateOnChange () {
 if(rooms.value !== capacity.value){
    capacity.setCustomValidity("количество гостей не соответствует количеству комнат, установите одинаковое количество");
    rooms.setCustomValidity("количество гостей не соответствует количеству комнат, установите одинаковое количество");
    if(rooms.value == 100 && capacity.value !== 0){
      capacity.setCustomValidity("");
      rooms.setCustomValidity("");
    }
  } else {
    capacity.setCustomValidity("");
    rooms.setCustomValidity("");
  }
}
capacity.addEventListener("change", guestsCountValidateOnChange);
rooms.addEventListener("change", guestsCountValidateOnChange);
// валидация поля времени заезда и выезда.
var timeIn = document.querySelector("#timein");
var timeOut = document.querySelector("#timeout");

function timeInOutValidateOnChange () {
  if(timeIn.value !== timeOut.value){
    timeOut.setCustomValidity("синхронизируйте время, оно должно быть одинаковым");
  } else {
    timeOut.setCustomValidity("");
  }
}
timeIn.addEventListener("change", timeInOutValidateOnChange);
timeOut.addEventListener("change", timeInOutValidateOnChange);
// валидация поля с типом жилья
var typeSelect = document.querySelector("#type");
var priceHouse = document.querySelector("#price");
function typeHouseValidateOnChange () {
  if(typeSelect.value === "bungalo" && priceHouse.value < 0){
    priceHouse.setCustomValidity("введите цену больше 0");
  } else if (typeSelect.value === "flat" && priceHouse < 1000){
    priceHouse.setCustomValidity("введите цену больше 1000");
  } else if (typeSelect.value === "house" && priceHouse.value < 5000){
    priceHouse.setCustomValidity("введите цену больше 5000");
  } else if(typeSelect.value === "palace" && priceHouse.value < 10000){
    priceHouse.setCustomValidity("введите цену больше 10000");
  } else {
    priceHouse.setCustomValidity("");
  }
}
typeSelect.addEventListener("change", typeHouseValidateOnChange);
priceHouse.addEventListener("change", typeHouseValidateOnChange);

window.main.adForm.addEventListener("submit", function(evt){
  window.upload(new FormData(window.main.adForm), window.success.renderSuccess);
  evt.preventDefault();
});
function mapFaded (evt) {
  evt.preventDefault();
  window.main.adForm.reset();
  window.main.pinMain.style.top = 375 + "px";
  window.main.pinMain.style.left = 570 + "px";
  window.main.map.classList.add("map--faded");
  var mapPins = document.querySelectorAll(".map__pin:not(.map__pin--main)");
  mapPins.forEach((el) => el.remove());
  window.main.adForm.removeEventListener("submit", mapFaded);
  window.main.pinMain.addEventListener("mouseup", window.main.onMouseUpRenderPins);
}
window.main.adForm.addEventListener("submit", mapFaded);
})();
