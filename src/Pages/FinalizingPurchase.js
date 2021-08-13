import React, { Component } from 'react';
import BuyerInformation from '../Components/BuyerInformation';
import PaymentMethod from '../Components/PaymentMethod';
import ReviewProducts from '../Components/ReviewProducts';

class FinalizingPurchase extends Component {
  render() {
    return (
      <div className="finalizing-purchase-container">
        <div>
          <ReviewProducts />
        </div>
        <div>
          <BuyerInformation />
        </div>
        <div>
          <PaymentMethod />
        </div>
      </div>
    );
  }
}

export default FinalizingPurchase;
