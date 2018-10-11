//Este modulo no sabe de la existencia de ningun otro módulo
var calController = (function() {

})();

//Este modulo no sabe de la existencia de ningun otro módulo
var UIController = (function() {
    
})();

//Este modulo comunica los dos módulos aneriores para poder mmostrar salidas
var controller = (function(calCtrl, UICtrl) {
    
    var ctrlAddItem = function() {
        //1. get the field input data
        //2. add the numbers to the budget controller
        //3. add the answer to the UI
        //4. calculate the answer
    }

    document.querySelector(".add").addEventListener("click", function() {
        ctrlAddItem();
    });

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) {
         ctrlAddItem();
        }
    });
})(calController, UIController);
