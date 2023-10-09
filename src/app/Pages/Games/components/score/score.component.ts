import { Component, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ScoreComponent {
  constructor(private router: Router) {}

  onPlayAgain() {
    this.router.navigate(['/']);
  }
}
