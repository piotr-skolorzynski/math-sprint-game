import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
} from '@angular/core';
import { NgClass } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

import { IEquation, IGame } from 'src/app/models/game.model';
import { EquationService } from 'src/app/services/equations.service';
import { GamesService } from 'src/app/services/games.service';
import { CountdownComponent } from './components/countdown/countdown.component';
import { ScoreModalComponent } from './components/score-modal/score-modal.component';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  imports: [CountdownComponent, NgClass, ScoreModalComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent implements OnInit {
  public isGameStarting = true;
  public selectedEquation = {} as IEquation;
  public selectedEquationArray = [] as IEquation[];
  public selectedEquationArrayIndex: number = 0;
  public showScoreModal = false;

  private equations = [] as IEquation[][];
  private selectedEquationIndex = 0;
  private answers = [] as boolean[];
  private gameId = '';
  private selectedGame = {} as IGame;
  private route = inject(ActivatedRoute);
  private gameService = inject(GamesService);
  private questionsService = inject(EquationService);

  public ngOnInit(): void {
    this.startGame();
  }

  public onClose(close: boolean): void {
    this.isGameStarting = !close;
    this.gameService.startTimer();
  }

  public onWrongCheck(): void {
    if (this.selectedEquation.isTrue) {
      this.answers = [...this.answers, false];
    } else {
      this.answers = [...this.answers, true];
    }

    this.changeIndex();
  }

  public onRightCheck(): void {
    if (this.selectedEquation.isTrue) {
      this.answers = [...this.answers, true];
    } else {
      this.answers = [...this.answers, false];
    }

    this.changeIndex();
  }

  private startGame(): void {
    this.gameId = this.route.snapshot.params['gameId'];
    const games = this.gameService.getGames();
    const chosenGame = games.find(game => game.id === this.gameId);

    if (chosenGame) {
      this.selectedGame = chosenGame;
      const equations = this.questionsService.createEquastions(
        this.selectedGame.questionNumber
      );
      this.equations = [...equations];
      this.selectedEquationArray = equations[0];
      this.selectedEquation = equations[0][0];
    }
  }

  private changeIndex(): void {
    if (
      this.selectedEquationIndex === this.selectedEquationArray.length - 1 &&
      this.selectedEquationArrayIndex === this.equations.length - 1
    ) {
      this.sumupGame();

      return;
    }

    if (
      this.selectedEquationIndex === this.selectedEquationArray.length - 1 &&
      this.selectedEquationArrayIndex < this.equations.length
    ) {
      this.selectedEquationIndex = 0;
      this.selectedEquationArrayIndex++;
      this.selectedEquationArray = [
        ...this.equations[this.selectedEquationArrayIndex],
      ];
      this.selectedEquation = {
        ...this.selectedEquationArray[this.selectedEquationIndex],
      };

      return;
    }

    this.selectedEquationIndex++;
    this.selectedEquation = {
      ...this.selectedEquationArray[this.selectedEquationIndex],
    };
  }

  private sumupGame(): void {
    this.gameService.stopTimer(this.gameId, this.answers);
    this.showScoreModal = true;
  }
}
