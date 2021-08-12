import React, { Component } from 'react';
import ReviewProducts from '../Components/ReviewProducts';

class FinalizingPurchase extends Component {
  render() {
    return (
      <div className="finalizing-purchase-container">
        <div>
          <ReviewProducts />
        </div>
        <div>
          <h1>Informações do Comprador</h1>
        </div>
        <div>
          <h1>Método de Pagamento</h1>
        </div>

      </div>
    );
  }
}

export default FinalizingPurchase;
