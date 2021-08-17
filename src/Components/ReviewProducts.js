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
      <div>
        <div className="backToHome-review-products">
          <Link to="/" data-testid="shopping-cart-button">
            <img
              className="img-backToHome-review"
              src={ backpage }
              alt="cart"
              width="30px"
              id="return"
            />
          </Link>
        </div>
        <div className="purchase-contain">
          <h3 className="review-title">Revise seus Produtos</h3>
        </div>
        <div className="hr-header">
          <hr />
        </div>
        <div className="review-products-list">
          { purchaseList.map((product) => (<PurchaseItem
            key={ product.id }
            product={ product }
            totalValuePurchases={ totalValuePurchases }
            reload={ reload }
            className="review-products-item"
          />))}
        </div>
      </div>
    );
  }
}

ReviewProducts.propTypes = {
  totalValuePurchases: PropTypes.func,
  reload: PropTypes.bool,
}.isRequired;

export default ReviewProducts;
