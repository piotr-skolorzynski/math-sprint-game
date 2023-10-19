const mongoConnect = require('./database');

class Game {
    constructor (title, questionNumber, bestScore) {
        this.title = title;
        this.questionNumber = questionNumber;
        this.bestScore = bestScore;
    }

    save() {

    }
}
