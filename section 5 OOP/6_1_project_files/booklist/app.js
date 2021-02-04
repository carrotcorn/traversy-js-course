// Book Constructor
function Book(title, author, isbn) {
  this.title = title;
  this.author = author;
  this.isbn = isbn;
}

// UI Constructor
function UI() {}

//add book to list
UI.prototype.addBookToList = function (book) {
  const list = document.getElementById("book-list");
  //create element
  const row = document.createElement("tr");
  // insert cols
  row.innerHTML = `
   <td>${book.title}</td>
   <td>${book.author}</td>
   <td>${book.isbn}</td>
   <td><a href="#" class="delete">X</td>
   `;

  list.appendChild(row);
  console.log(row);
};
//show alert
UI.prototype.showAlert = function (message, className) {
  // create div
  const div = document.createElement("div");
  // add classes
  div.className = `alert ${className}`;
  // add text
  div.appendChild(document.createTextNode(message));
  //
};

// clear fields
UI.prototype.clearFields = function () {
  document.getElementById("title").value = "";
  document.getElementById("author").value = "";
  document.getElementById("isbn").value = "";
};
// Event Listeners
document.getElementById("book-form").addEventListener("submit", function (e) {
  //get form values
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const isbn = document.getElementById("isbn").value;

  //instantiate book object
  const book = new Book(title, author, isbn);

  // Instantiate UI
  const ui = new UI();

  // Validate
  if (title === "" || author === "" || isbn === "") {
    //error alert in ui
    UI.showAlert("please fill out all fields");
  } else {
    // Add book to list
    ui.addBookToList(book);

    //clear fields
    ui.clearFields();
  }

  //   console.log("test");
  e.preventDefault();
});
