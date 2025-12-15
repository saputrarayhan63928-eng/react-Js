import { CartProvider } from "./context/CartContext";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
import "./App.css";

function App() {
  return (
    <>
    <h1>List Produk</h1>
    <ThemeProvider>
      <CartProvider>
        <Home />
      </CartProvider>
    </ThemeProvider>
    </>
  );
}

export default App;
