import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  signUpForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService
  ) {
    this.signUpForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
      // Add more fields as needed
    });
  }

  signUp() {
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
    }
  }
}
