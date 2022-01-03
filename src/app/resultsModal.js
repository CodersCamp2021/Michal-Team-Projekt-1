import { resultsModalView } from './templates/resultsModal.template';

export const renderResultsModal = ({ humanPlayer, computerPlayer }) => {
  const container = document.querySelector('main');
  const playerData = { playerScore: humanPlayer.score, playerAnswers: humanPlayer.answers };
  const computerData = { computerScore: computerPlayer.score, computerAnswers: computerPlayer.answers };
  container.innerHTML = resultsModalView({
    playerData,
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
