var router_1 = require('@angular/router');
var login_component_1 = require("./login/login.component");
// import {AddUserComponent} from "./add-user/add-user.component";
// import {ListUserComponent} from "./list-user/list-user.component";
// import {EditUserComponent} from "./edit-user/edit-user.component";
var routes = [
    { path: 'login', component: login_component_1.LoginComponent },
    // { path: 'add-user', component: AddUserComponent },
    // { path: 'list-user', component: ListUserComponent },
    // { path: 'edit-user', component: EditUserComponent },
    { path: '', component: login_component_1.LoginComponent }
];
exports.routing = router_1.RouterModule.forRoot(routes);
