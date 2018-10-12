//Budget controller
var budgetController = (function() {

  var Expense = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var Income = function(id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  };

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: [],
      inc: []
    }
  };

  return {
    addItem: function(type, des, val) {
      var newItem, ID;
      ID = 0;

      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);
      return newItem;
    }
  };

})();

//UI controller
var UIController = (function() {

  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn"
  };

  return {
    getInput: function() {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //will be get inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: document.querySelector(DOMstrings.inputValue).value
      };
    },
    getDOMstrings: function() {
      return DOMstrings;
    }
  };

})();

//Global app controller
var controller = (function(budgetCtrl, UICtrl) {

  var setupEventListeners = function() {
    var DOM = UICtrl.getDOMstrings();
    document.querySelector(DOM.inputBtn).addEventListener("click", ctrAddITem);

    document.addEventListener("keypress", function(event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrAddITem();
      }
    });
  };

  var ctrAddITem = function() {
    //1. get the field input data
    var input = UICtrl.getInput();

    //2. add the item to the budget controller
    //3. add the item to the UI
    //4. calculate the budget
    //5. display the budget on the UI
  };

  return {
    init: function() {
      console.log("App has started.");
      setupEventListeners();
    }
  };

})(budgetController, UIController);

controller.init();