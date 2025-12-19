import { createContext,useState } from "react";

export const CartContext = createContext(undefined)

function CartProvider ({children}){
    const [cartItems, setCartItems] = useState([])

    const addItems = (product) => {
        setCartItems(prev => [...prev,product])
    }

    const removeItems = (id) =>{
        setCartItems(prev => prev.filter(item => item.id !== id))
    }

    const clearItems = () =>{
        setCartItems([])
    }

    const totalPrice = cartItems.reduce(
        (total,item) => total + item.price, 0
    )

    return(
        <CartContext.Provider value={{cartItems, addItems,removeItems,clearItems,totalPrice}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;