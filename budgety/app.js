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

      //Create new ID
      if (data.allItems[type].length - 1 > 0) {
        ID  = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }
      

      //Create new Item based on 'inc' or 'exp'
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else if (type === 'inc') {
        newItem = new Income(ID, des, val);
      }

      //push it into aour data structure
      data.allItems[type].push(newItem);

      //Return the new element 
      return newItem;
    },

    testing: function() {
      console.log(data);
      
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
    var input, newItem;

    //1. get the field input data
    input = UICtrl.getInput();

    //2. add the item to the budget controller
    newItem = budgetCtrl.addItem(input.type, input.description, input.value);

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