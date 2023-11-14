import React from 'react'

export const Carrito = ({ carrito, quitarDelCarrito, cerrarCarrito }) => {
    const calcularTotal = (carrito) => {
      return carrito.reduce((total, item) => total + item.price * item.quantity, 0);
    };

    
  
    return (
      <div className="carrito">
      <div className="carrito-header">
        <h3>Carrito</h3>
        <button className="cerrar" onClick={cerrarCarrito}>
          X
        </button>
      </div>
      <ul>
        {carrito.map((item) => (
          <li key={item.id}>
            <img  className="item-image" src={item.urlImage} alt={item.nameproduct} />
            <h4>{item.nameproduct}</h4>
            <p className="item-price">${item.price}</p>
            <p className="item-quantity">QTY: {item.quantity}</p>
            <button onClick={() => quitarDelCarrito(item.id)}>X</button>
          </li>
        ))}
      </ul>
      <p className="total">Total: ${calcularTotal(carrito)}</p>
    </div>
    );
  };