import React, { useState, useCallback } from 'react';

// Komponen Anak yang di-memoize
const ExpensiveChild = React.memo(({ onAddToCart, product }) => {
  console.log(`🔄 ExpensiveChild untuk ${product.name} di-render`);
  
  return (
    <div style={{ border: '1px solid #ddd', padding: '10px', margin: '5px' }}>
      <h4>{product.name}</h4>
      <p>Harga: Rp {product.price.toLocaleString()}</p>
      <button onClick={() => onAddToCart(product)}>
        Tambah ke Keranjang
      </button>
    </div>
  );
});

function ShoppingCart() {
  const [cart, setCart] = useState([]);
  const [otherState, setOtherState] = useState(0);

  // ❌ TANPA useCallback: Fungsi dibuat ulang setiap render
  // const handleAddToCart = (product) => {
  //   setCart(prevCart => [...prevCart, product]);
  // };

  // ✅ DENGAN useCallback: Fungsi di-memoize, hanya dibuat ulang jika dependensi berubah
  const handleAddToCart = useCallback((product) => {
    console.log(`🛒 Menambahkan ${product.name} ke keranjang`);
    setCart(prevCart => [...prevCart, product]);
  }, []); // Array kosong = fungsi tidak akan pernah dibuat ulang

  const clearCart = useCallback(() => {
    setCart([]);
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contoh useCallback - Optimasi Callback Functions</h2>
      
      <button onClick={() => setOtherState(otherState + 1)}>
        Update State Lain (Count: {otherState})
      </button>
      
      <button onClick={clearCart} style={{ marginLeft: '10px' }}>
        Kosongkan Keranjang
      </button>
      
      <p style={{ color: 'gray', fontSize: '14px' }}>
        💡 Coba klik tombol "Update State Lain" dan lihat di console. 
        ExpensiveChild tidak akan di-render ulang karena callback-nya di-memoize!
      </p>

      <div style={{ display: 'flex', gap: '20px' }}>
        <div style={{ flex: 1 }}>
          <h3>Produk Tersedia</h3>
          {sampleProducts.map(product => (
            <ExpensiveChild 
              key={product.id} 
              product={product} 
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
        
        <div style={{ flex: 1 }}>
          <h3>Keranjang Belanja ({cart.length} item)</h3>
          {cart.map((item, index) => (
            <div key={index} style={{ padding: '5px', backgroundColor: '#f0f0f0' }}>
              {item.name} - Rp {item.price.toLocaleString()}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Data produk yang sama
const sampleProducts = [
  { id: 1, name: 'Laptop Gaming', price: 15000000, rating: 4.5 },
  { id: 2, name: 'Smartphone', price: 5000000, rating: 4.2 },
  { id: 3, name: 'Headphone', price: 800000, rating: 4.8 },
];

export default ShoppingCart;