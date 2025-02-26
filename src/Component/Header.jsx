import React from "react";
import "../App.css";
import { FaUser } from "react-icons/fa";
import { FaLuggageCart } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate("/");
  return (
    <div style={{ justifyContent: "space-between" }} className="flex width-50">
      <div className="flex-chil">
        <h4 onClick={() => navigate("/")} className="txt-yellow cursor-pointer">
          Home
        </h4>
        <h4 className="cursor-pointer" onClick={() => navigate("/shop")}>
          Shop
        </h4>
      </div>
      <div>
        <h1>BOUTIQUE</h1>
      </div>
      <div className="flex-chil">
        <h4
          onClick={() => navigate("/cart")}
          className="flex gap-10 cursor-pointer"
        >
          <FaLuggageCart /> Cart
        </h4>
        <h4
          onClick={() => navigate("/login")}
          className="flex gap-10 cursor-pointer"
        >
          <FaUser />
          Login
        </h4>
      </div>
    </div>
  );
};

export default Header;
