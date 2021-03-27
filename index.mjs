import stringToHash from "./utilities/hash.mjs";

const BIT_LENGTH = 217;
const OFFSET = 32;

console.info("Pepperoni:");
console.info(
  (stringToHash("Pepperoni") + stringToHash("Pepperoni", OFFSET) * 1) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Pepperoni") + stringToHash("Pepperoni", OFFSET) * 2) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Pepperoni") + stringToHash("Pepperoni", OFFSET) * 3) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Pepperoni") + stringToHash("Pepperoni", OFFSET) * 4) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Pepperoni") + stringToHash("Pepperoni", OFFSET) * 5) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Pepperoni") + stringToHash("Pepperoni", OFFSET) * 6) %
    BIT_LENGTH
);

console.info("Mushrooms:");
console.info(
  (stringToHash("Mushrooms") + stringToHash("Mushrooms", OFFSET) * 1) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Mushrooms") + stringToHash("Mushrooms", OFFSET) * 2) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Mushrooms") + stringToHash("Mushrooms", OFFSET) * 3) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Mushrooms") + stringToHash("Mushrooms", OFFSET) * 4) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Mushrooms") + stringToHash("Mushrooms", OFFSET) * 5) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Mushrooms") + stringToHash("Mushrooms", OFFSET) * 6) %
    BIT_LENGTH
);

console.info("Jalapeños:");
console.info(
  (stringToHash("Jalapeños") + stringToHash("Jalapeños", OFFSET) * 1) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Jalapeños") + stringToHash("Jalapeños", OFFSET) * 2) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Jalapeños") + stringToHash("Jalapeños", OFFSET) * 3) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Jalapeños") + stringToHash("Jalapeños", OFFSET) * 4) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Jalapeños") + stringToHash("Jalapeños", OFFSET) * 5) %
    BIT_LENGTH
);
console.info(
  (stringToHash("Jalapeños") + stringToHash("Jalapeños", OFFSET) * 6) %
    BIT_LENGTH
);
