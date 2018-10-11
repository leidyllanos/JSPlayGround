//Budget controller no sabe de la existencia de ningun otro módulo
var budgetController = (function() {


})();

//UI controller no sabe de la existencia de ni gun otro módulo
var UIController = (function() {

})();  

//Global app controller comunica los dos módulos aneriores para poder mmostrar salidas
var controller = (function(budgetCtrl, UICtrl) {

})(budgetController, UIController);