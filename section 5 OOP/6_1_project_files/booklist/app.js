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

  //   console.log(ui)

  // Add book to list
  ui.addBookToList(book);

  //   console.log("test");
  e.preventDefault();
});
