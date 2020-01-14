(function(){
  var mapForm = document.querySelector(".map__filters");
  var houseType = document.querySelector("#housing-type");
  var housePrice = document.querySelector("#housing-price");
  var houseRooms = document.querySelector("#housing-rooms");
  var houseGuests = document.querySelector("#housing-guests");
  var filteredData = null;

  function renderFilteredPins (data) {
    var mapPins = document.querySelectorAll(".map__pin:not(.map__pin--main)");
    mapPins.forEach((el) => el.remove());
    window.pins.renderPins(data);
  }

  mapForm.addEventListener("change", function(){

    var pinsData = window.load.data;
    var filteredHouseTypeData = pinsData.filter(function (el) {
      if(houseType.value === "any"){
        return pinsData
      } else {
        return el.offer.type === houseType.value
      }
    });
    filteredData = filteredHouseTypeData;
    var filteredHousePriceData = filteredData.filter(function (el,index,arr) {
      if(housePrice.value === "middle"){
        return el.offer.price > 10000 && el.offer.price < 50000;
      } else if(housePrice.value === "low"){
        return el.offer.price <= 10000;
      } else if(housePrice.value === "high"){
        return el.offer.price >= 50000;
      } else if(housePrice.value === "any"){
        return arr
      }
    });
    filteredData = filteredHousePriceData;
    var filteredHouseRoomsData = filteredData.filter(function (el,index,arr) {
      if(houseRooms.value == el.offer.rooms){
        return el.offer.rooms;
      } else if(houseRooms.value === "any"){
        return arr
      }
    });
    filteredData = filteredHouseRoomsData;
    var filteredHouseGuestsData = filteredData.filter(function (el,index,arr) {
      if(houseGuests.value == el.offer.guests){
        return el.offer.guests;
      }else if(houseGuests.value === "any"){
        return arr
      }
    });
    filteredData = filteredHouseGuestsData;

    var features = Array.from(document.querySelectorAll(".map__checkbox:checked")).map(function (el) {
      return el.value
    });

    function filteredFeatures(data, features){
      if(features.length == 0){
        return data
      }
      for(var i = 0; i < features.length; i++){
        if(i !== 0){
          data = arr
        }
        var arr = data.filter(function (el) {
          console.log(el.offer.features)
          return el.offer.features.includes(features[i])
        })
      }
      return arr
    }
    filteredData = filteredFeatures(filteredData, features);
    renderFilteredPins(filteredData)
  });
})();
