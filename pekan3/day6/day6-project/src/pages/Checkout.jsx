import { useContext } from "react";
import { AuthContext } from "../contexts/AuthContext";
import { CartContext } from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

function Checkout(){
    const {logout} = useContext(AuthContext)
    const {cartItems, totalPrice, resetItems} = useContext(CartContext)
    const navigate = useNavigate();

    const handleCheckout = () =>{
        alert("Checkout Berhasil")
        resetItems();
        logout();
        navigate("/products")
    }

    return(
        < div style={{ padding: "40px", textAlign: "center" }}>
            <h2>Checkout</h2>
            <p>Total Item: {cartItems.length}</p>
            <h3>Price : ${totalPrice}</h3>

            <button onClick={handleCheckout} className="button">Bayar & Logout</button>
        </div>
    )
}

export default Checkout