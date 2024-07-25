import React, { Component } from 'react';
import axios from 'axios';

export default class Category extends Component {
  state = {
    categories: []
  };

  componentDidMount() {
    axios.get('https://fakestoreapi.com/products/categories')
      .then(response => {
        this.setState({ categories: response.data });
      })
      .catch(error => {
        console.error('Error fetching the categories:', error);
      });
  }

  render() {
    return (
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
            </tr>
          </thead>
          <tbody>
            {this.state.categories.map((category, index) => (
              <tr 
                key={index} 
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 cursor-pointer hover:bg-gray-100 dark:hover:bg-gray-600"
                onClick={() => this.props.onCategorySelect(category)}
              >
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  {category}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
