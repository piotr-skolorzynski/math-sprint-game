import { Injectable } from '@angular/core';

import { Game, GameResult } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Game[] = [
    {
      id: '1',
      title: '10 Questions',
      questionNumber: 10,
      bestScore: 30.0,
    },
    {
      id: '2',
      title: '25 Questions',
      questionNumber: 25,
      bestScore: 10.0,
    },
    {
      id: '3',
      title: '50 Questions',
      questionNumber: 50,
      bestScore: 10.0,
    },
    {
      id: '4',
      title: '99 Questions',
      questionNumber: 99,
      bestScore: 10.0,
    },
  ];

  private timePlayed = 0;

  private interval: number = <any>setInterval(() => {});

  private gameResult = {} as GameResult;

  startTimer() {
    this.interval = window.setInterval(() => this.addTime(), 100);
  }

  stopTimer(gameId: string, answers: boolean[]): void {
    clearInterval(this.interval);

    this.setGameResult(gameId, answers);
  }

  getGames(): Game[] {
    return this.games;
  }

  getGameResults(): GameResult {
    return this.gameResult;
  }

  private setGameResult(gameId: string, answers: boolean[]): void {
    const hasIncorrectAnswers =
      answers.filter((answer) => answer === false).length > 0;

    const playedGame = this.games.find((game) => game.id === gameId) as Game;

    const baseTime = playedGame.bestScore;

    const hasNewRecord = this.timePlayed < baseTime;

    this.gameResult = {
      timePlayed: Number(this.timePlayed.toFixed(2)),
      baseTime: Number(baseTime),
      hasIncorrectAnswers,
      hasNewRecord,
    };

    console.log(this.gameResult);
  }

  private addTime() {
    this.timePlayed += 0.1;
  }
}
