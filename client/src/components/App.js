import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './ProductList';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Routes>
      <Routes>
        <PrivateRoute exact path="/" component={ProductList} />
      </Routes>
    </Routes>
  );
}

export default App;