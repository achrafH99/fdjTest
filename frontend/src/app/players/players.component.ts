import { Component } from '@angular/core';
import { ActivatedRoute, RouterStateSnapshot } from '@angular/router';
import { PlayerService } from '../services/playerService/player.service';
import { Player } from '../interfaces/player';
import { Location } from '@angular/common';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent {

  teamId: any;
  teamName: string = '';
  players: Player[] = [];
  constructor(private route: ActivatedRoute, private playerService: PlayerService, private location: Location) { }

  ngOnInit() {
    this.teamId = this.route.snapshot.paramMap.get('id');
    this.playerService.getPlayersByTeam(this.teamId).subscribe((data: any) => {
      this.teamName = data.name;
      this.players = data.players;
    },
      (error: any) => {
        console.error(error);
      }
    )
  }

  goBack() {
    this.location.back();
  }

}
