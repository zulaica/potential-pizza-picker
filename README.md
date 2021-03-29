# Potential Pizza Picker

A simple Bloom Filter implementation for indecisive pizza selection.

_**Work-In-Progress**_

---

Pizzeria serves a variety of pizza pies, each with a distinct name and its own unique set of toppings. No two pizzas are identical, but any number of pizzas may share similar toppings.

The menu only lists the name of each pizza. A customer can select an ingredient they do not want on their pizza in order to narrow down the options available.

> "I don't know what I want, but I do know what I don't want."

- Each pizza has a name and a list of toppings
- User specifies a topping they do not want on their pizza
- List of pizzas updates to include only the pizzas that do not contain the ingredient specified by the user
