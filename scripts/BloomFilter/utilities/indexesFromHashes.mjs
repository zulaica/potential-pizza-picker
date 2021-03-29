import { stringToHash } from "./index.mjs";

export const indexesFromHashes = (string, hashCount, offset, vectorLength) => {
  const indexes = [];

  for (let i = 1; i <= hashCount; i++) {
    indexes.push(
      (stringToHash(string) + stringToHash(string, offset) * i) % vectorLength
    );
  }

  return indexes;
};
