import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadProducts = async () => {
      try {
        const fetchedProducts = await fetchProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error loading products:', error);
      }
    };
    loadProducts();
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <div className="product-list">
        {products.map(product => (
          <Link to={`/product/${product.id}`} key={product.id} className="product-item">
            <img src={product.image_url || '/placeholder-image.jpg'} alt={product.item_data.name} />
            <h3>{product.item_data.name}</h3>
            <p>${product.item_data.variations[0].item_variation_data.price_money.amount / 100}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;