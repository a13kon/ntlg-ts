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
var User = /** @class */ (function () {
    function User() {
    }
    User.generatePassword = function () {
        return Math.random().toString(36).substring(2);
    };
    User.MAX_LEVEL = 80;
    return User;
}());
var user = new User;
console.log(User.MAX_LEVEL);
console.log(User.generatePassword());
var Figure = /** @class */ (function () {
    function Figure() {
    }
    Figure.prototype.getArea = function () {
        console.log('Not Implemented');
        return 0;
    };
    return Figure;
}());
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(width, height) {
        var _this = _super.call(this) || this;
        _this.width = width;
        _this.height = height;
        return _this;
    }
    Rectangle.prototype.getArea = function () {
        console.log('Not Implemented');
        return this.width * this.height;
    };
    return Rectangle;
}(Figure));
var figure = new Rectangle(20, 80);
console.log(figure.getArea());
