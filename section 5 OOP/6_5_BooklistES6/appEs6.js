//ES6 Syntax
class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

class UI {
  addBookToList(book) {
    const list = document.getElementById("book-list");
    //create tr element
    const row = document.createElement("tr");
    //insert columns
    row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="delete">Delete</a></td>
    `;
    list.appendChild(row); // inserts row
    console.log("adding book works");
  }
  showAlert(message, className) {
    if (document.querySelector(`.alert.${className}`)) return;

    //create element
    const div = document.createElement("div");
    //add classes
    div.className = `alert ${className}`;
    //add text
    div.appendChild(document.createTextNode(message));
    //get parent node
    const container = document.querySelector(".container");
    const form = document.querySelector("#book-form");
    //insert alert
    container.insertBefore(div, form);
    //set timeout
    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);

    console.log("timeout works");
  }

  deleteBook(target) {
    if (target.className === "delete") {
      target.parentElement.parentElement.remove(); //DOM traversing up the html tags twice. using parentElement twice traverses the DOM two tags above, the is removed w/ .remove
    }
    console.log("delete works");
  }
  clearFields() {
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}

//
//
//
//
//
//
// Event Listeners
// Event Listeners for add book starting from form tag on html
document.getElementById("book-form").addEventListener("submit", function (e) {
  // get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  // Instantiate book object
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate empty form fields
  if (book.title === "" || book.author === "" || book.isbn === "") {
    ui.showAlert("Please Fill Out Form fields, like C'Mon dawg", "error");
  } else {
    ui.addBookToList(book);
    ui.showAlert("Book is added to the list Dawg", "success"); // message that shows in alert. className is the style class in HTML style which is red for error or green for success. The style class has to be within "" to make a string, or else it will pull a variable within the file
    ui.clearFields();
  }
  //
  console.log("Book added");
  e.preventDefault();
});
// Event Listener for delete
document.getElementById("book-list").addEventListener("submit", function (e) {
  // Instantiate UI
  const ui = new UI();
  //delete book
  ui.deleteBook(target);
  // Show Alert
  ui.showAlert("Book deleted from list", "success");
  //
  console.log("book deleted");
  e.preventDefault();
});
