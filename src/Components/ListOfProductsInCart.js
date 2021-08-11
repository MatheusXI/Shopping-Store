import React, { Component } from 'react';
import PurchaseItem from './PurchaseItem';

class ListOfProductsInCart extends Component {
  render() {
    const { purchaseList } = this.props;
    return (
      <div className="purchaseList-container">
        {purchaseList.map((product) => <PurchaseItem product={ product } />)}
      </div>
    );
  }
}

export default ListOfProductsInCart;
