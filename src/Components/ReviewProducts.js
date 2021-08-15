import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PurchaseItem from './PurchaseItem';
import backpage from '../Images/backpage.png';

class ReviewProducts extends Component {
  render() {
    const { totalValuePurchases } = this.props;
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
            className="review-products-item"
          />))}
        </div>
      </>
    );
  }
}

export default ReviewProducts;
