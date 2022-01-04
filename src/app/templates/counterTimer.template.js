import lightsword from '../../../static/assets/ui/LightSwordHandle.png';

export const counterTemplate = () => {
  return `<p class="timer">Time left: <span class="timer-number">2m 00s</span></p>
  <div class="light-sword">
    <img src="${lightsword}" class="sword-handle" alt="light-sword" />
    <progress class="sword-blade" value="0" max="120"></progress>
  </div>`;
};
