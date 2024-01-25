import React from 'react'
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts } from '../../redux/productSlice';
import Loading from '../Loading';
import Product from './Product';
import ReactPaginate from 'react-paginate';
import { IoMdArrowRoundBack } from "react-icons/io";
import { IoMdArrowRoundForward } from "react-icons/io";

const Products = ({category}) => {
    const dispatch =  useDispatch();
    const {products, productsStatus} = useSelector(state => state.products)

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 4;
    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
        `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };

    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch, category])

  return (
    <div>
        {
            productsStatus === "LOADING" ? <Loading/> :
            <>
                <div className='flex flex-wrap'>
                    {
                        currentItems?.map((product,i) => (
                            <Product key={i} product={product}/>
    ))
                    }
                </div>
                <ReactPaginate
                    className='paginate'
                    breakLabel="..."
                    nextLabel={<IoMdArrowRoundForward/>}
                    onPageChange={handlePageClick}
                    pageRangeDisplayed={5}
                    pageCount={pageCount}
                    previousLabel={<IoMdArrowRoundBack/>}
                    renderOnZeroPageCount={null}
                />
            </>
        }
    </div>
  )
}

export default Products