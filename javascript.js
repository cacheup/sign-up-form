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

password.addEventListener('input', () => {
  if(password.value != passwordConfirm.value) {
    password.classList.add('error');
    passwordConfirm.classList.add('error');
    errorMsg.textContent = "* Passwords do not match";
  }
  else {
    password.classList.remove('error');
    passwordConfirm.classList.remove('error');
    errorMsg.textContent = " ";
  }
});

passwordConfirm.addEventListener('input', () => {
  if(passwordConfirm.value != password.value) {
    passwordConfirm.classList.add('error');
    password.classList.add('error');
    errorMsg.textContent = "* Passwords do not match";
  }
  else {
    passwordConfirm.classList.remove('error');
    password.classList.remove('error');
    errorMsg.textContent = " ";
  }
});