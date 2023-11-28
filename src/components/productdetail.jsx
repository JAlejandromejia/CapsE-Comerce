import React, {useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import {ItemCounter} from './itemcounter';
import { productServices } from '../services/products';
import { CartContext } from '../context/cartcontext';

export const ProductDetail = () => {
  const { agregarAlCarrito } = useContext(CartContext);
  const[product,setProduct] = useState({})
  const { id } = useParams();

  useEffect(() => {
    productServices.getProduct(id).then((res) => setProduct(res));
  }, [id]);

  if (!product) {
    return <div>No se encontró el producto</div>;
  }

  const handleAddToCart = (quantity) => {
    agregarAlCarrito({ ...product, quantity });
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
        <ItemCounter onAddToCart={(quantity) => handleAddToCart(quantity)} />
      </div>
    </div>
    </>
  );
};
