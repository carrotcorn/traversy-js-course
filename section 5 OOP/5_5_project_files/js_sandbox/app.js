const personPrototypes = {
  greeting: function () {
    // greeting: set to a function
    return `Hello there ${this.firstName} ${this.lastName}`;
  },
  getsMarried: function (newLastName) {
    this.lastName = newLastName;
  },
};
//below uses alternative syntax
const mary = Object.create(personPrototypes); //.create will take in prototypes
mary.firstName = "Mary";
mary.lastName = "Williams";
mary.age = 30;

mary.getsMarried("Thompson");

console.log(mary.greeting());
//expanding on OBJECT.CREATE()
// When using object.create() we can pass additional property descriptors

//     lastName:{ value: 'Traversy',
//         writable: true,
//         enumerable: true,

//         configurable: true}

// As we are passing only value the writable is by default false

// lastName:{ value: 'Traversy'}

// Additionally if we pass

//     lastName:{ value: 'Traversy',
//         writable: true}

// We will be able to apply getsMarried on brad also.

// It is because getMarried is writing that lastName property.

const brad = Object.create(personPrototypes, {
  firstName: { value: "Brad" },
  lastName: { value: "Traversy" },
  age: { value: 36 },
});

console.log(brad);

console.log(brad.greeting());
