import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import "../Pages/cartAndWishList.css"

export const WishList = () => {
  const { wishlist, removeFromWishlist } = useContext(CartContext);

  const handleRemoveFromWishlist = (id) => {
    removeFromWishlist(id);
  };

  return (
    <>
      <Nav />
      <div className="wishlist-container">
      {wishlist.length === 0 && <h1>Empty Wishlist add something</h1>}
      {wishlist.map(({ image, id, title, seller, price, quantity }) => (
        <div className="ProductCardDetail" key={id}>
          <img src={image} alt="" />
          <h3>{seller}</h3>
          <h4>{title}</h4>
          <h3>Price: {price}</h3>
          <p>Quantity: {quantity}</p>
          <button onClick={() => handleRemoveFromWishlist(id)}>
            Remove from wishlist
          </button>
        </div>
      ))}
      </div>
      <Footer />
    </>
  );
};
