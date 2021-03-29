import { stringToHash } from "./index.mjs";
import { DEFAULTS } from "../constants/index.mjs";

const { HASH_COUNT, OFFSET, VECTOR_LENGTH } = DEFAULTS;

export const indexesFromHashes = (
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
