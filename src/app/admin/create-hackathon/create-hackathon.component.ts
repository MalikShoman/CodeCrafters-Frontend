import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hackathon } from 'src/app/models/hackathon';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';
import { HackathonService } from 'src/app/shared/hackathon.service';


@Component({
  selector: 'app-create-hackathon',
  templateUrl: './create-hackathon.component.html',
  styleUrls: ['./create-hackathon.component.css']
})
export class CreateHackathonComponent implements OnInit {

  newHackathon: Hackathon = new Hackathon('', '', new Date(), new Date(), new Date(), [], 0, 0);

  constructor(private router: Router, private hackathonService : HackathonService) { }

  ngOnInit() { }

  addChallengeTitle() {
    this.newHackathon.challengeTitles.push('');
  }

  removeChallengeTitle(index: number) {
    this.newHackathon.challengeTitles.splice(index, 1);
  }

  onSubmit() {
    // Implement logic to submit hackathon data (e.g., send to backend API)
    console.log("Hackathon created: ", this.newHackathon);
    this.hackathonService.addHackathon(this.newHackathon).subscribe(
      ((result:any) => {
        // Redirect to appropriate page after successful login
        this.router.navigate(['/view-hackathons']); // Change '/dashboard' to the desired route
      }),
      error => {
        // Handle login error
        console.error('Hackathon creation failed:', error);
        // Display error message to the user
      }
    );

  }

}
