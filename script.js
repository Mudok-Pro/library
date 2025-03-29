const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
    
    info() {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read ? 'read' : 'not read yet'}`;
    }
    
    toggleRead() {
        this.read = !this.read;
    }
}


function addBookToLibrary(title, author, pages, read) {
    const theBook = new Book(title, author, pages, read);
    myLibrary.push(theBook);
}

function toggleSideBar() {
    const sidebar = document.getElementById("slide");
    if (sidebar.style.transform === 'translateX(-180px)') {
        sidebar.style.transform = 'translateX(0)';
    } else {
        sidebar.style.transform = 'translateX(-180px)';
    }
}

document.getElementById("book-form").addEventListener("submit", getFormData);

function getFormData(event) {
    event.preventDefault();

    const title = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages = document.getElementById("pages").value;
    const read = document.getElementById("read").checked;

    addBookToLibrary(title, author, pages, read);
    displayBook(title, author, pages, read);

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("pages").value = "";
    document.getElementById("read").value = "";
}

const removeIt = (event) => {
  event.target.parentNode.remove();}

  Book.prototype.toggleRead = function () {
    this.read = !this.read ;
  };
function displayBook(title, author, pages, read) {
    const bookEntry = document.createElement("div");
    bookEntry.className = "book-entry";
    bookEntry.innerHTML = `
        <button class="removeIt">X</button>
        <h3>${title}</h3>
        <p>Author: ${author}</p>
        <p>Pages: ${pages}</p>
        <p>Read: ${read}</p>
        <button class="bookRead">Toggle Read Status</button>
    `;
    
    const libraryContainer = document.getElementById("library-container");
    libraryContainer.appendChild(bookEntry);

    (bookEntry);

    const removeButtons = document.querySelectorAll(".removeIt");
    removeButtons.forEach(button => button.addEventListener("click", removeIt ));

    bookEntry.querySelector(".bookRead").addEventListener("click", function() {
      read = !read; 
      bookEntry.querySelector("p:nth-child(5)").innerText = `Read: ${read}`; 
    });
      
}


 

function initLibrary() {
    const libraryContainer = document.createElement("div");
    libraryContainer.id = "library-container";
    document.body.appendChild(libraryContainer);
}

initLibrary();
