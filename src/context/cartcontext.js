import React, { createContext, useState } from 'react';

const CartContext = createContext();

const CartProvider = ({ children, initialCart = [] }) => {
    const [carrito, setCarrito] = useState(initialCart);
  
    const quitarDelCarrito = (productId) => {
      setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== productId));
    };
  
    const agregarAlCarrito = (producto) => {
      const existente = carrito.find((item) => item.id === producto.id);
  
      if (existente) {
        setCarrito((prevCarrito) =>
          prevCarrito.map((item) =>
            item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
          )
        );
      } else {
        setCarrito((prevCarrito) => [...prevCarrito, { ...producto, quantity: 1 }]);
      }
    };
  
    return (
      <CartContext.Provider value={{ carrito, quitarDelCarrito, agregarAlCarrito }}>
        {children}
      </CartContext.Provider>
    );
  };
  
  export { CartContext, CartProvider};