import React, { Component } from 'react';
import PropTypes from 'prop-types';
import removeIcon from '../Images/remove.png';
import menosIcon from '../Images/menos.png';
import maisIcon from '../Images/mais.png';

class PurchaseItem extends Component {
  render() {
    const { product: { title, price, thumbnail, quantity } } = this.props;
    return (
      <div className="purchaseList-container-item">
        <div><img src={ removeIcon } alt="Remove Item" width="60px" /></div>
        <img src={ thumbnail } alt="Imagem do Produto" width="100px" />
        <h3 data-testid="shopping-cart-product-name">{ title }</h3>
        <div><img src={ menosIcon } alt="Aumenta quantidade" width="20px" /></div>
        <h3 data-testid="shopping-cart-product-quantity">{ quantity }</h3>
        <div><img src={ maisIcon } alt="Diminuir quantidade" width="20px" /></div>
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
