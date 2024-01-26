import React, { useContext } from "react";
import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";

function Carts() {
  const { cart, cartDispatch } = useContext(Cart);
  console.log(cart);
  return (
    <div>
      <div className="container mx-auto my-4">
        <h1 className="text-2xl font-bold mb-4 text-center">Cart Page</h1>
        <div className="flex justify-center gap-4 flex-wrap">
          {cart.map((item) => (
            <SingleProduct key={item.id} product={item} className="w-64 h-80" />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carts;
