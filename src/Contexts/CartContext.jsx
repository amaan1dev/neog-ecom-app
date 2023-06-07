import React, { createContext, useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  const updateCartHandler = (selectedProduct) => {
    const existingProductIndex = cart.findIndex((product) => product.id === selectedProduct.id);
  
    if (existingProductIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[existingProductIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      setCart((cart) => [...cart, { ...selectedProduct, quantity: 1 }]);
    }
  };
  

  const removeFromCart = (productId) => {
    setCart((cart) => cart.filter((product) => product.id !== productId));
  };

  const increaseCartItemQuantity = (productId) => {
    setCart((cart) =>
      cart.map((product) =>
        product.id === productId ? { ...product, quantity: product.quantity + 1 } : product
      )
    );
  };

  const decreaseCartItemQuantity = (productId) => {
    setCart((cart) =>
      cart.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product
      )
    );
  };


  const updateWishlistHandler = (selectedProduct) => {
    const existingProduct = wishlist.find((product) => product.id === selectedProduct.id);
    if (existingProduct) {
      const updatedWishlist = wishlist.map((product) =>
        product.id === selectedProduct.id ? { ...product, quantity: product.quantity + 1 } : product
      );
      setWishlist(updatedWishlist);
    } else {
      setWishlist((wishlist) => [...wishlist, { ...selectedProduct, quantity: 1 }]);
    }
  };

  const removeFromWishlist = (productId) => {
    const updatedWishlist = wishlist.map((product) => {
      if (product.id === productId) {
        if (product.quantity > 1) {
          return { ...product, quantity: product.quantity - 1 };
        }
        return null;
      }
      return product;
    });

    setWishlist(updatedWishlist.filter((product) => product !== null));
  };

  

  return (
    <CartContext.Provider
      value={{
        cart,
        updateCartHandler,
        updateWishlistHandler,
        wishlist,
        removeFromCart,
        removeFromWishlist,
        increaseCartItemQuantity,
        decreaseCartItemQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
