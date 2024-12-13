export interface IGame {
  id: string;
  title: string;
  questionNumber: number;
  bestScore: number;
}

export interface IEquation {
  id: string;
  value: string;
  isTrue: boolean;
}

export interface IGameResult {
  timePlayed: number;
  baseTime: number;
  hasIncorrectAnswers: boolean;
  numberOfIncorrectAnswers?: number;
  hasNewRecord: boolean;
}
