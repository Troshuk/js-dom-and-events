const inputElement = document.querySelector("input#font-size-control");

function inputChangeHandler({ target }) {
  console.log(target.value);
  document.querySelector("span#text").style.fontSize = target.value + "px";
}

inputElement.addEventListener("input", inputChangeHandler);
