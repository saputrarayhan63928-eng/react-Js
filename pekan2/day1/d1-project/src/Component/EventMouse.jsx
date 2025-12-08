function EventMouse() {
  const MouseKlik = () => {
    alert("di klik");
  };

  const MouseMasuk = () => {
    console.log  ("mouse masuk");
  }

  const MouseKeluar = () => {
    console.log("mouse keluar");
  }
    return (
        <div>
            <button onClick={MouseKlik} onMouseEnter={MouseMasuk} onMouseLeave={MouseKeluar}>Klik Aku</button>
        </div>
    )
}
export default EventMouse;
