'use client'
import React from 'react'
import { addToCart, removeFromCart , open} from "../../lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function AddToCart(props) {
    let {slug ,qty, price, name} = props.info
    // console.log(info)
    const dispatch = useAppDispatch();
    const cart = useAppSelector((state) => state.cart.items);
    const handleAddToCart = (itemCode, qty, price, name, size, variant) => {
        console.log( itemCode, qty, price, name, size, variant )
        toast.success("Added to cart!",{ position: "bottom-center", theme: 'dark'});
        dispatch(open({open : true}))
        dispatch(addToCart({ itemCode, qty, price, name, size, variant }));
      }; 
  return (
      <div>
      <i  
      onClick={()=>{
        handleAddToCart(slug, qty, price ,name)
        console.log("ADDED", slug, qty, price ,name)}} className='bx bx-cart cursor-pointer'></i>       
    </div>
  )
}
