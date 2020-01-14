"use strict";
(function(){

  var cardTemplate = document.querySelector("#card").content.querySelector(".map__card");
  var mapFiltersContainer = map.querySelector(".map__filters-container");
  var fragmentCard = document.createDocumentFragment();

window.createCards = function (card) {

  var cardElement = cardTemplate.cloneNode(true);

  cardElement.querySelector(".popup__avatar").src = card.author.avatar;
  cardElement.querySelector(".popup__title").textContent = card.offer.title;
  cardElement.querySelector(".popup__text--address").textContent = card.offer.address;
  cardElement.querySelector(".popup__text--price").innerHTML = card.offer.price +
  " &#x20bd;<span>/ночь</span></p>";
  cardElement.querySelector(".popup__type").textContent = card.offer.type;
  cardElement.querySelector(".popup__text--capacity").textContent = card.offer.rooms + " комнаты для "
  + card.offer.guests + " гостей";
  cardElement.querySelector(".popup__text--time").textContent = "Заезд после" + card.offer.checkin +
  ", выезд после " + card.offer.checkout;

  var featuresElements = cardElement.querySelectorAll(".popup__feature");

  for(var i = 0; i < featuresElements.length; i ++){
    featuresElements[i].style.display = "none";
    switch(card.offer.features[i]){
      case "wifi":
        cardElement.querySelector(".popup__feature--wifi").removeAttribute("style");
      case "dishwasher":
        cardElement.querySelector(".popup__feature--dishwasher").removeAttribute("style");
      case "parking":
        cardElement.querySelector(".popup__feature--parking").removeAttribute("style");
      case "washer":
        cardElement.querySelector(".popup__feature--washer").removeAttribute("style");
      case "elevator":
        cardElement.querySelector(".popup__feature--elevator").removeAttribute("style");
      case "conditioner":
        cardElement.querySelector(".popup__feature--conditioner").removeAttribute("style");
    }
  }
  var photoList = cardElement.querySelector(".popup__photos");
  var fragmentFoto = document.createDocumentFragment();

  function renderPhoto (srcPhoto) {
    var photoListItem = document.createElement("img");
    photoListItem.src = srcPhoto;
    photoListItem.width = "45";
    photoListItem.height = "40";
    photoListItem.alt = "Фотография жилья";
    photoListItem.classList.add("popup__photo");

    return photoListItem;
  }

  for(var j = 0; j < card.offer.photos.length; j++){
    fragmentFoto.appendChild(renderPhoto(card.offer.photos[j]));
  }
  photoList.appendChild(fragmentFoto);
  return cardElement;
}

window.card = {
  mapFiltersContainer: mapFiltersContainer,
  fragmentCard: fragmentCard,
  createCards: createCards
}
})();
