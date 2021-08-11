import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PurchaseItem from './PurchaseItem';

class ListOfProductsInCart extends Component {
  render() {
    const { purchaseList } = this.props;
    return (
      <div className="purchaseList-container">
        {purchaseList.map(
          (product) => <PurchaseItem product={ product } key={ product.id } />,
        )}
      </div>
    );
  }
}

ListOfProductsInCart.propTypes = {
  purchaseList: PropTypes.array,
}.isRequired;

export default ListOfProductsInCart;
