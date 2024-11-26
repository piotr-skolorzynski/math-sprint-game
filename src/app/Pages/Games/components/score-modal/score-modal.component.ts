import { Component } from '@angular/core';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';

import { GameResult } from '../../../../models/game.model';
import { GamesService } from '../../../../services/games.service';

@Component({
    imports: [NgIf],
    selector: 'app-score-modal',
    templateUrl: './score-modal.component.html',
    styleUrls: ['./score-modal.component.css']
})
export class ScoreModalComponent {
  gameResult = {} as GameResult;

  constructor(private router: Router, private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameResult = this.gameService.getGameResults();
  }

  onPlayAgain() {
    this.router.navigate(['/']);
  }
}
