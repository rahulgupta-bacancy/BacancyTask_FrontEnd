﻿import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsersService } from 'src/app/utils/service/users.service';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private userService:UsersService
    ) { }

    ngOnInit() {
        //initialized the form controls
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

    }

    get f() { return this.form.controls; }

    //Onsubmit method called after login button is pressed
    onSubmit() {
        this.submitted = true;

        if (this.form.invalid) {
            return;
        }

         this.loading = true;
         //called the login method of the userService class
         this.userService.login(this.f.username.value, this.f.password.value).subscribe(
          data => {
              
            alert("Login Successful");
            localStorage.setItem("token",data['token']);
                        this.router.navigate(['dashboard']);
                    },
                    error => {
                        alert("please check your credentials");
                        this.loading = false;
                    }
           
         )
    }
}

