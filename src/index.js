import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router} from "react-router-dom"

import { CartContext, CartProvider } from "./Contexts/CartContext";

import "./index.css";
import App from "./App";
import { makeServer } from "./server";


// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
   <Router>
   <CartProvider>
   <App />
   </CartProvider>
   </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
