    import React from 'react';
import { useAsync } from './useAsync';
import UserProfile from '../../component/UserProfile';

interface Post {
  id: number;
  title: string;
}

const fetchPosts = async (): Promise<Post[]> => {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
  if (!res.ok) throw new Error("Gagal mengambil data postingan");
  return res.json();
};

const Dashboard: React.FC = () => {
  const { data, loading, error } = useAsync<Post[]>(fetchPosts);

  // Penanganan Error dengan Type Safety
  if (loading) return <p>Memuat data...</p>;
  
  if (error) {
    return <div style={{ color: 'red' }}>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Daftar Postingan</h2>
      {data?.map(post => (
        <div key={post.id}>
          <strong>{post.title}</strong>
        </div>
      ))}
      
      <hr />
      <h3>Contoh Info User (Pick)</h3>
      <UserProfile info={{ username: 'johndoe', email: 'john@mail.com' }} />
    </div>
  );
};

export default Dashboard;