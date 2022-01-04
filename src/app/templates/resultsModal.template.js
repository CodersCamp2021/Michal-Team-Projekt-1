export const resultsModalView = ({
  playerData: { playerScore, playerAnswers },
  computerData: { computerScore, computerAnswers },
}) => {
  return `<div class="modal-overlay active">
      <div class="modal-content">
        <button type="button" class="close close-modal-btns" aria-label="close" id="close-hall-of-fame-button-2"></button>
        <div class="result-wrapper">
          <div class="result-summary">
            <h2>game over</h2>
            <p class="result-summary-text sub-title">
              The force is strong in you young Padawan! During 2 minutes you have answered
              <span id="result-summary-player-points">
                ${playerScore}/${playerAnswers.length}
              </span> questions. And Computer guessed
              <span id="result-summary-computer-points">
                ${computerScore}/${computerAnswers.length}
              </span>
              questions.
            </p>
          </div>
          <div class="result-master-yoda">
            <img class="master-yoda-img" src=${new URL(
              '../../../static/assets/ui/MasterYodaLeft.png',
              import.meta.url,
            )} alt="Master Yoda" />
          </div>
          <table class="result-table-content">
            <thead>
              <tr class="result-table-row result-table-header">
                <th></th>
                <th>You</th>
                <th>Computer</th>
                <th>Answer</th>
              </tr>
            </thead>
            <tbody class="result-table-rows">
              ${playerAnswers
                .map(
                  ({ answer, img, isCorrect, rightAnswer }, index) => `
              <tr class="result-table-row">
                <td>
                  <img src=${img} alt="sw-img" />
                </td>
                <td class=${isCorrect ? 'answer-correct' : 'answer-wrong'}>
                    ${answer}
                </td>
                <td class=${computerAnswers[index].isCorrect ? 'answer-correct' : 'answer-wrong'}>
                    ${computerAnswers[index].answer}
                </td>
                <td>${rightAnswer}</td>
                </tr>
          `,
                )
                .join('')}
            </tbody>
          </table>
          <div class="result-form">
            <form id="form-hall-of-fame-save">
              <div class="flex-form">
                <input
                  id="player-name-hall-of-fame"
                  name="player-name-hall-of-fame"
                  class="player-name-hall-of-fame"
                  type="text"
                  aria-label="player-name"
                />
                <p>Please fill your name in order to receive eternal glory in the whole Galaxy!</p>
              </div>
              <div class="modal-btns-wrapper">
                <button
                  type="submit"
                  class="button modal-btn button--action"
                  id="save-hall-of-fame-button"
                  aria-label="submit"
                >
                  may the force be with you
                </button>
                <button
                  type="button"
                  class="button modal-btn close-modal-btn close-modal-btns"
                  id="close-hall-of-fame-button"
                  aria-label="close"
                >
                  close
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>`;
};
