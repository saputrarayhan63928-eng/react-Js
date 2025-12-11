import { useEffect, useState } from "react";

export default function FetchSimulation() {
  const [data, setData] = useState(null);      // menampung data hasil fetch
  const [loading, setLoading] = useState(true); // status loading

  useEffect(() => {
    console.log("Komponen di-mount, mulai mengambil data...");

    // Simulasi fetch API (misal network delay 2 detik)
    const timer = setTimeout(() => {
      const fakeData = {
        id: 1,
        name: "Produk A",
        price: 15000
      };

      setData(fakeData);     // set data ke state
      setLoading(false);     // matikan loading
      console.log("Data berhasil diambil.");
    }, 2000);

    // cleanup (jaga-jaga jika komponen dibongkar sebelum timeout selesai)
    return () => {
      clearTimeout(timer);
      console.log("Cleanup dijalankan, timeout dibersihkan.");
    };
  }, []); // [] = efek hanya jalan sekali saat mount

  return (
    <div>
      <h1>Simulasi Fetch Data</h1>

      {loading ? (
        <p>Sedang mengambil data...</p>
      ) : (
        <div style={{ border: '5px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
          <p>ID: {data.id}</p>
          <p>Nama: {data.name}</p>
          <p>Harga: {data.price}</p>
        </div>
      )}
    </div>
  );
}