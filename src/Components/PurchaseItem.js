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
    this.purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
  }

  sum() {
    const { product: { id } } = this.props;
    const productFound = this.purchaseList.find((item) => item.id === id);

    this.setState(({ valor: this.state.valor + 1 }), () => {
      productFound.quantity = this.state.valor;
      localStorage.setItem('purchaseList', JSON.stringify(this.purchaseList));
    });
  }

  del(event) {
    const { product: { id } } = this.props;
    const deleteProduct = this.purchaseList.filter((item) => item.id !== id);
    localStorage.setItem('purchaseList', JSON.stringify(deleteProduct));
    event.target.parentNode.parentElement.remove();
    console.log(deleteProduct);
  }

  sub() {
    const { product: { id } } = this.props;
    const productFound = this.purchaseList.find((item) => item.id === id);

    this.setState(({ valor: this.state.valor - 1 }), () => {
      productFound.quantity = this.state.valor;
      localStorage.setItem('purchaseList', JSON.stringify(this.purchaseList));
    });
  }

  render() {
    const { product: { title, price, thumbnail, id } } = this.props;
    const { valor } = this.state;
    return (
      <div className="purchaseList-container-item">
        <div><img onClick={ this.del } src={ removeIcon } alt="Remove Item" width="60px" /></div>
        <img src={ thumbnail } alt="Imagem do Produto" width="100px" />
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <div>
          <img
            onClick={ this.sub }
            src={ menosIcon }
            alt="Aumenta quantidade"
            width="20px"
            data-testid="product-decrease-quantity"
          />

        </div>
        <h3 data-testid="shopping-cart-product-quantity">{ valor }</h3>
        <div>
          <img
            onClick={ this.sum }
            src={ maisIcon }
            alt="Diminuir quantidade"
            width="20px"
            data-testid="product-increase-quantity"
          />

        </div>
        <p>
          R$
          { price }
        </p>
      </div>
    );
  }
}

PurchaseItem.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default PurchaseItem;
