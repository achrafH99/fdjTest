import { Component, Input } from '@angular/core';
import { Player } from '../interfaces/player';

@Component({
  selector: 'app-player-details',
  templateUrl: './player-details.component.html',
  styleUrls: ['./player-details.component.scss']
})
export class PlayerDetailsComponent {

  @Input() player?: Player

}
