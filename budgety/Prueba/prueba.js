//Este modulo no sabe de la existencia de ningun otro módulo
var calController = (function() {

})();

//Este modulo no sabe de la existencia de ningun otro módulo
var UIController = (function() {
    
    var DOMstrings = {
        inputNum: '.add__num1',
        inputNum2: '.add__num2',
        inputBtn: '.add'
    }

    return {
        getInput: function() {
            return {
                num1: document.querySelector(DOMstrings.inputNum).value,
                num2: document.querySelector(DOMstrings.inputNum2).value
            };
        },
        getDOMstrings: function() {
            return DOMstrings;
        }
    };
    
})();

//Este modulo comunica los dos módulos aneriores para poder mmostrar salidas
var controller = (function(calCtrl, UICtrl) {
    
    var DOM = UICtrl.getDOMstrings();

    var ctrlAddItem = function() {
        //1. get the field input data
        var input = UICtrl.getInput();
        console.log(input);
        
        //2. add the numbers to the budget controller
        //3. add the answer to the UI
        //4. calculate the answer
       
    }

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function(event) {
        if (event.keyCode === 13 || event.which === 13) {
         ctrlAddItem();
        }
    });
})(calController, UIController);
