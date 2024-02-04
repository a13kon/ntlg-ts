"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var BooksRepository = /** @class */ (function () {
    function BooksRepository() {
    }
    BooksRepository.prototype.createBook = function (book) {
        //create book
        console.log(book);
    };
    BooksRepository.prototype.getBook = function (id) {
        //get book by id
    };
    BooksRepository.prototype.getBooks = function () {
        //get all books
    };
    BooksRepository.prototype.updateBooks = function (id) {
        //update book
    };
    BooksRepository.prototype.deleteBook = function (id) {
        //delete book
    };
    return BooksRepository;
}());
var MainStorage = /** @class */ (function (_super) {
    __extends(MainStorage, _super);
    function MainStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return MainStorage;
}(BooksRepository));
// class Magazines implements Book {
//     title: string;
//     description: string;
//     authors: string;
//     favorite: boolean;
//     fileCover: string;
//     fileName: string;
//     constructor(title: string, 
//                 description: string, 
//                 authors: string, 
//                 favorite: boolean,
//                 fileCover: string,
//                 fileName: string) {
//                     this.title = title;
//                     this.description = description;
//                     this.authors = authors;
//                     this.favorite = favorite;
//                     this.fileCover = fileCover;
//                     this.fileName = fileName;
//                 }
// }
// const storage = new MainStorage();
// const magazine = new Magazines('title', 'desc', 'authors', true, 'corev', 'name');
// storage.createBook(magazine);
