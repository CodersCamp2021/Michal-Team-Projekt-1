import { quizView } from './templates/quiz.template';
import { generateQuestion } from './questionGenerator';
import { QUESTION_TEXT } from './constants';
import { mode } from './App';

const checkAnswer = (e) => {
  console.log(`Is the answer correct? ${e.target.dataset.correct}`);
  nextQuestion();
};

export const nextQuestion = () => {
  generateQuestion(mode).then((answersData) => {
    const question = QUESTION_TEXT[mode];
    const answers = answersData.answers.map((answersDataItem) => ({
      text: answersDataItem.name,
      correct: answersDataItem.id === answersData.rightAnswer.id,
    }));
    const photo = answersData.answerImgPath;
    document.querySelector('main').innerHTML = quizView({ question, answers, photo });
    document.querySelectorAll('button.quiz-answer').forEach((button) => button.addEventListener('click', checkAnswer));
  });
};
