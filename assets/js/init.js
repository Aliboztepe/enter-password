import FormCard from './FormCard';
import ToggleIcon from './ToggleIcon';

class Init {
  constructor() {
    this.formCard = new FormCard();
    this.toggleIcon = new ToggleIcon();
  }

  init() {
    this.formCard.init();
    this.toggleIcon.init();
  }
}

const init = new Init();
init.init();
export default init;