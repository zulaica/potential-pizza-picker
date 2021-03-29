import { indexesFromHashes } from "./utilities/index.mjs";
import { DEFAULTS } from "./constants/index.mjs";

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

const bf = new BloomFilter(VECTOR_LENGTH);

console.info(bf.bits);
console.info(bf.add("Pepperoni"));
