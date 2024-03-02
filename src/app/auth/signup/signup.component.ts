// signup.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router

  ) {
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.signUpForm = this.formBuilder.group({
      name: ['', Validators.required],
      username: ['', Validators.required],
      mobile: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  signUp() {
    console.log("inside singUp")
    console.log(this.signUpForm)
    if (this.signUpForm.valid) {
      const signUpData = this.signUpForm.value;
      this.authService.signUp(signUpData).subscribe(
        () => {
          // Handle successful sign-up
          console.log('Sign-up successful');
        },
        error => {
          // Handle sign-up error
          console.error('Sign-up failed:', error);
        }
      );
      console.log("out of the if statment")
    }
  }
}
