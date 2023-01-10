'use strict';
const addBookEl = document.querySelector('.add-book');
const formContainer = document.querySelector('.form-container');
const booksContainer = document.querySelector('.books-container');
const gridContainer = document.querySelector('.grid-container');
const inputContanerModal = document.querySelector('.form-modal');
const outerModal = document.querySelector('outer-modal');

let myLibrary = [];
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

function Book(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
}

function openModal() {
    gridContainer.classList.add('is-blurred');
    inputContanerModal.classList.remove('hidden');
}

function closeModal() {
    gridContainer.classList.remove('is-blurred');
    inputContanerModal.classList.add('hidden');
}

gridContainer.addEventListener('click', function (e) {
    e.preventDefault();
    if (!e.target.closest('.form-modal') && !e.target.matches('.add-book')) {
        closeModal();
    }
});

addBookEl.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
    addBookToLibrary();
});

function displayBooks() {
    myLibrary.forEach((book, index) => {
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
    });
}

function addBookToLibrary() {
    formContainer.addEventListener('submit', function (e) {
        e.preventDefault();
        console.log(e.target);
        const newBookTitle = document.querySelector('#title');
        const newBookAuthor = document.querySelector('#author');
        const newBookPages = document.querySelector('#pages');
        const newBookStatus = document.querySelector('#status');
        const submit = document.querySelector('#submit');
        const newBook = new Book(
            newBookTitle.value,
            newBookAuthor.value,
            newBookPages.value,
            newBookStatus.value
        );
        console.log(newBookTitle.value);
        myLibrary.push(newBook);

        displayBooks();
        formContainer.reset();
        closeModal();
    });
}
