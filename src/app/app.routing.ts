import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { RegisterUserComponent } from './register-user/register-user.component';
import {ListUserComponent} from "./list-user/list-user.component";
import { ListImageComponent } from './list-image/list-image.component';
// import {EditUserComponent} from "./edit-user/edit-user.component";

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register-user', component: RegisterUserComponent },
  { path: 'list-user', component: ListUserComponent },
  { path: 'list-image', component: ListImageComponent },
  // { path: 'edit-user', component: EditUserComponent },
  {path : '', component : LoginComponent}
];

export const routing = RouterModule.forRoot(routes);
