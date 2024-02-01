"use strict";
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
