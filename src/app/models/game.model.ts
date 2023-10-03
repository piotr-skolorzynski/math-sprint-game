export interface Game {
  id: string;
  title: string;
  questionNumber: number;
  bestScore: number;
}

export interface Equation {
  id: string;
  value: string;
  isTrue: boolean;
}
