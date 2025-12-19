import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export function useCart(){
    const context = useContext(CartContext)
    if(!context){
        throw new Error("useCart harus digunakan di dalam <CartProvider>")
    }
    return context
}

