import { CartContext } from "../contexts/CartContext";
import { useContext } from "react";

function ProductCard({product}){
    const {addItems} = useContext(CartContext)

    return(
      <div className="product-card">
      <img src={product.image} alt={product.title} />
      <h4>{product.title}</h4>
      <p className="price">$ {product.price}</p>
      <button onClick={() => addItems(product)}>
        Tambah Keranjang
      </button>
    </div>
    )
}

export default ProductCard