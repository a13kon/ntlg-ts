System.register("app", [], function (exports_1, context_1) {
    "use strict";
    var UserRepository, User, UserService, rep, cl;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [],
        execute: function () {
            UserRepository = /** @class */ (function () {
                function UserRepository() {
                }
                UserRepository.prototype.findAll = function () {
                    return new Promise(function (resolve) {
                        resolve([new User]);
                    });
                };
                return UserRepository;
            }());
            User = /** @class */ (function () {
                function User() {
                }
                return User;
            }());
            UserService = /** @class */ (function () {
                function UserService(repository) {
                    this.repository = repository;
                }
                UserService.prototype.getAllUsers = function () {
                    return this.repository.findAll();
                };
                return UserService;
            }());
            exports_1("UserService", UserService);
            rep = new UserRepository();
            cl = new UserService(rep);
        }
    };
});
