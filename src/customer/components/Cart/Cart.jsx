import React, { useEffect } from 'react'
import CartItem from './CartItem'
import { Divider,Button } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../../../State/Cart/Action.js'

const Cart = () => {

    const navigate=useNavigate();
    const {cart}=useSelector((store)=>store)
    const dispatch=useDispatch();
    const handleCheckOut=()=>{
        navigate("/checkout?step=2")
    }

    useEffect(()=>{
        dispatch(getCart())
    },[cart.cartItems])
  return (
    <div>
        <div className='lg:grid grid-cols-3 lg:px-16 relative  mt-10'>
          <div className='col-span-2 '>
          {cart.cart?.cartItems ? (
    cart.cart.cartItems?.map((item) => <CartItem item={item} />)
  ) : (
    <p>Your cart is empty.</p>
  )}
            </div>
            <div  className='px-5 sticky top-0 h-[100vh] mt-5 lg:mt-0 '>
                <div className='border rounded-md shadow-lg p-2'>
                    <p className='uppercase font-bold opacity-60 pb-4 '>Price Detail</p>
                    <Divider/>
                    <div className='space-y-3 font-semibold mb-4 '>
                        <div className='flex justify-between pt-3 text-black'>
                            <span>Price</span>
                            <span>₹{cart.cart?.totalPrice}</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Discount</span>
                            <span className='text-green-600'>-₹{cart.cart?.discounte}</span>
                        </div>
                        <div className='flex justify-between pt-3 text-green-600'>
                            <span>Delivery Charge</span>
                            <span>₹Free</span>
                        </div>
                        <div className='flex justify-between pt-3'>
                            <span>Total Amount</span>
                            <span className=' text-green-700 font-bold'>₹{cart.cart?.totalDiscountedPrice}</span>
                        </div>

                    </div>
                </div>
                <div className='mt-5'>
                    <Button onClick={handleCheckOut} variant="contained" className='w-full' sx={{px:"1.5rem", py:".7rem ",bgcolor:"#4F45E4",mt:"1rem"}}>
                        CheckOut
                    </Button>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Cart