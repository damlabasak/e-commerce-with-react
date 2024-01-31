import React from 'react'
import SliderComp from '../home/SliderComp';

const DetailComp = ({productDetail}) => {

    console.log(productDetail);
    const productDetailSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const detailSliderImages = productDetail?.image || [];

  return (
    <div className='flex gap-10 my-10'>
        <div className="w-[400px] object-cover">
            <SliderComp settings={productDetailSliderSettings} images={detailSliderImages}/>
        </div>
        <div className="">
            <div>{productDetail?.name}</div>
        </div>
    </div>
  )
}

export default DetailComp