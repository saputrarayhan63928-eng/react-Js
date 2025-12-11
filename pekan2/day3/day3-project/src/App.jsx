import React, { useState, useEffect } from 'react';
// import MultiEffectComponent from './component/MultiEffectComponent';
import "./App.css";
import RenderLogger from "./component/component2/RenderUseEffect";
import UserProfile from "./component/MyComponent";
import WindowSizeTracker from './component/component2/WindowSize';
import MultiEffectComponent from './component/component2/MultipleUseEffect'
import FetchSimulation from './component/component2/ApiSimulate';



// function WindowSizeTracker() {
//   const [width, setWidth] = useState(window.innerWidth);
//   const [height, setHeight] = useState(window.innerHeight);

//   useEffect(() => {
//     const handleResize = () => {
//       setWidth(window.innerWidth);
//       setHeight(window.innerHeight);
//     };

//     // Menambahkan event listener saat komponen mounting
//     window.addEventListener('resize', handleResize);
//     console.log('Event listener "resize" ditambahkan.');

//     // Fungsi cleanup: akan dijalankan saat komponen unmounting
//     // atau sebelum effect dijalankan ulang (jika ada dependensi)
//     return () => {
//       window.removeEventListener('resize', handleResize);
//       console.log('Event listener "resize" dihapus.');
//     };
//   }, []); // Array kosong: effect hanya berjalan sekali saat mounting

//   return (
//     <div>
//       <h2>Ukuran Jendela Browser</h2>
//       <p>Lebar: {width}px</p>
//       <p>Tinggi: {height}px</p>
//     </div>
//   );
// }

function App() {
  // const [showTracker, setShowTracker] = useState(true);
    const [currentUserId, setCurrentUserId] = useState(1);
  return (
    <div>
      {/* <h1>Aplikasi Pelacak Ukuran Jendela</h1>
      <button onClick={() => setShowTracker(prev => !prev)}>
        {showTracker ? 'Sembunyikan' : 'Tampilkan'} Pelacak
      </button>
      {showTracker && <WindowSizeTracker />}
      <MultiEffectComponent /> */}
      <RenderLogger />

        <div>
      <h1>Aplikasi Profil Pengguna</h1>
      <UserProfile userId={currentUserId} />
    </div>

    <WindowSizeTracker />

    <MultiEffectComponent />

    <FetchSimulation />

    </div>
  );
}

export default App;