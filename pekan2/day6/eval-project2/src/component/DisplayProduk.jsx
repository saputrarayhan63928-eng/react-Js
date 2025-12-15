import { useState, useEffect } from "react";
import axios from "axios";

function DisplayProduk() {
  const [produk, setProduk] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  useEffect(() => {
    const fetchProduk = async () => {
      try {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setProduk(response.data);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };
    fetchProduk();
  }, []);

    if (loading) return <p>Memuat data produk...</p>;   
    if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div className="produk-grid">
    {produk.map((item) => (
      <div  className="product-card" key={item.id} style={{border: "1px solid black", margin: "10px", padding: "10px"}}>
        <img src={item.image} alt={item.title} style={{width: "100px"}}/>      
        <h3>{item.title}</h3>
        <p>Harga: ${item.price}</p>
        <p>Kategori: {item.category}</p>
        <button>Tambah keranjang</button>
      </div>
    ))}
    </div>
  )
}

export default DisplayProduk;
