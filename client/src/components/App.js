import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <div className="App">
      <ProductList />
    </div>
  );
}

export default App;