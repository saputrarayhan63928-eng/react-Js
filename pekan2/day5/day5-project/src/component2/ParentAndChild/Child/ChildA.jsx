function InputNama ({ nama, onNamaChange}){
    return(
        <div>
            <input 
            type="text"
            value={nama}
            onChange={(e) => onNamaChange(e.target.value)}
            placeholder="Masukkan Nama"
            />
        </div>
    )
}

export default InputNama