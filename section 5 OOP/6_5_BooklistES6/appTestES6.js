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
  addToBookList(book) {
     //create lists and rows via node creation 
     const list = document.getElementById("book-list");
     const row = document.createElement("tr");
     //insert created rows
     row.innerHTML = `
     <td>${book.title}</td>
     <td>${book.author}</td>
     <td>${book.isbn}</td>
     <td><a href="#">Daaaaleete<a></td>
     `
     list.appendChild(row)
     console.log('adding row function')
  }
  showAlert(message, className) {}
  deleteBook(target) {}
  clearFields() {}
}
//
//
//
//
//Event Listeners
//Add Book Event Listener
document.getElementById("book-list").addEventListener("submit", function(event){
//get form values
const title = document.getElementById("title").value;
const author = document.getElementById("author").value;
const isbn = document.getElementById("isbn").value;






event.preventDefault()
})
//
//Delete Handler Listener