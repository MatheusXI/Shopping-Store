import React, { Component } from 'react';
import PropTypes from 'prop-types';
import BuyerInformation from '../Components/BuyerInformation';
import PaymentMethod from '../Components/PaymentMethod';
import ReviewProducts from '../Components/ReviewProducts';

class FinalizingPurchase extends Component {
  constructor(props) {
    const amount = localStorage.getItem('amount');
    super(props);
    this.state = {
      fullname: '',
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
      validated: true,
      amount,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formatarValor = this.formatarValor.bind(this);
    this.totalValuePurchases = this.totalValuePurchases.bind(this);
  }

  // Atualizar o state.
  handleChange(event) {
    const { name } = event.target;
    const { value } = event.target;
    this.setState({
      [name]: value,
    });
  }

  // Evento de Click do finalizar compra.
  handleClick() {
    const { history } = this.props;
    this.setState({ validated: true }, () => {
      const result = Object.values(this.state).every((input) => input);
      if (result) {
        this.setState({ validated: true });
        // https://stackoverflow.com/questions/29244731/react-router-how-to-manually-invoke-link
        history.push('/');
        return;
      }
      return this.setState({ validated: false });
    });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  // Verificar se o input checked foi selecinado ou não.
  handleChangeChecked = (event) => {
    const { checked: checkedElement } = event.target;
    this.setState({
      checked: checkedElement,
    });
  }

  // Valida se o campo esta escrito e checked e true.
  isValid = (value) => {
    if (value !== '' || value === true) return true;
    return false;
  }

  formatarValor(valor) {
    return Number(valor).toLocaleString('pt-BR', { minimumFractionDigits: 2 });
  }

  totalValuePurchases() {
    const valor = localStorage.getItem('amount') || 0;
    this.setState({ amount: valor });
  }

  render() {
    const {
      fullname,
      cpf,
      email,
      phone,
      cep,
      address,
      completento,
      numero,
      cidade,
      states,
      checked,
      validated,
      amount,
    } = this.state;
    return (
      <div className="finalizing-purchase-container">
        <div>
          <ReviewProducts totalValuePurchases={ this.totalValuePurchases } />
        </div>
        <form onSubmit={ this.handleSubmit }>
          <div>
            <BuyerInformation
              buyerInfo={ { fullname,
                cpf,
                email,
                phone,
                cep,
                address,
                completento,
                numero,
                cidade,
                states,
                checked,
                validated } }
              handleChange={ this.handleChange }
            />
          </div>
          <div>
            <PaymentMethod
              handleChange={ this.handleChangeChecked }
            />
          </div>
          <div>
            <h2 className="payment-purchase-total">
              Valor Total:R$
              { this.formatarValor(amount)}
            </h2>
          </div>
          <button type="submit" onClick={ this.handleClick }> Finaliza Compra </button>
        </form>
      </div>
    );
  }
}

FinalizingPurchase.propTypes = {
  history: PropTypes.objectOf(),
}.isRequired;
export default FinalizingPurchase;
