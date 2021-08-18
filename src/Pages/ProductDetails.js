import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import cart from '../Images/cart.png';
import backpage from '../Images/backpage.png';
import AddProductToCart from '../Components/AddProductToCart';
import Assesment from '../Components/Assesment';

class ProductDetails extends Component {
  constructor() {
    super();
    this.formatarValor = this.formatarValor.bind(this);
  }

  formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }

  render() {
    const { location: { state: { title, price, thumbnail, id } } } = this.props;
    return (
      <div>
        <div className="header-product-details">
          <Link to="/">
            <img
              src={ backpage }
              alt="cart"
              width="30px"
              className="img-back-product-details"
            />
          </Link>
          <h1 className="title-product-details">Detalhes do produto</h1>
          <Link
            to="/shopping-cart"
            data-testid="shopping-cart-button"
            className="img-cart-product-details"
          >
            <img src={ cart } alt="cart" width="30px" />
          </Link>
        </div>
        <div className="hr-header">
          <hr />
        </div>
        <div className="product-details-contain">
          <div className="product-details-items">
            <div className="product-details-img-contain">
              <img
                className="product-details-img"
                src={ thumbnail }
                alt="Imagem do Produto"
              />
            </div>
            <div className="product-details-priceButtons">
              <p
                className="product-details-title"
                data-testid="product-detail-name"
              >
                { title }
              </p>
              <span className="product-details-buttoon">
                { `R$: ${this.formatarValor(price)}` }
              </span>
              <AddProductToCart
                datatestid="product-detail-add-to-cart"
                productInfor={ { title, price, thumbnail, id } }
              />
            </div>
          </div>
          <div>
            <Assesment />
          </div>
        </div>
      </div>
    );
  }
}

ProductDetails.propTypes = {
  location: PropTypes.shape().isRequired,
};
export default ProductDetails;
