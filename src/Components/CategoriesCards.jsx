import React from "react";
import "../Components/ComponentsStyleSheets/CategoriesCards.css";
import { Link } from "react-router-dom";

export const CategoriesCards = () => {
  return (
    <div className="categories-container">
      <h1>Featured Categories</h1>
      <div className="categories-container-boxes">
        <Link className="category-card" to="/products?category=Skateboards">
          <div>
            <p className="category-title">SkateBoards</p>
          </div>
        </Link>
        <Link className="category-card" to="/products?category=High-Top">
          <div>
            <p className="category-title">High-tops</p>
          </div>
        </Link>
        <Link className="category-card" to="/products?category=Low-Top">
          <div>
            <p className="category-title">Low-tops</p>
          </div>
        </Link>
        {/* Add more category cards as needed */}
      </div>
    </div>
  );
};
