import React from "react";

interface Product{
    id: string
    title: string
    price: number
    tags: string[]
}

interface ProductListProps{
    items: Product[]
    onAddToCart: (id: string) => void
}

const ProductList: React.FC<ProductListProps> = ({items, onAddToCart}) => {
    return(
        <ul>
            {items.map((product) => (
                <li key={product.id} style={{ marginBottom: '15px' }}>
                    <strong>{product.title}</strong> - ${product.price}
                    <div>
                        {product.tags.map(tag => (
                            <small key={tag} style={{marginRight: '5px' }}>{tag}</small>
                        ))}
                    </div>
                    <button onClick={() => onAddToCart(product.id)}>Tambah Ke Keranjang</button>
                </li>
            ))}
        </ul>
    )
}

export default ProductList