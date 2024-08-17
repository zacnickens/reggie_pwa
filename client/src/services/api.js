import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3001/api/',
});

instance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Handle token expiration or invalid token here.
      // For simplicity, we'll just redirect to login page for now.
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export default instance;