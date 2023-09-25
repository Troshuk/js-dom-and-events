const inputElement = document.querySelector("input#name-input");

function nameChangeHandler(event) {
  document.querySelector("span#name-output").textContent =
    event.target.value || "Anonymous";
}

inputElement.addEventListener("input", nameChangeHandler);
