// Basic structure
//
// below is an "IIFE(iffy)" - immediately invoked function expression that runs right away. wrapping in () makes the function run immediately

// (function() {
//   // Declare private vars and functions here

//   return {
//     // Declare public var and functions here
//   }
// })();

// // STANDARD MODULE PATTERN
// const UICtrl = (function () {
//   let text = "Hello World";

//   const changeText = function () {
//     const element = document.querySelector("h1");
//     element.textContent = text;
//   };

//   return {
//     callChangeText: function () {
//       changeText();
//       // console.log(text);
//     },
//   };
// })();

// // UICtrl.callChangeText();
// // UICtrl.changeText();

// console.log(UICtrl.text);

// REVEALING MODULE PATTERN
const ItemCtrl = (function () {
  //let _data = [] //private variable "_var" note that it is a private variable
  let data = []; //private variable

  function add(item) {
    data.push(item);
    console.log("Item Added....");
  }

  function get(id) {
    return data.find((item) => {
      return item.id === id;
    });
  }
  //everything in the until this point is private
  return {
    add: add, //add is set to add.
    // get: get, // get set to get to reveal the methods// if this get is commented out, it makes it private
    // get:get = "Uncaught TypeError: ItemCtrl.get is not a function" error
  };
})();

ItemCtrl.add({ id: 1, name: "John" });
ItemCtrl.add({ id: 2, name: "Mark" });
console.log(ItemCtrl.get(2));
