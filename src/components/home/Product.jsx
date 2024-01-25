import React from 'react'

const Product = ({product}) => {
console.log(product.image);
  return (
    <div className='w-[230px] p-2 m-2 border rounded-md relative cursor-pointer'>
        <div className='text-center px-3 m-3'>{product.name}</div>
        <div className='text-l font-bold absolute rounded-md bottom-1 right-1 bg-slate-700 text-white p-1'>{product?.price} <span className='text-xs'>TL</span></div>
        <img className='w-[200px] h-[300px] object-cover m-auto' src={product?.image[0]} alt={product?.name} />
    </div>
  )
}

export default Product