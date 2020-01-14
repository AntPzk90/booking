"use strict";
(function(){
  var errorTemplate = document.querySelector("#error").content.querySelector(".error");
  var main = document.querySelector("main");
  var fragment = document.createDocumentFragment();

  function createError (status) {
    var errorElement = errorTemplate.cloneNode(true);
    errorElement.querySelector(".error__message").textContent = "Ошибка загрузки" + " " + status;
    return errorElement
  }

  function renderError (message) {
    fragment.appendChild(createError(message));
    main.appendChild(fragment);

    var errorBtn = document.querySelector(".error__button");

    errorBtn.addEventListener("click", function () {
      document.querySelector(".error").remove();
      window.load(window.pins.renderPins, window.error.renderError);
    });
  }

  function removeErrorMassege () {
    if(document.querySelector(".error")){
    document.querySelector(".error").remove();
    }
  }

  function removeErrorMassegeOnEscPress (evt) {
    if(evt.keyCode === 27){
      if(document.querySelector(".error")){
        document.querySelector(".error").remove();
        }
    }
  }

  document.addEventListener("click", removeErrorMassege);
  document.addEventListener("keydown", removeErrorMassegeOnEscPress)

  window.error = {
    renderError: renderError,
  }
})();
