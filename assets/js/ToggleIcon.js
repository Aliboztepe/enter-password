import { passwordInput, toggleIcon } from './elements';

class ToggleIcon {
  init() {
    this.passwordInput = passwordInput;
    this.toggleIcon = toggleIcon;

    this.toggleIcon.addEventListener('click', this.togglePassword.bind(this));
  }

  togglePassword() {
    if (this.passwordInput.type === 'password') {
      this.passwordInput.type = 'text';
      this.toggleIcon.setAttribute('src', '/assets/icons/eye-look-icon.svg');
    } else {
      this.passwordInput.type = 'password';
      this.toggleIcon.setAttribute('src', '/assets/icons/eye-not-look-icon.svg');
    }
  }
}

export default ToggleIcon;