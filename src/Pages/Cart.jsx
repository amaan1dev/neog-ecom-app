import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import { CartContext } from "../Contexts/CartContext";
import { useContext } from "react";
import "../Pages/cartAndWishList.css"

export const Cart = () => {
  const { cart, removeFromCart, increaseCartItemQuantity, decreaseCartItemQuantity } = useContext(CartContext);

  const totalPrice = cart.reduce((acc, curr) => {
    const priceWithoutComma = curr.price.replace(/,/g, "");
    const numericPrice = parseFloat(priceWithoutComma);
    return acc + numericPrice * curr.quantity;
  }, 0);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const handleIncreaseQuantity = (productId) => {
    increaseCartItemQuantity(productId);
  };

  const handleDecreaseQuantity = (productId) => {
    decreaseCartItemQuantity(productId);
  };

  return (
    <>
      <Nav />
      <div className="cart-container" style={{ marginBottom: "4rem" }}>
      
        {cart.length === 0 ? (
          <h1>Your cart is empty shop something</h1>
        ) : (
          <div className="cart-container">
            <h1>Cart</h1>
            {cart.map(({ image, id, title, price, quantity }) => (
              <div className="ProductCardDetail" key={id}>
                <img src={image} alt="" />
                <h4>{title}</h4>
                <h3>Price: {price}</h3>
                <p>Quantity: {quantity}</p>
                <button onClick={() => handleRemoveFromCart(id)}>Remove from cart</button>
                <button onClick={() => handleIncreaseQuantity(id)}>Increase Quantity</button>
                <button onClick={() => handleDecreaseQuantity(id)}>Decrease Quantity</button>
              </div>
            ))}
            <h2>Total Cart Price: {totalPrice.toFixed(2)}</h2>
          </div>
        )}
      </div>
      <Footer />
    </>
  );
};
