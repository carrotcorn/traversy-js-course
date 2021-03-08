//Storage Controller

//Item Controller
const ItemCtrl = (function () {
  //item constructor
  const Item = function (id, name, calories) {
    this.id = id;
    this.name = name;
    this.calories = calories;
  };
  // Data Structure / State
  const data = {
    items: [
      {
        id: 0,
        name: "Steak Dinner",
        calories: 1200,
      },
      {
        id: 1,
        name: "Pizza",
        calories: 2000,
      },
      {
        id: 2,
        name: "Eggs Benedict",
        calories: 3000,
      },
    ],
    currentItems: null, //when update icon selected, this item will become the current item which will be put into the form to be updated
    totalCalories: 0,
  };
  return {
    logData: function () {
      return data;
    },
  };
})();

//UI controller
const UICtrl = (function () {})();
//App controller
const App = (function (ItemCtrl, UICtrl) {


   return{
      init: function(){
         console.log("initializing app...");
      }
   }
})(ItemCtrl, UICtrl);

//initialize app
App.init()