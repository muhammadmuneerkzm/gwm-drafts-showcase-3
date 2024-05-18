'use client'
import { addToCart, removeFromCart , open} from "../../../lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import { Qwitcher_Grypen } from "next/font/google";
import Product from "../../../models/Product";
import connectDb from "../../../middleware/mongoose";
import mongoose from "mongoose";
import ProductDetails from "./ProductDetails";
import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



// import { ToastContainer, toast } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App(){
//   const notify = () => toast("Wow so easy!");

//   return (
//     <div>
//       <button onClick={notify}>Notify!</button>
//       <ToastContainer />
//     </div>
//   );
// }




// DOCUMENTATION: https://fkhadra.github.io/react-toastify/introduction



export default function InterFace(props) {
  let product = props.product
  console.log("Product" , product)
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);

  const handleAddToCart = (itemCode, qty, price, name, size, variant) => {
    console.log( itemCode, qty, price, name, size, variant )
    toast.success("Added to cart!",{ position: "bottom-center", theme: 'dark'});
    dispatch(open({}))
    dispatch(addToCart({ itemCode, qty, price, name, size, variant }));
  }; 
    return (
      <>
      <ToastContainer />
<section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={product.img}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
        <h1 className="text-white text-3xl title-font font-medium mb-1">{product.title}</h1>

        <p className="leading-relaxed">{product.desc} </p>
        <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
          <div className="flex">
            <span className="mr-3">Color</span>
            <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
            <button className="border-2 border-gray-800 ml-1 bg-primary-500 rounded-full w-6 h-6 focus:outline-none"></button>
          </div>
          <div className="flex ml-6 items-center">
            <span className="mr-3">Size</span>
            <div className="relative">
              <select className="rounded border border-gray-700 focus:ring-2 focus:ring-primary-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-primary-500 text-black pl-3 pr-10">
                <option>SM</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
              <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                  <path d="M6 9l6 6 6-6"></path>
                </svg>
              </span>
            </div>
          </div>
        </div>
        {/* slug , 1 , 999 , slug , 'small', 'red' */}
        <div className="flex">
          <span className="title-font font-medium text-2xl text-white">${product.price}</span>
          <button className="flex ml-auto text-white bg-gradient-to-r from-primary-500 to-secondary-600 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded"
          onClick={()=>{handleAddToCart(product.slug, 1, product.price ,product.title, "small" , "red")}}>Add To Cart</button>
          <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </div>
</section>
      </>
    )
  }



    
    