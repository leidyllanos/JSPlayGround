//Este modulo no sabe de la existencia de ningun otro módulo
var calController = (function() {
    

})();

//Este modulo no sabe de la existencia de ningun otro módulo
var UIController = (function() {

})();  

//Este modulo comunica los dos módulos aneriores para poder mmostrar salidas
var controller = (function(calCtrl, UICtrl) {

    document.querySelector(".add").addEventListener('click', function() {
        console.log("I add numbers");
        
    });

})(calController, UIController);