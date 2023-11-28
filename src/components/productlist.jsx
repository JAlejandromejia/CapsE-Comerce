import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { productServices } from '../services/products';


export const Productlist = () => {

  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    productServices.getProducts().then((res) => {
      if (id) {
        // Filtra los productos por la categoría seleccionada
        setProducts(res.filter((item) => item.brand === id));
      } else {
        // No existe el filtro, trae toda la data
        setProducts(res);
      }
    });
    // Se deja al useEffect a la escucha del cambio de categorías
  }, [id]);
  return (
    <> 
    <div className='portada'>
        <img src="https://www.goorin.com/cdn/shop/articles/dino_feat_09146f93-fd4c-4aa4-9b61-f776437fbac9_1200x1200.jpg?v=1637265825" alt="Genji Skin" />
        <h1>C.O.T.Y</h1>
        <h2>Encuentra tu bestia interior</h2>
    </div>
    <h3 className='productcontainerheader'>Shop Now</h3>
    <div className="productcontainer">
      {products.map(product => (
        <Link to={`/product/${product.id}`} key={product.id}>
          <div className="product" key={product.id}>
          <img src={product.urlImage} alt={product.nameproduct} />
          <div className="productdetails">
            <p className="info-product">
              <strong>{product.nameproduct}</strong> <br />
              {product.brand} <br />
              {product.size} <br />
              <strong>
                <div className="price">${product.price}</div>
              </strong>
            </p>
          </div>
        </div></Link>
      ))}
    </div>
    </>
  )
}
