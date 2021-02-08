// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

// add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  // create element
  const row = document.createElement("tr");

  // insert columns
  row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="#" class="delete">X</td>
   `;

  list.appendChild(row); //inserts row
};
//show alert
UI.prototype.showAlert = function (message, className) {
  //function (message "what i wanna say", className "style className in HTML")
  if (document.querySelector(`.alert.${className}`)) return; // does not duplicate error message when clicking the submit multiple times within the timeout

  // create div
  const div = document.createElement("div");

  // add classes
  div.className = `alert ${className}`;

  // add text
  div.appendChild(document.createTextNode(message));

  // get parent
  const container = document.querySelector(".container");
  const form = document.querySelector("#book-form");

  // insert alert
  container.insertBefore(div, form); // .insertBefore(whatIWantToInsert, whatToInsertBefore)

  //timeout after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").remove();
  }, 2300);
};

// clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};

// Event Listeners
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
  if (title === "" || author === "" || isbn === "") {
    // Error alert in ui
    ui.showAlert("Please fill out all fields", "error"); // message that shows in alert
  } else {
    // Add book to list
    ui.addBookToList(book);
    ui.showAlert("Added book to list", "success"); // message that shows in alert. className is the style class in HTML style which is red for error or green for success.

    // Clear fields
    ui.clearFields();
  }

  // console.log("test");
  e.preventDefault();
});
