import "./App.css";
import Mockman from "mockman-js";
import { Routes, Route } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Products } from "./Pages/Products";
import { WishList } from "./Pages/Wishlist";
import {Cart} from "./Pages/Cart"
import { Account } from "./Pages/Account";
import { ProductDetails } from "./Components/ProductDetails"
import "./global.css"

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Home />} />
        <Route path="/wishlist" element={<WishList />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/products" element={<Products />} />
        <Route path="/account" element={<Account />} />
        <Route path="/productDetails/:productId" element={<ProductDetails />} />
      </Routes>
    </div>
  );
}

export default App;
