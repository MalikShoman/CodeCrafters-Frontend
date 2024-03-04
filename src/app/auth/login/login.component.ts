import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { userLogin } from 'src/app/models/userLogin';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm!: FormGroup; // Add '!' to indicate it will be initialized later
  userRole = 'admin';
  user : userLogin = new userLogin("","");
  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  login() {
    console.log(this.loginForm)

    if (this.loginForm.valid) {
      const loginData = this.loginForm.value;
      this.user.username = this.loginForm.value.username;
      this.user.password = this.loginForm.value.password;
      this.authService.login(this.user).subscribe(
        ((result:any) => {
          this.authService.LogedIn = true;
          // Redirect to appropriate page after successful login
          localStorage.setItem("token",result.token);
          this.router.navigate(['/view-hackathons']); // Change '/dashboard' to the desired route
        }),
        error => {
          // Handle login error
          console.error('Login failed:', error);
          // Display error message to the user
        }
      );
    }
  }

  showSignUp() {
    this.router.navigate(['/signUp']);
  }
}
