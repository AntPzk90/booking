"use strict";
var map = document.querySelector(".map");
var adForm = document.querySelector(".ad-form");
var pinMain = map.querySelector(".map__pin--main");
var pinMainAddressInput = adForm.querySelector("#address");
// вычисляем координаты метки взависимости от состояния страницы
function assignmentCoordinates () {
  var notActivePageCoordinateY =  pinMain.offsetTop + 32;
  var notActivePageCoordinateX = pinMain.offsetLeft + 32;
  var activePageCoordinateY = pinMain.offsetTop + 80;
  var activePageCoordinateX = pinMain.offsetLeft + 32;
  if(adForm.classList.contains("ad-form--disabled")){
    pinMainAddressInput.value = notActivePageCoordinateY + " расстояние до центра метки по вертикали, " + notActivePageCoordinateX + "  до центра метки по горизонтали";
  } else {
    pinMainAddressInput.value =  + activePageCoordinateY + " расстояние до острого конца по вертикали, " + activePageCoordinateX + "  до острого конца по горизонтали";
  }
};
assignmentCoordinates ();
// разблокировка елементов формы и перевод стр. в активное состояние
function mapActivation () {
  map.classList.remove("map--faded");
};

function adFormActivation () {
  adForm.classList.remove("ad-form--disabled");
  var adformFieldset = adForm.querySelectorAll("fieldset");
  for(var i = 0; i < adformFieldset.length; i++){
    if(adformFieldset[i].disabled){
      adformFieldset[i].disabled = false;
    }
  }
};

function removeCard () {
  if(document.querySelector(".map__card")){
    document.querySelector(".map__card").remove();
  }
};

function onPopupEsc (evt) {
  if(evt.keyCode === 27){
    removeCard();
    document.removeEventListener("keydown", onPopupEsc)
  }
};

pinMain.addEventListener("mousedown", function (evt) {
  evt.preventDefault();
  pinMain.draggable = true;

  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  };

  function onMouseMove (moveEvt) {

    moveEvt.preventDefault();

    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };

    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };

    pinMain.style.top = (pinMain.offsetTop - shift.y) + "px"
    pinMain.style.left = (pinMain.offsetLeft - shift.x) + "px";
  };

  function onMouseUp (evtUp) {
    evtUp.preventDefault();
    adFormActivation();
    mapActivation();
    assignmentCoordinates();
    document.removeEventListener("mousemove",onMouseMove);
    document.removeEventListener("mouseup", onMouseUp);
  }
  document.addEventListener("mousemove", onMouseMove);
  document.addEventListener("mouseup", onMouseUp);
});

function onMouseUpRenderPins () {
  window.load(window.pins.renderPins, window.error.renderError);
};

pinMain.addEventListener("mouseup", onMouseUpRenderPins);

window.main = {
  onMouseUpRenderPins: onMouseUpRenderPins,
  adForm: adForm,
  pinMain: pinMain,
  map: map,
};
