"use strict";
var book = {
    name: "MyBook",
    isbn: "123123"
};
var container = document.getElementById('content');
if (container) {
    container.textContent = "book name is ".concat(book.name, ", ISBN ").concat(book.isbn);
}
