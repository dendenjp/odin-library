'use strict';
const addBookEl = document.querySelector('.add-book');
const formContainer = document.querySelector('.form-container');
const booksContainer = document.querySelector('.books-container');
const gridContainer = document.querySelector('.grid-container');
const inputContanerModal = document.querySelector('.form-modal');
const outerModal = document.querySelector('outer-modal');

let myLibrary = [];

gridContainer.addEventListener('click', function (e) {
    e.preventDefault();
    if (!e.target.closest('.form-modal') && !e.target.matches('.add-book')) {
        closeModal();
    }
});

addBookEl.addEventListener('click', (e) => {
    e.preventDefault();
    openModal();
});

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

    addBookToLibrary(newBook);
    formContainer.reset();
    closeModal();
    displayBooks();
});

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

function removeBook(e) {
    e.preventDefault();
    const index = e.target.parentNode.parentNode.dataset.index;
    myLibrary.splice(index, 1);
    clearLibrary();
    displayBooks();
}

function displayBooks() {
    myLibrary.forEach((book, index) => {
        console.log(index);
        console.log(book);

        const bookCard = document.createElement('div');
        bookCard.classList.add('card');
        bookCard.dataset.index = index;

        const bookCardDelete = document.createElement('div');
        bookCardDelete.classList.add('delete-card');

        const bookCardDeleteButton = document.createElement('button');
        bookCardDeleteButton.classList.add('delete-card-button');
        bookCardDeleteButton.textContent = 'x';

        const bookCardInfo = document.createElement('div');
        bookCardInfo.classList.add('book-info');

        const bookTitle = document.createElement('h1');
        const bookAuthor = document.createElement('p');
        const bookPages = document.createElement('p');
        const bookStatus = document.createElement('p');

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

        bookCardDeleteButton.addEventListener('click', removeBook);
    });
}

function clearLibrary() {
    booksContainer.innerHTML = '';
}
function addBookToLibrary(newBook) {
    clearLibrary();
    myLibrary.push(newBook);
}

// console.log(myLibrary);

// const hobbit = new Book('The Hobbit', 'JRR Tolkien', '295', 'read');
// const harry = new Book('Harry Potter', 'JK Rowling', '295', 'read');
// const got = new Book('Game of Thrones', 'George R.R. Martin', '295', 'read');

// myLibrary.push(hobbit);
// myLibrary.push(harry);
// myLibrary.push(got);

// console.log(myLibrary);
// myLibrary.splice(2, 1);
// console.log(myLibrary);
