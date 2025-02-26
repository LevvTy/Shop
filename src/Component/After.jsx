import React from "react";
import "../App.css";

const After = () => {
  return (
    <>
      <div
        style={{
          justifyContent: "space-around",
          alignItems: "center",
          alignContent: "center",
        }}
        className="flex width-50 gap-5 p-5 bg-amber-100"
      >
        <div>
          <h1>FREE SHIPPING</h1>
          <p>Free Shipping Worlwide</p>
        </div>
        <div>
          <h1>24X7 SERVICE</h1>
          <p>Free Shipping Worlwide</p>
        </div>
        <div>
          <h1>FESTIVAL OFFER</h1>
          <p>Free Shipping Worlwide</p>
        </div>
      </div>
      <div>
        <div
          style={{
            justifyContent: "space-between",
            marginTop: "50px",
            marginBottom: "50px",
          }}
          className="flex width-50"
        >
          <div>
            <h1 className="">LET'S BE FREINDS</h1>
            <p>Nisi nisi tempor consequat laboris nisi</p>
          </div>
          <div>
            <input
              className="border-1 p-3 w-[500px]"
              type="email"
              placeholder="Enter your Email address"
            />
            <button className="bg-black text-amber-50 p-3">Subscribe</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default After;
