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
     <td><a href="#">Daaaaleete<a></td>
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
    }, 3000);
  }
  deleteBook(target) {
    if (target.className === "Daaaaleete") {
      document.parentElement.parentElement.remove();
      console.log("delete works");
    }
  }
  clearFields() {
    //clear text within the form
  }
}
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
      ui.showAlert("Added Book!!!", "success");
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
  ui.deleteBook(event.target);

  console.log("delete click works");
  event.preventDefault();
});
