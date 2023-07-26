import React from "react";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import "./Account.css"

export const Account = () => {
  const handleSignUp = () => {
    // Implement sign-up logic here
  };

  const handleLogin = () => {
    // Implement login logic here
  };

  const handleLogout = () => {
    // Implement logout logic here
  };

  return (
    <>
      <Nav />
      <div className="account-container">
        <h1>Account</h1>
        <div className="login-form">
          <div className="form-group">
            <label>Email:</label>
            <input type="email" placeholder="Enter your email" />
          </div>
          <div className="form-group">
            <label>Password:</label>
            <input type="password" placeholder="Enter your password" />
          </div>
          <div className="login-buttons">
            <button onClick={handleSignUp}>Sign Up</button>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

