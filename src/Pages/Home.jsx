import React from "react";
import {Nav} from "../Components/Nav"
import Footer from "../Components/Footer"
import { HomePageBanner } from "../Components/HomePageBanner";
import "../App.css"
import { CategoriesCards } from "../Components/CategoriesCards";
import { CustomerReviews } from "../Components/CustomerReviews";

export const Home = ()=>{
  
    return <div className="home-container">
    <Nav />
    <HomePageBanner />
    <CategoriesCards />
    <CustomerReviews />
    <Footer />
    </div>
}