import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchProducts } from '../services/api';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('catalog/list');
        const data = await response.json();
        setProducts(data);
        console.log('Product Data:', data); // Log the product data to the console
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <div>
      {products.length > 0 ? (
        products.map((product, index) => (
          <div key={index}>
            <h2>{product.name}</h2>
            <p>Price: ${product.price}</p>
          </div>
        ))
      ) : (
        <p>No products found.</p>
      )}
    </div>
  );
};

export default ProductList;