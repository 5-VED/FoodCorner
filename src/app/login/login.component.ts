import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //Initalize Login Form
  loginForm: FormGroup = new FormGroup({
    email: new FormControl(' '),
    password: new FormControl(' '),
  });

  //By default form is not submitted
  submitted: boolean = false;
  constructor(private formBuilder: FormBuilder, private _router: Router) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(25)],
      ],
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;
    console.log(this.loginForm.value);
    if (!this.loginForm.valid) {
      return;
    }
    this.loginForm.reset();
  }

  onSignUp() {
    this._router.navigateByUrl('/signup');
  }
}
