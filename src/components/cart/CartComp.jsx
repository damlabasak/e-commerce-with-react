import React from 'react'
import { AiTwotoneDelete } from "react-icons/ai";
import { useNavigate } from 'react-router-dom';
import { removeFromCart } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';

const CartComp = ({cart}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categoryNameForUrl = cart?.category.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const productNameForUrl = cart?.title.replace(/\s+/g, '-').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

  return (
    <div className='my-10 flex items-center justify-between'>
        <img className="w-[150px] object-cover cursor-pointer" onClick={() => navigate(`/products/${categoryNameForUrl}/${productNameForUrl}/${cart?.id}`)} src={cart?.image} alt="" />
        <div className="my-5 w-[250px]">{cart?.title}</div>
        <div className="">{cart?.quantity} Adet</div>
        <div className="">{cart?.price} TL</div>
        <div className="cursor-pointer" title='Sepetten Çıkar' onClick={() => dispatch(removeFromCart(cart?.id))}><AiTwotoneDelete size={25}/></div>
    </div>
  )
}

export default CartComp