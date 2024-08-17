import api from './api';

exports.getProducts = () => api.get('/products');