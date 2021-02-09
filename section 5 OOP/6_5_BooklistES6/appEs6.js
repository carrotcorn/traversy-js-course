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
    }, 2050);

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
    document.getElementById("isbs").vaue = "";
  }
}

//event listeners
//event listeners for adding a book
