/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeIcon from '../Images/remove.png';
import menosIcon from '../Images/menos.png';
import maisIcon from '../Images/mais.png';

class PurchaseItem extends Component {
  constructor(props) {
    super(props);
    const { product: { quantity } } = this.props;
    this.state = {
      valor: quantity,
    };
    this.sum = this.sum.bind(this);
    this.sub = this.sub.bind(this);
    this.del = this.del.bind(this);
    this.amount = this.amount.bind(this);
    this.formatarValor = this.formatarValor.bind(this);
  }

  sum() {
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    const { product: { id } } = this.props;
    const productFound = purchaseList.find((item) => item.id === id);

    this.setState((prevState) => {
      productFound.quantity = prevState.valor + 1;
      productFound.amount = productFound.quantity * productFound.price;
      localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
      this.amount();
      return { valor: productFound.quantity };
    });
  }

  del(event) {
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    const { product: { id } } = this.props;
    const updatedProductList = purchaseList.filter((item) => item.id !== id);
    localStorage.setItem('purchaseList', JSON.stringify(updatedProductList));
    event.target.parentNode.parentElement.remove();
  }

  sub() {
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    const { product: { id } } = this.props;
    const productFound = purchaseList.find((item) => item.id === id);
    const { valor } = this.state;
    if (valor > 0) {
      this.setState((prevState) => {
        productFound.quantity = prevState.valor - 1;
        productFound.amount = productFound.quantity * productFound.price;
        localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
        this.amount();
        return { valor: productFound.quantity };
      });
    }
  }

  formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }

  amount() {
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    const valor = purchaseList.reduce((acc, product) => acc + product.amount, 0);
    console.log(valor);
    localStorage.setItem('amount', valor);
  }

  render() {
    const { product: { title, price, thumbnail } } = this.props;
    const { valor } = this.state;
    return (
      <div className="purchaseList-container-item">
        <button width="10px" type="button" onClick={ this.del }>
          <img
            width="10px"
            src={ removeIcon }
            alt="Remove Item"
          />
        </button>
        <img src={ thumbnail } alt="Imagem do Produto" width="100px" />
        <h3 data-testid="shopping-cart-product-name">{title}</h3>
        <button
          data-testid="product-decrease-quantity"
          type="button"
          onClick={ this.sub }
        >
          <img
            src={ menosIcon }
            alt="Menos"
            width="60px"
          />
        </button>
        <h3 data-testid="shopping-cart-product-quantity">{valor}</h3>
        <button
          data-testid="product-increase-quantity"
          type="button"
          onClick={ this.sum }
        >
          <img
            src={ maisIcon }
            alt="Mais"
            width="60px"
          />
        </button>
        <p>
          R$
          {this.formatarValor(price)}
        </p>
      </div>
    );
  }
}

PurchaseItem.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default PurchaseItem;
