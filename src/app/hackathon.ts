export class Hackathon {
    constructor(
      public name: string,
      public theme: string,
      public registrationStartDate: Date,
      public registrationEndDate: Date,
      public eventDate:  Date,
      public challengeTitles: string[],
      public maxTeamSize: number,
      public maxNumTeams: number
    ) {}
  }
  