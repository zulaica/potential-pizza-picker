import BloomFilter from "./BloomFilter.mjs";
import { DEFAULTS, PIZZAS } from "./constants/index.mjs";

const { VECTOR_LENGTH } = DEFAULTS;

const filteredPizzas = PIZZAS.map(({ name, ingredients }) => {
  const bf = new BloomFilter(VECTOR_LENGTH);

  ingredients.map((ingredient) => {
    bf.add(ingredient);
    return;
  });

  const filteredIngredients = bf.bits;
  return { name, filteredIngredients };
});

console.info(filteredPizzas);
