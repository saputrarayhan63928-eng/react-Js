import React, { useState, useEffect } from 'react';
import './App.css';

// Custom Hook: useFriendStatus
function useFriendStatus(friendId) {
  const [isOnline, setIsOnline] = useState(null);

  useEffect(() => {
    const checkStatus = () => {
      // Logika kompleks untuk memeriksa status online
      // Bisa berupa panggilan API, WebSocket, dll.
      const status = friendId % 2 === 0 ? true : false; // Contoh sederhana
      setIsOnline(status);
    };

    checkStatus();
    const intervalId = setInterval(checkStatus, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, [friendId]); // Dependensi: friendId

  return isOnline; // Mengembalikan nilai state
}

// Komponen yang menggunakan Custom Hook
function FriendStatus({ friendId }) {
  const isOnline = useFriendStatus(friendId); // Menggunakan Custom Hook

  if (isOnline === null) {
    return 'Memuat...';
  }
  return isOnline ? 'Online' : 'Offline';
}

// Komponen lain yang menggunakan Custom Hook yang sama
function UserStatus() {
  // Kita bisa menggunakan useFriendStatus dengan ID dummy atau logika lain
  // untuk menunjukkan penggunaan kembali logika yang sama
  const isOnline = useFriendStatus(0); // Contoh: ID 0 untuk pengguna sendiri

  if (isOnline === null) {
    return 'Memuat status Anda...';
  }
  return isOnline ? 'Anda Online' : 'Anda Offline';
}

function StatusLogin() {
  return (
    <div>
      <h2>Contoh dengan Custom Hook</h2>
      <p>Status Teman 1: <FriendStatus friendId={1} /></p>
      <p>Status Teman 2: <FriendStatus friendId={2} /></p>
      <p>Status Anda: <UserStatus /></p>
    </div>
  );
}

export default StatusLogin;