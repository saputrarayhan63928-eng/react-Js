import React from 'react'
import { useState } from 'react'

function SyntheticEvent() {
    const [input, setInput] = useState('');
    const handleClick = (aksi) => {
        aksi.preventDefault();
        alert('Link berhasil di Cegah');
    }

    const InputRealTime = (e) => {
        setInput(e.target.value);
}
    return (
        <div>
            <form>
                <a href="https://www.google.com" onClick={handleClick}>Klik Aku</a>
                <br />
                <input type="text" placeholder="ketik sesuatu" onChange={InputRealTime} />
                <p>Anda Mengetik : {input}</p>
            </form>
        </div>
    )
}
export default SyntheticEvent       