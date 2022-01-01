import { quizView } from './templates/quiz.template';
import { generateQuestion } from './questionGenerator';
import { mode } from './mode';
import { createNewPlayer } from './logic/humanPlayer';

const player = createNewPlayer('player');

const checkAnswer = (e) => {
  const correct = e.target.dataset.correct === 'true';
  e.target.classList.add(correct ? 'quiz-answer-correct' : 'quiz-answer-wrong');
  player.answerQuestion(e.target.innerHTML, correct);
  player.askQuestion(e.currentTarget.question);
  setTimeout(nextQuestion, 1000);
};

export const nextQuestion = () => {
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
    const answers = answersData.answers.map((answersDataItem) => ({
      text: answersDataItem.name,
      correct: answersDataItem.id === answersData.rightAnswer.id,
    }));
    const photo = answersData.answerImgPath;
    document.querySelector('main').innerHTML = quizView({ question, answers, photo });
    document.querySelector('.quiz').animate(enterKeyframes, animationOptions);
    document.querySelectorAll('button.quiz-answer').forEach((button) => {
      button.addEventListener('click', checkAnswer);
      button.question = question;
    });
  });
};
