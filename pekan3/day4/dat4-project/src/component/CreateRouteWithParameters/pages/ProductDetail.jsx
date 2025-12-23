import { useParams } from "react-router-dom";

const productData = {
  1: { name: "Laptop", price: "10.000.000" },
  2: { name: "Mouse", price: "150.000" },
  3: { name: "Keyboard", price: "300.000" },
};

function ProductDetail() {
  const { productId } = useParams();

  const product = productData[productId];

  if (!product) {
    return <p>Product tidak ditemukan</p>;
  }

  return (
    <>
      <h1>Detail Product</h1>
      <p>ID: {productId}</p>
      <p>Nama: {product.name}</p>
      <p>Harga: {product.price}</p>
    </>
  );
}

export default ProductDetail;