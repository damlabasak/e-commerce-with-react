// Category.jsx

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../redux/categorySlice';

const Category = ({ selectedCategory, setSelectedCategory }) => {
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <div className='lg:w-1/6 sm:w-1 bg-gray-100 p-4'>
        <div className='border-b pb-2 px-2 text-l font-bold'>KATEGORİLER</div>
        <div className={`text-base cursor-pointer hover:bg-gray-200 p-2 ${
            !selectedCategory ? 'font-bold' : ''
          }`} onClick={() => handleCategoryClick()}>
            Tüm Ürünler
        </div>
      {categories?.map((category, i) => (
        <div
          key={i}
          onClick={() => handleCategoryClick(category)}
          className={`text-base cursor-pointer hover:bg-gray-200 p-2 ${
            selectedCategory === category ? 'font-bold' : ''
          }`}
        >
          {category.name}
        </div>
      ))}
    </div>
  );
};

export default Category;
