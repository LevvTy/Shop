import React from "react";
import "../../App.css";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const navigate = useNavigate();

  return (
    <div className="categories text-center py-5 mg-auto width-50 fit-content bg-primary  ">
      <div>
        <h4>CAREFULLY CREATED COLLECTIONS</h4>
        <h2>BROWSE OUR CATEGORIES</h2>

        <div className="row">
          <div className="col-md-6 mr-0">
            <img
              onClick={() => navigate("/shop")}
              src="/src/assets/product_1.png"
              alt="iPhone"
              className="img-fluid img-size cursor-pointer "
            />
          </div>
          <div className="col-md-6">
            <img
              onClick={() => navigate("/shop")}
              src="/src/assets/product_2.png"
              alt="Mac"
              className="img-fluid cursor-pointer"
            />
          </div>
        </div>

        <div className="row ">
          <div className="col-md-4">
            <img
              onClick={() => navigate("/shop")}
              src="/src/assets/product_3.png"
              alt="iPad"
              className="img-fluid cursor-pointer"
            />
          </div>
          <div className="col-md-4">
            <img
              onClick={() => navigate("/shop")}
              src="/src/assets/product_4.png"
              alt="WATCH"
              className="img-fluid cursor-pointer"
            />
          </div>
          <div className=" col-md-4">
            <img
              onClick={() => navigate("/shop")}
              src="/src/assets/product_5.png"
              alt="AirPods"
              className="img-fluid cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
