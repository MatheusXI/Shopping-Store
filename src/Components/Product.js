import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddProductToCart from './AddProductToCart';

class Product extends React.Component {
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
            <h3>
              { title }
            </h3>
          </div>
          <div className="contain-price-button">
            <span className="price">
              R$
              {' '}
              { price }
            </span>
            <AddProductToCart
              datatestid="product-add-to-cart"
              productInfor={ { title, price, thumbnail, id } }
            />
          </div>
        </Link>
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
