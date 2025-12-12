import { useState, useEffect } from "react";

function DisplayFetchAbort() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;

    const ambilData = async () => {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/1",
          { signal }
        );

        if (!response.ok) {
          throw new Error("Fetch gagal dengan status " + response.status);
        }

        const result = await response.json();
        setData(result);
      } catch (err) {

        if (err.name === "AbortError") {
          return;
        }
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    ambilData();


    return () => {
      controller.abort();
    };
  }, []);

  if (loading) return <p>Sedang Memuat Data...</p>;
  if (error) return <p>Terjadi kesalahan: {error.message}</p>;

  return (
    <div style={{ border: "2px solid black", padding: 20 }}>
      <h2>Data dengan AbortController</h2>
      <h3>{data.name}</h3>
      <p>Email: {data.email}</p>
      <p>Telepon: {data.phone}</p>
    </div>
  );
}

export default DisplayFetchAbort;
