'use strict';
const addBookEl = document.querySelector('.add-book');

const booksContainer = document.querySelector('.books-container');
const inputContanerModal = document.querySelector('.form-modal');

let myLibrary = [];

function Book(title, author, pages, status) {
    this.title = title;

    this.author = author;
    this.pages = pages;
    this.status = status;
}

const hobbit = new Book('The Hobbit', 'JRR Tolkien', '495', 'Read');
const gameOfThrones = new Book(
    'Game of Thrones',
    'G.R.R. Martin',
    '495',
    'Read'
);
const lotr = new Book('The Lord of the Rings', 'Tolkien', '666', 'Not read');

myLibrary.push(hobbit);
myLibrary.push(gameOfThrones);
myLibrary.push(lotr);

myLibrary.forEach((book, index, array) => {
    console.log(index);
    console.log(book);

    let bookCard = document.createElement('div');
    bookCard.classList.add('card');
    bookCard.dataset.index = index;

    let bookCardDelete = document.createElement('div');
    bookCardDelete.classList.add('delete-card');

    let bookCardDeleteButton = document.createElement('button');
    bookCardDeleteButton.textContent = 'x';

    let bookCardInfo = document.createElement('div');
    bookCardInfo.classList.add('book-info');

    let bookTitle = document.createElement('h1');
    let bookAuthor = document.createElement('p');
    let bookPages = document.createElement('p');
    let bookStatus = document.createElement('p');

    bookTitle.classList.add('title');
    bookAuthor.classList.add('author');
    bookPages.classList.add('pages');
    bookStatus.classList.add('status');

    bookTitle.textContent = `${book.title}`;
    bookAuthor.textContent = `By: ${book.author}`;
    bookPages.textContent = `${book.pages} pages`;
    bookStatus.textContent = `${book.status}`;

    booksContainer.appendChild(bookCard);
    bookCard.appendChild(bookCardDelete);
    bookCard.appendChild(bookCardInfo);
    bookCardDelete.appendChild(bookCardDeleteButton);
    bookCardInfo.appendChild(bookTitle);
    bookCardInfo.appendChild(bookAuthor);
    bookCardInfo.appendChild(bookPages);
    bookCardInfo.appendChild(bookStatus);

    // booksContainer.innerHTML = `
    // <div class="card">
    //     <div class="delete-card">
    //         <button>x</button>
    //     </div>;
    //     <div class="book-info">
    //         <h1 class="title">${el.title}</h1>
    //         <p class="author">By: ${el.author}</p>
    //         <p class="pages">${el.pages} pages</p>
    //         <p class="status">${el.status}</p>
    //     </div>
    // </div>`;
});
