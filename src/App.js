import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductPage from './components/ProductPage';
import QRScanner from './components/QRScanner';
import { fetchProducts } from './services/api';
import './styles/App.css';

const App = () => {
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
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Reggie & Dro Members App</h1>
          <nav>
            <ul>
              <li><Link to="/">Product List</Link></li>
              <li><Link to="/scan">Scan QR Code</Link></li>
            </ul>
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path="/" component={ProductList} />
            <Route path="/product/:id" component={ProductPage} />
            <Route path="/scan" component={QRScanner} />
          </Switch>
        </main>
      </div>
    </Router>
  );
};

export default App;