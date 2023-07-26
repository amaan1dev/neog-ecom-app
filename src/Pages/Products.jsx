import React from "react";


import { Nav } from "../Components/Nav";
import Footer from "../Components/Footer";
import {ProductCard} from "../Components/ProductCard";
import { FilterProducts } from "../Components/FilterProducts";

export const Products = () => {
 
  return (
    <>
      <Nav />
      {/* <FilterProducts /> */}
      <ProductCard />
      <Footer />
    </>
  );
};

