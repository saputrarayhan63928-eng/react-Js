import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function CartBadge() {
  const { state } = useContext(CartContext);

  return (
    <div style={{ position: "fixed", top: 10, right: 10 }}>
      🛒 {state.totalItems}
    </div>
  );
}
