import React, { createContext, useReducer } from "react";
import reducer from "./reducer/Reducer";
import cartReducer from "./reducer/cartReducer";
export const Cart = createContext();

const Context = ({ children }) => {
  const initialProduct = [];
  const initialCart = [];

  const [products, proDispatch] = useReducer(reducer, initialProduct);
  const [cart, cartDispatch] = useReducer(cartReducer, initialCart);
  return (
    <Cart.Provider value={{ products, proDispatch, cart, cartDispatch }}>
      {children}
    </Cart.Provider>
  );
};

export default Context;
