import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GameResult } from 'src/app/models/game.model';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent implements OnInit {
  gameResult = {} as GameResult;

  constructor(private router: Router, private gameService: GamesService) {}

  ngOnInit(): void {
    this.gameResult = this.gameService.getGameResults();
  }

  onPlayAgain() {
    this.router.navigate(['/']);
  }
}
