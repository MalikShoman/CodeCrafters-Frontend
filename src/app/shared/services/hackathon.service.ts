import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HackathonService {
  getEnrolledTeams(hackathonId: string | null) {
    throw new Error('Method not implemented.');
  }
  getHackathonById(hackathonId: string | null) {
    throw new Error('Method not implemented.');
  }
  
  getHackathons(): any[]{
    throw new Error('Method not implemented.');
  }

  constructor() { }
}
