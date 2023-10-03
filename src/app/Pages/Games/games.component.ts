import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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
  selectedEquation = {} as Equation;
  selectedEquationArray = [] as Equation[];
  selectedEquationArrayIndex: number = 0;

  constructor(
    private route: ActivatedRoute,
    private gameService: GamesService,
    private questionsService: EquationService
  ) {}

  ngOnInit(): void {
    const gameId = this.route.snapshot.params['gameId'];
    const games = this.gameService.getGames();
    const selectedGame = games.find((game) => game.id === gameId);

    if (selectedGame) {
      const equations = this.questionsService.createEquastions(
        selectedGame.questionNumber
      );
      console.log(equations);
      this.equations = [...equations];
      this.selectedEquationArray = equations[0];
      this.selectedEquation = equations[0][0];
    }
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

  private changeIndex() {
    if (
      this.selectedEquationIndex === this.selectedEquationArray.length - 1 &&
      this.selectedEquationArrayIndex === this.equations.length - 1
    ) {
      this.resetGame();
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
    console.log('end of game');
  }

  private resetGame() {
    console.log('reset');
  }
}
