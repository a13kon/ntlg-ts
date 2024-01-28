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
    function User(name, email) {
        this.name = name;
        this.email = email;
    }
    return User;
}());
var BaseTariff = /** @class */ (function () {
    function BaseTariff(user) {
        this.firstDay = true;
        this.type = 'base';
        this.user = user;
    }
    BaseTariff.prototype.showUserName = function () {
        console.log(user.name);
    };
    return BaseTariff;
}());
var BaseTariffPlus = /** @class */ (function (_super) {
    __extends(BaseTariffPlus, _super);
    function BaseTariffPlus() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.secndDay = true;
        _this.recording = true;
        _this.type = 'base-plus';
        return _this;
    }
    return BaseTariffPlus;
}(BaseTariff));
var PremiumTariff = /** @class */ (function (_super) {
    __extends(PremiumTariff, _super);
    function PremiumTariff(user, firstDay, dinner) {
        var _this = _super.call(this, user) || this;
        _this.networking = true;
        _this.type = 'premium';
        _this.firstDay = firstDay;
        _this.dinner = dinner;
        return _this;
    }
    return PremiumTariff;
}(BaseTariffPlus));
var user = new User('myName', 'myEmail');
// user.name = 'myName';
// user.email = 'myEmail';
var test = new PremiumTariff(user, false, true);
test.showUserName();
console.log(test);
