import React, { useState } from "react";
import "./ComponentsStyleSheets/CheckoutPopup.css";

export const CheckoutPopup = ({ onClose, onPayNow }) => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePayNow = () => {
    // Perform any necessary validation here before proceeding to payment
    // For simplicity, we'll assume everything is valid here
    onPayNow();
  };

  const handleClose = () => {
    // Reset the form fields when the popup is closed
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
    // Call the onClose function to close the popup
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="checkout-popup">
        <button className="close-btn" onClick={handleClose}>
          X
        </button>
        <h2>Checkout</h2>
        <div className="input-container">
          <label>Card Number:</label>
          <input type="text" value={cardNumber} onChange={(e) => setCardNumber(e.target.value)} />
        </div>
        <div className="input-container">
          <label>Expiry Date:</label>
          <input type="text" value={expiryDate} onChange={(e) => setExpiryDate(e.target.value)} />
        </div>
        <div className="input-container">
          <label>CVV:</label>
          <input type="text" value={cvv} onChange={(e) => setCvv(e.target.value)} />
        </div>
        <button onClick={handlePayNow}>Pay Now</button>
      </div>
    </div>
  );
};
