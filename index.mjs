import BloomFilter from "./BloomFilter.mjs";
import { DEFAULTS, PIZZAS } from "./constants/index.mjs";

const { VECTOR_LENGTH } = DEFAULTS;

const filteredPizzas = PIZZAS.map(({ name, ingredients }) => {
  const bloomFilter = new BloomFilter(VECTOR_LENGTH);

  ingredients.map((ingredient) => {
    bloomFilter.add(ingredient);
    return;
  });

  return { name, bloomFilter };
});

console.info(filteredPizzas[0].bloomFilter.test("Pepperoni"));
console.info(filteredPizzas[0].bloomFilter.test("Watermelon"));
