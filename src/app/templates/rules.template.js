export const rulesView = ({ title, content, imageSrc }) => {
  return ` <h1 class="content__header">${title}</h1>

  <div id="content-section" class="content__section">
    <h2 class="content__section__title">
      <img src="${imageSrc}" class="content__section__title-icon" alt=""> Mode Rules
    </h2>
    <p class="content__section__description ">${content}
    
    </p>
  </div>`;
};
