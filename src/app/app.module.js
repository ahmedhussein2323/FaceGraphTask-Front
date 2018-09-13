var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var platform_browser_1 = require('@angular/platform-browser');
var core_1 = require('@angular/core');
var app_component_1 = require('./app.component');
var login_component_1 = require('./login/login.component');
var app_routing_1 = require("./app.routing");
var auth_service_1 = require("./service/auth.service");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/common/http");
// import { AddUserComponent } from './add-user/add-user.component';
// import { EditUserComponent } from './edit-user/edit-user.component';
// import {ListUserComponent} from "./list-user/list-user.component";
var user_service_1 = require("./service/user.service");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                login_component_1.LoginComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                app_routing_1.routing,
                forms_1.ReactiveFormsModule,
                http_1.HttpClientModule
            ],
            providers: [auth_service_1.AuthenticationService, user_service_1.UserService],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
})();
exports.AppModule = AppModule;
