// script test
console.log('Hello World!');
function helloWorld() {
  alert('Hello World!');
}

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
      return (title + ' by ' + author + ', ' + pages + ' pages, ' + read)
      }
}

function addBookToLibrary() {
  // do stuff
}