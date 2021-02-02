// string
const name1 = "Eric";
const name2 = new String("Eric"); //"new" keyword calls constructor
// String is an object, not a primitive value like string = "fdsafdafdas"
// Thats why type of console logs Object, not string
// name2.foo = "bar";

// console.log(name2);
console.log(typeof name1); // typeof = string
console.log(typeof name2); // typeof = object

if (name2 === "Eric") {
  console.log("yes");
} else {
  console.log("no");
}

// Number
const num1 = 5;
const num2 = new Number(5);
console.log(num1);
console.log(typeof num1); // typeof = number
console.log(typeof num2); // typeof = object

// Boolean
const bool1 = true;
const bool2 = new Boolean(true);

console.log(bool1);
console.log(typeof bool1); // typeof = boolean
console.log(typeof bool2); // typeof = object

//Function
const getSum1 = function (x, y) {
  return x + y;
};

const getSum2 = new Function("x", "y", "return 8+1"); // this is weird, best not to do this

console.log(getSum1(2, 2));
// console.log(getSum2(3, 3));

// Object
const john1 = { name: "John" };
const john2 = new Object({ name: "John" }); //creates object John
console.log(john2);

// Arrays
const arr1 = [1, 2, 3, 4];
const arr2 = new Array(1, 2, 3, 4); //creates array Object

// regular expressions
const re1 = /\w+/; // this looks for word character
const re2 = new RegExp("\\w+");

console.log(re1);
console.log(re2);
