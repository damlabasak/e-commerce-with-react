import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../redux/cartSlice';
import CartComp from '../components/cart/CartComp';

const Cart = () => {
    const dispatch = useDispatch();
    const {carts, totalAmount, ItemsCount} = useSelector(state => state.carts)
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