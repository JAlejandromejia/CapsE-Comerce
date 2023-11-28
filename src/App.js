import './App.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Productlist } from './components/productlist';
import { ProductDetail } from './components/productdetail';
import { Navbar } from './components/navbar';
import { initializeApp } from "firebase/app";
import { CartProvider } from './context/cartcontext';

function App() {
  const firebaseConfig = {
    apiKey: "AIzaSyB2dZsMQwiVGgUma2agZ7Aat-CadjqCM5c",
    authDomain: "capsstock.firebaseapp.com",
    projectId: "capsstock",
    storageBucket: "capsstock.appspot.com",
    messagingSenderId: "658657590376",
    appId: "1:658657590376:web:75608fa71a8e8705d08fdd",
    measurementId: "G-N01SX8Z553"
  };

  initializeApp(firebaseConfig);

  const [carrito, setCarrito] = useState([]);

  const agregarAlCarrito = (producto) => {
    // Verificar si el producto ya está en el carrito
    const existente = carrito.find(item => item.id === producto.id);

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
    <CartProvider initialCart={carrito}>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path='/' element={<Productlist agregarAlCarrito={agregarAlCarrito} />} />
          <Route path='/product/:id' element={<ProductDetail agregarAlCarrito={agregarAlCarrito} />} />
          <Route path='/category/:id' element={<Productlist agregarAlCarrito={agregarAlCarrito} />} />
        </Routes>
      </div>
    </Router>
  </CartProvider>
  );
}

export default App;
