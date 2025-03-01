import React, { createContext, useReducer } from "react";

// Định nghĩa các action types
const ADD_CART = "ADD_CART";
const UPDATE_CART = "UPDATE_CART";
const DELETE_CART = "DELETE_CART";

// Khởi tạo state ban đầu
const initialState = {
  cart: [], // Ban đầu giỏ hàng rỗng
};

// Reducer để xử lý các action
const cartReducer = (state, action) => {
  switch (action.type) {
    case ADD_CART:
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + action.payload.quantity }
              : item
          ),
        };
      }
      return {
        ...state,
        cart: [...state.cart, action.payload],
      };

    case UPDATE_CART:
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };

    case DELETE_CART:
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };

    default:
      return state;
  }
};

// Tạo Context
export const CartContext = createContext();

// Provider Component
const CartProvider = ({ children }) => {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  return (
    <CartContext.Provider value={{ state, dispatch }}>
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
