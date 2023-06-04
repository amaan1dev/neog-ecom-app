import React from "react";


import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import {ProductCard} from "../Components/ProductCard";
import { FilterProducts } from "../Components/FilterProducts";

export const Products = () => {
 
  return (
    <>
      <Nav />
      <h1>Products Listing Page here all components of product page will be rendered</h1>
      <FilterProducts />
      <ProductCard />
      <Footer />
    </>
  );
};

