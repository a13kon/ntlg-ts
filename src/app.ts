interface Book {
    name: string;
    isbn: string;
}

const book: Book = {
    name: "MyBook",
    isbn: "123123"
};

const container = document.getElementById('content');


if (container) {
    container.textContent = `book name is ${book.name}, ISBN ${book.isbn}`;
}
