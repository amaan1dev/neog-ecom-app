import React from "react";
import { NavLink } from "react-router-dom";
import "../Components/ComponentsStyleSheets/Footer.css";

const FooterBar = () => {
  return (
    <footer className="footer">
      <NavLink to="/" className="footer-link">
        Home
      </NavLink>
      <NavLink to="/products" className="footer-link">
        Products
      </NavLink>
      <NavLink to="/wishlist" className="footer-link">
        Wishlist
      </NavLink>
      <NavLink to="/cart" className="footer-link">
        Cart
      </NavLink>
      <NavLink to="/account" className="footer-link">
        Login/Logout
      </NavLink>
    </footer>
  );
};

export default FooterBar;
