import { useRef } from "react";
import React from "react";

function UncontrolledInput() {
    const namaRef = useRef("");
    
    const SubmitInput = (aksi) => {
        aksi.preventDefault();
        alert(`Data Berhasil di Input : ${namaRef.current.value}`);
        namaRef.current.value = "";
    }
    return (
        <div style={{ border: '1px solid black', padding: '20px', margin: '10px', borderRadius: '8px' }}>
            <form>
                <input type="text" placeholder="masukkan nama" ref={namaRef} /><br />
                <button onClick={SubmitInput}>Input Data</button>
            </form>
        </div>
    )
}

export default UncontrolledInput;