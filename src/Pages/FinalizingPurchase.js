import React, { Component } from 'react';
import BuyerInformation from '../Components/BuyerInformation';
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
          <h1>Método de Pagamento</h1>
        </div>

      </div>
    );
  }
}

export default FinalizingPurchase;
