//Person constructor
function Person(name, dob) {
  this.name = name;
  // this.age = age;
  this.birthday = new Date(dob);

  this.calculateAge = function () {
    const difference = Date.now() - this.birthday.getTime();
    const ageDate = new Date(difference);
    return Math.abs(ageDate.getUTCFullYear() - 1970); //Math.abs will give absolute number
  };
}

// const eric = new Person("Eric", 26)
const eric = new Person("Eric", "1994-4-4"); //this is the valid date structure for a date using Date()

console.log(eric);
console.log(eric.calculateAge());
