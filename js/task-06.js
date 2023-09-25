const inputElement = document.querySelector("input#validation-input");

function inputValidationHandler({ target }) {
  if (target.value.length == target.dataset.length) {
    target.classList.add("valid");
    target.classList.remove("invalid");
  } else {
    target.classList.add("invalid");
    target.classList.remove("valid");
  }
}

inputElement.addEventListener("blur", inputValidationHandler);
