export const quizView = ({ question, answersArray, photo }) => {
  return `
    <div class="quiz">
      <img class="quiz-photo" src="${photo}" alt=" zdjęcie postaci" />
      <h1 class="quiz-question">${question}</h1>
      <div class="quiz-answer-container">
        ${answersArray.map((answer) => `<button class="quiz-answer">${answer}</button>`).join('\n')}
      </div>
    </div>`;
};
