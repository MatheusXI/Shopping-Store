import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import FinalizingPurchase from './Pages/FinalizingPurchase';
import Home from './Pages/Home';
import ProductDetails from './Pages/ProductDetails';
import ShoppingCart from './Pages/ShoppingCart';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route exact path="/" component={ Home } />
        <Route exact path="/shopping-cart" component={ ShoppingCart } />
        <Route path="/product-details/:id" component={ ProductDetails } />
        <Route path="/finalizing-purchase" component={ FinalizingPurchase } />
      </BrowserRouter>
    );
  }
}

export default App;
