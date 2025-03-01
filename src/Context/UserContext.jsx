// import { createContext, useReducer } from "react";

// export const UserContext = createContext();

// const userReducer = (state, action) => {
//   switch (action.type) {
//     case "ON_LOGIN":
//       return { ...state, currentUser: action.payload };
//     case "ON_LOGOUT":
//       localStorage.removeItem("currentUser");
//       return { ...state, currentUser: null };
//     default:
//       return state;
//   }
// };

// export const UserProvider = ({ children }) => {
//   const [state, dispatch] = useReducer(userReducer, {
//     currentUser: JSON.parse(localStorage.getItem("currentUser")) || null,
//   });

//   return (
//     <UserContext.Provider value={{ ...state, dispatch }}>
//       {children}
//     </UserContext.Provider>
//   );
// };

import React, { createContext, useReducer } from "react";

const initialState = {
  currentUser: null,
};

export const UserContext = createContext();

const reducer = (state, action) => {
  switch (action.type) {
    case "ON_LOGIN":
      return {
        ...state,
        currentUser: action.payload,
      };
    case "ON_LOGOUT":
      localStorage.removeItem("currentUser");
      return { ...state, currentUser: null };
    default:
      return state;
  }
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};
