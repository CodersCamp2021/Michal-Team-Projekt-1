class Player {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.askedQuestion = 0;
    this.activeQuestion = null;
    this.answers = [];
  }

  get playerInfo() {
    return {
      name: this.name,
      score: this.score,
      maxScore: this.askedQuestion,
    };
  }

  askQuestion(question) {
    this.askedQuestion++;
    this.activeQuestion = question;
  }

  answerQuestion(answer, rightAnswer, isCorrect, img) {
    this.answers.push({ answer, rightAnswer, isCorrect, img });
    if (isCorrect) {
      this.score++;
    }
  }
}

export function createNewPlayer(name) {
  return new Player(name);
}
