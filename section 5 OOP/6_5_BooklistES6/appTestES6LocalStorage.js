class Book {
  //properties of the object
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }
}

//user interface functions
//what do i want to do in the book list
//add book, delete book, show alerts with message, clear form fields
class UI {
  addBookToList(book) {
    //create lists and rows via node creation
    const list = document.getElementById("book-list");
    const row = document.createElement("tr");
    //insert created rows
    row.innerHTML = `
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#" class="delete">Daaaaaaleeetee<a></td>
     `;
    list.appendChild(row);
    console.log("adding row function");
  }
  showAlert(message, className) {
    //show alert in text node element above
    //below makes the alert only show once upon clicking submit
    if (document.querySelector(`.alert.${className}`)) return;
    //create html tag
    const div = document.createElement("div");
    //create class
    div.className = `alert ${className}`; // in the if statement, the
    // querySelector is referencing the alert thats being created here
    //
    //create text
    div.appendChild(document.createTextNode(message));
    //get parent node
    const container = document.querySelector(".container"); //have to use querySelector() to be able to use "insertBefore()"
    const form = document.querySelector("#book-form");
    // with querySelector() need to use # or . notation for identifying either the ID or ClassName. I can use getElementById.

    container.insertBefore(div, form);

    // set timeOut
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
  deleteBook(target) {
    // when eventListener clicked "the delete icon" target is the icon, then the parentElement is the li, then another li, then the whole line is removed from the UI
    if (target.className === "delete") {
      target.parentElement.parentElement.remove();
      console.log("delete works");
    }
  }
  clearFields() {
    //clear text within the form
    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("isbn").value = "";
  }
}
// Adding local storage class
class Store {
  static getBooks() {
    let books;
    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }
    return books;
  }
  //
  static displayBooks() {
    // create const var books and call getBooks()
    const books = Store.getBooks();
    // loop thru books array thats created in the localStorage
    books.forEach((book) => {
      //forEach has to have the E uppercase
      // instantiate UI var
      const ui = new UI();
      // add book to UI
      ui.addBookToList(book);
    });
  }
  //
  static addBook(book) {
    const books = Store.getBooks();
    books.push(book); //adding book into object array within local storage in the browser
    localStorage.setItem("books", JSON.stringify(books));
  }
  //
  static removeBook(isbn) {
    const books = Store.getBooks();

    books.forEach((book, index) => {
      if (book.isbn == isbn) {
        books.splice(index, 1);
      }
    });
    localStorage.setItem("books", JSON.stringify(books));

    //shows that im targeting the isbn in the console via the eventListener
    console.log(isbn);
  }
}
// DOM Load Event from localStorage from refresh
document.addEventListener("DOMContentLoaded", Store.displayBooks);

//
//
//
//
//Event Listeners
//Add Book Event Listener

document
  .getElementById("book-form")
  .addEventListener("submit", function (event) {
    //get form values
    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const isbn = document.getElementById("isbn").value;

    //instantiate object, which will then create instances of the object
    //meaning to create multiple objects

    const book = new Book(title, author, isbn);
    const ui = new UI();
    console.log("ui");

    //validation
    if (title === "" || author === "" || isbn === "") {
      ui.showAlert("Fill in the form", "error");
      console.log("empty fields");
    } else {
      ui.addBookToList(book); //creates instance of object
      //
      //add book to local storage
      Store.addBook(book);

      ui.showAlert("Added Book!!!", "success");
      ui.clearFields();
      console.log("successfully added book");
    }

    event.preventDefault();
  });
//
//
//
//Delete Handler Listener
document.getElementById("book-list").addEventListener("click", (event) => {
  //using arrow function ^
  //instantiate UI
  const ui = new UI();
  // call functions to be used within the event handler
  ui.showAlert("Book Deleted", "success");
  // passing target from deleteBook()
  ui.deleteBook(event.target);
  // remove from localStorage via targeting the "ISBN". target is the <a>, then parent is the <td>. use previous element sibling, then text content to delete the content of the td within the ISBN
  Store.removeBook(
    event.target.parentElement.previousElementSibling.textContent
  );
  console.log("delete click works");

  event.preventDefault();
});
