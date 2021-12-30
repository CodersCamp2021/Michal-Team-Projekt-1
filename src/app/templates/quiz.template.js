export const quizView = ({ question, answers, photo }) => {
  return `
    <div class="quiz">
      <img class="quiz-photo" src="${photo}" alt=" zdjęcie postaci" />
      <h1 class="quiz-question">${question}</h1>
      <div class="quiz-answer-container">
        ${answers
          .map((answer) => `<button class="quiz-answer" data-correct="${answer.correct}">${answer.text}</button> \n`)
          .join('\n')}
      </div>
    </div>`;
};
