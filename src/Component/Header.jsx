// import React from "react";
// import "../App.css";
// import { FaUser } from "react-icons/fa";
// import { FaLuggageCart } from "react-icons/fa";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate("/");
//   return (
//     <div style={{ justifyContent: "space-between" }} className="flex width-50">
//       <div className="flex-chil">
//         <h4 onClick={() => navigate("/")} className="txt-yellow cursor-pointer">
//           Home
//         </h4>
//         <h4 className="cursor-pointer" onClick={() => navigate("/shop")}>
//           Shop
//         </h4>
//       </div>
//       <div>
//         <h1>BOUTIQUE</h1>
//       </div>
//       <div className="flex-chil">
//         <h4
//           onClick={() => navigate("/cart")}
//           className="flex gap-10 cursor-pointer"
//         >
//           <FaLuggageCart /> Cart
//         </h4>
//         <h4
//           onClick={() => navigate("/login")}
//           className="flex gap-10 cursor-pointer"
//         >
//           <FaUser />
//           Login
//         </h4>
//       </div>
//     </div>
//   );
// };

// export default Header;

// import React, { useState } from "react";
// import { FaCartArrowDown } from "react-icons/fa6";
// import { FaUser } from "react-icons/fa";
// import { IoIosArrowDown } from "react-icons/io";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const navigate = useNavigate();
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);
//   const [loading, setLoading] = useState(false);

//   const toggleDropdown = () => {
//     setIsDropdownOpen((prev) => !prev);
//   };

//   const handleLogout = () => {
//     navigate("/login");
//     setIsDropdownOpen(false);
//   };

//   const handleNavigateHome = () => {
//     setLoading(true);
//     setTimeout(() => {
//       navigate("/");
//       setLoading(false);
//     }, 700);
//   };

//   return (
//     <div className="relative">
//       {loading && <div className="text-center p-8">Loading...</div>}
//       <div className="flex justify-between w-[80vw] items-center mg-auto italic">
//         <div className="flex gap-5">
//           <h4
//             onClick={() => navigate("/")}
//             className="txt-yellow cursor-pointer"
//           >
//             Home
//           </h4>
//           <h4 className="cursor-pointer">Shop</h4>
//         </div>

//         <div className="font-bold">
//           <h1>BOUTIQUE</h1>
//         </div>

//         <div className="flex gap-5 items-center relative">
//           <button
//             onClick={() => navigate("/cart")}
//             className="flex gap-1.5 items-center cursor-pointer"
//           >
//             <FaCartArrowDown />
//             Cart
//           </button>

//           <div
//             className="flex gap-1.5 items-center cursor-pointer"
//             onClick={toggleDropdown}
//           >
//             <FaUser />
//             <span>AnhND</span>
//             <IoIosArrowDown />
//           </div>

//           {isDropdownOpen && (
//             <div className="absolute right-0 mt-10 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-10">
//               <ul>
//                 <button className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
//                   Setting
//                 </button>
//                 <button
//                   className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
//                   onClick={handleLogout}
//                 >
//                   Logout
//                 </button>
//               </ul>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Header;

import React, { useContext, useState } from "react";
import { FaCartArrowDown } from "react-icons/fa6";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const Header = () => {
  const { state } = useContext(UserContext);
  const { currentUser } = state;
  const navigate = useNavigate();
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    localStorage.removeItem("currentUser"); // Clear the current user from local storage
    navigate("/login");
    setIsDropdownOpen(false);
  };

  return (
    <div className="relative">
      <div className="flex justify-between w-[80vw] items-center mg-auto italic">
        <div className="flex gap-5">
          <h4
            onClick={() => navigate("/")}
            className="txt-yellow cursor-pointer"
          >
            Home
          </h4>
          <h4 className="cursor-pointer" onClick={() => navigate("/shop")}>
            Shop
          </h4>
        </div>

        <div className="font-bold">
          <h1>BOUTIQUE</h1>
        </div>

        <div className="flex gap-5 items-center relative">
          <h4
            onClick={() => navigate("/cart")}
            className="flex gap-1.5 items-center cursor-pointer"
          >
            <FaCartArrowDown />
            Cart
          </h4>

          {currentUser ? (
            <div
              className="flex gap-1.5 items-center cursor-pointer"
              onClick={toggleDropdown}
            >
              <FaUser />
              <span>{currentUser}</span>
              {console.log(currentUser.user)}
              <IoIosArrowDown />
            </div>
          ) : (
            <h4
              onClick={() => navigate("/login")}
              className="flex gap-1.5 items-center cursor-pointer"
            >
              <FaUser />
              Login
            </h4>
          )}

          {isDropdownOpen && currentUser && (
            <div className="absolute right-0 mt-10 w-40 bg-white shadow-lg rounded-md border border-gray-200 z-10">
              <ul>
                <button className="px-4 py-2 hover:bg-gray-500 cursor-pointer">
                  Setting
                </button>
                <button
                  className="px-4 py-2 hover:bg-red-100 text-red-600 cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </button>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
