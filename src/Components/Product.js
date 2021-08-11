import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import AddProductToCart from './AddProductToCart';

class Product extends React.Component {
  render() {
    const { product } = this.props;
    const { title, thumbnail, price, id } = product;
    return (
      <div data-testid="product">
        <Link
          to={ { pathname: `/product-details/${id}`,
            state: { ...product } } }
          data-testid="product-detail-link"
        >
          <img src={ thumbnail } alt={ title } />
          <h1>
            { title }
          </h1>
          <span>
            { price }
          </span>
        </Link>
        <AddProductToCart productInfor={ { title, price, thumbnail, id } } />
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
