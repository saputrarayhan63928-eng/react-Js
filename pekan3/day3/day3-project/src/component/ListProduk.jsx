import React, { useState, useMemo } from 'react';

function ProductList({ products, searchTerm }) {
  const [sortBy, setSortBy] = useState('name');
  
  // PERHITUNGAN MAHAL: Filter dan sort produk
  // Tanpa useMemo: akan dijalankan setiap kali komponen re-render
  const filteredAndSortedProducts = useMemo(() => {
    console.log('🔄 Melakukan filter dan sort produk...');
    
    // Simulasi perhitungan yang memakan waktu
    const startTime = performance.now();
    
    // Filter produk berdasarkan search term
    let filtered = products.filter(product => 
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    // Sort produk berdasarkan kriteria
    filtered.sort((a, b) => {
      if (sortBy === 'name') {
        return a.name.localeCompare(b.name);
      } else if (sortBy === 'price') {
        return a.price - b.price;
      } else if (sortBy === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    });
    
    // Simulasi delay untuk menunjukkan perhitungan mahal
    const endTime = performance.now();
    console.log(`⏱️ Waktu perhitungan: ${endTime - startTime}ms`);
    
    return filtered;
  }, [products, searchTerm, sortBy]); // Hanya jalankan ulang jika salah satu berubah

  return (
    <div>
      <h3>Daftar Produk</h3>
      <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
        <option value="name">Urutkan berdasarkan Nama</option>
        <option value="price">Urutkan berdasarkan Harga</option>
        <option value="rating">Urutkan berdasarkan Rating</option>
      </select>
      
      <div>
        {filteredAndSortedProducts.map(product => (
          <div key={product.id} style={{ border: '1px solid #ccc', margin: '5px', padding: '10px' }}>
            <h4>{product.name}</h4>
            <p>Harga: Rp {product.price.toLocaleString()}</p>
            <p>Rating: {product.rating}/5</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// Contoh data produk
const sampleProducts = [
  { id: 1, name: 'Laptop Gaming', price: 15000000, rating: 4.5 },
  { id: 2, name: 'Smartphone', price: 5000000, rating: 4.2 },
  { id: 3, name: 'Headphone', price: 800000, rating: 4.8 },
  { id: 4, name: 'Mouse Wireless', price: 200000, rating: 4.0 },
  { id: 5, name: 'Keyboard Mechanical', price: 1200000, rating: 4.6 },
];

function Produk() {
  const [searchTerm, setSearchTerm] = useState('');
  const [otherState, setOtherState] = useState(0);

  return (
    <div style={{ padding: '20px' }}>
      <h2>Contoh useMemo - Optimasi Perhitungan Mahal</h2>
      
      <input
        type="text"
        placeholder="Cari produk..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ width: '300px', padding: '8px', marginBottom: '10px' }}
      />
      
      <button onClick={() => setOtherState(otherState + 1)}>
        Update State Lain (Count: {otherState})
      </button>
      
      <p style={{ color: 'gray', fontSize: '14px' }}>
        💡 Coba ubah state lain di atas dan lihat di console. 
        Perhitungan filter/sort hanya akan dijalankan ulang jika search term atau sort berubah!
      </p>
      
      <ProductList products={sampleProducts} searchTerm={searchTerm} />
    </div>
  );
}

export default Produk