import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBasket } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';
import { useNavigate } from 'react-router-dom';

const NavbarRight = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {itemCount} = useSelector(state => state.carts)

  useEffect(() => {
    dispatch(getCartTotal())
  }, [dispatch])
  
  return (
    <div className='flex items-center gap-8'>
      <div className='flex items-center border p-3 rounded-full bg-gray-200'>
        <input className='bg-gray-200 outline-none' type="text" placeholder='Ara...' />
        <IoSearchOutline size={25}/>
      </div>
      <IoMdHeartEmpty size={25}/>
      <div onClick={() => navigate("cart")} className="relative cursor-pointer">
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{itemCount}</div>
        <BsBasket size={25}/>
      </div>
    </div>
  )
}

export default NavbarRight