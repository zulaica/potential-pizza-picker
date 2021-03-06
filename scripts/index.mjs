import BloomFilter from "./BloomFilter/index.mjs";
import { DEFAULTS, TOPPINGS, PIZZAS } from "./constants/index.mjs";

const { HASH_COUNT, OFFSET, VECTOR_LENGTH } = DEFAULTS;
let results = [...Array(PIZZAS.length).fill(true)];

const filteredPizzas = PIZZAS.map(({ name, toppings }) => {
  const bloomFilter = new BloomFilter(HASH_COUNT, OFFSET, VECTOR_LENGTH);

  toppings.map((topping) => {
    bloomFilter.add(topping);
  });

  return { name, bloomFilter };
});

const toppingSelect = document.querySelector("#topping-select");
const pizzaList = document.querySelector("#pizza-list");
const toppingList = document.querySelector("#topping-list");

const testTopping = (string) => {
  results = [];

  filteredPizzas.map(({ bloomFilter }) => {
    results.push(bloomFilter.test(string));
  });
};

const updatePizzaList = () =>
  document.querySelectorAll("button").forEach((item, index) => {
    item.disabled = results[index];
  });

const clearSelectedPizza = () => {
  document.querySelector(".selected") &&
    document.querySelector(".selected").classList.remove("selected");
};

const clearToppingList = () => {
  toppingList.querySelectorAll("*").forEach((item) => item.remove());
};

const updateToppingList = (index) => {
  clearToppingList();

  PIZZAS[index].toppings.forEach((topping) => {
    const li = document.createElement("li");
    li.textContent = topping;
    toppingList.appendChild(li);
  });
};

TOPPINGS.forEach((topping) => {
  const option = document.createElement("option");
  option.textContent = topping;
  toppingSelect.appendChild(option);
});

PIZZAS.forEach((pizza, index) => {
  const li = document.createElement("li");
  const button = document.createElement("button");

  button.textContent = pizza.name;
  button.addEventListener("click", () => {
    clearSelectedPizza();
    updateToppingList(index);
    button.classList.add("selected");
  });

  li.appendChild(button);
  pizzaList.appendChild(li);
});

document.addEventListener("load", updatePizzaList());

toppingSelect.addEventListener("change", () => {
  clearSelectedPizza();
  clearToppingList();
  testTopping(toppingSelect.value);
  updatePizzaList();
});
