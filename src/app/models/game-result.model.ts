export interface IGameResult {
  timePlayed: number;
  baseTime: number;
  hasIncorrectAnswers: boolean;
  numberOfIncorrectAnswers?: number;
  hasNewRecord: boolean;
}
