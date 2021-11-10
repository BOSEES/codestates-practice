let inputUsername = document.querySelector("#username");
let inputPassword = document.querySelector("#password");
let inputPasswordRetype = document.querySelector("#password-retype");
let failureMessage = document.querySelector(".failure-message");
let successMessage = document.querySelector(".success-message");
let failurePasswordMessage = document.querySelector(".failure-passwordMessage");

inputUsername.onkeyup = () => {
  if (isMoreThan4Length(inputUsername.value)) {
    successMessage.classList.remove("hide");
    failureMessage.classList.add("hide");
  } else {
    successMessage.classList.add("hide");
    failureMessage.classList.remove("hide");
  }
}

inputPasswordRetype.onkeyup = () => {
  let password = inputPassword.value;
  let passwordRetype = inputPasswordRetype.value
  if (!isMatch(password, passwordRetype)) {
    failurePasswordMessage.classList.remove("hide");
  } else {
    failurePasswordMessage.classList.add("hide");
  }
}

function isMatch (password,passwordRetype) {
  return password === passwordRetype;
}

function isMoreThan4Length(value) {
  return value.length >= 4;
}