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

  getGames(): Game[] {
    return this.games;
  }
}
