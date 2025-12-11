import { useState, useEffect } from 'react';

function UserProfile({ userId }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    console.log(`Fetching user data for userId: ${userId}`);
    // Simulasi fetching data dari API
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then(response => response.json())
      .then(data => {
        setUser(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Error fetching user:', error);
        setLoading(false);
      });
  }, [userId]); // Effect akan dijalankan ulang setiap kali userId berubah

  if (loading) return <p>Memuat data pengguna...</p>;
  if (!user) return <p>Pengguna tidak ditemukan.</p>;

  return (
    <div style={{ border: '5px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Profil Pengguna</h2>
      <p>Nama: {user.name}</p>
      <p>Email: {user.email}</p>
    </div>
  );
}

export default UserProfile;
