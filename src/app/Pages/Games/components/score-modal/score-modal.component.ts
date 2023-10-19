import { Component } from '@angular/core';
import { GameResult } from '../../../../models/game.model';
import { Router } from '@angular/router';
import { GamesService } from '../../../../services/games.service';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-score-modal',
  templateUrl: './score-modal.component.html',
  styleUrls: ['./score-modal.component.css'],
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
