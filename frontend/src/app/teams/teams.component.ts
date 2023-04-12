import { Component, Input } from '@angular/core';
import { TeamService } from '../services/teamService/team.service';
import { Team } from '../interfaces/team';

@Component({
  selector: 'app-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss']
})
export class TeamsComponent {

  teams?: Team[];

  constructor(private teamService: TeamService) { }

  getTeams(league: any) {
    this.teamService.getTeamsByLeague(league._id).subscribe((league: any) => {
      this.teams = league.teams;
    })
  }


}
