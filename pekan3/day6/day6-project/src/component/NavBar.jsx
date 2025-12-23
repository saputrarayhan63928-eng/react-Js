import { Link } from "react-router-dom";
import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";

function Navbar() {
  const { cartItems } = useContext(CartContext);

  return (
    <nav className="navbar">
      <Link to="/" className="a">Products</Link>
      <Link to="/cart" className="a">
        Cart ({cartItems.length})
      </Link >
      <Link to="/login" className="a">Checkout</Link>
    </nav>
  );
}

export default Navbar;