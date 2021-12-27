export const quizView = (answers, title) => {
  return `
    <h1 class="content__header">${title}</h1>
    
    <div class="quiz-answer-container">
      <button class="quiz-answer">${answers[0].name}</button>
      <button class="quiz-answer">${answers[1].name}</button>
      <button class="quiz-answer">${answers[2].name}</button>
      <button class="quiz-answer">${answers[3].name}</button>
    </div>
`;
};
