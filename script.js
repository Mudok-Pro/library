const myLibrary = [] 

function Book(title,author,pages,read){
  this.title = title 
  this.author = author 
  this.pages = pages 
  this.read = read 
  this.info = function () {
    return `${this.title} by ${this.author},${this.pages}, {this.read ? 'read' : 'not read yet}`
  }
}
function addBookToLibrary (title,author,pages,read) {
  const theBook = new Book( title,author,pages,read)
  myLibrary.push(theBook); 
  
}
console.log(addBookToLibrary("bob","doe",45,true))
console.log(myLibrary)