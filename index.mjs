import { indexesFromHashes } from "./utilities/index.mjs";
import { DEFAULTS, PIZZAS } from "./constants/index.mjs";

const { VECTOR_LENGTH } = DEFAULTS;

const BloomFilter = class {
  constructor(size) {
    this.bits = [...Array(size).fill(0)];
  }

  add(string) {
    const indexes = indexesFromHashes(string);

    for (let i = 0; i < indexes.length; i++) {
      this.bits[indexes[i]] = 1;
    }

    return this.bits;
  }
};

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
