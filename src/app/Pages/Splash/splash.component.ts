import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';
import { Router } from '@angular/router';

import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  standalone: true,
  imports: [NgFor, NgClass],
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashComponent implements OnInit {
  games = [] as Game[];
  selectedGame = {} as Game;

  constructor(private router: Router, private gameService: GamesService) {}

  ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

  onGameSelect(game: Game) {
    this.selectedGame = { ...game };
  }

  onGameStart() {
    this.router.navigate([`/games/${this.selectedGame.id}`]);
  }
}
