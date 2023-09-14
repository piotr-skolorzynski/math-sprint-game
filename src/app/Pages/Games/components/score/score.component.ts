import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent {
  onPlayAgain() {}
}
