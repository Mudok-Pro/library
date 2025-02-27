const myLibrary = [] 

function Book(title,author,pages,read){
  this.title = title 
  this.author = author 
  this.pages = pages 
  this.read = read 
  this.info = function () {
    return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;

  }
}
function addBookToLibrary (title,author,pages,read) {
  const theBook = new Book( title,author,pages,read)
  myLibrary.push(theBook); 
  
}

function presentTheBooks(myLibrary) {
for(let i=0 ; i<myLibrary.length ; i++){
  console.log(myLibrary[i])
}
}

/*
function toggleSideBar () {
document.getElementById("new-book").addEventListener('click' , function (){
const sidebar=  document.getElementById("slide");
if (sidebar.style.transform === 'translateX(-180px)') {
sidebar.style.transform ='translateX(0)';
}
})

}
*/

function toggleSideBar() {
  const sidebar = document.getElementById("slide");
  if (sidebar.style.transform === 'translateX(-180px)') {
      sidebar.style.transform = 'translateX(0)';
  } else {
      sidebar.style.transform = 'translateX(-180px)';
  }
}

console.log(addBookToLibrary("bob","doe",45,true))
console.log(addBookToLibrary("bob","doe",45,true))
console.log(addBookToLibrary("bob","doe",45,true))
console.log(presentTheBooks(myLibrary))
console.log(myLibrary);
console.log(theBook.info())