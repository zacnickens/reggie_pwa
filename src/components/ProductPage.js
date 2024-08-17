import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProduct } from '../services/api';

const ProductPage = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const fetchedProduct = await fetchProduct(id);
        setProduct(fetchedProduct);
      } catch (error) {
        console.error('Error loading product:', error);
      }
    };
    loadProduct();
  }, [id]);

  if (!product) return <div>Loading...</div>;

  return (
    <div className="product-page">
      <h1>{product.item_data.name}</h1>
      <img src={product.item_data.image_url || '/placeholder-image.jpg'} alt={product.item_data.name} />
      <p>{product.item_data.description}</p>
      <p>Price: ${product.item_data.variations[0].item_variation_data.price_money.amount / 100}</p>
    </div>
  );
};

export default ProductPage;