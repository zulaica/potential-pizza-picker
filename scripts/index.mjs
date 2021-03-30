import BloomFilter from "./BloomFilter/index.mjs";
import { DEFAULTS, INGREDIENTS, PIZZAS } from "./constants/index.mjs";

const { HASH_COUNT, OFFSET, VECTOR_LENGTH } = DEFAULTS;
let results = [...Array(PIZZAS.length).fill(true)];

const filteredPizzas = PIZZAS.map(({ name, ingredients }) => {
  const bloomFilter = new BloomFilter(HASH_COUNT, OFFSET, VECTOR_LENGTH);

  ingredients.map((ingredient) => {
    bloomFilter.add(ingredient);
  });

  return { name, bloomFilter };
});

const ingredientSelect = document.querySelector("#ingredient-select");
const pizzaList = document.querySelector("#pizza-list");
const ingredientList = document.querySelector("#ingredient-list");

const testIngredient = (string) => {
  results = [];

  filteredPizzas.map(({ bloomFilter }) => {
    results.push(bloomFilter.test(string));
  });
};

const updatePizzaList = () =>
  document.querySelectorAll("button").forEach((item, index) => {
    item.disabled = results[index];
  });

const clearIngredientList = () => {
  ingredientList.querySelectorAll("*").forEach((item) => item.remove());
};

const updateIngredientList = (index) => {
  clearIngredientList();

  PIZZAS[index].ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientList.appendChild(li);
  });
};

INGREDIENTS.forEach((ingredient) => {
  const option = document.createElement("option");
  option.textContent = ingredient;
  ingredientSelect.appendChild(option);
});

PIZZAS.forEach((pizza, index) => {
  const li = document.createElement("li");
  const button = document.createElement("button");

  button.textContent = pizza.name;
  button.dataset.id = index;
  button.addEventListener("click", () => {
    updateIngredientList(index);
  });

  li.appendChild(button);
  pizzaList.appendChild(li);
});

document.addEventListener("load", updatePizzaList());

ingredientSelect.addEventListener("change", () => {
  clearIngredientList();
  testIngredient(ingredientSelect.value);
  updatePizzaList();
});
