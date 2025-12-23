import "./App.css";
import Product from "./pages/Products";
import Cart from "./pages/Cart";
import CartProvider from './contexts/CartContext'
import {  Routes, Route } from "react-router-dom";
import PrivateRoute from "./component/PrivateRoute";
import Checkout from "./pages/Checkout";
import Login from "./pages/Login";
import Navbar from "./component/NavBar";

function App() {
  return (
    <>
    <CartProvider>
    <Navbar/>
      <Routes>
        <Route path="/" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/checkout"
          element={
            <PrivateRoute>
              <Checkout />
            </PrivateRoute>
          }
        />
      </Routes>
    </CartProvider>
    </>
  );
}

export default App;
