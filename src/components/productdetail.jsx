import React, {useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {data} from '../data';

export const ProductDetail = ({ agregarAlCarrito }) => {
  const[product,setProduct] = useState({})
  const {id} = useParams();

  const getOneProduct = (productId) => {
    return new Promise ((resolve) => {
      setTimeout(() => {
        resolve(data.find((product) => product.id === productId))
      }, 300)
    })
  }
  useEffect(() => {
    getOneProduct(id)
    .then((res) => setProduct(res))
  }, [id])

  if (!product) {
    return <div>No se encontro el producto</div>
  };

  return (
    <>
    <h2 className='detallesdeproductotitulo'>{product.nameproduct}</h2>
    <div className='detallesdeproducto'>
      <img src={product.urlImage} alt={product.nameproduct} />
      <div className='detallesdeproductoinfo'>
        <p className='detallesdeproductonombre'>{product.brand} - {product.nameproduct}</p>
        <p className='detallesdeproductosize'>{product.size}</p>
        <p className='detallesdeproductoprecio'>${product.price}</p>
        <button onClick={() => agregarAlCarrito(product)}>Agregar al carrito</button>
      </div>
    </div>
    </>
  );
};
