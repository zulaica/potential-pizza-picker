import { indexesFromHashes } from "./utilities/index.mjs";

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

  test(string) {
    const indexes = indexesFromHashes(string);

    for (let i = 0; i < indexes.length; i++) {
      if (this.bits[indexes[i]] === 0) return false;
    }

    return true;
  }
};

export default BloomFilter;
