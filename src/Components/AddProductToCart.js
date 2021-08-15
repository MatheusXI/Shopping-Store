import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddProductToCart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
    this.productIsExistent = this.productIsExistent.bind(this);
  }

  handleClick() {
    const { productInfor: { title, price, thumbnail, id } } = this.props;
    const product = {
      title,
      price,
      thumbnail,
      id,
      quantity: 1,
      amount: 0,
    };
    this.saveLocalStorage(product);
  }

  saveLocalStorage(productAdd) {
    // Pega a lista de compra do localStorage
    let purchaseList = JSON.parse(localStorage.getItem('purchaseList') || '[]');
    let amount = Number(localStorage.getItem('amount')) || 0;

    // Pesquisa se o produto ja existe pela a Id
    const [isExist, product] = this.productIsExistent(productAdd, purchaseList);

    // Se existim Aumenta em 1 a quantidade.
    if (isExist) {
      product.quantity += 1;
      product.amount = product.price * product.quantity;
      localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
      localStorage.setItem('amount', amount += product.amount);
      return product;
    }
    // Se não existe add o novo Produto.
    product.amount = product.price * product.quantity;
    purchaseList = [...purchaseList, product];
    localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
    localStorage.setItem('amount', amount += product.price);
  }

  // Função que analiza se o protudo esta ou não na lista.
  productIsExistent(newProduct, purchaseList) {
    const productFound = purchaseList.find(((product) => product.id === newProduct.id));
    if (!productFound) return [false, newProduct];
    return [true, productFound];
  }

  render() {
    const { datatestid } = this.props;
    return (
      <input
        className="button-add-product-cart"
        data-testid={ datatestid }
        type="button"
        value="Adicionar ao carrinho"
        onClick={ this.handleClick }
      />
    );
  }
}

AddProductToCart.propTypes = {
  productInfor: PropTypes.shape(),
  datatestid: PropTypes.string,
}.isRequired;
export default AddProductToCart;
