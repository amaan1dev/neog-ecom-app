import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

import {Nav} from "../Components/Nav"
import Footer from "../Components/Footer"



export const WishList = () =>{
    const { wishlist } = useContext(CartContext);
    return <> 
    <Nav />
    <h1>WishList</h1>
    {wishlist.length === 0 && <h1>Why dont you buy something</h1>}
      {wishlist.map(({image, id, title,seller, price }) => (
        <div className="ProductCardDetail" key={id}>
        <img
          src={image}
          alt=""
        />
        <h3>{seller}</h3>
        <h4>{title}</h4>
        <h3>Price: {price}</h3>
        <button>Remove from wishlist</button>
      </div>
      ))}
    <Footer />
    </>
}