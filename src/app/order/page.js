'use client'
// 'use server'
import mongoose from "mongoose";
import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
// import { useAppDispatch, useAppSelector } from '../lib/hooks';

export default function Page(context) {
  const router = useRouter()
  // let userEmail = useAppSelector((state) => state.user.email);
  // let userName = useAppSelector((state) => state.user.name);
  let token;
  // let order;
  const [order, setOrder] = useState(null)
  useEffect(()=>{
    const FetchOrder =  async (token , orderId) =>{
      let data = JSON.stringify({token, orderId})
      console.log("DATA: " , data)
      // console.log("INSIDE FETCH ORDER: ", token, "ORDERID: ",orderId)
        let a = await fetch('http://localhost:3000/api/fetchOrder',{
          method: "POST",
          headers: {
            'Content-Type' : "application/json"
          },
          body: data
        })
      
      let res = await a.json()
      console.log(res)
      if(!res.success){
        if(res.logged){
          router.push("/orders")
        }else{
          router.push("/")

        }
      }
      else{
        setOrder(res.order)
      }
    }
    token = localStorage.getItem('token')
    if(!token){
      router.push('/')
    }
    else{ 
      let orderId = context.searchParams.id
      FetchOrder(token , orderId)
    }
  
}, [])

  // console.log(orde)
  return (
    <>
    {order &&
      <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
          <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
            <h2 className="text-sm title-font text-gray-500 tracking-widest">SMOZ</h2>
            <h1 className="text-white text-3xl title-font font-medium mb-4">Order Id: #{order.orderId}</h1>
            <div className="flex mb-4">
              <a className="flex-grow text-primary-400 border-b-2 border-primary-500 py-2 text-lg px-1">Description</a>
              <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Reviews</a>
              <a className="flex-grow border-b-2 border-gray-800 py-2 text-lg px-1">Details</a>
            </div>
            <p className="leading-relaxed mb-4">Your order has been successfully placed</p>
            {Object.keys(order.products).map((key)=>{
              return (
                <div key={order.products[key]} className="border-t border-gray-800 py-2 grid grid-cols-3">
                  <span className=" w-full text-gray-500">{order.products[key]['name']}</span>
                  <span className=" w-full ml-auto text-center text-white">{order.products[key]['qty']}</span>
                  <span className=" w-full ml-auto text-center text-white">{order.products[key]['price']}</span>
                </div>)
            })} 

          


            {/*<div className="border-t border-gray-800 py-2 grid grid-cols-3">
         <span className=" w-full text-gray-500">Rolex</span>
        <span className=" w-full ml-auto text-center text-white">2</span>
        <span className=" w-full ml-auto text-center text-white">1499</span>
      </div> */}


            {/* <div className="border-t border-gray-800 mb-6 py-2 grid grid-cols-3">
        <span className=" w-full text-gray-500">Titan</span>
        <span className=" w-full ml-auto text-center text-white">19</span>
        <span className=" w-full ml-auto text-center text-white">12</span>
      </div> */}


            <div className="flex mt-6">
              <span className=" w-full title-font font-medium text-2xl text-white">$58.00</span>
              <button className="flex ml-auto text-white bg-primary-500 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded">Button</button>
              <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                </svg>
              </button>
            </div>
          </div>
          <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400" />
        </div>
      </div>
    </section>
    }
    
    </>
  )

}



const GetOrder = async (id) => {
  await mongoose.connect('mongodb://localhost:27017/smoz')
    .then(() => console.log('Connected to MongoDB'))
    .catch((error) => console.error('MongoDB connection error:', error));
  if (!mongoose.connections[0].readyState) {
  }
  // console.log("THIS IS ID", id)
  const order = await Order.findOne({ orderId: id });

  // console.log("THIS IS ORDER", order)
  return order
}
