const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

function createIngredientElement(value) {
  const ingredientElement = document.createElement("li");
  ingredientElement.textContent = value;
  ingredientElement.classList.add("item");

  return ingredientElement;
}

const ingredientsElements = ingredients.map(createIngredientElement);

document.querySelector("ul#ingredients").append(...ingredientsElements);
