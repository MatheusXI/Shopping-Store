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
  }

  sum() {
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    const { product: { id } } = this.props;
    this.setState(({ valor: this.state.valor + 1 }), () => {
      const productFound = purchaseList.find((item) => item.id === id);
      productFound.quantity = this.state.valor;
      localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
    });
  }

  del(event) {
    const { product: { id } } = this.props;
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    const deleteProduct = purchaseList.find((item) => item.id === id);
    const indice = purchaseList.indexOf(deleteProduct);
    purchaseList.splice(indice, 1);
    localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
    event.target.parentNode.remove();
  }

  sub() {
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList'));
    const { product: { id } } = this.props;
    this.setState(({ valor: this.state.valor - 1 }), () => {
      const productFound = purchaseList.find((item) => item.id === id);
      productFound.quantity = this.state.valor;
      localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
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
        <div><img onClick={ this.sub } src={ menosIcon } alt="Aumenta quantidade" width="20px" /></div>
        <h3 data-testid="shopping-cart-product-quantity">{ valor }</h3>
        <div><img onClick={ this.sum } src={ maisIcon } alt="Diminuir quantidade" width="20px" /></div>
        <p>
          R$
          { price }
          {id}
        </p>
      </div>
    );
  }
}

PurchaseItem.propTypes = {
  product: PropTypes.shape().isRequired,
};

export default PurchaseItem;
