import stringToHash from "./utilities/hash.mjs";
import CONSTANTS from "./helpers/constants.mjs";

const { HASH_COUNT, OFFSET, VECTOR_LENGTH } = CONSTANTS;

const indexesFromHashes = (
  string,
  hashCount = HASH_COUNT,
  offset = OFFSET,
  vectorLength = VECTOR_LENGTH
) => {
  const indexes = [];

  for (let i = 1; i <= hashCount; i++) {
    indexes.push(
      (stringToHash(string) + stringToHash(string, offset) * i) % vectorLength
    );
  }

  return indexes;
};

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
