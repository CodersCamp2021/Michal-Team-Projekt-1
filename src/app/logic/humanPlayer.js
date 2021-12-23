import { rightAnswer } from '../questionGenerator';

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

  askQuestion(question, callback) {
    this.askedQuestion++;
    this.activeQuestion = question;
    callback.forEach((callback) => {
      callback(question);
    });
  }

  answerQuestion(answer, callback) {
    this.answer.push(answer);
    if (rightAnswer(this.activeQuestion.rightAnswer, answer)) {
      this.score++;
    }
    callback.forEach((callback) => {
      callback(this.activeQuestion, answer);
    });
  }
}

function createNewPlayer(name) {
  return new HumanPlayer(name);
}

export default createNewPlayer;
