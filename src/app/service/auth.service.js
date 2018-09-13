var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var operators_1 = require('rxjs/operators');
var AuthenticationService = (function () {
    function AuthenticationService(http) {
        this.http = http;
    }
    AuthenticationService.prototype.login = function (username, password) {
        var data = "grant_type=password&" + "email=" + username + "&password=" + password;
        return this.http.post('http://localhost:27891/api/auth/login/getToken', data, { headers: { 'Content-Type': "application/x-www-form-urlencoded" } })
            .pipe(operators_1.map(function (user) {
            debugger;
            console.log(user);
            if (user && user.access_token) {
                localStorage.setItem('currentUser', JSON.stringify(user));
                return true;
            }
            return false;
        }));
    };
    AuthenticationService = __decorate([
        core_1.Injectable()
    ], AuthenticationService);
    return AuthenticationService;
})();
exports.AuthenticationService = AuthenticationService;
