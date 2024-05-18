'use client'

import React, { useRef, useState } from 'react'
import Link from 'next/link'
// import { FaPlusSquare } from "react-icons/fa";
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import '../../styles/Navbar.css'
import { setCart, saveCart, addToCart, removeFromCart, open } from '../../lib/features/cart/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Order from '../../models/Order';
import { useRouter } from 'next/navigation';


export default function Page() {
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [city, setCity] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');
  const dispatch = useAppDispatch();
  let cart = useAppSelector((state) => state.cart.items);
  let amount = useAppSelector((state) => state.cart.subtotal);
  

  const placeOrder = async (e)=>{
    e.preventDefault()
    // console.log({cart, name , email, address , pincode })
    const data = {cart, name ,email, amount, address ,phone, pincode , city , state }
    let res = await fetch("http://localhost:3000/api/placeOrder", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    
    let response = await res.json()
    // console.log(response)
    // console.log(response.success)
    if(response.success){
      toast(response.message,{ position: "bottom-center", theme: 'dark'});
      setTimeout(()=>{
        //Commenting For Sometime
        console.log(response.orderId)
        router.push('/order?id='+ response.orderId)
      }, 2000)
    }else{
      if(response.message){
        toast.error(response.message,{ position: "bottom-center", theme: 'dark'});
      }
      else{
        toast.error("There Ocuured an error While Placing Your order",{ position: "bottom-center", theme: 'dark'});
      }

    }
  }


  const handleChange = async (e)=>{
    const { value } = e.target;
 
    if (e.target.name === 'name') {
       setName(value);
    } else if (e.target.name === 'email') {
       setEmail(value);
    } else if (e.target.name === 'address') {
      setAddress(value);
    } else if (e.target.name === 'state') {
      setState(value);
    } else if (e.target.name === 'city') {
      setCity(value);
    } else if (e.target.name === 'pincode') {
      setPincode(value);
    } else if (e.target.name === 'phone') {
      setPhone(value);
    }
  }
  const openStateCart = useAppSelector((state) => state.cart.openState);
  // let cart = useAppSelector((state) => state.cart.items);
  const handleAddToCart = (itemCode, qty, price, name, size, variant) => {
    // console.log("Get Ready...")
    dispatch(addToCart({ itemCode, qty, price, name, size, variant }));
  };

  const handleRemoveFromCart = (itemCode, qty) => {
    dispatch(removeFromCart({ itemCode, qty }));
  };
  return (
    <>
      <div className="container p-8 pb-40">
      <ToastContainer/>
        <h1 className="font-bold text-3xl  text-white my-8 text-center">Checkout</h1>
        <h2 className="font-semibold">1. Delivery Details</h2>
        <section className="delivery-details">
        <div className="mx-auto flex flex-col my-4 md:w-full lg:w-auto lg:flex-row md:flex-col sm:flex-col ">
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Name</label>
              <input onChange={handleChange}value={name} type="email" id="email" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email</label>
              <input onChange={handleChange} value={email}  type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          </div>
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Address</label>
              <textarea onChange={handleChange} name="address" id="address" value={address} cols="30" rows="3" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="mx-auto flex flex-col my-4 md:w-full lg:w-auto lg:flex-row md:flex-col sm:flex-col ">
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Pincode</label>
              <input onChange={handleChange} value={pincode} type="number" id="pincode" name="pincode" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Phone No.</label>
              <input onChange={handleChange} value={phone} type="number" id="phone"  name="phone" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{WebkitAppearance: 'none', MozAppearance: 'textfield', appearance: 'none',}}/>
            </div>

          </div>
          </div>

          <div className="mx-auto flex flex-col my-4 md:w-full lg:w-auto lg:flex-row md:flex-col sm:flex-col ">
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">State</label>
              <input onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">city</label>
              <input onChange={handleChange} value={city} type="text" id="city" name="city" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          </div>
          
          </section>
          <h2 className="font-semibold">2. Review Cart Items</h2>
{/* Cart side bar */}
<section className="review">
<div className={`cart-sidebar cart-review ml-1 w-full m-8 h-auto transition-translate`}>

          {/* <h3 className='m-12 font-extrabold text-transparent text-center bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600'>Shopping Cart</h3> */}
          <ol className="list-decimal">
          {Object.keys(cart).map((i) => {
              return (
                <li key={i} className="cart-item">
          <i className='bx bx-x absolute right-0 top-0 text-base my-1 text-red-500 cursor-pointer' ></i>

                  <img src='https://dummyimage.com/420x260' alt='' />
                  <div className="info">
                  <h6 className='text-sm'>{cart[i].name}</h6>
                  <div className="content">
                    <span className='qty text-sm'>

                      <i className='bx bxs-minus-square' onClick={() => {
                        handleRemoveFromCart(i, 1, cart[i].price, cart[i].name, cart[i].variant, cart[i].size)
                       }} ></i>


                      {cart[i].qty}
                      <i className='bx bxs-plus-square' onClick={() => {
                        handleAddToCart(i, 1, cart[i].price, cart[i].name, cart[i].variant, cart[i].size)
                      }} ></i>
                      

                    </span>
                    <div className="price">₹{cart[i].price}</div>
                  </div>
                  </div>
                </li>



              )
            })}

          </ol>
          {Object.keys(cart).length === 0 && <div className="empty-cart text-center my-8">
            <i className='bx bx-shopping-bag text-6xl text-black'></i>
            <p className="text-gray-500 mt-4">Your cart is empty.</p>
          </div>}
      

        </div>
      </section>


      <button onClick={placeOrder} className='flex mx-auto rounded text-white bg-gradient-to-r from-primary-400 to-secondary-600 border-0 py-2 px-5 disabled:opacity-75 focus:outline-none'>
      <i class='bx bxs-rocket m-1 pr-1'></i>Place Order</button>

      </div>


    </>
  )
}



