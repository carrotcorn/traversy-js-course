// subclasses
class Person {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  greeting() {
    return `Hello there ${this.firstName} ${this.lastName}`;
  }
}
//customer is a subclass of person

class Customer extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);

    this.phone = phone;
    this.membership = membership;
  }

  static getMembershipCost() {
    return 500;
  }
}

const john = new Customer("John", "Doe", "555-555-5555", "Standard");

console.log(john.greeting());

console.log(Customer.getMembershipCost()); //has to use the Customer class becasue it
//is static and is only within the scope of the subclass of person. I cannot use
//Person.getMembershipCost() because it is static and
//is out of the scope of the subclass
