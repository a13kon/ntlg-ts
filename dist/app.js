"use strict";
var isTrue = true;
var isNumber = 1;
var list = ['10', '20', '30'];
list.push('40');
var lengt = list.map(function (item) {
    item.length;
});
var max;
max = [10, 20, '10'];
max.push(20);
max.push('qwe');
console.log(max);
var Item;
(function (Item) {
    Item[Item["FETCHING"] = 0] = "FETCHING";
    Item[Item["SUCCESS"] = 1] = "SUCCESS";
    Item[Item["FAILED"] = 2] = "FAILED";
})(Item || (Item = {}));
;
var Book = /** @class */ (function () {
    function Book() {
        this.hasHardCover = true;
    }
    return Book;
}());
var primaryColor = 'red';
primaryColor = 0x8e8e8e;
console.log(primaryColor);
