import React, { Component } from 'react';

class AddProductToCart extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.saveLocalStorage = this.saveLocalStorage.bind(this);
    this.productIsExistent = this.productIsExistent.bind(this);
    this.cont = 1;
  }

  handleClick() {
    const { productInfor: { title, price, thumbnail, id } } = this.props;
    const product = {
      title,
      price,
      thumbnail,
      id,
      quantity: 1,
    };
    this.saveLocalStorage(product);
  }

  saveLocalStorage(productAdd) {
    // Pega a lista de compra do localStorage
    let purchaseList = JSON.parse(localStorage.getItem('purchaseList') || '[]');

    // Pesquisa se o produto ja existe pela a Id
    const [isExist, product] = this.productIsExistent(productAdd, purchaseList);

    // Se existim Aumenta em 1 a quantidade.
    if (isExist) {
      product.quantity += 1;
      localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
      return product;
    }
    // Se não existe add o novo Produto.
    purchaseList = [...purchaseList, product];
    localStorage.setItem('purchaseList', JSON.stringify(purchaseList));
  }

  // Função que analiza se o protudo esta ou não na lista.
  productIsExistent(newProduct, purchaseList) {
    const productFound = purchaseList.find(((product) => product.id === newProduct.id));
    if (!productFound) return [false, newProduct];
    return [true, productFound];
  }

  render() {
    return (
      <input
        type="button"
        value="Add Produto ao Carrinho"
        data-testid="product-add-to-cart"
        onClick={ this.handleClick }
      />
    );
  }
}

export default AddProductToCart;
