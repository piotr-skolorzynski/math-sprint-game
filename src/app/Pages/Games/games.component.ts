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
  equations = [] as Equation[][];
  selectedEquation = {} as Equation;
  private selectedEquationIndex = 0;
  selectedEquationArray = [] as Equation[];
  selectedEquationArrayIndex: number = 0;
  private answers = [] as boolean[];

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
      this.selectedEquationArray = equations[0];
      this.selectedEquation = equations[0][0];
    }
  }

  onWrongCheck() {
    if (this.selectedEquation.isTrue) {
      this.answers = [...this.answers, false];
      // this.selectedEquationIndex += 1;
      // this.selectedEquation = {
      //   ...this.selectedEquationArray[this.selectedEquationIndex],
      // };
      this.changeIndex();
      console.log(this.answers);
      return;
    }

    this.answers = [...this.answers, true];
    // this.selectedEquationIndex += 1;
    // this.selectedEquation = {
    //   ...this.selectedEquationArray[this.selectedEquationIndex],
    // };
    this.changeIndex();
    console.log(this.answers);
  }

  onRightCheck() {
    if (this.selectedEquation.isTrue) {
      this.answers = [...this.answers, true];
      // this.selectedEquationIndex += 1;
      // this.selectedEquation = {
      //   ...this.selectedEquationArray[this.selectedEquationIndex],
      // };
      this.changeIndex();
      console.log(this.answers);

      return;
    }

    this.answers = [...this.answers, false];
    // this.selectedEquationIndex += 1;
    // this.selectedEquation = {
    //   ...this.selectedEquationArray[this.selectedEquationIndex],
    // };
    this.changeIndex();
    console.log(this.answers);
  }

  private changeIndex() {
    //warianty
    //sprawdzenie czy index pytania jest ostatni oraz index tablicy - jeśli tak to kończ grę
    // drugie sprawdzenie czy index pytania jest ostatni a tablicy nie - to zmień index tablicy +1 oraz usatw index pytania na 0
    // trzeci wariant zmień index pytania na +1

    if (
      this.selectedEquationIndex === this.selectedEquationArray.length - 1 &&
      this.selectedEquationArrayIndex === this.equations.length - 1
    ) {
      this.resetGame();
      this.endGame();

      return;
    }

    if (
      this.selectedEquationIndex === this.selectedEquationArray.length - 1 &&
      this.selectedEquationArrayIndex < this.equations.length - 1
    ) {
      this.selectedEquationIndex = 0;
      this.selectedEquationArrayIndex += 1;
      this.selectedEquationArray = [
        ...this.equations[this.selectedEquationArrayIndex],
      ];
      this.selectedEquation = {
        ...this.selectedEquationArray[this.selectedEquationIndex],
      };

      return;
    }

    this.selectedEquationIndex += 1;
    this.selectedEquation = {
      ...this.selectedEquationArray[this.selectedEquationIndex],
    };
  }

  private endGame() {
    console.log('end of game');
  }

  private resetGame() {
    console.log('reset');
  }
}
