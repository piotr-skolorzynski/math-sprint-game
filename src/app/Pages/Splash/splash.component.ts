import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

import { Game } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  imports: [NgClass],
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashComponent implements OnInit {
  public games = [] as Game[];
  public selectedGame = {} as Game;

  private router = inject(Router);
  private gameService = inject(GamesService);

  public ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

  public onGameSelect(game: Game): void {
    this.selectedGame = { ...game };
  }

  public onGameStart(): void {
    this.router.navigate([`/games/${this.selectedGame.id}`]);
  }
}
