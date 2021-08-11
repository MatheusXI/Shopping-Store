import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProductCategorieList from '../Components/ProductCategorieList';
import * as api from '../services/api';
import cart from '../Images/cart.png';
import ProductList from '../Components/ProductList';

class Home extends Component {
  constructor() {
    super();

    this.getCategories = this.getCategories.bind(this);
    this.categorieHandleChange = this.categorieHandleChange.bind(this);
    this.categoriesMap = this.categoriesMap.bind(this);
    this.handlechangeSearch = this.handlechangeSearch.bind(this);
    this.handleClick = this.handleClick.bind(this);

    this.state = {
      categories: [],
      selectedCategorie: '',
      searchText: '',
      listProduct: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.getCategories();
  }

  handlechangeSearch({ target }) {
    this.setState({ searchText: target.value });
  }

  async handleClick() {
    const { selectedCategorie, searchText } = this.state;
    const selectedCategorieRequest = await api
      .getProductsFromCategoryAndQuery(selectedCategorie, searchText);

    this.setState({
      listProduct: selectedCategorieRequest,
      loading: false,
    });
  }

  async getCategories() {
    const categoriesRequest = await api.getCategories();
    this.setState({
      categories: categoriesRequest,
    });
  }

  categorieHandleChange({ target }) {
    console.log(target.value);
    this.setState({
      selectedCategorie: target.value,
    }, () => { this.handleClick(); });
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
    const { listProduct, loading } = this.state;
    document.title = 'Home - Lista De Produtos';

    const empty = (
      <p data-testid="home-initial-message">
        Digite algum termo de pesquisa ou escolha uma categoria.
      </p>
    );
    return (
      <div>
        <div>
          <input
            data-testid="query-input"
            onChange={ this.handlechangeSearch }
            className="searchInput"
            type="text"
          />
          <button
            data-testid="query-button"
            type="button"
            onClick={ this.handleClick }
          >
            Buscar
          </button>
        </div>
        <div>
          <Link to="/shopping-cart" data-testid="shopping-cart-button">
            <img src={ cart } alt="cart" width="30px" />
          </Link>
        </div>
        <div className="filter-category">
          <h2>Categorias:</h2>
          <ul>
            { this.categoriesMap() }
          </ul>
        </div>
        {loading ? empty : <ProductList products={ listProduct } /> }
      </div>
    );
  }
}
export default Home;
