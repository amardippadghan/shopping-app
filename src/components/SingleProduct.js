import React, { useContext } from "react";
import { Cart } from "../Context";

function SingleProduct({ product }) {
  const { category, description, id, image, price, rating, title } = product;
  const { cartDispatch } = useContext(Cart);

  return (
    <div>
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src={image} alt={title} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>{description}</p> */}
          <p>Category: {category}</p>
          <p>Price: ${price}</p>
          {/* <p>Rating: {rating.rate}</p> */}

          <div className="card-actions justify-end">
            <button
              className="btn btn-primary"
              onClick={() =>
                cartDispatch({ type: "ADD_TO_CART", payload: product })
              }
            >
              Add to Cart
            </button>
            <button
              className="btn btn-warning"
              onClick={() => {
                cartDispatch({ type: "REMOVE_FROM_CART", payload: product });
              }}
            >
              Remove from Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
