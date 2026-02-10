import { Component } from '@angular/core';
import { PlayerPanel } from '../../components/player-panel/player-panel';
import { GlobalLeaderboards } from '../../components/global-leaderboards/global-leaderboards';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PlayerPanel, GlobalLeaderboards],
  templateUrl: './home.html',
  styleUrls: ['./home.css'],
})
export class Home {}