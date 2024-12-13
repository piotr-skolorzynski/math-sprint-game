import { Injectable } from '@angular/core';

import { IEquation } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class EquationService {
  public createEquastions(questionsAmount: number): IEquation[][] {
    //randomly choose how many correct equastions there should be
    const correctEquastions = this.getRandomInt(questionsAmount);

    //set amount of wrong equations
    const incorrectEquastions = questionsAmount - correctEquastions;

    let equations = [] as IEquation[];
    let firstNumber: number;
    let secondNumber: number;
    let wrongFormat = [] as string[];

    //create correct questions
    for (let i = 0; i < correctEquastions; i++) {
      firstNumber = this.getRandomInt(9);
      secondNumber = this.getRandomInt(9);
      const equationValue = firstNumber * secondNumber;
      const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
      equations = [
        ...equations,
        { id: crypto.randomUUID(), value: equation, isTrue: true },
      ];
    }

    // create incorrect ones
    for (let i = 0; i < incorrectEquastions; i++) {
      firstNumber = this.getRandomInt(9);
      secondNumber = this.getRandomInt(9);
      const equationValue = firstNumber * secondNumber;
      wrongFormat[0] = `${firstNumber} x ${
        secondNumber + 1
      } = ${equationValue}`;
      wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${
        equationValue - 1
      }`;
      wrongFormat[2] = `${firstNumber} x ${
        secondNumber + 1
      } = ${equationValue}`;
      const formatChoice = this.getRandomInt(wrongFormat.length);
      const equation = wrongFormat[formatChoice];
      equations = [
        ...equations,
        { id: crypto.randomUUID(), value: equation, isTrue: false },
      ];
    }

    //use Fisher-Yates (aka Knuth) shuffle algorithm to shaffle equations in array
    const shuffledEquastions = this.shuffleArray(equations);

    const ArrayOfArrays = this.createArrayOfArrays(shuffledEquastions);

    return ArrayOfArrays;
  }

  private createArrayOfArrays(array: IEquation[]): IEquation[][] {
    const NUMBER_OF_QUESTIONS = 5;
    const numberOfArrays = Math.ceil(array.length / NUMBER_OF_QUESTIONS);

    const arrayOfArrays = [] as IEquation[][];

    for (let i = 0; i < numberOfArrays; i++) {
      const partialArray = array.slice(
        i * NUMBER_OF_QUESTIONS,
        (i + 1) * NUMBER_OF_QUESTIONS
      );

      arrayOfArrays.push(partialArray);
    }

    return arrayOfArrays;
  }

  private getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  private shuffleArray<T>(array: T[]): T[] {
    let i = array.length;
    while (--i > 0) {
      let randIndex = Math.floor(Math.random() * (i + 1));
      [array[randIndex], array[i]] = [array[i], array[randIndex]];
    }
    return array;
  }
}
