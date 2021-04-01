import { indexesFromHashes } from "./utilities/index.mjs";

const BloomFilter = class {
  constructor(hashCount, offset, vectorLength) {
    this.bits = [...Array(vectorLength).fill(0)];
    this.hashCount = hashCount;
    this.offset = offset;
    this.vectorLength = vectorLength;
  }

  _indexes(string) {
    return indexesFromHashes(
      string,
      this.hashCount,
      this.offset,
      this.vectorLength
    );
  }

  add(string) {
    this._indexes(string).forEach((index) => {
      this.bits[index] = 1;
    });

    return this.bits;
  }

  test(string) {
    for (let i = 0; i < this._indexes(string).length; i++) {
      if (this.bits[this._indexes(string)[i]] === 0) return false;
    }

    return true;
  }
};

export default BloomFilter;
