import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {

  //isLogedIn:boolean = false;


  constructor(private router: Router, private authService:AuthService){

  }

  ngOnInit(): void {
    //this.isLogedIn = this.authService.isLogedIn;
  }
  isLogedIn():boolean{
    
    return this.authService.isLogedIn();
  }

  logOut(){
    localStorage.removeItem("token");
    localStorage.removeItem("isUser");
    localStorage.removeItem("isAdmin");
    this.authService.LogedIn = false;
    this.router.navigate(['']);
  }

}
