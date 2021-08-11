import React, { Component } from 'react';

class Assesment extends Component {
  render() {
    return (
      <div>
        <h1>Avaliações</h1>
        <form>
          <textarea
            data-testid="product-detail-evaluation"
            type="text"
            name="feedback"
            rows="5"
            cols="50"
          >
            Digite aqui sobre o que achou do produto aqui:
          </textarea>
        </form>

      </div>
    );
  }
}

export default Assesment;
