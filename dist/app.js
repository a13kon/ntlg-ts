"use strict";
var Box = /** @class */ (function () {
    function Box() {
        this.container = [];
    }
    Box.prototype.add = function (value) {
        this.container.push(value);
    };
    Box.prototype.pop = function () {
        return this.container.pop();
    };
    Box.prototype.count = function () {
        return this.container.length;
    };
    return Box;
}());
var strBox = new Box();
strBox.add('hello');
var numBox = new Box();
numBox.add(1);
console.log(strBox.pop());
console.log(numBox.pop());
