import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
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
  equations = [] as Equation[];
  selectedEquation = {} as Equation;

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
      this.equations = this.questionsService.createEquastions(
        selectedGame.questionNumber
      );
      console.log(this.equations);
      this.selectedEquation = this.equations[0];
    }
  }
}
