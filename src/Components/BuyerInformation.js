import React, { Component } from 'react';
import PropTypes from 'prop-types';

class BuyerInformation extends Component {
  render() {
    const {
      handleChange,
      buyerInfo: { fullname,
        cpf,
        email,
        phone,
        cep,
        address,
        completento,
        numero,
        cidade,
        states,
      },
    } = this.props;
    return (
      <div>
        <fieldset>
          <legend>Revise seus Produtos</legend>
          <input
            onChange={ handleChange }
            className="form-information"
            value={ fullname }
            type="text"
            name="fullname"
            data-testid="checkout-fullname"
            placeholder="Nome Completo"
            required
          />
          <input
            maxLength="11"
            onChange={ handleChange }
            className="form-information"
            value={ cpf }
            type="text"
            name="cpf"
            data-testid="checkout-cpf"
            placeholder="CPF"
            required
          />
          <input
            onChange={ handleChange }
            className="form-information"
            value={ email }
            type="text"
            name="email"
            data-testid="checkout-email"
            placeholder="Email"
            required
          />
          <input
            onChange={ handleChange }
            className="form-information"
            value={ phone }
            type="text"
            name="phone"
            data-testid="checkout-phone"
            placeholder="Telefone"
            required
          />
          <br />
          <input
            onChange={ handleChange }
            className="form-information"
            value={ cep }
            type="text"
            name="cep"
            data-testid="checkout-cep"
            placeholder="CEP"
            required
          />
          <input
            onChange={ handleChange }
            className="form-information"
            value={ address }
            type="text"
            name="address"
            data-testid="checkout-address"
            placeholder="Endere??o"
            required
          />
          <br />
          <input
            onChange={ handleChange }
            className="form-information"
            value={ completento }
            type="text"
            name="completento"
            placeholder="Completento"
            required
          />
          <input
            onChange={ handleChange }
            className="form-information"
            value={ numero }
            type="text"
            name="numero"
            placeholder="N??mero"
            required
          />
          <input
            onChange={ handleChange }
            className="form-information"
            value={ cidade }
            type="text"
            name="cidade"
            placeholder="Cidade"
            required
          />
          <select
            onChange={ handleChange }
            className="form-information"
            name="states"
            id="states"
            value={ states }
          >
            <option value="Acre">Acre</option>
            <option value="Alagoas">Alagoas</option>
            <option value="Amap??">Amap??</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Cear??">Cear??</option>
            <option value="Esp??rito Santo">Esp??rito Santo</option>
            <option value="Goi??s">Goi??s</option>
            <option value="Maranh??o">Maranh??o</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Par??">Par??</option>
            <option value="Para??ba">Para??ba</option>
            <option value="Paran??">Paran??</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piau??">Piau??</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rond??nia">Rond??nia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="S??o Paulo">S??o Paulo</option>
            <option value="Sergipe">Sergipe</option>
            <option value="Tocantins">Tocantins</option>
            <option value="Distrito Federal">Distrito Federal</option>
          </select>
        </fieldset>
      </div>
    );
  }
}

BuyerInformation.propTypes = {
  buyerInfo: PropTypes.arrayOf(),
}.isRequired;

export default BuyerInformation;
