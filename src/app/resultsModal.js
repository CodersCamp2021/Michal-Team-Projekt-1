import { resultsModalView } from './templates/resultsModal.template';

export const renderResultsModal = ({ playerData = [], correctAnswers = [], computerData = [] }) => {
  const container = document.querySelector('#content__container');
  container.innerHTML = resultsModalView({
    playerData,
    correctAnswers,
    computerData,
  });
  const closeBtns = document.querySelectorAll('.close-modal-btns');
  const savePlayerBtn = document.querySelector('#save-hall-of-fame-button');
  savePlayerBtn.addEventListener('click', handleSubmit);
  closeBtns.forEach((btn) => btn.addEventListener('click', hideGameModal));
};

export const hideGameModal = () => {
  const modal = document.querySelector('.modal-overlay');
  modal.classList.remove('active');
};

export const handleSubmit = (e) => {
  e.preventDefault();
};
