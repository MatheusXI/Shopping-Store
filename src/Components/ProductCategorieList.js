import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ProductCategorieList extends Component {
  render() {
    const { categorie, selected, onChange } = this.props;
    const { id, name } = categorie;

    return (
      <li className="category" data-testid="category">
        <label htmlFor={ id }>
          <input
            type="radio"
            value={ id }
            id={ id }
            className="category-radio"
            checked={ selected === id }
            onChange={ onChange }
          />
          { name }
        </label>
      </li>
    );
  }
}

ProductCategorieList.propTypes = {
  categorie: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
  }).isRequired,
  selected: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default ProductCategorieList;
