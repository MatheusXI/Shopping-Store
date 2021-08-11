import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cardboard from '../Images/cardboard.png';
import backpage from '../Images/backpage.png';
import ListOfProductsInCart from '../Components/ListOfProductsInCart';

class ShoppingCart extends Component {
  render() {
    const empty = (
      <>
        <div><img src={ cardboard } alt="Logo" width="200" /></div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </>
    );
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    document.title = 'Carrinho de Compras';
    return (
      <div>
        <Link to="/" data-testid="shopping-cart-button">
          <img src={ backpage } alt="cart" width="30px" />
        </Link>
        { purchaseList ? <ListOfProductsInCart purchaseList={ purchaseList } /> : empty}
      </div>
    );
  }
}

export default ShoppingCart;
