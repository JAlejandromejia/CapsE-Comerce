import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faOpencart } from '@fortawesome/free-brands-svg-icons';
import { Carrito } from '../components/carrito';
import { CartContext } from '../context/cartcontext';

export const Navbar = () => {
  const { carrito, quitarDelCarrito } = useContext(CartContext);
  const [isCarritoAbierto, setIsCarritoAbierto] = useState(false); 

  const abrirCarrito = () => {
    setIsCarritoAbierto(true);
  };

  const cerrarCarrito = () => {
    setIsCarritoAbierto(false);
  };

  const cantidadCarrito = carrito ? carrito.length : 0;
  
  return (
    <div>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">INICIO</Link>
          </li>
          <li>
            <Link to="/category/GOORIN%20BROS">GOORIN BROS</Link>
          </li>
          <li>
            <Link to="/category/NEW%20ERA">NEW ERA</Link>
          </li>
          <li>
          <div className="cart-widget" onClick={abrirCarrito}>
            <FontAwesomeIcon icon={faOpencart} />
            <span className="item__total">{cantidadCarrito}</span>
          </div>
          </li>
        </ul>
      </nav>
      {isCarritoAbierto && (
        <Carrito
          carrito={carrito}
          cerrarCarrito={cerrarCarrito}
          quitarDelCarrito={quitarDelCarrito}
          setIsCarritoAbierto={setIsCarritoAbierto} 
        />
      )}
    </div>
  )
};
