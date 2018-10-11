//Este modulo no sabe de la existencia de ningun otro módulo
var calController = (function() {
    
    var add = function(a, b) {
        return a + b;
    }

    var rest = function(a, b) {
        return a - b;
    }

    var mult = function(a, b) {
        return a * b;
    }

    var div = function(a, b) {
        return a / b;
    }

    return {
        addTest: function(a, b) {
            return add(a, b);
        },
        restTest: function(a, b) {
            return rest(a, b);
        },
        multTes: function(a, b) {
            return mult(a, b);
        },
        divTest: function(a, b) {
            return div(a, b);
        }
    }

})();

//Este modulo no sabe de la existencia de ningun otro módulo
var UIController = (function() {

})();  

//Este modulo comunica los dos módulos aneriores para poder mmostrar salidas
var controller = (function(calCtrl, UICtrl) {

    var z = calController.addTest(5, 10);

    return {
        anotherAdd: function() {
            console.log(z);            
        }
    }

    document.querySelector(".add").addEventListener('click', function() {
        console.log("I add numbers");
        
    });

})(calController, UIController);