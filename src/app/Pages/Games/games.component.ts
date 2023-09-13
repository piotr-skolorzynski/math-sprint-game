import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Equation } from 'src/app/models/game.model';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent {
  equations: Equation[] = [
    {id: '1', value: '3 x 3 = 30', isTrue: true},
    {id: '2', value: '3 x 3 = 30', isTrue: true},
    {id: '3', value: '3 x 3 = 30', isTrue: true},
    {id: '4', value: '3 x 3 = 30', isTrue: true},
    {id: '5', value: '3 x 3 = 30', isTrue: true},
  ]

  selectedEquation: Equation = {
    id: '1',
    value: '3 x 3 = 30',
    isTrue: true
  }
}
