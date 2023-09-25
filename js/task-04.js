const counterValueElement = document.querySelector("#counter #value");
const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');

let counterValue = 0;

function incrementHandler() {
  counterValueElement.textContent = ++counterValue;
}

function decrementHandler() {
  counterValueElement.textContent = --counterValue;
}

incrementButton.addEventListener("click", incrementHandler);
decrementButton.addEventListener("click", decrementHandler);
