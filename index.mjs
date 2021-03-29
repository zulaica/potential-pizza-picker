import BloomFilter from "./BloomFilter.mjs";
import { DEFAULTS, PIZZAS } from "./constants/index.mjs";

const { HASH_COUNT, OFFSET, VECTOR_LENGTH } = DEFAULTS;

const filteredPizzas = PIZZAS.map(({ name, ingredients }) => {
  const bloomFilter = new BloomFilter(HASH_COUNT, OFFSET, VECTOR_LENGTH);

  ingredients.map((ingredient) => {
    bloomFilter.add(ingredient);
    return;
  });

  return { name, bloomFilter };
});

const pizzaHasIngredient = (string) => {
  const results = [];

  filteredPizzas.map(({ bloomFilter }) => {
    results.push(bloomFilter.test(string));
  });

  return results;
};

console.info(pizzaHasIngredient("Pepperoni"));
console.info(pizzaHasIngredient("Roasted Garlic"));
