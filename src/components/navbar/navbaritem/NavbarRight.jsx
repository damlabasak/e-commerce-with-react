import React, { useEffect } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { IoMdHeartEmpty } from "react-icons/io";
import { BsBasket } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../../../redux/cartSlice';

const NavbarRight = () => {
  const dispatch = useDispatch();
  const {carts} = useSelector(state => state.carts)

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
      <div className="relative">
        <div className='absolute -top-3 -right-3 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center'>{carts?.length}</div>
        <BsBasket size={25}/>
      </div>
    </div>
  )
}

export default NavbarRight