import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { Router } from '@angular/router';

import { IGame } from '@app/models';
import { GamesService } from '@app/services';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  imports: [NgClass],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashComponent implements OnInit {
  public games = [] as IGame[];
  public selectedGame = {} as IGame;

  private router = inject(Router);
  private gameService = inject(GamesService);

  public ngOnInit(): void {
    this.games = this.gameService.getGames();
  }

  public onGameSelect(game: IGame): void {
    this.selectedGame = { ...game };
  }

  public onGameStart(): void {
    this.router.navigate([`/games/${this.selectedGame.id}`]);
  }
}
