import axios from 'axios';

const API_BASE_URL = 'https://connect.squareup.com/v2';
const API_KEY = 'EAAAlgyF1oucPVAZ-AtgPXXBnPzQAsk8jO7KwGBPwuPURIkZuY1HgtJQlUDwHTW0';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${API_KEY}`,
  },
});

export const fetchProducts = async () => {
  try {
    const response = await api.get('/catalog/list');
    return response.data.objects.filter(item => item.type === 'ITEM');
  } catch (error) {
    console.error('Error fetching products:', error);
    throw error;
  }
};

export const fetchProduct = async (id) => {
  try {
    const response = await api.get(`/catalog/object/${id}`);
    return response.data.object;
  } catch (error) {
    console.error('Error fetching product:', error);
    throw error;
  }
};