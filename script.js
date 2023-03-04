'use strict';
class Book {
    constructor(title, author, pages, status) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.status = status;
    }
}

class Library {
    constructor() {
        this.myLibrary = [];
        this.addBookEl = document.querySelector('.add-book');
        this.formContainer = document.querySelector('.form-container');
        this.booksContainer = document.querySelector('.books-container');
        this.gridContainer = document.querySelector('.grid-container');
        this.inputContanerModal = document.querySelector('.form-modal');
        this.outerModal = document.querySelector('outer-modal');
        this.newBookTitle = document.querySelector('#title');
        this.newBookAuthor = document.querySelector('#author');
        this.newBookPages = document.querySelector('#pages');
        this.newBookStatus = document.querySelector('#status');
        this.submit = document.querySelector('#submit');

        // Event listeners
        this.gridContainer.addEventListener(
            'click',
            this.closeModalIfClickedOutside
        );
        this.addBookEl.addEventListener('click', this.openModal);
        this.formContainer.addEventListener('click', this.bookFormHandler);
    }

    closeModalIfClickedOutside = (e) => {
        e.preventDefault();
        if (
            !e.target.closest('.form-modal') &&
            !e.target.matches('.add-book')
        ) {
            this.closeModal();
        }
    };

    openModal = (e) => {
        e.preventDefault();
        this.gridContainer.classList.add('is-blurred');
        this.inputContanerModal.classList.remove('hidden');
    };

    closeModal = () => {
        this.gridContainer.classList.remove('is-blurred');
        this.inputContanerModal.classList.add('hidden');
    };

    bookFormHandler = (e) => {
        e.preventDefault();

        const newBook = new Book(
            this.newBookTitle.value,
            this.newBookAuthor.value,
            this.newBookPages.value,
            this.newBookStatus.value
        );

        this.addBookToLibrary(newBook);
        this.formContainer.reset();
        this.closeModal();
        this.displayBooks();
    };

    addBookToLibrary = (newBook) => {
        this.clearLibrary();
        this.myLibrary.push(newBook);
    };

    clearLibrary = () => (this.booksContainer.innerHTML = '');

    removeBook = (e) => {
        e.preventDefault();
        const index = e.target.parentNode.dataset.index;
        this.myLibrary.splice(index, 1);
        this.clearLibrary();
        this.displayBooks();
    };

    displayBooks = () => {
        this.myLibrary.forEach((book, index) => {
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

            this.booksContainer.appendChild(bookCard);
            bookCard.appendChild(bookCardDelete);
            bookCard.appendChild(bookCardInfo);
            bookCardDelete.appendChild(bookCardDeleteButton);
            bookCardInfo.appendChild(bookTitle);
            bookCardInfo.appendChild(bookAuthor);
            bookCardInfo.appendChild(bookPages);
            bookCardInfo.appendChild(bookStatus);

            bookCardDeleteButton.addEventListener('click', this.removeBook);
        });
    };
}

// function removeBook(e) {
//     e.preventDefault();
//     const index = e.target.parentNode.parentNode.dataset.index;
//     myLibrary.splice(index, 1);
//     clearLibrary();
//     displayBooks();
// }

// function displayBooks() {
//     myLibrary.forEach((book, index) => {
//         console.log(index);
//         console.log(book);

//         const bookCard = document.createElement('div');
//         bookCard.classList.add('card');
//         bookCard.dataset.index = index;

//         const bookCardDelete = document.createElement('div');
//         bookCardDelete.classList.add('delete-card');

//         const bookCardDeleteButton = document.createElement('button');
//         bookCardDeleteButton.classList.add('delete-card-button');
//         bookCardDeleteButton.textContent = 'x';

//         const bookCardInfo = document.createElement('div');
//         bookCardInfo.classList.add('book-info');

//         const bookTitle = document.createElement('h1');
//         const bookAuthor = document.createElement('p');
//         const bookPages = document.createElement('p');
//         const bookStatus = document.createElement('p');

//         bookTitle.classList.add('title');
//         bookAuthor.classList.add('author');
//         bookPages.classList.add('pages');
//         bookStatus.classList.add('status');

//         bookTitle.textContent = `${book.title}`;
//         bookAuthor.textContent = `By: ${book.author}`;
//         bookPages.textContent = `${book.pages} pages`;
//         bookStatus.textContent = `${book.status}`;

//         booksContainer.appendChild(bookCard);
//         bookCard.appendChild(bookCardDelete);
//         bookCard.appendChild(bookCardInfo);
//         bookCardDelete.appendChild(bookCardDeleteButton);
//         bookCardInfo.appendChild(bookTitle);
//         bookCardInfo.appendChild(bookAuthor);
//         bookCardInfo.appendChild(bookPages);
//         bookCardInfo.appendChild(bookStatus);

//         bookCardDeleteButton.addEventListener('click', removeBook);
//     });
// }

const library = new Library();
