import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";

import {Nav} from "../Components/Nav"
import Footer from "../Components/Footer"



export const WishList = () =>{
    const { wishlist } = useContext(CartContext);
    return <> 
    <Nav />
    <h1>WishList Items Page</h1>
    {wishlist.length === 0 && <h1>Why dont you buy something</h1>}
      {wishlist.map(({ id, title, price }) => (
        <div className="ProductCardDetail" key={id}>
        <img
          src="https://static.nike.com/a/images/t_default/8c323a4b-dd6b-495a-849f-06a7b349d27a/force-1-little-kids-shoes-xrmQ0W.png"
          alt=""
        />
        <h4>{title}</h4>
        <h3>Price: {price}</h3>
      </div>
      ))}
    <Footer />
    </>
}