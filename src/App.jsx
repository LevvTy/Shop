import { useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Page/HomePage/Home";
import Shop from "./Page/ShopPage/Shop";
import CheckOut from "./Page/CheckOutPage/CheckOut";
import Cart from "./Page/CartPage/Cart";
import Login from "./Page/LoginPage/Login";
import Register from "./Page/RegisterPage/Register";
import Detail from "./Page/DetailPage/Detail";
import CartProvider from "./Context/CartContext";
import { UserProvider } from "./Context/UserContext";
// import * as bootstrap from "bootstrap";

function App() {
  return (
    <>
      <UserProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/product/:productId" element={<Detail />} />
            {/* <Route path="/detail" element={<Detail />} /> */}
            <Route path="/checkout" element={<CheckOut />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<h1>NOT FOUND</h1>} />
          </Routes>
        </CartProvider>
      </UserProvider>
    </>
  );
}

export default App;
