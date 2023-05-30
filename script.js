let myLibrary = [];

function Book(title, author, pages, read) {
  // the constructor...
  this.title = title,
  this.author = author,
  this.pages = pages,
  this.read = read

}

Book.prototype.toggleRead = function read () {
  this.read = !this.read;
}

function toggleRead (index) {
  myLibrary[index].toggleRead();
  render();
}

function render () {
  let libraryEl = document.querySelector("#books");
  libraryEl.innerHTML = "";
  for (let i=0; i<myLibrary.length; i++) {
    let book = myLibrary[i];
    let bookEl = document.createElement("div");
    bookEl.setAttribute("class", "book-cards");
    bookEl.innerHTML = `
    <div class ="card-header">
      <h3 class="title">Title: ${book.title}</h3>
      <h3 class="author">Author: ${book.author}</h3>
    </div> 
    <div class = "card-body"
      <p>${book.pages} pages</p>
      <p class="read status">${book.read ? "Read" : "Not Yet"}</p>
      <button class="remove-btn" onclick="remove(${i})">Remove</button>
      <button class="toggle-read-btn" onclick="toggleRead(${i})"> Toggle </button>
    </div> 
    `;
    libraryEl.appendChild(bookEl);
  }

} 

function addBookToLibrary() {
  // do stuff here

  let title = document.querySelector("#title").value;
  let author = document.querySelector("#author").value;
  let pages = document.querySelector("#pages").value;
  let read = document.querySelector("#read").checked;

  let newBook = new Book(title, author, pages, read);
  myLibrary.push(newBook);
  console.log((myLibrary))

  render();

}

document.querySelector("#bookBtn").addEventListener("click", function () {
  let newBookForm = document.querySelector("#new-book-form");
  newBookForm.style = "display:flex; flex-direction: column; gap: 2px;";
  

});

document.querySelector("#new-book-form").addEventListener("submit", function(event) {
event.preventDefault();
addBookToLibrary();


});


function remove (index) {
  myLibrary.splice(index, 1);

  render();

}