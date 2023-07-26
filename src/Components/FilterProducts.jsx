import React from "react";

const ProductFilters = ({
  sliderValue,
  setSliderValue,
  categories,
  selectedCategory,
  setSelectedCategory,
  ratings,
  selectedRating,
  setSelectedRating
}) => {
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };

  return (
    <div className="filters-container">
      {/* Price Range Filter */}
      <div className="price-container" style={{ border: "1px solid gray", display: "inline-block", margin: "1rem 1rem 1rem 1rem", padding: "0.5rem" }}>
        <h4>Price Range: {sliderValue}</h4>
        <input
          type="range"
          min="3000"
          max="15000"
          className="slider"
          value={sliderValue}
          onChange={(e) => {
            const roundedValue = Math.round(e.target.value / 1000) * 1000;
            setSliderValue(roundedValue);
          }}
        />
      </div>

      {/* Categories Filter */}
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

      {/* Ratings Filter */}
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
  );
};

export default ProductFilters;
