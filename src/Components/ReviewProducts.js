import React, { Component } from 'react';
import PurchaseItem from './PurchaseItem';

class ReviewProducts extends Component {
  render() {
    const purchaseList = JSON.parse(localStorage.getItem('purchaseList') || '[]');
    return (
      <div className="review-products-list">
        <h3>Revise seus Produtos</h3>
        { purchaseList.map((product) => (<PurchaseItem
          key={ product.id }
          product={ product }
        />))}

      </div>
    );
  }
}

export default ReviewProducts;
