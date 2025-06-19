import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IGameResult } from '../../../../models/game.model';
import { GamesService } from '../../../../services/games.service';

@Component({
  selector: 'app-score-modal',
  templateUrl: './score-modal.component.html',
})
export class ScoreModalComponent implements OnInit {
  public gameResult = {} as IGameResult;
  private router = inject(Router);
  private gameService = inject(GamesService);

  public ngOnInit(): void {
    this.gameResult = this.gameService.getGameResults();
  }

  public onPlayAgain(): void {
    this.router.navigate(['/']);
  }
}
