import React from "react";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import CartItem from "../components/cart/CartItem";
import { CartProduct } from "../models/CartProduct.model";
const testProduct: CartProduct = {
  category: "vegetable",
  count: 0,
  id: "random-id",
  imageURL: "https://ss.com",
  name: "Okra",
  price: 5,
  quantity: 1,
  quantityType: "kg",
};
describe("App integration tests", () => {
  test("button click in CounterButtons (child component) updates state in CartItem", async () => {
    const { getByTestId } = render(<CartItem product={testProduct} />);

    const addButton = getByTestId("add-button");
    fireEvent.click(addButton);

    const result = getByTestId("counter-value");
    expect(result).toBeInTheDocument();
    expect(result.innerHTML).toEqual(`${testProduct.count + 1}`);
  });
});

const testProduct2: CartProduct = {
  category: "vegetable",
  count: 0,
  id: "random-id",
  imageURL: "https://ss.com",
  name: "Potatoes bag",
  price: 10,
  quantity: 5,
  quantityType: "kg",
};
describe("App integration tests", () => {
  test("Test the quantity of food product on the Item card", async () => {
    const { getByTestId } = render(<CartItem product={testProduct2} />);

    const result = getByTestId("quantity-value");
    expect(result).toBeInTheDocument();
    expect(result.innerHTML).toEqual(`5 kg`);
  });
});
