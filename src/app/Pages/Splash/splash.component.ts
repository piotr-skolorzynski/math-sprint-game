import { ChangeDetectionStrategy, Component } from '@angular/core';

interface Game {
  id: number;
  title: string;
}

@Component({
  selector: 'app-splash',
  templateUrl: './splash.component.html',
  styleUrls: ['./splash.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SplashComponent {
  title = 'Math Sprint Game';
  games: Game[] = [
    {
      id: 1,
      title: '10 Questions',
    },
    {
      id: 2,
      title: '25 Questions',
    },
    {
      id: 3,
      title: '50 Questions',
    },
    {
      id: 4,
      title: '99 Questions',
    },
  ];
}
