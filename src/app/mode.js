import { modes } from './constants';
import { rulesView } from './templates/rules.template.js';
import { actionButtons } from './actionButtons';
import schoolSvg from '../../static/assets/ui/icon-shool.svg';

class Mode {
  constructor() {
    this.mode = null;
  }
  getMode() {
    return this.mode;
  }
  setMode(newMode) {
    this.mode = newMode;
    document.querySelector('main').innerHTML = rulesView({
      title: this.getQuestion(),
      content: this.getDescription(),
      imageSrc: schoolSvg,
    });
    actionButtons();
  }
  getQuestion() {
    return modes.title[this.mode];
  }
  getDescription() {
    return modes.content[this.mode];
  }
}

export const mode = new Mode();
