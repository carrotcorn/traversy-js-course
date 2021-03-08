function MemberFactory() {
  this.createMember = function (name, type) {
    let member;
    let membership = function(type){
      if(type === 'simple' || type === 'standard' || type === 'super'){
        return type
      }
    }
    // if(type === 'simple' || type === 'standard' || type === 'super'){
    // if (type === "simple") {
    //   member = new SimpleMembership(name);
    // } else if (type === "standard") {
    //   member = new StandardMembership(name);
    // } else if (type === "super") {
    //   member = new SuperMembership(name);
    // }
    // }
    if (type === "simple") {
      member = new SimpleMembership(name);
    } else if (type === "standard") {
      member = new StandardMembership(name);
    } else if (type === "super") {
      member = new SuperMembership(name);
    }

    member.type = type;

    member.define = function () {
      console.log(`${this.name} (${this.type}): ${this.cost}`);
      let output = `<ul>${this.name} (${this.type}): ${this.cost}</ul>`;

      console.log(`${this.name} (${this.type}): ${this.cost}`);

      document.querySelector("#list").innerHTML += output;
    };

    return member;
  };
}

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
const factory = new MemberFactory();

members.push(factory.createMember("John Doe", "simple"));
members.push(factory.createMember("Chris Jackson", "super"));
members.push(factory.createMember("Janice Williams", "simple"));
members.push(factory.createMember("Tom Smith", "standard"));
//
members.push(factory.createMember("Eric Bourne", "sduper"));

// console.log(members);

members.forEach(function (member) {
  member.define();
});
