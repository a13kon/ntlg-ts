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
var HumanWorker = /** @class */ (function () {
    function HumanWorker(name) {
        this.name = name;
    }
    HumanWorker.prototype.doWork = function () {
        console.log('working...');
    };
    return HumanWorker;
}());
var Lumberjack = /** @class */ (function (_super) {
    __extends(Lumberjack, _super);
    function Lumberjack() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Lumberjack.prototype.doWork = function () {
        console.log('cutting...');
    };
    return Lumberjack;
}(HumanWorker));
var Hunter = /** @class */ (function (_super) {
    __extends(Hunter, _super);
    function Hunter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hunter.prototype.doWork = function () {
        console.log('hunting...');
    };
    return Hunter;
}(HumanWorker));
var worker1 = new Hunter('human1');
worker1.doWork();
var worker2 = new Lumberjack('human2');
worker2.doWork();
///////////////////////////////////////////////////
console.log();
var Book = /** @class */ (function () {
    function Book(name, author) {
        this.name = name;
        this.author = author;
    }
    Book.prototype.getInfo = function () {
        return "".concat(this.name, " - ").concat(this.author);
    };
    return Book;
}());
var ComicsBook = /** @class */ (function (_super) {
    __extends(ComicsBook, _super);
    function ComicsBook(type, name, author) {
        var _this = _super.call(this, name, author) || this;
        _this.type = type;
        return _this;
    }
    ComicsBook.prototype.getInfo = function () {
        var bookInfo = _super.prototype.getInfo.call(this);
        return "".concat(bookInfo, " - ").concat(this.type);
    };
    return ComicsBook;
}(Book));
var book = new Book('book', 'you');
var comics = new ComicsBook('comicsBook', 'comics', 'me');
console.log(book.getInfo());
console.log(comics.getInfo());
///////////////////////////////////////////////////
console.log();
// function sum(a: number, b?: number, c?: number): number {
//     let sum: number = a;
//     if (b) {
//         sum += b;
//     }
//     if (c) {
//         sum += c;
//     }
//     return sum;
// };
function sum(a, b, c) {
    if (b === void 0) { b = 0; }
    if (c === void 0) { c = 0; }
    return a + b + c;
}
;
console.log(sum(10));
console.log(sum(10, 15));
console.log(sum(10, 15, 10));
// function testSpread(...a: number[]): number {
//     let sum = a.reduce((acc, elem) => 
//         acc + elem
//     )
//     return sum;
// }
// console.log(testSpread(10,10,10,10,10,10));
