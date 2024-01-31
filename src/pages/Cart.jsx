import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';
import { useLocation } from 'react-router-dom';

const Cart = () => {
    const dispatch = useDispatch();
    const {carts, totalAmount, itemCount} = useSelector(state => state.carts)
    const location = useLocation();
    useEffect(() => {
        dispatch(getCartTotal())
    }, [dispatch])
    
  return (
    <div>
        {
            carts?.length > 0 ? <div>
                {
                    carts?.map((cart, i) => (
                        <CartComp key={i} cart={cart}/>
                    ))
                }
                <hr/>
                <div className="flex items-center justify-end text-l p-3">Toplam Tutar: <span className='font-bold ml-3'> {totalAmount} TL</span></div>
                <hr/>
            </div> 
            : 
            <div>
                Sepetinizde hiçbir şey yok!
            </div>
        }
    </div>
  )
}

export default Cart