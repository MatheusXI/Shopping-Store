import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorieList from '../Components/ProductCategorieList';
import * as api from '../services/api';
import cart from '../Images/cart.png';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
    this.categorieHandleChange = this.categorieHandleChange.bind(this);
    this.categoriesMap = this.categoriesMap.bind(this);

    this.state = {
      categories: [],
      selectedCategorie: '',
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  async getCategories() {
    const categoriesRequest = await api.getCategories();
    this.setState({
      categories: categoriesRequest,
    });
  }

  categorieHandleChange({ target }) {
    this.setState({
      selectedCategorie: target.value,
    });
  }

  categoriesMap() {
    const { categories, selectedCategorie } = this.state;

    return (
      categories.map((categorie) => (
        <ProductCategorieList
          key={ categorie.id }
          categorie={ categorie }
          selected={ selectedCategorie }
          onChange={ this.categorieHandleChange }
        />
      )));
  }

  render() {
    return (
      <div>
        <div>
          <input className="searchInput" type="text" />
          <p data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </p>
        </div>
        <div>
          <Link to="/shopping-cart">
            <img src={ cart } alt="cart" width="30px" />
          </Link>
        </div>
        <div className="filter-category">
          <h2>Categorias:</h2>
          <ul>
            { this.categoriesMap()}
          </ul>
        </div>
      </div>
    );
  }
}
export default Home;
