import { Injectable } from '@angular/core';
import { Game } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  private games: Game[] = [
    {
      id: '1',
      title: '10 Questions',
      questionNumber: 10,
      bestScore: 0.0,
    },
    {
      id: '2',
      title: '25 Questions',
      questionNumber: 25,
      bestScore: 0.0,
    },
    {
      id: '3',
      title: '50 Questions',
      questionNumber: 50,
      bestScore: 0.0,
    },
    {
      id: '4',
      title: '99 Questions',
      questionNumber: 99,
      bestScore: 0.0,
    },
  ];

  private timePlayed = 0;

  private interval: number = <any>setInterval(() => {});

  startTimer() {
    this.interval = window.setInterval(() => this.addTime(), 100);
  }

  stopTimer(): number {
    clearInterval(this.interval);

    return Number(this.timePlayed.toFixed(2));
  }

  getGames(): Game[] {
    return this.games;
  }

  private addTime() {
    this.timePlayed += 0.1;
  }
}
