import React, { useState } from 'react'
import SliderComp from '../home/SliderComp';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../redux/cartSlice';

const DetailComp = ({productDetail}) => {
    const [quantity, setQuantity] = useState(0);
    const [showTooltip, setShowTooltip] = useState(false);

    const dispatch = useDispatch();

    const productDetailSliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const detailSliderImages = productDetail?.image || [];

    const decrement = () => {
        if(quantity > 0)
        setQuantity(quantity-1)
    }

    const increment = () => {
        if (quantity < 10) {
            setQuantity(quantity + 1);
          } else {
            setShowTooltip(true);
      
            setTimeout(() => {
              setShowTooltip(false);
            }, 3000);
          }
    }


    const addBasket = () => {
        dispatch(addToCart({id: productDetail?.id, title: productDetail?.name, image: productDetail?.image?.[0], price: productDetail?.price, quantity: quantity}))
    }

  return (
    <div className='flex gap-10 my-10'>
        <div className="w-[400px] object-cover">
            <SliderComp settings={productDetailSliderSettings} images={detailSliderImages}/>
        </div>
        <div className="">
            <div className='font-bold'>{productDetail?.name}</div>
            <div className='text-sm my-5'>{productDetail?.description}</div>
            <div className="text-sm"><span className='font-bold'>{productDetail?.rating?.rate}</span>/5  <span className='text-xs text-gray-500'>({productDetail?.rating?.count} Değerlendirme)</span></div>
            <div className="my-5 text-xl max-w-24 text-center border-2 border-orange-400 rounded-md">{productDetail?.price} <span>TL</span></div>
            <hr />
            <div className="flex items-center gap-5 my-5">
                <div className='text-l cursor-pointer' onClick={decrement}>-</div>
                <input className='text-xl w-6 text-center font-bold' type="text" value={quantity} onChange={() => {}}/>
                <div className='text-l cursor-pointer' onClick={increment}>+</div>
                {showTooltip && (
                <div className="text-sm text-red-600 ml-4">Aynı üründen en fazla 10 adet satın alabilirsiniz.</div>
            )}
            </div>
            <div className='my-4 border w-[170px] text-l rounded-md bg-gray-200 cursor-pointer h-10 flex items-center justify-center hover:bg-orange-200'
                onClick={addBasket}
            >
                Sepete Ekle
            </div>
        </div>
    </div>
  )
}

export default DetailComp