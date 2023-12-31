import React from 'react'
import { useSelector } from 'react-redux'
import ItemsList from './ItemsList'

const Cart = () => {
    const cartItems = useSelector((store)=> store.cart.items )
    console.log(cartItems,"cartttitemmmsssś")
  return (
  <div className='text-center m-4 p-4'> 
  <h1 className='text-2xl font-bold'>Cart</h1>
  <ItemsList items={cartItems}>

  </ItemsList>
  </div>
    
  )
}
export default Cart
