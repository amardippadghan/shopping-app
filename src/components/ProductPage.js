import React, { useContext, useEffect } from "react";
import { Cart } from "../Context";
import SingleProduct from "./SingleProduct";
import axios from "axios";

function ProductPage() {
  const { products, proDispatch } = useContext(Cart);

  const fetchProduct = async () => {
    try {
      const res = await axios.get("https://fakestoreapi.com/products");
      console.log("axios:", res.data);
      proDispatch({ type: "SET_PRODUCT", payload: res.data });
      console.log("products:", products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <div className="container mx-auto my-4">
      <h1 className="text-2xl font-bold mb-4 text-center">Product Page</h1>
      <div className="flex justify-center gap-4 flex-wrap">
        {products.map((product) => (
          <SingleProduct
            key={product.id}
            product={product}
            className="w-64 h-80"
          />
        ))}
      </div>
    </div>
  );
}

export default ProductPage;
