import { useState, useEffect } from "react";

function WindowSizeTracker() {
  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    // Fungsi yang akan berjalan setiap kali jendela di-resize
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    // Pasang event listener saat komponen mount
    window.addEventListener("resize", handleResize);
    console.log("Event listener resize dipasang.");

    // Cleanup function → dilepas saat unmount
    return () => {
      window.removeEventListener("resize", handleResize);
      console.log("Event listener resize dilepas.");
    };
  }, []); // Hanya pasang listener sekali saat mount

  return (
    <div style={{ border: '5px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2>Ukuran Jendela</h2>
      <p>Lebar: {width}px</p>
      <p>Tinggi: {height}px</p>
    </div>
  );
}

export default WindowSizeTracker;