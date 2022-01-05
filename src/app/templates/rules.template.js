export const rulesView = ({ title, content, imageSrc }) => {
  return `
    <div class="content">
      <div class="photo__container">
        <img class="content__picture" src="${new URL(
          '../../../static/assets/img/modes/people/36.jpg',
          import.meta.url,
        )}" alt="Jar Jar Binks" />
      </div>

      <div id="content__container" class="content__container">
        <h1 class="content__header">${title}</h1>

        <div id="content-section" class="content__section">
          <h2 class="content__section__title">
            <img src="${imageSrc}" class="content__section__title-icon" alt="" />
            Mode Rules
          </h2>
          <p class="content__section__description">
            ${content}
          </p>
        </div>
        <div class="content__buttons">
          <button class="button button--ranking"><img src="${new URL(
            '../../../static/assets/ui/icon-stats.svg',
            import.meta.url,
          )}" alt='' /> Hall of fame</button>
          <button class="button button--action">Play the game</button>
        </div>
      </div>
    </div>`;
};
