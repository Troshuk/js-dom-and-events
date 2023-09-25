function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

function createBoxes(amount) {
  if (!amount) {
    return;
  }

  const boxes = [];
  const sizeIncrement = 10;

  for (let i = 0; i < amount; i++) {
    const size = 30 + i * sizeIncrement;

    const box = document.createElement("div");
    box.style.width = size + "px";
    box.style.height = size + "px";
    box.style.backgroundColor = getRandomHexColor();

    boxes.push(box);
  }

  boxesElement.append(...boxes);
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const numberInput = document.querySelector("#controls input");
const boxesElement = document.querySelector("div#boxes");

createButton.addEventListener("click", () => createBoxes(numberInput.value));

destroyButton.addEventListener("click", () => (boxesElement.textContent = ""));
