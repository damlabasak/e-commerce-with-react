// Home.jsx

import React, { useState } from 'react';
import Category from '../components/home/Category';
import Products from '../components/home/Products';
import SliderComp from '../components/home/SliderComp';
import Sorting from '../components/home/Sorting';
import landingSliderImage1 from '../assets/slider-image-1.jpeg';
import landingSliderImage2 from '../assets/slider-image-2.jpeg';

const Home = () => {
  const [sort, setSort] = useState('');
  const [selectedCategory, setSelectedCategory] = useState(null);

  const landingSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const landingSliderImages = [landingSliderImage1, landingSliderImage2];

  return (
    <div>
      <SliderComp settings={landingSliderSettings} images={landingSliderImages} />
      <Sorting setSort = {setSort}/>
      <div className="flex">
        <Category
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Products selectedCategory={selectedCategory} sort = {sort} />
      </div>
    </div>
  );
};

export default Home;
