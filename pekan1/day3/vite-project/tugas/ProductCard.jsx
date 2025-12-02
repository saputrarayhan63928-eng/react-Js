function ProductCard({
    nama = "No Data",
    harga = "Rp 0",
    stock = "NO stock",
    isAvabile = "Unavailable"
}) {
    return (
        <div style={{ border: '1px solid #ccc', padding: '15px', margin: '10px' }}>
            <h2>{nama}</h2>
            <p>{harga}</p>
            <p>{stock}</p>
            <p>{isAvabile}</p>
        </div>
    );
}

export default ProductCard;