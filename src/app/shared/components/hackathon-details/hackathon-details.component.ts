import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HackathonService } from '../../hackathon.service';
import { Hackathon } from 'src/app/models/hackathon';

@Component({
  selector: 'app-hackathon-details',
  templateUrl: './hackathon-details.component.html',
  styleUrls: ['./hackathon-details.component.css']
})
export class HackathonDetailsComponent implements OnInit {


  isAdmin: any;
  isRegister:boolean = false
  newHackathon: Hackathon = new Hackathon('first', 'test', new Date(), new Date(), new Date(), ['title'], 0, 0);
  team = {
    id: 1,
    name: 'code crafters',
    members: ['ahmad', 'majd', 'rami']
  }
  teams: any[] = [];

  constructor(private route: ActivatedRoute, private router: Router, private hackathonService: HackathonService) { }

  ngOnInit(): void {
    // Get the hackathon ID from the route parameters
    const hackathonId = this.route.snapshot.paramMap.get('id');
    this.isAdmin = (this.route.snapshot.paramMap.get('val'));
    this.teams.push(this.team);
    // // Fetch hackathon details from the backend
    // this.hackathonService.getHackathonById(hackathonId).subscribe((hackathon: any) => {
    //   this.hackathon = hackathon;
    // });

    // // Fetch enrolled teams for the hackathon from the backend
    // this.hackathonService.getEnrolledTeams(hackathonId).subscribe((teams: any[]) => {
    //   this.teams = teams;
    // });
  }

  showRegiter(){
   this.isRegister  = true;
  }
  goBack(): void {
    // Navigate back to the view-hackathons component
    this.router.navigate(['/view-hackathons']);
  }
  showCreate() {
    this.router.navigate(['/create-hackathon']);
  }
}
