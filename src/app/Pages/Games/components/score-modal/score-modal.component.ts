import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GameResult } from '../../../../models/game.model';
import { GamesService } from '../../../../services/games.service';

@Component({
  selector: 'app-score-modal',
  templateUrl: './score-modal.component.html',
  styleUrls: ['./score-modal.component.css'],
})
export class ScoreModalComponent implements OnInit {
  public gameResult = {} as GameResult;
  private router = inject(Router);
  private gameService = inject(GamesService);

  public ngOnInit(): void {
    this.gameResult = this.gameService.getGameResults();
  }

  public onPlayAgain(): void {
    this.router.navigate(['/']);
  }
}
