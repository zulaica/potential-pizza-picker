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

for (let i = 0; i < INGREDIENTS.length; i++) {
  testIngredient(INGREDIENTS[i]);
  console.info(INGREDIENTS[i], results);
}
