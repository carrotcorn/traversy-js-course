//Object.prototype
//Person.prototype
// putting things into .prototype doesn't flood the constructor. allows for data to show up without logging the function used
// Person constructor
function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff =  Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// Calculate age
Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

// Get full name
// protoype always is set to a function
Person.prototype.getFullName = function () {
  return `${this.firstName} ${this.lastName}`;
};

// Gets Married
Person.prototype.getsMarried = function (newLastName) {
  this.lastName = newLastName;
};

const john = new Person("John", "Doe", "8-12-90");
const mary = new Person("Mary", "Johnson", "March 20 1978");

console.log(mary);

console.log(john.calculateAge());

console.log(mary.getFullName());

mary.getsMarried("Smith");

console.log(
  mary.getFullName(),
  "this Log uses getsMarried() function which changes last name"
);

console.log(
  mary.hasOwnProperty("firstName"),
  "this uses hasOwnProperty() method which will say true or false"
);
console.log(
  mary.hasOwnProperty("getFullName"),
  "this uses hasOwnProperty() method which will say true or false. This says false because it is not defined within the constructor and does not have its own property."
);
