"use strict";
(function(){
  window.load = function(onSuccess, onError){

    var URL = "https://js.dump.academy/keksobooking/data";

    var xhr = new XMLHttpRequest();
    xhr.responseType = "json";
    xhr.open("GET", URL);

    xhr.addEventListener("load", function () {
      if(xhr.status === 200){
        onSuccess(xhr.response);
        window.load = {
          data: xhr.response,
        }
      } else {
        onError('Cтатус ответа: : ' + xhr.status);
      }
    });
    xhr.addEventListener("error", function () {
      onError("Произошла ошибка соединения");
    });
    xhr.addEventListener("timeout", function () {
      onError("Запрос не успел выполниться за " + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000;
    xhr.send();
  };

})()
