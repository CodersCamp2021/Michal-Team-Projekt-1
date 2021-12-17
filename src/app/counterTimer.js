const counterTimer = () => {
  const blade = document.querySelector('.sword-blade');
  const timer = document.querySelector('.timer');
  const modal = document.querySelector('.modal-overlay');
  let time = 0;
  let seconds = 59;
  let minutes = 1;
  const countTime = setInterval(() => {
    blade.value = time;
    if (seconds === 0) {
      timer.textContent = `${minutes}m 0${seconds}s`;
      minutes--;
      seconds = 59;
    } else if (time === 120) {
      clearInterval(countTime);
      timer.textContent = `2m 00s`;
      blade.value = 0;
      modal.classList.add('active');
    } else if (seconds < 10) {
      timer.textContent = `${minutes}m 0${seconds}s`;
      seconds--;
    } else {
      timer.textContent = `${minutes}m ${seconds}s`;
      seconds--;
    }
    time++;
  }, 1000);
};
