import { render } from "@testing-library/react";
import App from "./App";
import { checkoutCalculator } from "../src/util";

const priceList = [
  { type: "A", unitPrice: 50 },
  { type: "B", unitPrice: 30 },
  { type: "C", unitPrice: 20 },
  { type: "D", unitPrice: 15 },
];

const cart = ["A", "B", "C", "D"];
const cart2 = ["D", "A", "A", "A", "D", "B", "C"];
const cart3 = ["A", "A", "D", "B", "C"];
const cart4 = ["D", "A", "A", "A", "D", "C", "C"];
const cart5 = ["A", "A", "A", "D", "B", "B"]; //135 + 45 + 15

const specials = [
  { type: "A", amount: 3, special: 135 },
  { type: "B", amount: 2, special: 45 },
];

test("Checkout calcultor test", () => {
  render(<App />);
  expect(checkoutCalculator(priceList, cart, specials)).toBe(115);
  expect(checkoutCalculator(priceList, cart2, specials)).toBe(215);
  expect(checkoutCalculator(priceList, cart3, specials)).toBe(165);
  expect(checkoutCalculator(priceList, cart4, specials)).toBe(205);
  expect(checkoutCalculator(priceList, cart5, specials)).toBe(205);
});
