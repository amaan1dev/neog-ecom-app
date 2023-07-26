import React from "react";

export const SuccessPopup = ({ onClose }) => {
  return (
    <div className="popup-container">
      <div className="success-popup">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>Payment Successful!</h2>
        <p>Your order has been placed successfully.</p>
      </div>
    </div>
  );
};

