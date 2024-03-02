import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  implements OnInit {

  isAdmin:any;

  constructor(private route: ActivatedRoute){

  }

  ngOnInit(): void {

    this.isAdmin = (this.route.snapshot.paramMap.get('val'));
  }

}
