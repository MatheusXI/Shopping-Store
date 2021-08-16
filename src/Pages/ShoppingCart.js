import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListOfProductsInCart from '../Components/ListOfProductsInCart';
import backpage from '../Images/backpage.png';
import cardboard from '../Images/cardboard.png';

class ShoppingCart extends Component {
  constructor() {
    super();
    this.state = { reload: false };
    this.reload = this.reload.bind(this);
  }

  reload() {
    const { reload } = this.state;
    this.setState({ reload: true });
    return reload;
  }

  render() {
    const listOfProducts = () => {
      const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
      return (
        <>
          <ListOfProductsInCart
            purchaseList={ purchaseList }
            reload={ this.reload }
          />
          <Link to="/finalizing-purchase" data-testid="checkout-products">
            Revisar Produtos
          </Link>
        </>
      );
    };
    const empty = (
      <>
        <div><img src={ cardboard } alt="Logo" width="200" /></div>
        <h3 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h3>
      </>
    );
    document.title = 'Carrinho de Compras';
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    return (
      <div>
        <Link to="/" data-testid="shopping-cart-button">
          <img src={ backpage } alt="cart" width="30px" />
        </Link>
        { (!purchaseList || purchaseList.length === 0) ? empty : listOfProducts() }

      </div>
    );
  }
}

export default ShoppingCart;
