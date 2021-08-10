import React, { Component } from 'react';
import { getProductsFromCategoryAndQuery as fectProduct } from '../services/api';

class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.getProductDetails = this.getProductDetails.bind(this);
    this.state = {
      listProduct: {},
      loading: true,
    };
  }

  componentDidMount() {
    this.getProductDetails();
  }

  async getProductDetails() {
    const productList = await fectProduct('MLB5672', 'TEST');
    const id = 'MLB1624687322';
    const item = productList.results.find((i) => i.id === id);
    console.log(item);
    this.setState({ listProduct: item, loading: false });
  }

  render() {
    const { listProduct, loading } = this.state;
    // console.log(listProduct);
    return (
      <div>
        { loading ? <h1>carregando..</h1> : listProduct }
      </div>
    );
  }
}

export default ProductDetails;
