import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from './Root'
import CartItem from './CartItem';
import { removeProductFromLocalStorage,clearLocalStorageData } from '../utils/LocalStorage';
import { toast } from 'react-toastify';


  const Cart = () => {
  
  // receive cart context data 
  const [cart,setCart] = useContext(CartContext);

  // for product total price 
  let price = 0;
  for(let product of cart)
  {
     price += product.price * product.quantity;
  }

  // remove cart item from cart and local storage 

  const removeCartItemHandler = id =>{
        let remainingProductOncart = cart.filter(product=>product.id !== id);
        setCart(remainingProductOncart);
        removeProductFromLocalStorage(id);
        toast.warning("Product Deleted !",{autoClose:1000})
        
  }

  const clearCartItem = ()=>{

    setCart([]);
    clearLocalStorageData();
    toast.success("Order Placed !",{autoClose:2000});

  }

  return (
    <div className='flex min-h-screen items-start justify-center bg-gray-100 text-gray-900'>
      <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
        <h2 className='text-xl font-semibold'>
          {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
        </h2>
        <ul className='flex flex-col divide-y divide-gray-700'>
              {
            cart.map(product => <CartItem key={product.id} product={product} removeCartItemHandler={removeCartItemHandler} />)
              }
        </ul>
        <div className='space-y-1 text-right'>
          {price > 0 && <p>Total amount: <span className='font-semibold'>${price}</span></p>}
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
          <Link to='/shop'>
            <button
              type='button'
              className='px-6 py-2 border rounded-full border-cyan-400'
            >
              Back <span className='sr-only sm:not-sr-only'>to shop</span>
            </button>
          </Link>
          {price > 0 && <button onClick={() => clearCartItem()}
            type='button'
            className='px-6 py-2 border font-semibold rounded-full hover:bg-cyan-400 bg-cyan-200 text-gray-800'
          >
            Place Order
          </button>}
        </div>
      </div>
    </div>
  )
}

export default Cart
