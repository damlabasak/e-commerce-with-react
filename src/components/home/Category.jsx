import React from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getCategories } from '../../redux/categorySlice';

const Category = ({setCategory}) => {
    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories)

    useEffect(() => {
        dispatch(getCategories())
    },[dispatch])

  return (
    <div className='w-1/6 bg-gray-100 p-4'>
        <div className='border-b pb-2 px-2 text-xl font-bold'>KATEGORİLER</div>
        {
            categories?.map((category,i) => (
                <div className='text-lg cursor-pointer hover:bg-gray-200 p-2' key={i}>{category.name}</div>
            ))
        }
    </div>
  )
}

export default Category