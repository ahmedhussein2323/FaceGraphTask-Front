import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Router} from "@angular/router";
import {first} from "rxjs/operators";
import {AuthenticationService} from "../service/auth.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  invalidLogin: boolean = false;
  constructor(private formBuilder: FormBuilder, private router: Router, 
    private authService: AuthenticationService) { }

  onSubmit() {
    debugger;
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
    var user = this.authService.login(this.loginForm.controls.email.value,
      this.loginForm.controls.password.value).subscribe( data => {
        debugger;
        console.log(data);
        if(data == false)
            this.invalidLogin
        else
          this.router.navigate(['list-user']);
  });;

    // if(this.loginForm.controls.email.value == 'dhiraj@gmail.com' && this.loginForm.controls.password.value == 'password') {
    //     this.router.navigate(['list-user']);
    // }else {
    //   this.invalidLogin = true;
    // }
  }

  Register(){
    debugger;
    this.router.navigate(['register-user']);
  }

  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.access_token) {
            this.router.navigate(['list-user']);
        }
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
  }



}
