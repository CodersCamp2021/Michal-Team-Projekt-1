const showTimer = (time) => {
  const timer = document.querySelector('.timer');
  const blade = document.querySelector('.sword-blade');
  timer.textContent = `Time left: ${time.getMinutes()}m ${time.getSeconds()}s`;
  blade.value = 120 - Math.floor(time.getTime() / 1000);
};

const counterTimer = () => {
  // Current time + 2 minutes
  const time = new Date(Date.parse(new Date()) + 121 * 1000);
  const countTime = setInterval(() => {
    const timeLeft = new Date(time - new Date());
    if (timeLeft.getTime() < 1000) {
      clearInterval(countTime);
      const modal = document.querySelector('.modal-shadow');
      modal.classList.add('active');
    }
    showTimer(timeLeft);
  }, 1000);
};
