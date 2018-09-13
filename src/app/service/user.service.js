var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.baseUrl = 'http://localhost:8080/user-portal/users';
    }
    UserService.prototype.getUsers = function () {
        /* let fakeUsers = [{id: 1, firstName: 'Dhiraj', lastName: 'Ray', email: 'dhiraj@gmail.com'},
         {id: 1, firstName: 'Tom', lastName: 'Jac', email: 'Tom@gmail.com'},
         {id: 1, firstName: 'Hary', lastName: 'Pan', email: 'hary@gmail.com'},
         {id: 1, firstName: 'praks', lastName: 'pb', email: 'praks@gmail.com'},
       ];
       return Observable.of(fakeUsers).delay(5000);*/
        return this.http.get(this.baseUrl);
    };
    UserService.prototype.getUserById = function (id) {
        return this.http.get(this.baseUrl + '/' + id);
    };
    UserService.prototype.createUser = function (user) {
        return this.http.post(this.baseUrl, user);
    };
    UserService.prototype.updateUser = function (user) {
        return this.http.put(this.baseUrl + '/' + user.id, user);
    };
    UserService.prototype.deleteUser = function (id) {
        return this.http.delete(this.baseUrl + '/' + id);
    };
    UserService = __decorate([
        core_1.Injectable()
    ], UserService);
    return UserService;
})();
exports.UserService = UserService;
