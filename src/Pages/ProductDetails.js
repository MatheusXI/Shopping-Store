import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductDetails extends Component {
  render() {
    const { location: { state: { title } } } = this.props;
    return (
      <div>
        <p data-testid="product-detail-name">{ title }</p>
        <img src="./" alt="Imagem do Produto" />
        R$
        <span>000.00</span>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape().isRequired,
};
export default ProductDetails;
