// Products.jsx

import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';
import { IoMdArrowRoundBack, IoMdArrowRoundForward } from 'react-icons/io';

const Products = ({ selectedCategory }) => {
  const dispatch = useDispatch();
  const { products, productsStatus } = useSelector((state) => state.products);

  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 4;
  const endOffset = itemOffset + itemsPerPage;

  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category === selectedCategory.name)
    : products;

  const currentItems = filteredProducts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(filteredProducts.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % filteredProducts.length;
    setItemOffset(newOffset);
  };

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch, selectedCategory]);

  return (
    <div>
      {productsStatus === 'LOADING' ? (
        <Loading />
      ) : (
        <>
          <div className='flex flex-wrap'>
            {currentItems?.map((product, i) => (
              <Product key={i} product={product} />
            ))}
          </div>
          <ReactPaginate
            className='paginate'
            breakLabel='...'
            nextLabel={<IoMdArrowRoundForward />}
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            previousLabel={<IoMdArrowRoundBack />}
            renderOnZeroPageCount={null}
          />
        </>
      )}
    </div>
  );
};

export default Products;
