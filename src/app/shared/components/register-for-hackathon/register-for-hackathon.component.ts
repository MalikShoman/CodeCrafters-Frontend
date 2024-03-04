import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { competitors } from 'src/app/models/competitors';

@Component({
  selector: 'app-register-for-hackathon',
  templateUrl: './register-for-hackathon.component.html',
  styleUrls: ['./register-for-hackathon.component.css']
})
export class RegisterForHackathonComponent implements OnInit {


  newCompetitor: competitors = new competitors('', ['dfs','fdsfvc'], 0, 0);
  constructor(private route: ActivatedRoute) {

    const hackathonId = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  addCompetitor() {
    this.newCompetitor.competitors.push('');
  }
  removeCompetitor(index: number) {
    this.newCompetitor.competitors.splice(index, 1);
  }

  selectedChallenge(challengeId: any) {
    this.newCompetitor.challengeId = challengeId;
  }

  onSubmit() {

  }
}
