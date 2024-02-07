"use strict";
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.findAll = function () {
        return new Promise(function (resolve) {
            resolve([new User()]);
        });
    };
    return UserRepository;
}());
var User = /** @class */ (function () {
    function User() {
    }
    return User;
}());
var UserService = /** @class */ (function () {
    function UserService(repository) {
        this.repository = repository;
    }
    UserService.prototype.getAllUsers = function () {
        return this.repository.findAll();
    };
    return UserService;
}());
var rep = new UserRepository();
var user = new UserService(rep);
console.log(user.getAllUsers());
user.getAllUsers().then(function (res) {
    console.log(res);
});
