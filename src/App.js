import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Productlist } from './components/productlist';
import { ProductDetail } from './components/productdetail';
import { Navbar } from './components/navbar';

function App() {
  const [carrito, setCarrito] = useState([]);
  
  const quitarDelCarrito = (productId) => {
    setCarrito((prevCarrito) => prevCarrito.filter((item) => item.id !== productId));
  };

  const agregarAlCarrito = (producto) => {
    // Verificar si el producto ya está en el carrito
    const existente = carrito.find(item => item.id === producto.id);

    if (existente) {
      // Si el producto existe en el carrito, incrementar la cantidad
      setCarrito(prevCarrito => prevCarrito.map(item =>
        item.id === producto.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      // Si el producto no está en el carrito, agregarlo con cantidad 1
      setCarrito(prevCarrito => [...prevCarrito, { ...producto, quantity: 1 }]);
    }
  };

  return (
    <Router>
      <div>
        <Navbar carrito={carrito} quitarDelCarrito={quitarDelCarrito} />
        <Routes>
          <Route path='/' element={<Productlist agregarAlCarrito={agregarAlCarrito} />} />
          <Route path='/product/:id' element={<ProductDetail agregarAlCarrito={agregarAlCarrito} />} />
          <Route path='/category/:id' element={<Productlist agregarAlCarrito={agregarAlCarrito} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
