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
            placeholder="Endereço"
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
            placeholder="Número"
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
            <option value="Amapá">Amapá</option>
            <option value="Amazonas">Amazonas</option>
            <option value="Bahia">Bahia</option>
            <option value="Ceará">Ceará</option>
            <option value="Espírito Santo">Espírito Santo</option>
            <option value="Goiás">Goiás</option>
            <option value="Maranhão">Maranhão</option>
            <option value="Mato Grosso">Mato Grosso</option>
            <option value="Mato Grosso do Sul">Mato Grosso do Sul</option>
            <option value="Minas Gerais">Minas Gerais</option>
            <option value="Pará">Pará</option>
            <option value="Paraíba">Paraíba</option>
            <option value="Paraná">Paraná</option>
            <option value="Pernambuco">Pernambuco</option>
            <option value="Piauí">Piauí</option>
            <option value="Rio de Janeiro">Rio de Janeiro</option>
            <option value="Rio Grande do Norte">Rio Grande do Norte</option>
            <option value="Rio Grande do Sul">Rio Grande do Sul</option>
            <option value="Rondônia">Rondônia</option>
            <option value="Roraima">Roraima</option>
            <option value="Santa Catarina">Santa Catarina</option>
            <option value="São Paulo">São Paulo</option>
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
