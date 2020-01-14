"use strict";
(function(){
  window.upload = function(data, onSuccess){

    var URL  = "https://js.dump.academy/keksobooking";

    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";

    xhr.addEventListener("load", function () {
        onSuccess(xhr.response);
    });

    xhr.open("POST", URL);
    xhr.send(data);

  }
})();
