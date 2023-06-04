
import {Nav} from "../Components/Nav"
import Footer from "../Components/Footer"
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

export const Cart = () => {
  const { cart } = useContext(CartContext);

 

  return (
    <>
    <Nav />
      <h1>Cart page</h1>
      {cart.length === 0 && <h1>Why dont you buy something</h1>}
      {cart.map(({image, id, title, price }) => (
        <div className="ProductCardDetail" key={id}>
        <img
          src={image}
          alt=""
        />
        <h4>{title}</h4>
        <h3>Price: {price}</h3>
      </div>
      ))}
      Total Cart Price: {cart.reduce((acc, curr) => (acc += curr.price), 0)}
     <Footer />
    </>
  );
};
 