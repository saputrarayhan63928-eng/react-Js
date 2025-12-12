import { useState, useEffect } from "react";
import axios from "axios";

function DisplayDataUser() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {


    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/users" );

       
        const processedUsers = response.data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          city: user.address.city
        }));

        setData(processedUsers);

      } catch (err) {
    
        if (err.code === "ERR_CANCELED") {
          console.log("Request dibatalkan oleh AbortController.");
          return;
        }

        setError(err);

      } finally {
        setLoading(false);
      }
    };

    fetchData();

    // cleanup: batalkan request ketika komponen di-unmount
    return () => {
      console.log("Cleanup: permintaan dibatalkan.");
    };

  }, []);

  if (loading) return <p>Loading data...</p>;
  if (error) return <p>Error occurred: {error.message}</p>;

  return (
    <div
      style={{
        border: "5px solid black",
        padding: "20px",
        margin: "10px",
        borderRadius: "8px"
      }}
    >
      <h2>Data User With Api</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email}) – {user.city}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DisplayDataUser;