import axios from 'axios';

// Assuming you're using the same API_URL as in productService.js
const API_URL = '/products';

export const getProducts = async () => {
  try {
    const response = await axios.get(`${API_URL}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error fetching products: ${error.message}`);
  }
};

export default getProducts;