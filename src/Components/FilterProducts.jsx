import { useState } from "react";

export const FilterProducts = () => {
  const stepSize = 1000;
  const [sliderValue, setSliderValue] = useState(0);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedRating, setSelectedRating] = useState("");

  const categories = ["Category", "Performance", "High-Top", "Low-Top", "Skateboards"];

  const ratings = ["1 Star & above", "2 Stars & above", "3 Stars & above", "4 Stars & above"];


  const handleCategoryChange = (category) => {
    const newSelectedCategories = [...selectedCategories];
    if (newSelectedCategories.includes(category)) {
      // Category already selected, remove it from the selection
      const index = newSelectedCategories.indexOf(category);
      newSelectedCategories.splice(index, 1);
    } else {
      // Category not selected, add it to the selection
      newSelectedCategories.push(category);
    }
    setSelectedCategories(newSelectedCategories);
  };

  const handleRatingChange = (rating) => {
    setSelectedRating(rating);
  };
  return (
    <>
      <h2>here all the filters will</h2>
      <div className="price-container" style={{border: "1px solid gray", display: "inline-block", margin: "1rem 1rem 1rem 1rem", padding:"0.5rem"}}>
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

      <div className="category-container" style={{border: "1px solid gray", display: "inline-block", margin: "1rem 1rem 1rem 1rem", padding:"0.5rem"}}>
      <h4>Categories</h4>
        {categories.map((category) => (
          <label key={category}>
            <input
              type="checkbox"
              checked={selectedCategories.includes(category)}
              onChange={() => handleCategoryChange(category)}
            />
            {category}
          </label>
        ))}
      </div>

      <div className="rating-container" style={{border: "1px solid gray", display: "inline-block", margin: "1rem 1rem 1rem 1rem", padding:"0.5rem"}}>
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

    </>
  );
};
