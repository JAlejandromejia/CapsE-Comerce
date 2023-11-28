import React, { useState, useContext } from 'react';
import { CartContext } from '../context/cartcontext';

export const ItemCounter = () => {
    const { agregarAlCarrito } = useContext(CartContext);
    const [quantity, setQuantity] = useState(1);
  
    const handleIncrement = () => {
      setQuantity((prevQuantity) => prevQuantity + 1);
    };
  
    const handleDecrement = () => {
      if (quantity > 1) {
        setQuantity((prevQuantity) => prevQuantity - 1);
      }
    };
      
    const handleAddToCart = () => {
        agregarAlCarrito( quantity );
        setQuantity(1);
      };

  return (
    <div className="item-counter">
      <button className="item-counter-button" onClick={handleDecrement}>-</button>
      <span>{quantity}</span>
      <button className="item-counter-button" onClick={handleIncrement}>+</button>
      <button className="item-counter-addtocart" onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};
