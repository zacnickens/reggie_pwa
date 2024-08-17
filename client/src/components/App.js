import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ProductList from './ProductList';
import PrivateRoute from './PrivateRoute';

function App() {
  return (
    <Router>
      <Switch>
        <PrivateRoute exact path="/" component={ProductList} />
      </Switch>
    </Router>
  );
}

export default App;