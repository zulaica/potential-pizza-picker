import { indexesFromHashes } from "./utilities/index.mjs";

const BloomFilter = class {
  constructor(hashCount, offset, vectorLength) {
    this.bits = [...Array(vectorLength).fill(0)];
    this.hashCount = hashCount;
    this.offset = offset;
    this.vectorLength = vectorLength;
  }

  add(string) {
    const indexes = indexesFromHashes(
      string,
      this.hashCount,
      this.offset,
      this.vectorLength
    );

    for (let i = 0; i < indexes.length; i++) {
      this.bits[indexes[i]] = 1;
    }

    return this.bits;
  }

  test(string) {
    const indexes = indexesFromHashes(
      string,
      this.hashCount,
      this.offset,
      this.vectorLength
    );

    for (let i = 0; i < indexes.length; i++) {
      if (this.bits[indexes[i]] === 0) return false;
    }

    return true;
  }
};

export default BloomFilter;
