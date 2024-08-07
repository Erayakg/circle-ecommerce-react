import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import ProductList from '../pages/ProductListPage';
import Cart from './Cart';

function Homepage() {

  const [selectedCategory,setSelectedCategory]=useState(null);


  return (
    <div>            
        <Navbar setSelectedCategory={setSelectedCategory}  />
      <div className="container mx-auto flex flex-col lg:flex-row">

        <div className="w-full  p-4">
          <ProductList
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
      </div>
  )
}

export default Homepage