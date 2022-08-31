const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const form = document.querySelector('#account-create-form');
const errorMsg = document.querySelector('.error-msg');

form.addEventListener('submit', (event) => {
  if(password.value != passwordConfirm.value) {
    password.classList.add('error');
    passwordConfirm.classList.add('error');
    errorMsg.textContent = "* Passwords do not match";
    event.preventDefault();
  }
});