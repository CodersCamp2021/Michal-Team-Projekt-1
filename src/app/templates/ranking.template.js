export const rankingView = ({ title, imageSrc, ranking }) => {
  return `
    <h2 class="content__section__title">
      <img src="${imageSrc}" class="content__section__title-icon" alt="" />
        ${title}
    </h2>
    <div class="ranking">
      <div class="ranking__head">
        <div>Place</div>
        <div>Player</div>
        <div>Answered</div>
      </div>
      <div class="ranking__body">
        ${ranking}
      </div>
    </div>`;
};
