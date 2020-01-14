"use strict";
(function(){
  var successTemplate = document.querySelector("#success").content.querySelector(".success");
  var main = document.querySelector("main");
  var fragment = document.createDocumentFragment();

  function createSuccess () {
    var successElement = successTemplate.cloneNode(true);
    return successElement
  }

  function renderSuccess () {
    fragment.appendChild(createSuccess());
    main.appendChild(fragment);
  }

  function removeSuccessMassege () {
    if(document.querySelector(".success")){
      document.querySelector(".success").remove();
    }
  }

  function removeSuccessMassegeOnEscPress (evt) {
    if(evt.keyCode === 27){
      if(document.querySelector(".success")){
        document.querySelector(".success").remove();
        }
    }
  }

  document.addEventListener("click", removeSuccessMassege);
  document.addEventListener("keydown", removeSuccessMassegeOnEscPress)

  window.success = {
    renderSuccess: renderSuccess,
  }
})();
