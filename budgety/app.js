//Budget controller 
var budgetController = (function() {


})();

//UI controller 
var UIController = (function() {

})();  

//Global app controller 
var controller = (function(budgetCtrl, UICtrl) {

  var ctrAddITem = function() {

    //1. get the field input data
    //2. add the item to the budget controller
    //3. add the item to the UI
    //4. calculate the budget
    //5. display the budget on the UI
    
  };

  document.querySelector('add__btn').addEventListener('click', ctrAddITem);

  document.addEventListener('keypress', function(event) {
    if (event.keyCode === 13 || event.which === 13) {
      ctrAddITem();
    }
  });

})(budgetController, UIController);