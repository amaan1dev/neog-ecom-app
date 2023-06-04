import { NavLink } from "react-router-dom";


export const Nav = () => {
  const navStyle = {
    color: "white",
    textDecoration: "none",
    border: "0.5px solid white",
    borderRadius: "6px",
    padding: "2px 4px 1px 4px",
    margin: "1rem",
  };
  return (
    <nav>
      <NavLink to="/" className="logo">
        Logo
      </NavLink>
      <NavLink
        to="/"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        style={navStyle}
      >
        Home
      </NavLink>
      <NavLink
        to="/products"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        style={navStyle}
      >
        Products
      </NavLink>
      <NavLink
        to="/wishlist"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        style={navStyle}
      >
        Wishlist
      </NavLink>
      <NavLink
        to="/cart"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        style={navStyle}
      >
        Cart
      </NavLink>
      <NavLink
        to="/account"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        style={navStyle}
      >
        Login/Logout
      </NavLink>

      <NavLink
        to="/mockman"
        className={({ isActive }) => (isActive ? "link-active" : "link")}
        style={navStyle}
      >
        Mockman
      </NavLink>
      
    </nav>
  );
};


