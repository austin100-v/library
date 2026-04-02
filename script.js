const myLibrary = [];



function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = crypto.randomUUID();
}



function addBookToLibrary(book) {
    myLibrary.push(book);
}

function displayBooks() {
    document.getElementById('book-form').reset();
    const bookList = document.querySelector('#book-list ul');
    bookList.innerHTML = '';

    myLibrary.forEach((book, index) => {
        const bookItem = document.createElement('li');
        bookItem.textContent = `${book.title} by ${book.author}, ${book.pages} pages, ${book.read ? 'read' : 'not read yet'}`;

        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            myLibrary.splice(index, 1);
            displayBooks();
        });

        bookItem.appendChild(deleteButton);
        bookList.appendChild(bookItem);

        const toggleReadButton = document.createElement('button');
        toggleReadButton.textContent = book.read ? 'Mark as Unread' : 'Mark as Read';
        toggleReadButton.addEventListener('click', () => {
            book.read = !book.read;
            displayBooks();
        });

        bookItem.appendChild(toggleReadButton);
    });
}

const addBookButton = document.getElementById('submitBtn');
addBookButton.addEventListener('click', (event) => {
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const pages = document.getElementById('pages').value;
    const read = document.getElementById('read').checked;

    const newBook = new Book(title, author, pages, read);
    addBookToLibrary(newBook);
    displayBooks();
});

const addNewBookButton = document.getElementById('add-new-book');
addNewBookButton.addEventListener('click', () => {
    const form = document.getElementById('book-form');
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
});