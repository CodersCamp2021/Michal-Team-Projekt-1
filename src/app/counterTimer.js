import { renderResultsModal } from './resultsModal';

const showTimer = (time) => {
  const timer = document.querySelector('.timer');
  const blade = document.querySelector('.sword-blade');
  timer.textContent = `Time left: ${Math.floor(time / 1000 / 60)}m ${Math.floor((time / 1000) % 60)}s`;
  blade.value = Math.floor(time / 1000);
};

export const counterTimer = () => {
  // Current time + 2 minutes
  const time = Date.now() + 120 * 1000;
  const countTime = setInterval(() => {
    const timeLeft = time - Date.now();
    if (timeLeft < 0) {
      clearInterval(countTime);
      //TODO: DODAĆ WYŚWIETLANIE MODALA PO ZAKONCZENIU GRY
      const modal = document.querySelector('.modal-shadow');
      modal.classList.add('active');
    }
    showTimer(timeLeft);
  }, 500);
};
