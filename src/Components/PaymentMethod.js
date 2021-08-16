import React, { Component } from 'react';
import PropTypes from 'prop-types';
import boleto from '../Images/boleto.png';
import creditpayment from '../Images/creditpayment.png';

class PaymentMethod extends Component {
  render() {
    const { handleChange } = this.props;
    return (
      <fieldset>
        <legend>Método de Pagamento</legend>
        <label htmlFor="boleto">
          Boleto
          <input
            onChange={ handleChange }
            id="boleto"
            type="radio"
            name="paymentmethod"
            value="boleto"
            required
          />
          <img id="boleto" src={ boleto } alt="boleto" width="70px" />
        </label>

        <label htmlFor="credicard">
          Visa
          <input
            onChange={ handleChange }
            id="credicard"
            type="radio"
            name="paymentmethod"
            value="credicard"
          />
          <img
            id="credicard"
            src={ creditpayment }
            alt="Cartão de credito visa"
            width="70px"
          />
        </label>

        <label htmlFor="credicard1">
          Elo
          <input
            onChange={ handleChange }
            id="credicard1"
            type="radio"
            name="paymentmethod"
            value="CSS"
          />
          <img
            id="credicard1"
            src={ creditpayment }
            alt="Cartão de credito MasterCard"
            width="70px"
          />
        </label>
        <label htmlFor="credicard2">
          MasterCard
          <input
            onChange={ handleChange }
            id="credicard2"
            type="radio"
            name="paymentmethod"
            value="CSS"
          />
          <img
            id="credicard2"
            src={ creditpayment }
            alt="Cartão de credito MasterCard"
            width="70px"
          />
        </label>
      </fieldset>
    );
  }
}

PaymentMethod.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
export default PaymentMethod;
