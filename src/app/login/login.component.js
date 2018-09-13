var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var LoginComponent = (function () {
    function LoginComponent(formBuilder, router, authService) {
        this.formBuilder = formBuilder;
        this.router = router;
        this.authService = authService;
        this.submitted = false;
        this.invalidLogin = false;
    }
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        debugger;
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }
        var user = this.authService.login(this.loginForm.controls.email.value, this.loginForm.controls.password.value).subscribe(function (data) {
            debugger;
            console.log(data);
            if (data == false)
                _this.invalidLogin;
            // this.router.navigate(['list-user']);
        });
        ;
        // if(this.loginForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
        //     this.router.navigate(['list-user']);
        // }else {
        //   this.invalidLogin = true;
        // }
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.loginForm = this.formBuilder.group({
            email: ['', forms_1.Validators.required],
            password: ['', forms_1.Validators.required]
        });
    };
    LoginComponent = __decorate([
        core_1.Component({
            selector: 'app-login',
            templateUrl: './login.component.html',
            styleUrls: ['./login.component.css']
        })
    ], LoginComponent);
    return LoginComponent;
})();
exports.LoginComponent = LoginComponent;
