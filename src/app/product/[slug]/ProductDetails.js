// import connectDb from "../../../middleware/mongoose";
// import mongoose from "mongoose";
// import Link from "next/link";



// export default async function Product_details(slug) {
//     await connectDb()
//     console.log(slug)

//     let products = await GetAllProducts(slug)
//     console.log(products)



//     return (
//         <>
//             {/* <section className="text-gray-400 bg-gray-900 body-font">
//                 <div className="container px-5 py-24 mx-auto">
//                     <div className="flex flex-wrap -m-4">




//                         {products.map((product)=>{

//                         return (
//                             <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
//                         <Link href={`product/${product.slug}`} passHref={false}>
//                                 <span className="block relative h-48 rounded overflow-hidden">
//                                     <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.img} />
//                                 </span>
//                                 <div className="mt-4">
//                                     <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
//                                     <h2 className="text-white title-font text-lg font-medium">{product.title}</h2>
//                                     <p className="mt-1">${product.price}</p>
//                                 </div>
//                         </Link>
//                             </div>

//                         )})}





















//                     </div>
//                 </div>
//             </section>
//             <h1>Hello, products Page!</h1> */}

// <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//       <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={products.img}/>
//       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
//         <h1 className="text-white text-3xl title-font font-medium mb-1">{products.title}</h1>

//         <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
//         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
//           <div className="flex">
//             <span className="mr-3">Color</span>
//             <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
//             <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
//             <button className="border-2 border-gray-800 ml-1 bg-primary-500 rounded-full w-6 h-6 focus:outline-none"></button>
//           </div>
//           <div className="flex ml-6 items-center">
//             <span className="mr-3">Size</span>
//             <div className="relative">
//               <select className="rounded border border-gray-700 focus:ring-2 focus:ring-primary-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-primary-500 text-white pl-3 pr-10">
//                 <option>SM</option>
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
//               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <span className="title-font font-medium text-2xl text-white">₹{products.price}</span>
//           <button className="flex ml-auto text-white bg-gradient-to-r from-primary-500 to-secondary-600 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded"
//           onClick={()=>{handleAddToCart(slug , 1 , 999 , slug , 'small', 'red')}}>Add To Cart</button>
//           <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//             <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//         </>
//     )
// }

// import Product from "../../../models/Product";

// const GetAllProducts = async (slug) => {
// const product = await Product.findOne(slug);
// console.log(product)
// return product

// }




























































// 'use client'
// import { addToCart, removeFromCart , open} from "../../../lib/features/cart/cartSlice";
// import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
// import { Qwitcher_Grypen } from "next/font/google";
// // import { useEffect, useState } from "react"
// import Product from "../../../models/Product";
// // import mongoose from "mongoose";
// import connectDb from "../../../middleware/mongoose";
// import mongoose from "mongoose";
// import ProductDetails from "./ProductDetails";
// export default function Page({ params }) {

//   const slug = params.slug
//   console.log("slug: ",slug)
  
//   // console.log(product)
//   const dispatch = useAppDispatch();
//   const cart = useAppSelector((state) => state.cart.items);

//   const handleAddToCart = (itemCode, qty, price, name, size, variant) => {
//     console.log( itemCode, qty, price, name, size, variant )
//     dispatch(open({}))
//     dispatch(addToCart({ itemCode, qty, price, name, size, variant }));
//   };





//     return (
//       <>
//       <div className="bg-slate-50 text-slate-800">My Post: {params.slug}</div>
// <ProductDetails slug={params.slug}/>
//       <section className="text-gray-400 bg-gray-900 body-font overflow-hidden">
//   <div className="container px-5 py-24 mx-auto">
//     <div className="lg:w-4/5 mx-auto flex flex-wrap">
//       <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
//       <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
//         <h2 className="text-sm title-font text-gray-500 tracking-widest">BRAND NAME</h2>
//         <h1 className="text-white text-3xl title-font font-medium mb-1">The Catcher in the Rye</h1>

//         <p className="leading-relaxed">Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn. Everyday carry +1 seitan poutine tumeric. Gastropub blue bottle austin listicle pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.</p>
//         <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-800 mb-5">
//           <div className="flex">
//             <span className="mr-3">Color</span>
//             <button className="border-2 border-gray-800 rounded-full w-6 h-6 focus:outline-none"></button>
//             <button className="border-2 border-gray-800 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
//             <button className="border-2 border-gray-800 ml-1 bg-primary-500 rounded-full w-6 h-6 focus:outline-none"></button>
//           </div>
//           <div className="flex ml-6 items-center">
//             <span className="mr-3">Size</span>
//             <div className="relative">
//               <select className="rounded border border-gray-700 focus:ring-2 focus:ring-primary-900 bg-transparent appearance-none py-2 focus:outline-none focus:border-primary-500 text-white pl-3 pr-10">
//                 <option>SM</option>
//                 <option>M</option>
//                 <option>L</option>
//                 <option>XL</option>
//               </select>
//               <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
//                 <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
//                   <path d="M6 9l6 6 6-6"></path>
//                 </svg>
//               </span>
//             </div>
//           </div>
//         </div>
//         <div className="flex">
//           <span className="title-font font-medium text-2xl text-white">$58.00</span>
//           <button className="flex ml-auto text-white bg-gradient-to-r from-primary-500 to-secondary-600 border-0 py-2 px-6 focus:outline-none hover:bg-primary-600 rounded"
//           onClick={()=>{handleAddToCart(slug , 1 , 999 , slug , 'small', 'red')}}>Add To Cart</button>
//           <button className="rounded-full w-10 h-10 bg-gray-800 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
//             <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
//               <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
//             </svg>
//           </button>
//         </div>
//       </div>
//     </div>
//   </div>
// </section>
//       </>
//     )
//   }



    
    