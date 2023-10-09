import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Equation } from 'src/app/models/game.model';
import { EquationService } from 'src/app/services/equations.service';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GamesComponent implements OnInit {
  private equations = [] as Equation[][];
  private selectedEquationIndex = 0;
  private answers = [] as boolean[];
  isGameStarting = true;
  selectedEquation = {} as Equation;
  selectedEquationArray = [] as Equation[];
  selectedEquationArrayIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private gameService: GamesService,
    private questionsService: EquationService
  ) {}

  ngOnInit(): void {
    this.startGame();
  }

  onClose(close: boolean) {
    this.isGameStarting = !close;
    this.gameService.startTimer();
  }

  onWrongCheck() {
    if (this.selectedEquation.isTrue) {
      this.answers = [...this.answers, false];
    } else {
      this.answers = [...this.answers, true];
    }

    this.changeIndex();
  }

  onRightCheck() {
    if (this.selectedEquation.isTrue) {
      this.answers = [...this.answers, true];
    } else {
      this.answers = [...this.answers, false];
    }

    this.changeIndex();
  }

  private startGame() {
    const gameId = this.route.snapshot.params['gameId'];
    const games = this.gameService.getGames();
    const selectedGame = games.find((game) => game.id === gameId);

    if (selectedGame) {
      const equations = this.questionsService.createEquastions(
        selectedGame.questionNumber
      );
      this.equations = [...equations];
      this.selectedEquationArray = equations[0];
      this.selectedEquation = equations[0][0];
    }
  }

  private changeIndex() {
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

  private sumupGame() {
    const timeResult = this.gameService.stopTimer();
    this.router.navigate(['/score']);
  }
}
