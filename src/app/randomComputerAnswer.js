export const randomComputerAnswer = (answers) => {
  const max = answers.length;
  const random = Math.floor(Math.random() * max);
  const randomAnswer = answers[random];
  return randomAnswer;
};
