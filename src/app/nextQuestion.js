import { quizView } from './templates/quiz.template';
import { generateQuestion } from './questionGenerator';
import { mode } from './mode';
import { isCorrectAnswer } from './helpers/isCorrectAnswer';
import { randomComputerAnswer } from './randomComputerAnswer';
import { computerPlayer, humanPlayer } from './players';
import { counterTemplate } from './templates/counterTimer.template';
import { counterTimer } from './counterTimer';

const playerAnswer = (player, answer, rightAnswer, question) => {
  const isCorrect = isCorrectAnswer(answer, rightAnswer);
  player.answerQuestion(answer, isCorrect);
  player.askQuestion(question);
  return isCorrect;
};

let shouldDisplaySword = true;

export const nextQuestion = () => {
  const countTimer = document.querySelector('.count-timer');

  const enterKeyframes = [
    { transform: 'translateX(-10%) scale(0.9)', opacity: '0' },
    { transform: 'translateX(0) scale(1)', opacity: '1' },
  ];
  const leaveKeyframes = [
    { transform: 'translateX(0) scale(1)', opacity: '1' },
    { transform: 'translateX(10%) scale(0.9)', opacity: '0' },
  ];
  const animationOptions = {
    duration: 400,
    easing: 'ease-in-out',
    fill: 'both',
  };

  if (document.querySelector('.quiz')) {
    document.querySelector('.quiz').animate(leaveKeyframes, animationOptions);
  }

  generateQuestion().then((answersData) => {
    const question = mode.getQuestion();
    const {
      answers,
      answerImgPath: photo,
      rightAnswer: { name: rightAnswer },
    } = answersData;
    const answersArray = answers.map(({ name }) => name);
    document.querySelector('main').innerHTML = quizView({ question, answersArray, photo });
    document.querySelector('.quiz').animate(enterKeyframes, animationOptions);
    document.querySelectorAll('button.quiz-answer').forEach((button) => {
      button.addEventListener('click', (e) => {
        const isCorrect = playerAnswer(humanPlayer, e.target.innerText, rightAnswer, question);
        e.target.classList.add(isCorrect ? 'quiz-answer-correct' : 'quiz-answer-wrong');
        playerAnswer(computerPlayer, randomComputerAnswer(answersArray), rightAnswer, question);
        setTimeout(nextQuestion, 1000);
      });
      button.question = question;
    });
    if (shouldDisplaySword) {
      countTimer.innerHTML = counterTemplate();
      counterTimer();
      shouldDisplaySword = false;
    }
  });
};
