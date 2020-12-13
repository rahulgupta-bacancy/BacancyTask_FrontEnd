﻿import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { UsersService } from 'src/app/utils/service/users.service';

//import { AccountService, AlertService } from '../utils/services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
    form: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private userService:UsersService
     //   private accountService: AccountService,
    //    private alertService: AlertService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    get f() { return this.form.controls; }

    onSubmit() {
        this.submitted = true;
console.log("called");
    //    this.alertService.clear();

        if (this.form.invalid) {
            return;
        }

         this.loading = true;
         this.userService.login(this.f.username.value, this.f.password.value).subscribe(
          data => {
            console.log(data);

            localStorage.setItem("token",data['token']);
                        this.router.navigate(['dashboard']);
                    },
                    error => {
                        this.loading = false;
                    }
           
         )
        // this.accountService.login(this.f.username.value, this.f.password.value)
        //     .pipe(first())
        //     .subscribe(
        //         data => {
        //             this.router.navigate([this.returnUrl]);
        //         },
        //         error => {
        //             this.alertService.error(error);
        //             this.loading = false;
        //         });
    }
}