import React, { Component } from 'react';
import Category from '../components/Category';
import ProductList from '../pages/ProductListPage';
import Cart from '../pages/Cart';

export default class Homepage extends Component {
  state = {
    selectedCategory: '',
  };

  handleCategorySelect = (category) => {
    this.setState({ selectedCategory: category });
  };


  render() {
    return (
      <div className="container mx-auto flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/4 p-4">
          <Category onCategorySelect={this.handleCategorySelect} />
        </div>
        <div className="w-full lg:w-3/4 p-4">
          <ProductList
            selectedCategory={this.state.selectedCategory}
            onAddToCart={this.handleAddToCart}
          />
        </div>
      </div>
    );
  }
}
