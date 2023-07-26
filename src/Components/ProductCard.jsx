import React, { useEffect, useState } from "react";
import "../Components/ComponentsStyleSheets/ProductCard.css";
import { Link } from "react-router-dom";

export const ProductCard = ({ product, productId }) => {
  const [listedProducts, setListedProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedRating, setSelectedRating] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const stepSize = 1000;
  const categories = ["Performance", "High-Top", "Low-Top", "Skateboards"];
  const ratings = ["1 Star & above", "2 Stars & above", "3 Stars & above", "4 Stars & above"];

  const getData = async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
      const data = await res.json();
      setListedProducts(data.products);
      setFilteredProducts(data.products); // Initialize filteredProducts with all products
    } catch (e) {
      console.error(e);
      // Handle the error here, e.g., set an error state to show a message to the user
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    // Apply filters and search whenever the filter or search state changes
    const filtered = listedProducts.filter((product) => {
      // Filter by price
      const productPrice = parseFloat(product.price.replace(/,/g, ""));
      if (sliderValue > 0 && productPrice < sliderValue) {
        return false;
      }

      // Filter by category
      if (selectedCategory && product.categoryName !== selectedCategory) {
        return false;
      }

      // Filter by rating
      if (selectedRating !== "" && product.rating < parseInt(selectedRating.charAt(0))) {
        return false;
      }

      // Filter by search query (case-insensitive)
      if (searchQuery !== "" && !product.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }

      return true;
    });

    setFilteredProducts(filtered);
  }, [sliderValue, selectedCategory, selectedRating, listedProducts, searchQuery]);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  // Debounce function to delay search input changes
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };

  // Handle search input changes with debounce
  const handleSearchChange = debounce((value) => {
    setSearchQuery(value);
  }, 100);

  return (
    <div className="ProductCardContainer">
      <div className="filters-container">
        <div className="price-container" style={{ border: "1px solid gray", display: "inline-block", margin: "1rem 1rem 1rem 1rem", padding: "0.5rem" }}>
          <h4>Price Range: {sliderValue}</h4>
          <input
            type="range"
            min="3000"
            max="15000"
            className="slider"
            value={sliderValue}
            onChange={(e) => {
              const roundedValue = Math.round(e.target.value / stepSize) * stepSize;
              setSliderValue(roundedValue);
            }}
          />
        </div>

        <div className="category-container" style={{ border: "1px solid gray", display: "inline-block", margin: "1rem 1rem 1rem 1rem", padding: "0.5rem" }}>
          <h4>Categories</h4>
          {categories.map((category) => (
            <label key={category}>
              <input
                type="radio"
                name="category"
                checked={selectedCategory === category}
                onChange={() => handleCategoryChange(category)}
              />
              {category}
            </label>
          ))}
        </div>

        <div className="rating-container" style={{ border: "1px solid gray", display: "inline-block", margin: "1rem 1rem 1rem 1rem", padding: "0.5rem" }}>
          <h4>Ratings</h4>
          {ratings.map((rating) => (
            <label key={rating}>
              <input
                type="radio"
                name="rating"
                checked={selectedRating === rating}
                onChange={() => handleRatingChange(rating)}
              />
              {rating}
            </label>
          ))}
        </div>
      </div>

      <div style={{ textAlign: "center", margin: "1rem" }}>
        <input
          type="text"
          placeholder="Search Products"
          value={searchQuery}
          onChange={(e) => handleSearchChange(e.target.value)}
        />
      </div>

      {filteredProducts.length > 0 ? (
        filteredProducts.map((ele) => (
          <Link className="item-card" to={`/ProductDetails/${ele._id}`} key={ele._id}>
            <div className="ProductCard">
              <img src={ele.image} alt="" />
              <h4>{ele.seller}</h4>
              <h3>{ele.title}</h3>
              {ele.price} {" "}
            </div>
          </Link>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};
