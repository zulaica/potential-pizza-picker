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

console.info("Pepperoni: ", indexesFromHashes("Pepperoni"));
console.info("Mushrooms: ", indexesFromHashes("Mushrooms"));
console.info("Jalapeños:", indexesFromHashes("Jalapeños"));
