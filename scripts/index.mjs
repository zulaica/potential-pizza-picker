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

INGREDIENTS.forEach((ingredient) => {
  const option = document.createElement("option");
  option.textContent = ingredient;
  ingredientSelect.appendChild(option);
});

PIZZAS.forEach((pizza) => {
  const li = document.createElement("li");
  const button = document.createElement("button");
  button.textContent = pizza.name;
  li.appendChild(button);
  pizzaList.appendChild(li);
});

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

document.addEventListener("load", updatePizzaList());

ingredientSelect.addEventListener("change", () => {
  testIngredient(ingredientSelect.value);
  updatePizzaList();
});
