import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(cartItems.map((item) => 
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
    setIsSidebarOpen(true);
  };

  const updateQuantity = (id, amount) => {
    setCartItems(cartItems.map((item) => {
      if (item.id === id) {
        const newQty = item.qty + amount;
        return { ...item, qty: newQty > 0 ? newQty : 1 }; 
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // NAYA FUNCTION: Order place hone ke baad cart khali karne ke liye
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    // Yahan clearCart ko bhi value mein pass kar diya
    <CartContext.Provider value={{ 
      cartItems, addToCart, updateQuantity, removeItem, clearCart, 
      isSidebarOpen, setIsSidebarOpen 
    }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};