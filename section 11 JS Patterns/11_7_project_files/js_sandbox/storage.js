class Storage {
  constructor() {
    this.name;
    this.email;
  }

  getContactData() {
    return { name: this.name, email: this.email };
  }
  setContactData(name, email) {
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  }
}
