// registration-form.component.ts
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-for-hackathon',
  templateUrl: './register-for-hackathon.component.html',
  styleUrls: ['./register-for-hackathon.component.css']
})
export class RegisterForHackathonComponent implements OnInit {
  @Input() challenges: any[] = [];
  teamName: string = '';
  selectedChallenge: number | undefined;
  teamMembers: any[] = [{ title: '', name: '', id: '', email: '', mobile: '' }];

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    // Implement registration logic here
    console.log('Registering for hackathon...', this.teamName, this.selectedChallenge, this.teamMembers);
  }

  addTeamMember() {
    this.teamMembers.push({ title: '', name: '', id: '', email: '', mobile: '' });
  }

  removeTeamMember(index: number) {
    this.teamMembers.splice(index, 1);
  }
}
