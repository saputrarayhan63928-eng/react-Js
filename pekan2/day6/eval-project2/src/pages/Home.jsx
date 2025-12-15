import { useEffect, useState, useContext } from "react";
import axios from "axios";
import { ThemeContext } from "../context/ThemeContext";
import SearchBar from "../component/SearchBar";
import CategoryFilter from "../component/CategoryFilter";
import ProductList from "../component/ProductList";
import CartBadge from "../component/CartBadge";

export default function Home() {
  const { state: themeState, dispatch: themeDispatch } =
    useContext(ThemeContext);

  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(res.data);
      } catch (err) {
        setError("Gagal memuat data");
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  const filteredProducts = products
    .filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    )
    .filter(p =>
      category === "all" ? true : p.category === category
    );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

    return (
  <div className={`app ${themeState.theme}`}>
    <CartBadge />

    <button
      onClick={() =>
        themeDispatch({ type: "TOGGLE_THEME" })
      }
    >
      Toggle Theme
    </button>

    <SearchBar search={search} setSearch={setSearch} />
    <CategoryFilter
      category={category}
      setCategory={setCategory}
    />

    {filteredProducts.length === 0 ? (
      <p>Produk tidak ditemukan</p>
    ) : (
      <ProductList products={filteredProducts} />
    )}
  </div>
);
}
