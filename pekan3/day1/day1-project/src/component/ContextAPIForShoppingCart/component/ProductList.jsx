import { useCart } from "../hooks/useCart";

const product = [
  { id: 1, name: "Laptop", price: 1200000 },
  { id: 2, name: "Mouse", price: 25000 },
  { id: 3, name: "Keyboard", price: 75000 },
];

function ProductList  (){
    const {addItems} = useCart()
    return(
        <>
        <div>
            <h3>Products</h3>
            {product.map (product => (
                <div key={product.id}>
                    <span>
                        {product.name} - {product.price}
                    </span><br />
                        <button onClick={() => addItems(product)}>Tambah ke keranjang</button>
                </div>
            ))}
        </div>
        </>
    ) 
}

export default ProductList