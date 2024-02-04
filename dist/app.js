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
    function User(name) {
        this.name = name;
    }
    return User;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, cource) {
        var _this = _super.call(this, name) || this;
        _this.cource = cource;
        return _this;
    }
    return Student;
}(User));
var Asp = /** @class */ (function (_super) {
    __extends(Asp, _super);
    function Asp(name, cource, salary) {
        var _this = _super.call(this, name, cource) || this;
        _this.salary = salary;
        return _this;
    }
    return Asp;
}(Student));
var user = new User('userName');
var student = new Student('studentName', 'math');
var asp = new Asp('aspName', 'cource', 200);
console.log(user);
console.log(student);
console.log(asp);
