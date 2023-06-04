import { Link, useParams } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { Nav } from "./Nav";
import Footer from "./Footer";
import { CartContext } from "../Contexts/CartContext";

export const ProductDetails = () => {
  const [selectedData, setSelectedData] = useState([]);
  const { productId } = useParams();
  const { updateCartHandler, updateWishlistHandler } = useContext(CartContext); // Assuming you have a CartContext with the updateCartHandler function

  const fetchData = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setSelectedData(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const productsArray = selectedData.products;
  const selectedProduct = productsArray && productsArray.find((product) => product._id === productId);

  return (
    <>
      <Nav />
      <h1>Selected Product Details Page</h1>

      {selectedProduct ? (
        <div className="ProductCardDetail" key={selectedProduct._id}>
          <img
            src={selectedProduct.image}
            alt="shoes"
          />
          <h4>{selectedProduct.seller}</h4>
          <h3>{selectedProduct.title}</h3>
          {selectedProduct.price}{" "}

          <button onClick={() => updateCartHandler(selectedProduct)}>Add to Cart</button>
          <button onClick={() => updateWishlistHandler(selectedProduct)}>Add to WishList</button>
        </div>
      ) : (
        <p>Loading...</p>
      )}

      <Link to={`/products`}>View all</Link>

      <Footer />
    </>
  );
};
