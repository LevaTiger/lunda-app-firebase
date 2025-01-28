

import React, { createContext, useState, useContext } from "react";

// Context létrehozása
const CartContext = createContext();

// Context Provider komponens
export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // Termék hozzáadása a kosárhoz
  const addToCart = (item) => {
    setCartItems((prevItems) => [...prevItems, item]);
  };

  // Termék eltávolítása a kosárból
  const removeFromCart = (id) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom Hook a Cart Context használatához
export const useCart = () => {
  return useContext(CartContext);
};
