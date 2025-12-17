function DisplayNama ({nama}) {
    return(
        <div>
            <p>Nama Saat Ini: {nama || "Blm Di Isi" }</p>
        </div>
    )
}

export default DisplayNama