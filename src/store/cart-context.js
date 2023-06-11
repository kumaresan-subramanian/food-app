import { createContext } from "react";

const cartValue = {
  items : [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {}
};

export const CartContext = createContext(cartValue);