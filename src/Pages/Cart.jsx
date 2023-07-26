import React, { useState } from "react";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import {CheckoutPopup} from "../Components/CheckoutPopup"; // Fixed import
import {SuccessPopup} from "../Components/SuccessPopup"; // Fixed import
import "../Pages/cartAndWishList.css";

export const Cart = () => {
  const { cart, removeFromCart, increaseCartItemQuantity, decreaseCartItemQuantity } = useContext(CartContext);
  const [showCheckoutPopup, setShowCheckoutPopup] = useState(false);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const totalPrice = cart.reduce((acc, curr) => {
    const priceWithoutComma = curr.price.replace(/,/g, "");
    const numericPrice = parseFloat(priceWithoutComma);
    return acc + numericPrice * curr.quantity;
  }, 0);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    increaseCartItemQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseCartItemQuantity(productId);
  };

  const handlePayNow = () => {
    // Perform any necessary payment processing here
    // For simplicity, we'll just show the success popup
    setShowSuccessPopup(true);
    // You can add your payment processing logic here, e.g., sending payment to a server, etc.
  };

  return (
    <>
      <Nav />
      <div className="cart-container" style={{ marginBottom: "4rem" }}>
        {cart.length === 0 ? (
          <h1>Your cart is empty shop something</h1>
        ) : (
          <div className="cart-container">
            <h1>Cart</h1>
            {cart.map(({ image, id, title, price, quantity }) => (
              <div className="ProductCardDetail" key={id}>
                <img src={image} alt="" />
                <h4>{title}</h4>
                <h3>Price: {price}</h3>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemoveFromCart(id)}>Remove from cart</button>
                <button onClick={() => handleIncreaseQuantity(id)}>Increase Quantity</button>
                <button onClick={() => handleDecreaseQuantity(id)}>Decrease Quantity</button>
              </div>
            ))}
            <h2>Total Cart Price: {totalPrice.toFixed(2)}</h2>
            <button onClick={() => setShowCheckoutPopup(true)}>Proceed to Checkout</button>
          </div>
        )}
      </div>
      <Footer />

      {/* Show the CheckoutPopup if showCheckoutPopup is true */}
      {showCheckoutPopup && <CheckoutPopup onClose={() => setShowCheckoutPopup(false)} onPayNow={handlePayNow} />}

      {/* Show the SuccessPopup if showSuccessPopup is true */}
      {showSuccessPopup && <SuccessPopup onClose={() => setShowSuccessPopup(false)} />}
    </>
  );
};
