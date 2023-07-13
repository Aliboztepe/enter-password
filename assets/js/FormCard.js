import { submitButton, passwordInput } from './elements';

class FormCard {
  init() {
    this.formCard = document.querySelector('.card');
    this.passwordInput = passwordInput;

    this.formCard.addEventListener('submit', this.formSubmit.bind(this));
    this.passwordInput.addEventListener('keyup', this.validatePassword.bind(this));
  }

  validatePassword() {
    const password = this.passwordInput.value;
    const tooltip = document.getElementById('passwordTooltip');
    const requirements = [
      /[A-Z]/, // Büyük harf
      /[a-z]/, // Küçük harf
      /[0-9]/, // Sayı
      /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/, // Özel karakter
    ];

    const isPasswordValid = requirements.every(requirement => requirement.test(password));

    if (password.length < 8 || !isPasswordValid) {
      submitButton.disabled = true;
      tooltip.style.display = 'block';
    } else {
      submitButton.disabled = false;
      tooltip.style.display = 'none';
    }
  }

  formSubmit(e) {
    e.preventDefault();
    const data = {
      password: this.passwordInput.value,
      isStatus: document.querySelector('.switch-input').checked,
    };
    console.log(data);
  }
}

export default FormCard;