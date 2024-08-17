import React from 'react';
import { useEffect, useState } from 'react';
import getProducts from '../services/productService';

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await getProducts();
    
        if (!response.ok) {
          throw new Error(`Request failed with status code ${response.status}`);
        }
    
        setProducts(response.data);
      } catch (error) {
        console.error('Error fetching products:', error.message);
      }
    }

    fetchProducts();
  }, []);


};

export default ProductList;