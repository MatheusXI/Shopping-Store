import React, { Component } from 'react';
import BuyerInformation from '../Components/BuyerInformation';
import PaymentMethod from '../Components/PaymentMethod';
import ReviewProducts from '../Components/ReviewProducts';

class FinalizingPurchase extends Component {
  constructor(props) {
    super(props);

    this.state = {
      fullname: 'Rogerio',
      cpf: '',
      email: '',
      phone: '',
      cep: '',
      address: '',
      completento: '',
      numero: '',
      cidade: '',
      states: 'São Paulo',
      checked: false,
    };
  }

  handleChange = (event) => {
    const { name } = event.target;
    const { value } = event.target;

    console.log(value, name);
    this.setState({
      [name]: value,
    });
  }

  // cpf = (v) => {
  //   v = v.replace(/\D/g, ''); // Remove tudo o que não é dígito
  //   v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
  //   v = v.replace(/(\d{3})(\d)/, '$1.$2'); // Coloca um ponto entre o terceiro e o quarto dígitos
  //   // de novo (para o segundo bloco de números)
  //   v = v.replace(/(\d{3})(\d{1,2})$/, '$1-$2'); // Coloca um hífen entre o terceiro e o quarto dígitos
  //   return v;
  // }

  handleChangeChecked = (event) => {
    const { checked: checkedElement } = event.target;
    const { checked } = this.state;
    this.setState({
      checked: checkedElement,
    });
    console.log(checkedElement);
    return checked;
  }

  render() {
    return (
      <div className="finalizing-purchase-container">
        <div>
          <ReviewProducts />
        </div>
        <div>
          <BuyerInformation buyerInfo={ this.state } handleChange={ this.handleChange } />
        </div>
        <div>
          <PaymentMethod payment={ this.state } handleChange={ this.handleChangeChecked } />
        </div>
        <div>
          <h2 className="payment-purchase-total">Valor Total: XXXX,xx</h2>
        </div>
        <button type="submit"> Finaliza Compra </button>
      </div>
    );
  }
}

export default FinalizingPurchase;
