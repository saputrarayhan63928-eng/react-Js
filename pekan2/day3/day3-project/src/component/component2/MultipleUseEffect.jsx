import { useState, useEffect } from "react";

function MultiEffectComponent() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  // Effect 1: hanya berjalan ketika count berubah
  useEffect(() => {
    document.title = `Count: ${count}`;
    console.log(`Dokumen title diperbarui. Count sekarang: ${count}`);
  }, [count]);

  // Effect 2: hanya berjalan ketika name berubah
  useEffect(() => {
    console.log(`Nama berubah menjadi: ${name}`);
  }, [name]);

  return (
    <div style={{ border: '5px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Komponen dengan Dua State & Multiple Effects</h2>

      <p>Count: {count}</p>
      <button onClick={() => setCount(prev => prev + 1)}>Tambah Count</button>

      <br /><br />

      <input
        type="text"
        placeholder="Ketik nama..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <p>Nama: {name}</p>
    </div>
  );
}

export default MultiEffectComponent;
