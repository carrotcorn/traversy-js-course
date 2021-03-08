const storage = new Storage();
const contactData = storage.getContactData();

const PageState = function () {
  let currentState = new homeState(this);

  this.init = function () {
    this.change(new homeState());
  };
  this.change = function (state) {
    currentState = state;
  };
};
// Home State
const homeState = function (page) {
  document.querySelector("#heading").textContent = null;
  document.querySelector("#content").innerHTML = `
    <div class="jumbotron">
    <h1 class="display-3">Hello, world!</h1>
    <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
    <hr class="my-4">
    <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
    <p class="lead">
      <a class="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
    </p>
  </div>
  `;
};
// about state
const aboutState = function (page) {
  document.querySelector("#heading").textContent = "about us";
  document.querySelector(
    "#content"
  ).innerHTML = `<p>This is the about page dawg</p>`;
};

// contact state
const contactState = function (page) {
  document.querySelector("#heading").textContent =
    "contact us (try to add local storage as challenge)";
  document.querySelector("#content").innerHTML = `
  <form>
    <div class="form-group">
      <label>Name</label>
      <input id="name" type="text" class="form-control">
    </div>
    <div class="form-group">
    <label>Email address</label>
    <input id="email" type="email" class="form-control">
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  </form>
`;
};
// class Storage {
//    constructor() {
//      this.name;
//      this.email;
//    }
 
//    getContactData() {
//      return { name: this.name, email: this.email };
//    }
//    setContactData(name, email) {
//      localStorage.setItem("name", name);
//      localStorage.setItem("email", email);
//    }
//  }
 

//Instantiate pageState
const page = new PageState();

//init the first state
page.init();

//UI variables
const home = document.getElementById("home"),
  about = document.getElementById("about"),
  contact = document.getElementById("contact");

// Home State
home.addEventListener("click", (e) => {
  page.change(new homeState());

  e.preventDefault();
});

//about state
about.addEventListener("click", (e) => {
  page.change(new aboutState());

  e.preventDefault();
});

//Contact state
contact.addEventListener("click", (e) => {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  contact.change(new contactState());

  storage.setContactData(name, email);

  e.preventDefault();
});
