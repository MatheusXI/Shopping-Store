import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PurchaseItem from './PurchaseItem';

class ListOfProductsInCart extends Component {
  constructor(props) {
    const amount = localStorage.getItem('amount');
    super(props);
    this.state = { amount };
    this.totalValuePurchases = this.totalValuePurchases.bind(this);
  }

  totalValuePurchases() {
    const { amount } = this.state;
    const valor = localStorage.getItem('amount') || 0;
    this.setState({ amount: valor });
    return amount;
  }

  render() {
    const { purchaseList } = this.props;
    return (
      <div className="purchaseList-container">
        {purchaseList.map(
          (product) => (<PurchaseItem
            product={ product }
            key={ product.id }
            totalValuePurchases={ this.totalValuePurchases }
          />),
        )}
      </div>
    );
  }
}

ListOfProductsInCart.propTypes = {
  purchaseList: PropTypes.array,
}.isRequired;

export default ListOfProductsInCart;
