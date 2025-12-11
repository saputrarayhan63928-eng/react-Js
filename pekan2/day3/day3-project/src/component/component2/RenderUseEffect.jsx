import { useState, useEffect } from "react";

function RenderLogger() {
  const [count, setCount] = useState(0);

  // useEffect tanpa dependency array → berjalan tiap render
  useEffect(() => {
    console.log("Komponen dirender atau di-update. Count:", count);
  });

  return (
    <div style={{ border: '5px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Nilai: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Tambah</button>
    </div>
  );
}

export default RenderLogger;