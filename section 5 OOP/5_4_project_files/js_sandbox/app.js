// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName}`;
};

const person1 = new Person("John", "Doe");

console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  Person.call(this, firstName, lastName); //.call() allows for me to call a function from another function in the current context

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods
// This allows me to use the greeting function for Customer
// Greeting is part of the Person.prototype, this code allows for inheritance
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
// Under__proto__ in the console, this specifies that I am now inheriting the
// Constructor for use for the Customer
Customer.prototype.constructor = Customer;

// Create customer
const customer1 = new Customer("Tom", "Smith", "555-555-5555", "Standard");

console.log(customer1);

// Customer greeting
// All above code culminates into me being able to use the greeting function and
// overwrite it
Customer.prototype.greeting = function () {
  return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
};

console.log(customer1.greeting());
