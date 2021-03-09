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
    addItem: function (name, calories) {
      let ID;
      //create ID
      if (data.items.length > 0) {
        ID = data.items[data.items.length - 1].id + 1;
      } else {
        ID = 0;
      }

      //calories to number
      calories = parseInt(calories);

      //Create new item
      newItem = new Item(ID, name, calories);

      // adding to array of items
      data.items.push(newItem);

      return newItem;
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
    itemNameInput: "#item-name",
    itemCaloriesInput: "#item-calories",
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
    getItemInput: function () {
      //want to return object with the name a calories
      return {
        name: document.querySelector(UISelectors.itemNameInput).value,
        calories: document.querySelector(UISelectors.itemCaloriesInput).value,
      };
    },
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
    const input = UICtrl.getItemInput();

    // check for name and calorie input
    if (input.name !== "" && input.calories !== "") {
      console.log("meal/item added!");
      // add item
      const newItem = ItemCtrl.addItem(input.name, input.calories);
    }

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
