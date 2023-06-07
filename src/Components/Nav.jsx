import { NavLink } from "react-router-dom";
import "../Components/ComponentsStyleSheets/Nav.css"


export const Nav = () => {
  return (
    <nav>
      <NavLink to="/" className="logo" style={{ marginLeft: '1px' }}>
      <img style={{ width: '50%', height: 'auto' }} src="https://inkicks.de/media/image/1a/64/d6/inkicks_logo.png" alt="Logo" />
      </NavLink>
      <NavLink to="/" className="nav-link">
        Home
      </NavLink>
      <NavLink to="/products" className="nav-link">
        Products
      </NavLink>
      <NavLink to="/wishlist" className="nav-link">
        Wishlist
      </NavLink>
      <NavLink to="/cart" className="nav-link">
        Cart
      </NavLink>
      <NavLink to="/account" className="nav-link">
        Login/Logout
      </NavLink>
    </nav>
  );
};


