import { useState, useEffect, use } from "react";

function DisplayFetch() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/1`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
     return () => {
      abortController.abort();
      console.log('Permintaan dibatalkan saat cleanup.');
    };
  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  return (
    <div style={{ border: '5px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Data from Fetch API</h2> 
        <h3>{data.title}</h3>
        <p>{data.body}</p>
    </div>
  );
}

export default DisplayFetch;