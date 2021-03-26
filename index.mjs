import stringToHash from "./utilities/hash.mjs";

const BIT_LENGTH = 25;
const OFFSET_A = 32;
const OFFSET_B = 64;

console.info("Pepperoni:");
console.info(stringToHash("Pepperoni") % BIT_LENGTH);
console.info(stringToHash("Pepperoni", OFFSET_A) % BIT_LENGTH);
console.info(stringToHash("Pepperoni", OFFSET_B) % BIT_LENGTH);
console.info("---");
console.info("Jalapeños:");
console.info(stringToHash("Jalapeños") % BIT_LENGTH);
console.info(stringToHash("Jalapeños", OFFSET_A) % BIT_LENGTH);
console.info(stringToHash("Jalapeños", OFFSET_B) % BIT_LENGTH);
console.info("---");
console.info("Mushrooms:");
console.info(stringToHash("Mushrooms") % BIT_LENGTH);
console.info(stringToHash("Mushrooms", OFFSET_A) % BIT_LENGTH);
console.info(stringToHash("Mushrooms", OFFSET_B) % BIT_LENGTH);
