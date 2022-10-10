import React, { useContext } from 'react'
import { CartContext, ProductContext } from './Root';
import Product from './Product';
import {addToLocalStorage} from '../utils/LocalStorage';
import { toast } from 'react-toastify';

const Shop = () => {

  const products = useContext(ProductContext);

  const [cart,setCart] = useContext(CartContext);

  // add to cart handler 

  const addToCartHandler = selectedProdut =>{
    
        let productExistOnCart = cart.find(product=>product.id === selectedProdut.id);

        let newCart =[];

        if(!productExistOnCart)
        {
            selectedProdut.quantity = 1;
            newCart= [...cart,selectedProdut];

        }else{
          
             const restProduct = cart.filter(product=>product.id !== selectedProdut.id);
             productExistOnCart.quantity +=1;

             newCart = [...restProduct,productExistOnCart];
        }

        setCart(newCart);
        addToLocalStorage(selectedProdut.id);
        toast.success("Product Added",{autoClose:1000});

  }

  return (
    <div className='px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
      <div className='grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8'>
            {
              products.map(product=><Product key={product.id} product={product}  addToCartHandler={addToCartHandler}/>)
            }
      </div>
    </div>
  )
}

export default Shop
