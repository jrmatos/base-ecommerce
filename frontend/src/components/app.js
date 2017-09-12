import React, { Component } from 'react';

import SearchBar from '../containers/search_bar';
import ProductsList from '../containers/products_list';

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <ProductsList />
      </div>
    );
  }
}
