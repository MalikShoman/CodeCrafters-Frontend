import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Hackathon } from 'src/app/hackathon';
import { CalendarModule } from 'primeng/calendar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-hackathon',
  templateUrl: './create-hackathon.component.html',
  styleUrls: ['./create-hackathon.component.css']
})
export class CreateHackathonComponent implements OnInit {

  newHackathon: Hackathon = new Hackathon('', '', new Date(), new Date(), new Date(), [], 0, 0);

  constructor(private router: Router) { }

  ngOnInit() { }

  addChallengeTitle() {
  }

  removeChallengeTitle(index: number) {
  }

  onSubmit() {
    // Implement logic to submit hackathon data (e.g., send to backend API)
    console.log("Hackathon created: ", this.newHackathon);
    this.router.navigate(['/view-hackathons']);
  }

}
