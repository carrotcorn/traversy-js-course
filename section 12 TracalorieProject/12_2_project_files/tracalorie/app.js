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
    //can come from api later on
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
  // Public methods
  return {
    getItems: function () {
      return data.items;
    },
    logData: function () {
      return data;
    },
  };
})();
//
//
//
//
//
//
//UI controller
const UICtrl = (function () {
  const UISelectors = {
    itemList: "#item-list",
    addBtn: ".add-btn",
  };
  // Public methods
  return {
    populateItemList: function (items) {
      let html = "";
      items.forEach((item) => {
        html += `<li class="collection-item" id="item-${item.id}">
           <strong>${item.name}: </strong> <em>${item.calories}   Calories</em>
           <a href="#" class="secondary-content">
             <i class="edit-item fa fa-pencil"></i>
           </a>
         </li>`;
      });
      // Insert list items
      document.querySelector(UISelectors.itemList).innerHTML = html;
    },
    // being imported into the App Controller for loading event listener
    getSelectors: function () {
      return UISelectors;
    },
  };
})();
//
//
//
//
//
//
//
//App controller
const App = (function (ItemCtrl, UICtrl) {
  //load event listeners
  const loadEventListeners = function () {
    //get ui selectors
    const UISelectors = UICtrl.getSelectors();

    // Add item event
    document
      .querySelector(UISelectors.addBtn)
      .addEventListener("click", itemAddSubmit);
  };
  // Add item submit
  const itemAddSubmit = function (e) {
    console.log("added");
    e.preventDefault();
  };

  //Public methods
  return {
    init: function () {
      // fetch items from data structure
      const items = ItemCtrl.getItems();

      // populate list with items
      UICtrl.populateItemList(items);

      // Load Event Listeners
      loadEventListeners();
    },
  };
})(ItemCtrl, UICtrl);

//initialize app
App.init();
