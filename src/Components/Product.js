import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddProductToCart from './AddProductToCart';

class Product extends React.Component {
  constructor() {
    super();
    this.formatarValor = this.formatarValor.bind(this);
  }

  formatarValor(valor) {
    return valor.toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }

  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div className="product" data-testid="product">
        <Link
          className="link-product"
          to={ { pathname: `/product-details/${id}`,
            state: { ...product } } }
          data-testid="product-detail-link"
        >
          <img className="img-product" src={ thumbnail } alt={ title } />
          <hr />
          <div className="title-product">
            <h3 className="title">
              { title }
            </h3>
          </div>
          <div className="contain-price-button">
            <span className="price">
              R$
              { this.formatarValor(price) }
            </span>
          </div>
        </Link>
        <div className="button">
          <AddProductToCart
            datatestid="product-add-to-cart"
            productInfor={ { title, price, thumbnail, id } }
          />
        </div>
      </div>
    );
  }
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string,
    thumbnail: PropTypes.string,
    price: PropTypes.number,
    id: PropTypes.string,
  }).isRequired,
};

export default Product;
