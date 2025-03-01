import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Checkou1 = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Nhận dữ liệu giỏ hàng từ Cart2
  const cart = location.state?.cart || [];

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [orderSuccess, setOrderSuccess] = useState(false);
  const [error, setError] = useState("");

  // Tính tổng giá tiền
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  // Xử lý đặt hàng
  const handlePlaceOrder = () => {
    if (!fullName || !email || !phone || !address) {
      setError("Vui lòng nhập đầy đủ thông tin!");
      return;
    }

    setError("");
    setOrderSuccess(true);

    setTimeout(() => {
      setOrderSuccess(false);
      navigate("/");
    }, 4000);
  };
  return (
    <>
      <div className="bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h2 className="text-2xl italic font-semibold">CHECKOUT</h2>
          <nav className="text-gray-500 italic">
            <span
              onClick={() => navigate("/")}
              className="text-black font-semibold cursor-pointer"
            >
              HOME
            </span>{" "}
            /
            <span
              onClick={() => navigate("/cart")}
              className="text-black font-semibold cursor-pointer"
            >
              CART
            </span>{" "}
            /<span className="text-gray-400">CHECKOUT</span>
          </nav>
        </div>
      </div>
      <div className="mt-[30px] italic relative">
        <h2 className="text-xl font-semibold mb-4">BILLING DETAILS</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Form nhập thông tin */}
          <div className="md:col-span-2">
            <div className="space-y-4">
              <div>
                <label className="block font-semibold text-gray-700">
                  FULL NAME:
                </label>
                <input
                  type="text"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter Your Full Name Here!"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  EMAIL:
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Your Email Here!"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  PHONE NUMBER:
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Your Phone Number Here!"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div>
                <label className="block font-semibold text-gray-700">
                  ADDRESS:
                </label>
                <input
                  type="text"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  placeholder="Enter Your Address Here!"
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>

              {/* Hiển thị lỗi nếu thiếu thông tin */}
              {error && <p className="text-red-500">{error}</p>}

              <button
                className="bg-black text-white px-6 py-2 rounded cursor-pointer"
                onClick={handlePlaceOrder}
              >
                Place order
              </button>
            </div>
          </div>
          {/* Bảng tổng hợp đơn hàng */}
          <div className="bg-gray-100 p-4 rounded">
            <h3 className="text-lg font-semibold">YOUR ORDER</h3>
            <div className="mt-2 text-gray-700">
              {cart.map((item) => (
                <p key={item.id}>
                  <span className="font-semibold">{item.name}</span> -{" "}
                  {item.quantity} x {item.price.toLocaleString()} VND
                </p>
              ))}
            </div>
            <p className="mt-4 text-xl font-bold">
              TOTAL: {total.toLocaleString()} VND
            </p>
          </div>
        </div>

        {/* Modal hiển thị thông báo Order Successfully */}
        {orderSuccess && (
          <div className="fixed inset-0 flex items-center justify-center bg-opacity-50">
            <div className="bg-white p-6 rounded-lg shadow-lg text-center">
              <p className="text-black font-bold text-xl">
                ✅ Order Successfully!
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Checkou1;
