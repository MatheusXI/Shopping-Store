import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import backpage from '../Images/backpage.png';
import PurchaseItem from './PurchaseItem';

class ReviewProducts extends Component {
  render() {
    const { totalValuePurchases, reload } = this.props;
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList') || '[]');
    return (
      <>
        <Link to="/" data-testid="shopping-cart-button">
          <img src={ backpage } alt="cart" width="30px" />
        </Link>
        <div className="review-products-list">
          <h3>Revise seus Produtos</h3>
          { purchaseList.map((product) => (<PurchaseItem
            key={ product.id }
            product={ product }
            totalValuePurchases={ totalValuePurchases }
            reload={ reload }
            className="review-products-item"
          />))}
        </div>
      </>
    );
  }
}

ReviewProducts.propTypes = {
  totalValuePurchases: PropTypes.func,
  reload: PropTypes.bool,
}.isRequired;

export default ReviewProducts;
