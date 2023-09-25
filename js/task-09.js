function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function backgroundColorChangeHandler() {
  const color = getRandomHexColor();

  document.querySelector("span.color").textContent = color;
  document.body.style.backgroundColor = color;
}

document
  .querySelector("button.change-color")
  .addEventListener("click", backgroundColorChangeHandler);
