// Home.jsx

import React, { useState } from 'react';
import Category from '../components/home/Category';
import Products from '../components/home/Products';
import SliderComp from '../components/home/SliderComp';
import Sorting from '../components/home/Sorting';

const Home = () => {
  const [sort, setSort] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div>
      <SliderComp />
      <Sorting />
      <div className="flex">
        <Category
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Products selectedCategory={selectedCategory} />
      </div>
    </div>
  );
};

export default Home;
