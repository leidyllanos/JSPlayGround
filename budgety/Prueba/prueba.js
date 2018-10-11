//Este modulo no sabe de la existencia de ningun otro módulo
var calController = (function() {

})();

//Este modulo no sabe de la existencia de ningun otro módulo
var UIController = (function() {
    
})();

//Este modulo comunica los dos módulos aneriores para poder mmostrar salidas
var controller = (function(calCtrl, UICtrl) {
  document.querySelector(".add").addEventListener("click", function() {
    // get the field input data
    // add the numbers to the budget controller
    // add the answer to the UI
    // calculate the answer
  });

  document.addEventListener("keypress", function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      // get the field input data
      // add the numbers to the budget controller
      // add the answer to the UI
      // calculate the answer
    }
  });
})(calController, UIController);
