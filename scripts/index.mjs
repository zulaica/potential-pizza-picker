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

const testIngredient = (string) => {
  results = [];

  filteredPizzas.map(({ bloomFilter }) => {
    results.push(bloomFilter.test(string));
  });
};

if (typeof document !== "undefined") {
  const ingredientSelect = document.querySelector("#ingredient-select");
  const pizzas = document.querySelector("#pizzas");

  const updateMenu = () =>
    document.querySelectorAll("button").forEach((item, index) => {
      item.disabled = results[index];
    });

  INGREDIENTS.forEach((ingredient) => {
    const option = document.createElement("option");
    option.textContent = ingredient;
    ingredientSelect.appendChild(option);
  });

  PIZZAS.forEach((pizza) => {
    const button = document.createElement("button");
    button.textContent = pizza.name;
    pizzas.appendChild(button);
  });

  document.addEventListener("load", updateMenu());

  ingredientSelect.addEventListener("change", () => {
    testIngredient(ingredientSelect.value);
    updateMenu();
  });
} else {
  for (let i = 0; i < INGREDIENTS.length; i++) {
    testIngredient(INGREDIENTS[i]);
    console.info(INGREDIENTS[i], results);
  }
}
