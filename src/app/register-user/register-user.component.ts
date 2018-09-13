import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../service/user.service";
import {first} from "rxjs/operators";
import {Router} from "@angular/router";

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent implements OnInit {

  constructor(private formBuilder: FormBuilder,private router: Router, 
    private userService: UserService) { }

  registerForm: FormGroup;

  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      id: [],
      email: ['', Validators.required],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });

  }

  onSubmit() {
    debugger;
    this.userService.createUser(this.registerForm.value)
      .subscribe( data => {
        debugger;
        this.router.navigate(['list-user']);
      });
  }

}
