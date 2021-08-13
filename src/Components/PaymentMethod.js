import React, { Component } from 'react';
import boleto from '../Images/boleto.png';
import creditpayment from '../Images/creditpayment.png';

class PaymentMethod extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Método de Pagamento</legend>
          <label htmlFor="boleto">
            Boleto
            <input id="boleto" type="radio" name="paymentmethod" value="CSS" />
            <img id="boleto" src={ boleto } alt="boleto" width="70px" />
          </label>

          <label htmlFor="credicard">
            Visa
            <input id="credicard" type="radio" name="paymentmethod" value="credicard" />
            <img id="credicard" src={ creditpayment } alt="Cartão de credito visa" width="70px" />
          </label>

          <label htmlFor="credicard1">
            Elo
            <input id="credicard1" type="radio" name="paymentmethod" value="CSS" />
            <img id="credicard1" src={ creditpayment } alt="Cartão de credito MasterCard" width="70px" />
          </label>
          <label htmlFor="credicard2">
            MasterCard
            <input id="credicard2" type="radio" name="paymentmethod" value="CSS" />
            <img id="credicard2" src={ creditpayment } alt="Cartão de credito MasterCard" width="70px" />
          </label>

        </fieldset>
      </form>
    );
  }
}

export default PaymentMethod;
