const stringToHash = (string, offset = 1) => {
  return string.split("").reduce((hash, currentLetter) => {
    return hash * offset + currentLetter.charCodeAt(0);
  }, 0);
};

export default stringToHash;
