"use strict";
var UserRepository = /** @class */ (function () {
    function UserRepository() {
    }
    UserRepository.prototype.findAll = function () {
        // ...
        console.log('all users');
    };
    return UserRepository;
}());
var UserService = /** @class */ (function () {
    function UserService() {
        this.repository = new UserRepository();
    }
    UserService.prototype.getAllUsers = function () {
        return this.repository.findAll();
    };
    return UserService;
}());
var userServ = new UserService();
userServ.getAllUsers();
