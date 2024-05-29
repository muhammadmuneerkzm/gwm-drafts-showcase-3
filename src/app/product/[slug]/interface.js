'use client'
import { addToCart, removeFromCart , open} from "../../../lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import React, { useEffect, useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';
import Head from "next/head";
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
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);


  function generateWhatsAppLink(product) {
    // Start the message with a greeting

    const getUrlFromSlug =(slug)=>{
      return "https://gwm-drafts-showcase-3.vercel.app/product/"+ slug
    }
    let message = "Hello, I'd like to buy:\n\n";
  
    // Add each product to the message
    // products.forEach(product => {
      message += `${product.name} \n(${product.code}, ₹${product.price}, Qty: ${1})\n\n${getUrlFromSlug(product.slug)}\n\n`;
    // });
  
    // Encode the message
    const encodedMessage = encodeURIComponent(message);
  
    // Generate the WhatsApp link
    return `https://wa.me/+918849127330?text=${encodedMessage}`;
  }

  let product = props.product
  const router = useRouter()
  console.log("Product" , product)
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);

  const handleAddToCart = (itemCode, qty, price,name, size, variant) => {
    // console.log( itemCode, qty, price, name, size, variant )
    toast.success("Added to cart!",{ position: "bottom-center", theme: 'dark'});
    dispatch(open({}))
    dispatch(addToCart({ itemCode, qty, price, name, size, variant }));
  }; 

  let products = [
    { brand: "Nibosi", code: "NW4467648", name: "NIBOSI Watch for Men Fashion Business Men Watches Ultra-Thin Waterproof Chronograph Quartz Watches with Stainless Steel Band",  slug: "nibosi-watch-for-men-fashion-business-men-watches-ultra-thin-waterproof-chronograph-quartz-watches-with-stainless-steel-band", price: 2999, image: "/watches/w1.png" },
    { brand: "Fossil", code: "FM6471572", name: "Fossil Men Leather Grant Sport Analog Blue Dial Watch-Fs5237, Band Color-Blue",  slug: "fossil-men-leather-grant-sport-analog-blue-dial-watch-fs5237-band-color-blue", price: 7497, image: "/watches/w2.png" },
    { brand: "Armani", code: "AE3319243", name: "Armani Exchange Silicone Analog White Dial Men Watch-Ax4160, White Band",  slug: "armani-exchange-silicone-analog-white-dial-men-watch-ax4160-white-band",  price: 9995, image: "/watches/w3.png" },
    { brand: "Tommy Hilfiger", code: "TH8888629", name: "Tommy Hilfiger Analog Blue Dial Men's Watch ",  slug: "tommy-hilfiger-analog-blue-dial-men-s-watch", price: 11900, image: "/watches/w4.png" },
    { brand: "Fastrack", code: "FA9204251", name: "Fastrack Analog Unisex-Adult Watch ",  slug: "fastrack-analog-unisex-adult-watch",  price: 804, image: "/watches/w5.png" },
    { brand: "Timex", code: "TA7251169", name: "TIMEX Analog Black Dial Men's Watch",  slug: "timex-analog-black-dial-men-s-watch",  price: 2645, image: "/watches/w6.png" },
    { brand: "Timex", code: "TM1228868", name: "Timex Men Stainless Steel E-Class Surgical Steel Charge Chronograph Analog Black Dial Watch",  slug: "timex-men-stainless-steel-e-class-surgical-steel-charge-chronograph-analog-black-dial-watch",  price: 6897, image: "/watches/w7.png" }
    ]

    if (!isMounted) return null;
    return (
      <>
      <ToastContainer />


<section className="text-gray-400 bg-[#111] body-font overflow-hidden">
{/* <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4"> */}
            {/* <i className='bx bx-cart'></i> */}
            <i class='bx bxs-left-arrow-circle absolute text-lg p-2'  onClick={() => router.back()}></i>
            {/* <AddToCart /> */}
          {/* </button> */}
  <div className="container px-5 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt={product.name} className="lg:w-1/2 w-full lg:h-fit h-fit object-cover object-center rounded" src={product.image} />
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0 md:py-12">
        <div className="flex justify-between">
        <h2 className="text-sm text-gray-500 tracking-widest">{product.brand}</h2>
        <h2 className="text-xs text-gray-600 tracking-normal">{product.code}</h2>
        </div>
        <span className="text-white  text-xl lg:text-3xl md:text-2xl font-medium">{product.name}</span>
        {/* <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
          <i className='bx bx-chevron-down text-gray-600'></i> 
        </div> */}
        <div className="flex flex-col pt-3">
          <span className="title-font font-medium text-2xl text-white"><span className="text-xs align-top px-1.5 pt-1">₹</span>{product.price}</span>
          <div className="flex pt-5">
          <button className="flex text text-white bg-gradient-to-r from-primary-500 to-secondary-600 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded-2xl"
            onClick={() => {window.location = generateWhatsAppLink(product)}}>
              <i className="bx bxl-whatsapp pt-1 pr-1"></i>
            Order Now
          </button>
          <span style={{alignItems: "center"}} onClick={() => { handleAddToCart(product.slug, 1, product.price, product.name, "small", "red") }} className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 flex items-center justify-center text-gray-500 ml-4">
            <i className='bx bx-cart'></i>
          </span>
          </div>

        </div>
      </div>
    </div>
  </div>
</section>

      </>
    )
  }



    
    