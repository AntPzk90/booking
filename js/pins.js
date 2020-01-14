"use strict";
(function() {
  var pinTmplate = document.querySelector("#pin").content.querySelector(".map__pin");
  var mapPinsContainer = document.querySelector(".map__pins");
  var fragment = document.createDocumentFragment();
  // создаём пины с похожими объявлениями
  function createPins (pin) {
    var pinElemet = pinTmplate.cloneNode(true);
    pinElemet.querySelector("img").src = pin.author.avatar;
    pinElemet.style = "left:" + (pin.location.x - 25) + "px; top:" + (pin.location.y - 70) +"px;";
    return pinElemet;
  }
  //отрисовываем пины с похожими объявлениями

  function renderPins (pins) {
    var pinsLength = 5;

    if(pins.length < pinsLength){
      pinsLength = pins.length;
    }

    for(var index = 0; index < pinsLength; index++){
      fragment.appendChild(createPins(pins[index]));
    }

    mapPinsContainer.appendChild(fragment);
    var mapPins = document.querySelectorAll(".map__pin:not(.map__pin--main)");
    mapPins.forEach((el,index) => el.addEventListener("click", function(evt){
      if(document.querySelector(".map__card")){
        removeCard();
      }
      window.card.mapFiltersContainer
      .before(window.card.fragmentCard.appendChild(createCards(pins[index])));

      var cardClose = document.querySelector(".popup__close");
      cardClose.addEventListener("click", removeCard);
      document.addEventListener("keydown", onPopupEsc);

    }));
  window.main.pinMain.removeEventListener("mouseup", window.main.onMouseUpRenderPins);
  }

  window.pins = {
    renderPins: renderPins,
  }
})();
