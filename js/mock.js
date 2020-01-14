"use strict";
function generateMoks(moksCount) {

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  function mokData(index){
    var mok = {
      "author": {
        "avatar": "img/avatars/user0" + (index + 1) + ".png"
      },

      "location": {
        "x": randomInteger(300, 800),
        "y": randomInteger(130, 630)
      },

      "offer": {
        "title": "some title",
        "address": randomInteger(300, 800) + ", " + randomInteger(300, 800),
        "price": randomInteger(5000, 50000),
        "type": function(){
          var houseType = ["palace", "flat", "house", "bungalo"]
          return houseType[randomInteger(0,3)]
        }(),
        "rooms": randomInteger(1, 4),
        "guests": randomInteger(1, 10),
        "checkin": function(){
          var checkinTime = ["12:00", "13:00", "14:00"]
          return checkinTime[randomInteger(0,2)]
        }(),
        "checkout": function(){
          var checkinTime = ["12:00", "13:00", "14:00"]
          return checkinTime[randomInteger(0,2)]
        }(),
        "features": function(){
          var featuresList = ["wifi", "dishwasher", "parking", "washer", "elevator", "conditioner"]
          return featuresList.slice(0,randomInteger(2,6))
        }(),
        "description": "somedescription",
        "photos": function(){
          var photoUrl = ["http://o0.github.io/assets/images/tokyo/hotel1.jpg",
          "http://o0.github.io/assets/images/tokyo/hotel2.jpg",
          "http://o0.github.io/assets/images/tokyo/hotel3.jpg"];
          return photoUrl.slice(0,randomInteger(1,3))
        }()
      },
    }
    return mok;
  }

  var mokArr = [];

  for(var i = 0; i < moksCount; i ++){
    mokArr.push(mokData(i));
  }

  return mokArr;
}
var pins = generateMoks(8);

window.mock = {
  pins: pins
}
