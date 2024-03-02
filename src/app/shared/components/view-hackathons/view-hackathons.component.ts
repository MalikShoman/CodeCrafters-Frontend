import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HackathonService } from '../../services/hackathon.service';
import { Hackathon } from 'src/app/hackathon';

@Component({
  selector: 'app-view-hackathons',
  templateUrl: './view-hackathons.component.html',
  styleUrls: ['./view-hackathons.component.css']
})
export class ViewHackathonsComponent implements OnInit {

  isAdmin: boolean = true;
  hackathons: any[] = [];
  newHackathon: Hackathon = new Hackathon('first', 'test', new Date(), new Date(), new Date(), ['title'], 0, 0);
  constructor(private hackathonService: HackathonService, private router: Router) { }

  ngOnInit(): void {
    this.hackathons.push(this.newHackathon);
    // Fetch list of hackathons from the backend
    // this.hackathonService.getHackathons().subscribe((hackathons: any[]) => {
    //   this.hackathons = hackathons;
    // });
  }

  redirectToDetails(hackathonId: string): void {
    // Redirect to hackathon-details component with the hackathon ID
    this.router.navigate(['/hackathon-details', this.isAdmin]);
  }

}
