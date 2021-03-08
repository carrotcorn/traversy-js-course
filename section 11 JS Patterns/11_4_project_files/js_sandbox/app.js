function MemberFactory() {
  this.createMember = function (name, type) {
    let member;

    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }
    //  else if (type !== "simple" || type !== "standard" || type !== "super") {

    // }
    // ** how to do error handling with this???**
    try {
      member.type = type;
      if (!member.type) {
        throw "no membership";
      } else {
        member.define = function () {
          let output = `<ul>${this.name} (${this.type}): ${this.cost}</ul>`;

          console.log(`${this.name} (${this.type}): ${this.cost}`);

          document.querySelector("#list").innerHTML += output; //+= outputs multiple memberships in the UI
        };
      }
    } catch (e) {
      console.log(e);
    }

    return member;
  };
}

//create constructor for subclasses above. ie. the SimpleMembership, StandardMembership, SuperMembership.

const SimpleMembership = function (name) {
  this.name = name;
  this.cost = "$5";
};

const StandardMembership = function (name) {
  this.name = name;
  this.cost = "$15";
};

const SuperMembership = function (name) {
  this.name = name;
  this.cost = "$25";
};

const members = [];

//define factory by initializing MemberFactory
const factory = new MemberFactory();

//add member to members array
members.push(factory.createMember("John Doe", "simple"));
members.push(factory.createMember("Chris Jackson", "super"));
members.push(factory.createMember("Janice Williams", "simple"));
members.push(factory.createMember("Tom Smith", "standard"));
members.push(factory.createMember("Eric Bourne", "sduper"));

console.log(members);

members.forEach(function (member) {
  member.define(); //calls define from above on line 15 outputting the name, price, and membership type
});
