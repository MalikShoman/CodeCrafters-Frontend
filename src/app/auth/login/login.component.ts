import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  loginForm: FormGroup;
  userRole='admin';
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }

  login() {
    this.router.navigate(['/view-hackathons']);
    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.authService.login(loginData).subscribe(
        () => {
          // Redirect to appropriate page after successful login
          this.router.navigate(['/view-hackathons']); // Change '/dashboard' to the desired route
        },
        error => {
          // Handle login error
          console.error('Login failed:', error);
          // Display error message to the user
        }
      );
    }
  }
}
