import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <div className="max-width">
      <p>NEW INSPIRATION 2020</p>
      <h1>20% OFF ON NEW SEASON</h1>
      <a
        onClick={() => navigate("/shop")}
        href="#"
        className="btn btn-secondary"
      >
        Browse collection
      </a>
    </div>
  );
};

export default Banner;
