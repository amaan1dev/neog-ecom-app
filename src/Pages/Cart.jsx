
import {Nav} from "../Components/Nav"
import Footer from "../Components/Footer"
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

export const Cart = () => {
  const { cart } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, curr) => {
    const priceWithoutComma = curr.price.replace(/,/g, "");
    const numericPrice = parseFloat(priceWithoutComma);
    return acc + numericPrice;
  }, 0);

  return ( <>
    <div className="cart-container" style={{marginBottom: "4rem"}}>
    <Nav />
      <h1>Cart</h1>
      {cart.length === 0 && <h1>Why dont you buy something</h1>}
      {cart.map(({image, id, title, price }) => (
        <div className="ProductCardDetail" key={id}>
        <img
          src={image}
          alt=""
        />
        <h4>{title}</h4>
        <h3>Price: {price}</h3>
        <button>Remove from cart</button>
      </div>
      ))}
     
     <h2> Total Cart Price: {totalPrice.toFixed(2)}</h2>


     
    </div>
    <Footer />
    </>
  );
};
 