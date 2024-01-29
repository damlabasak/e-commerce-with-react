import React from 'react'
import SliderComp from '../home/SliderComp';
import { useNavigate } from 'react-router-dom';

const Product = ({product}) => {

  const productSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const landingSliderImages = [product?.image[0], product?.image[1], product?.image[2]];

  const navigate = useNavigate();

  const categoryNameForUrl = product?.category.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const productNameForUrl = product?.name.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return (
      <div onClick={() => navigate(`products/${categoryNameForUrl}/${productNameForUrl}/${product?.id}`)} className='product-card w-[230px] p-2 m-2 border rounded-md relative cursor-pointer'>
          <div className='text-center text-sm px-3 m-3'>{product.name}</div>
          <SliderComp settings={productSliderSettings} images={landingSliderImages}/>
          <div className='text-sm text-white font-bold absolute rounded-md bottom-4 right-3 bg-productPriceBgColor p-1'>{product?.price} <span className='text-xs'>TL</span></div>
      </div>
  )
}

export default Product