import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function ProductCard({ product }) {
  const { dispatch } = useContext(CartContext);

  return (
    <div>
      <img src={product.image} width="100" />
      <h4>{product.title}</h4>
      <p>${product.price}</p>
      <button
        onClick={() =>
          dispatch({ type: "ADD_ITEM" })
        }
      >
        Add to Cart
      </button>
    </div>
  );
}
