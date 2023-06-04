import { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({children})=>{
    const [cart, setCart] = useState([])
    const [wishlist, setWishlist] = useState([])

    const updateCartHandler = (selectedProduct)=>{
        setCart((cart)=> [...cart, selectedProduct])
    }

    const updateWishlistHandler = (selectedProduct) =>{
          setWishlist((wishlist)=> [...wishlist, selectedProduct])
    }
    
    return (
        <CartContext.Provider value={{cart, updateCartHandler, updateWishlistHandler, wishlist}}>
            {children}
        </CartContext.Provider>
    )
}