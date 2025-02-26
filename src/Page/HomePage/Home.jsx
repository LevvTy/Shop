import React from "react";

import Banner from "./Banner";
import "../../App.css";
import Product from "./Product";
import Footer from "../../Component/Footer";
import Header from "../../Component/Header";
import ProductAPI from "./ProductAPI";
import After from "../../Component/After";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="hero width-50">
        <Banner />
      </div>

      <Product />

      <div className="products text-center py-5">
        <div className="container">
          <h2>TOP TRENDING PRODUCTS</h2>
          <div className="row">
            <ProductAPI />
          </div>
        </div>
      </div>
      <After />
      <Footer />
    </div>
  );
};

export default Home;
