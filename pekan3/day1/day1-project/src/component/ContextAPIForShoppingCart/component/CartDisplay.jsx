import { useCart } from "../hooks/useCart";

function CartDisplay(){
    const {cartItems, removeItems, clearItems, totalPrice } = useCart()

    if(cartItems.length === 0){
        return <h5>Keranjang Masih Kosong</h5>
    }

    return(
        <>
        <div>
            <h3>Shopping Cart</h3>

            {cartItems.map(item =>(
                <div key={item.id}>
                    <span>
                        {item.name} - {item.price}
                    </span><br />
                    <button onClick={() => removeItems(item.id)}>Hapus Dari Keranjang</button>
                </div>
            ))}

            <h4>Total : {totalPrice}</h4>

            <button onClick={clearItems}>Bersihkan keranjang</button>
        </div>
        </>
    )
}

export default CartDisplay