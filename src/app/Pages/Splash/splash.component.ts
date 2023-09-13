import { ChangeDetectionStrategy, Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Game } from 'src/app/models/game.model';

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashComponent {
  games: Game[] = [
    {
      id: '1',
      title: '10 Questions',
      bestScore: 0.0,
    },
    {
      id: '2',
      title: '25 Questions',
      bestScore: 0.0,
    },
    {
      id: '3',
      title: '50 Questions',
      bestScore: 0.0,
    },
    {
      id: '4',
      title: '99 Questions',
      bestScore: 0.0,
    },
  ];

  selectedGame = {} as Game;

  constructor(private router: Router, private route: ActivatedRoute) {}

  onGameSelect(game: Game) {
    this.selectedGame = { ...game };
  }

  onGameStart() {
    this.router.navigate([`/games/${this.selectedGame.id}`]);
  }
}
