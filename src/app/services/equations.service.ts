import { Injectable } from '@angular/core';
import { Equation } from '../models/game.model';

@Injectable({
  providedIn: 'root',
})
export class EquationService {
  createEquastions(questionsAmount: number): Equation[] {
    //randomly choose how many correct equastions there should be
    const correctEquastions = this.getRandomInt(questionsAmount);

    //set amount of wrong equations
    const incorrectEquastions = questionsAmount - correctEquastions;

    let equations = [] as Equation[];
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
    return this.shuffleArray(equations);
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
