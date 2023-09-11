import { ChangeDetectionStrategy, Component } from '@angular/core';

export interface Game {
  id: string;
  title: string;
  bestScore: number;
}

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
}
