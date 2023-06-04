import React, { useEffect, useState } from "react";
import "./ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ product, productId }) => {
  const [listedProducts, setListedProducts] = useState([]);

  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();
      setListedProducts(data);
    } catch (e) {
      console.error(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="ProductCardContainer">
      {listedProducts.products && listedProducts.products.length > 0 ? (
        listedProducts.products.map((ele) => (
          <Link className="item-card" to={`/ProductDetails/${ele._id}`}>
          <div className="ProductCard" key={ele._id}>
            <img
              src={ele.image}
              alt=""
            />
            <h4>{ele.seller}</h4>
            <h3>{ele.title}</h3>
            {ele.price} {""}
           
          </div>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};
