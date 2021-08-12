import React, { Component } from 'react';

class BuyerInformation extends Component {
  render() {
    return (
      <form>
        <fieldset>
          <legend>Revise seus Produtos</legend>
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="CPF" />
          <input type="text" placeholder="EMail" />
          <input type="text" placeholder="Telefone" />
          <br />
          <input type="text" placeholder="Nome Completo" />
          <input type="text" placeholder="CEP" />
          <input type="text" placeholder="Endereço" />
          <input type="text" placeholder="Endereço" />
          <br />
          <input type="text" placeholder="Completento" />
          <input type="text" placeholder="Número" />
          <input type="text" placeholder="Cidade" />
          <select name="states" id="states">
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
      </form>
    );
  }
}

export default BuyerInformation;
