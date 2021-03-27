import stringToHash from "./utilities/hash.mjs";

const BIT_LENGTH = 217;
const OFFSET = 32;
const HASH_COUNT = 6;

const indexesFromHashes = (string, count) => {
  const indexes = [];

  for (let i = 1; i <= count; i++) {
    indexes.push(
      (stringToHash(string) + stringToHash(string, OFFSET) * i) % BIT_LENGTH
    );
  }

  return indexes;
};

console.info("Pepperoni: ", indexesFromHashes("Pepperoni", HASH_COUNT));
console.info("Mushrooms: ", indexesFromHashes("Mushrooms", HASH_COUNT));
console.info("Jalapeños:", indexesFromHashes("Jalapeños", HASH_COUNT));
