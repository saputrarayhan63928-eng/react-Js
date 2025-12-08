import { useState } from "react";
import React from "react";

function FormulirData() {
  const [nama, setNama] = useState("");

  const namarealTime = (e) => {
    setNama(e.target.value);
  }
  const Sumbitinput = (aksi) => {
    aksi.preventDefault();
    alert(`Data Berhasil di Input : ${nama}`);
  }

    return (
        <div style={{ border: '1px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            <form>
                <input type="text" placeholder="masukkan nama" onChange={namarealTime} />
                <p>Nama Anda : {nama}</p>
                <button onClick={Sumbitinput}>Input Data</button>
            </form>
        </div>
    )


}
export default FormulirData;   