class HumanPlayer {
  constructor(name) {
    this.name = name;
    this.score = 0;
    this.askedQuestion = 0;
    this.activeQuestion = null;
    this.answer = [];
  }

  get playerInfo() {
    return {
      name: this.name,
      score: `${this.score}/${this.askedQuestion}`,
    };
  }

  askQuestion(question) {
    this.askedQuestion++;
    this.activeQuestion = question;
  }

  answerQuestion(answer, correct) {
    this.answer.push(answer);
    if (correct) {
      this.score++;
    }
  }
}

export function createNewPlayer(name) {
  return new HumanPlayer(name);
}
