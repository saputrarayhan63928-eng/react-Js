import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

function Cart() {
  const { cartItems, removeItems, resetItems, totalPrice } =
    useContext(CartContext);

  if (cartItems.length === 0) {
    return <p className="cart-empty">Keranjang Masih Kosong</p>;
  }

  return (
    <section className="cart-container">
      <h3>Keranjang Belanja</h3>

      <div className="cart-grid">
        {cartItems.map(item => (
          <div className="cart-item" key={item.id}>
            <img src={item.image} alt={item.title} />
            <h4>{item.title}</h4>
            <p>Price: $ {item.price}</p>
            <button
              className="remove-btn"
              onClick={() => removeItems(item.id)}
            >
              Hapus
            </button>
          </div>
        ))}
      </div>

      <div className="cart-summary">
        <h4>Total: $ {totalPrice}</h4>
        <button className="button" onClick={resetItems}>
          Bersihkan Keranjang
        </button>
      </div>
    </section>
  );
}

export default Cart;