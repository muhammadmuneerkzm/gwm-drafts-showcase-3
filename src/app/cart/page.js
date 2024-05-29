"use client";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import {
  setCart,
  saveCart,
  addToCart,
  removeFromCart,
  open,
} from "../../lib/features/cart/cartSlice";
import Link from "next/link";
import products from "../../data/products";

function page() {
  const dispatch = useAppDispatch();
  const cart = useAppSelector((state) => state.cart.items);
    const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
  const limit = 40
  let subtotal = useAppSelector((state) => state.cart.subtotal);
  function truncate(str, custom = 0) {
    if(str){
      if (custom == 0) {
        if (str.length > limit) {
          return str.substring(0, limit - 3) + '...';
        }
        return str;
      } else {
        if (str.length > custom) {
          return str.substring(0, custom - 3) + '...';
        }
        return str;
      }
    }
  }



  function generateWhatsAppLink(cart) {
    // Start the message with a greeting

    const getUrlFromSlug =(slug)=>{
      return "https://gwm-drafts-showcase-3.vercel.app/product/"+ slug
    }
    let message = "Hello, I'd like to buy:\n\n";
  
    // Add each product to the message
    Object.keys(cart).forEach(slug => {
      let product = cart[slug]
      message += `${product.name} \n(${products.find(product => product.slug === slug)?.code}, ₹${product.price}, Qty: ${product.qty})\n\n${getUrlFromSlug(slug)}\n\n`;

    });
  
    // Encode the message
    const encodedMessage = encodeURIComponent(message);
  
    // Generate the WhatsApp link
    return `https://wa.me/+918849127330?text=${encodedMessage}`;
  }

  const handleAddToCart = (itemCode, qty, price, name, size, variant) => {
    // console.log("Get Ready...")
    dispatch(addToCart({ itemCode, qty, price, name, size, variant }));
  };

  const handleRemoveFromCart = (itemCode, qty) => {
    dispatch(removeFromCart({ itemCode, qty }));
  };

  const openLink = (event)=>{
      event.preventDefault(); // Prevent the default action of the button click
      const link = generateWhatsAppLink(cart);
      window.open(link, '_blank');
  }
  // let products = [
  //   { brand: "Nibosi", code: "NW4467648", name: "NIBOSI Watch for Men Fashion Business Men Watches Ultra-Thin Waterproof Chronograph Quartz Watches with Stainless Steel Band",  slug: "nibosi-watch-for-men-fashion-business-men-watches-ultra-thin-waterproof-chronograph-quartz-watches-with-stainless-steel-band", price: 2999, image: "/watches/w1.png" },
  //   { brand: "Fossil", code: "FM6471572", name: "Fossil Men Leather Grant Sport Analog Blue Dial Watch-Fs5237, Band Color-Blue",  slug: "fossil-men-leather-grant-sport-analog-blue-dial-watch-fs5237-band-color-blue", price: 7497, image: "/watches/w2.png" },
  //   { brand: "Armani", code: "AE3319243", name: "Armani Exchange Silicone Analog White Dial Men Watch-Ax4160, White Band",  slug: "armani-exchange-silicone-analog-white-dial-men-watch-ax4160-white-band",  price: 9995, image: "/watches/w3.png" },
  //   { brand: "Tommy Hilfiger", code: "TH8888629", name: "Tommy Hilfiger Analog Blue Dial Men's Watch ",  slug: "tommy-hilfiger-analog-blue-dial-men-s-watch", price: 11900, image: "/watches/w4.png" },
  //   { brand: "Fastrack", code: "FA9204251", name: "Fastrack Analog Unisex-Adult Watch ",  slug: "fastrack-analog-unisex-adult-watch",  price: 804, image: "/watches/w5.png" },
  //   { brand: "Timex", code: "TA7251169", name: "TIMEX Analog Black Dial Men's Watch",  slug: "timex-analog-black-dial-men-s-watch",  price: 2645, image: "/watches/w6.png" },
  //   { brand: "Timex", code: "TM1228868", name: "Timex Men Stainless Steel E-Class Surgical Steel Charge Chronograph Analog Black Dial Watch",  slug: "timex-men-stainless-steel-e-class-surgical-steel-charge-chronograph-analog-black-dial-watch",  price: 6897, image: "/watches/w7.png" }
  //   ]

  if (!isMounted) return null;

  return (
    <>
     {/* <div className="absolute z-[1000] top-0 left-0 w-full h-full opacity-50 blur-xl">
Cart is empty
     </div>
      <h1 className="md:hidden text-2xl text-center py-5 font-semibold">My cart</h1>
      <div className=" min-h-screen flex flex-col pb-20 md:pb-28">
        <div className="container mx-auto flex flex-col flex-1 p-2 h-fit">
          <div className="hidden text-lg md:grid gap-0" style={{gridTemplateColumns : '1fr 3fr 1fr 1.5fr 1.5fr'}}>
            <div className=""></div>
            <div className="p-4">Product</div>
            <div className="p-4">Price</div>
            <div className="p-4">Quantity</div>
            <div className="p-4">Sub Total</div>
          </div>
<div className="flex justify-center">
  <div className="h-0.5 md:h-1 w-[95%] bg-gray-800"></div>
</div>

{Object.keys(cart).map((key)=>{
  let product = cart[key]
  if(product){
    return(
      <>
                <div className="hidden w-full gap-0 md:grid py-4 items-center" style={{gridTemplateColumns : '1fr 3fr 1fr 1.5fr 1.5fr'}}>
              <div className="md:ml-2 md:p-0 lg:p-4 flex items-center md:col-span-1">
                <div className="lg:w-1/3 md:w-1/6 flex justify-center">
                <i onClick={() => {
                              handleRemoveFromCart(
                                key,
                                product.qty,
                                product.price,
                                product.name,
                                product.variant,
                                product.size
                              );
                            }} className="bx bx-x  text-red-500 text-md mr-2 cursor-pointer"></i>
                </div>
                <div className="lg:w-2/3 md:w-5/6 flex justify-center ">
                <img src={products.find(product => product.slug === key)?.image} alt="Watch" className="mr-2 w-full" />
                </div>
              </div>
              <div className="p-4 md:col-span-1">{truncate(product.name, 45)}</div>
              <div className="p-4 md:col-span-1">{product.price}</div>
              <div className="p-4 md:col-span-1"><span className="text-sm align-middle">
                          <i
                            className="bx bxs-minus-square text-base p-1 text-gray-400 align-middle"
                            onClick={() => {
                              handleRemoveFromCart(
                                key,
                                1,
                                product.price,
                                product.name,
                                product.variant,
                                product.size
                              );
                            }}
                          ></i>
                          {product.qty}
                          <i
                            className="bx bxs-plus-square  text-base p-1 text-gray-400 align-middle"
                            onClick={() => {
                              handleAddToCart(
                                key,
                                1,
                                product.price,
                                product.name,
                                product.variant,
                                product.size
                              );
                            }}
                          ></i>
                        </span></div>
              <div className="p-4 md:col-span-1">{product.price * product.qty}</div>
  
            </div>
  
            <div className="flex justify-center">
    <div className="h-0.5 w-[85%] bg-gray-800"></div>
  </div>
  
            <div className="p-1  flex md:hidden py-3">
              <div className="w-2/6 sm:w-1/6 py-1">
              <img src={products.find(product => product.slug === key)?.image} alt="Watch" className="mr-2 w-full" />
        
              </div>
  
              <div className="flex flex-col flex-grow px-2 ">
  
                <div className="flex justify-between gap-2 pb-4 items-start sm:h-auto h-16">
                  <span className="text-md">{truncate(product.name)}</span>
                  <i className="bx bx-x w-6 my-1 content-end text-red-500"></i>
                </div>
                <div className="flex flex-col gap-2 text-sm">
                  <div className="flex justify-between ">
                    <p>Price :</p>
                    <p>{product.price}</p>
                  </div>
                  <div className="flex justify-between">
                    <p>Quantity :</p>
                    <span className=" "><span className="text-sm align-middle">
                          <i
                            className="bx bxs-minus-square text-base p-1 text-gray-400 align-middle"
                            onClick={() => {
                              handleRemoveFromCart(
                                key,
                                1,
                                product.price,
                                product.name,
                                product.variant,
                                product.size
                              );
                            }}
                          ></i>
                          {product.qty}
                          <i
                            className="bx bxs-plus-square  text-base pl-1 text-gray-400 align-middle"
                            onClick={() => {
                              handleAddToCart(
                                key,
                                1,
                                product.price,
                                product.name,
                                product.variant,
                                product.size
                              );
                            }}
                          ></i>
                        </span></span>
                  </div>
                  <div className="flex justify-between">
                    <p>Sub Total :</p>
                    <p><span className="text-xs py-1.5 px-0.5 align-top">₹</span>{product.price * product.qty}</p>
                  </div>
                </div>
              </div>
            </div>
      </>
    )
  }
})}


          <div className="fixed bg-[#111] h-20 md:h-28 items-center py-4 bottom-0 flex md:left-[78px] px-4 w-full md:w-[calc(100vw-78px)] justify-between">
            <div className="md:mb-4">
              <h2 className="text-white">GrandTotal</h2>
              <p className="text-green-500">₹{subtotal}</p>
            </div>
            <div>
              <button type="button" className="bg-gradient-to-r from-primary-500 to-secondary-700 text-white py-2 px-4 rounded-lg md:mb-4 md:mt-4" onClick={openLink}><i className="bx bxl-whatsapp pr-1 text-sm pt-1"></i>Order Now</button>
            </div>
          </div>
        </div>
      </div> */}
<>
  {/* Blur effect and empty cart message */}
  {Object.keys(cart).length === 0 && (
    <div className="absolute inset-0 flex items-center justify-center z-50 bg-opacity-50 backdrop-blur-sm sm:pb-14">
      <div className="text-center h-fit">
      <i className="bx bx-shopping-bag text-6xl text-gray-100 pb-6"></i>
        <h2 className="text-2xl font-bold mb-4">Your cart is empty</h2>
        <p className="text-lg">Add some products to your cart!</p>
        <Link href="/products">
          <button type="button"  className="my-6 btn btn-primary text-white bg-gradient-to-r from-primary-400 to-secondary-600 px-6 py-2 rounded-full">
          Shop Now
          </button>
        </Link>
      </div>
    </div>
  )}

  <h1 className="md:hidden text-2xl text-center py-5 font-semibold">My cart</h1>
  <div className="flex flex-col pb-20 md:pb-28">
    <div className="container mx-auto flex flex-col flex-1 p-2 h-fit">
      <div className="hidden text-lg md:grid gap-0" style={{ gridTemplateColumns: '1fr 3fr 1fr 1.5fr 1.5fr' }}>
        <div className=""></div>
        <div className="p-4">Product</div>
        <div className="p-4">Price</div>
        <div className="p-4">Quantity</div>
        <div className="p-4">Sub Total</div>
      </div>
      <div className="flex justify-center">
        <div className="h-0.5 md:h-1 w-[95%] bg-gray-800"></div>
      </div>

      {Object.keys(cart).map((key) => {
        let product = cart[key];
        if (product) {
          return (
            <>
              {/* Sample product row */}

              <div className="hidden w-full gap-0 md:grid py-4 items-center" style={{ gridTemplateColumns: '1fr 3fr 1fr 1.5fr 1.5fr' }}>
                <div className="md:ml-2 md:p-0 lg:p-4 flex items-center md:col-span-1">
                  <div className="lg:w-1/3 md:w-1/6 flex justify-center">
                    <i
                      onClick={() => {
                        handleRemoveFromCart(key, product.qty, product.price, product.name, product.variant, product.size);
                      }}
                      className="bx bx-x text-red-500 text-md mr-2 cursor-pointer"
                    ></i>
                  </div>
                  <div className="lg:w-2/3 md:w-5/6 flex justify-center ">
                    <img src={products.find((product) => product.slug === key)?.image} alt="Watch" className="mr-2 w-full" />
                  </div>
                </div>
                <Link href={`/product/${key}`}>
                <div className="p-4 md:col-span-1 cursor-pointer">{truncate(product.name, 45)}</div>
                </Link>
                <div className="p-4 md:col-span-1">{product.price}</div>
                <div className="p-4 md:col-span-1">
                  <span className="text-sm align-middle">
                    <i
                      className="bx bxs-minus-square text-base p-1 text-gray-400 align-middle"
                      onClick={() => {
                        handleRemoveFromCart(key, 1, product.price, product.name, product.variant, product.size);
                      }}
                    ></i>
                    {product.qty}
                    <i
                      className="bx bxs-plus-square text-base p-1 text-gray-400 align-middle"
                      onClick={() => {
                        handleAddToCart(key, 1, product.price, product.name, product.variant, product.size);
                      }}
                    ></i>
                  </span>
                </div>
                <div className="p-4 md:col-span-1">{product.price * product.qty}</div>
              </div>

              <div className="flex justify-center">
                <div className="h-0.5 w-[85%] bg-gray-800"></div>
              </div>

              {/* Mobile cart tags */}
              <div className="p-1 flex md:hidden py-3">
                <div className="w-2/6 sm:w-1/6 py-1">
                  <img src={products.find((product) => product.slug === key)?.image} alt="Watch" className="mr-2 w-full" />
                </div>

                <div className="flex flex-col flex-grow px-2">
                  <div className="flex justify-between gap-2 pb-4 items-start sm:h-auto h-16">

                  <Link href={`/product/${key}`}>
                  <span className="text-md">{truncate(product.name)}</span>
                  </Link>
                 
                    <i
                      className="bx bx-x w-6 my-1 content-end text-red-500"
                      onClick={() => {
                        handleRemoveFromCart(key, product.qty, product.price, product.name, product.variant, product.size);
                      }}
                    ></i>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex justify-between">
                      <p>Price :</p>
                      <p>{product.price}</p>
                    </div>
                    <div className="flex justify-between">
                      <p>Quantity :</p>
                      <span className="text-sm align-middle">
                        <i
                          className="bx bxs-minus-square text-base p-1 text-gray-400 align-middle"
                          onClick={() => {
                            handleRemoveFromCart(key, 1, product.price, product.name, product.variant, product.size);
                          }}
                        ></i>
                        {product.qty}
                        <i
                          className="bx bxs-plus-square text-base pl-1 text-gray-400 align-middle"
                          onClick={() => {
                            handleAddToCart(key, 1, product.price, product.name, product.variant, product.size);
                          }}
                        ></i>
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <p>Sub Total :</p>
                      <p>
                        <span className="text-xs py-1.5 px-0.5 align-top">₹</span>
                        {product.price * product.qty}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}

      <div className="fixed bg-[#111] h-20 md:h-28 items-center py-4 bottom-0 flex md:left-[78px] px-4 w-full md:w-[calc(100vw-78px)] justify-between">
        <div className="md:mb-4">
          <h2 className="text-white">GrandTotal</h2>
          <p className="text-green-500">₹{subtotal}</p>
        </div>
        <div>
          <button type="button" className="bg-gradient-to-r from-primary-500 to-secondary-700 text-white py-2 px-4 rounded-lg md:mb-4 md:mt-4" onClick={openLink}>
            <i className="bx bxl-whatsapp pr-1 text-sm pt-1"></i>Order Now
          </button>
        </div>
      </div>
    </div>
  </div>
</>









    </>
  );
}

export default page;




// import { useState, useEffect } from "react";
// import { useAppDispatch, useAppSelector } from "../../lib/hooks";
// import { addToCart, removeFromCart } from "../../lib/features/cart/cartSlice";

// function Page() {
//   const dispatch = useAppDispatch();
//   const cart = useAppSelector((state) => state.cart.items);
//   const subtotal = useAppSelector((state) => state.cart.subtotal);
//   const limit = 40;

//   const [isMounted, setIsMounted] = useState(false);

//   useEffect(() => {
//     setIsMounted(true);
//   }, []);

//   function truncate(str, custom = 0) {
//     if (str) {
//       if (custom === 0) {
//         if (str.length > limit) {
//           return str.substring(0, limit - 3) + '...';
//         }
//         return str;
//       } else {
//         if (str.length > custom) {
//           return str.substring(0, custom - 3) + '...';
//         }
//         return str;
//       }
//     }
//   }

//   const handleAddToCart = (itemCode, qty, price, name, size, variant) => {
//     dispatch(addToCart({ itemCode, qty, price, name, size, variant }));
//   };

//   const handleRemoveFromCart = (itemCode, qty) => {
//     dispatch(removeFromCart({ itemCode, qty }));
//   };

//   const products = [
//     { brand: "Nibosi", code: "NW4467648", name: "NIBOSI Watch for Men Fashion Business Men Watches Ultra-Thin Waterproof Chronograph Quartz Watches with Stainless Steel Band", slug: "nibosi-watch-for-men-fashion-business-men-watches-ultra-thin-waterproof-chronograph-quartz-watches-with-stainless-steel-band", price: 2999, image: "/watches/w1.png" },
//     { brand: "Fossil", code: "FM6471572", name: "Fossil Men Leather Grant Sport Analog Blue Dial Watch-Fs5237, Band Color-Blue", slug: "fossil-men-leather-grant-sport-analog-blue-dial-watch-fs5237-band-color-blue", price: 7497, image: "/watches/w2.png" },
//     { brand: "Armani", code: "AE3319243", name: "Armani Exchange Silicone Analog White Dial Men Watch-Ax4160, White Band", slug: "armani-exchange-silicone-analog-white-dial-men-watch-ax4160-white-band", price: 9995, image: "/watches/w3.png" },
//     { brand: "Tommy Hilfiger", code: "TH8888629", name: "Tommy Hilfiger Analog Blue Dial Men's Watch ", slug: "tommy-hilfiger-analog-blue-dial-men-s-watch", price: 11900, image: "/watches/w4.png" },
//     { brand: "Fastrack", code: "FA9204251", name: "Fastrack Analog Unisex-Adult Watch ", slug: "fastrack-analog-unisex-adult-watch", price: 804, image: "/watches/w5.png" },
//     { brand: "Timex", code: "TA7251169", name: "TIMEX Analog Black Dial Men's Watch", slug: "timex-analog-black-dial-men-s-watch", price: 2645, image: "/watches/w6.png" },
//     { brand: "Timex", code: "TM1228868", name: "Timex Men Stainless Steel E-Class Surgical Steel Charge Chronograph Analog Black Dial Watch", slug: "timex-men-stainless-steel-e-class-surgical-steel-charge-chronograph-analog-black-dial-watch", price: 6897, image: "/watches/w7.png" }
//   ];

//   if (!isMounted) return null;

//   return (
//     <>
//       <h1 className="md:hidden text-2xl text-center py-5 font-semibold">My cart</h1>
//       <div className="min-h-screen flex flex-col pb-20 md:pb-28">
//         <div className="container mx-auto flex flex-col flex-1 p-2 h-fit">
//           <div className="hidden text-lg md:grid gap-0" style={{ gridTemplateColumns: '1fr 3fr 1fr 1.5fr 1.5fr' }}>
//             <div className=""></div>
//             <div className="p-4">Product</div>
//             <div className="p-4">Price</div>
//             <div className="p-4">Quantity</div>
//             <div className="p-4">Sub Total</div>
//           </div>
//           <div className="flex justify-center">
//             <div className="h-0.5 md:h-1 w-[95%] bg-gray-800"></div>
//           </div>

//           {Object.keys(cart).map((key) => {
//             let product = cart[key];
//             if (product) {
//               return (
//                 <>
//                   <div className="hidden w-full gap-0 md:grid py-4 items-center" style={{ gridTemplateColumns: '1fr 3fr 1fr 1.5fr 1.5fr' }}>
//                     <div className="md:ml-2 md:p-0 lg:p-4 flex items-center md:col-span-1">
//                       <div className="lg:w-1/3 md:w-1/6 flex justify-center">
//                         <i className="bx bx-x text-red-500 text-md mr-2 cursor-pointer"></i>
//                       </div>
//                       <div className="lg:w-2/3 md:w-5/6 flex justify-center ">
//                         <img src={products.find(product => product.slug === key)?.image} alt="Watch" className="mr-2 w-full" />
//                       </div>
//                     </div>
//                     <div className="p-4 md:col-span-1">{truncate(product.name, 45)}</div>
//                     <div className="p-4 md:col-span-1">{product.price}</div>
//                     <div className="p-4 md:col-span-1"><span className="text-sm align-middle">
//                       <i
//                         className="bx bxs-minus-square text-base p-1 text-gray-400 align-middle"
//                         onClick={() => {
//                           handleRemoveFromCart(
//                             key,
//                             1,
//                             product.price,
//                             product.name,
//                             product.variant,
//                             product.size
//                           );
//                         }}
//                       ></i>
//                       {product.qty}
//                       <i
//                         className="bx bxs-plus-square  text-base p-1 text-gray-400 align-middle"
//                         onClick={() => {
//                           handleAddToCart(
//                             key,
//                             1,
//                             product.price,
//                             product.name,
//                             product.variant,
//                             product.size
//                           );
//                         }}
//                       ></i>
//                     </span></div>
//                     <div className="p-4 md:col-span-1">{product.price * product.qty}</div>
//                   </div>

//                   <div className="flex justify-center">
//                     <div className="h-0.5 w-[85%] bg-gray-800"></div>
//                   </div>

//                   <div className="p-1 flex md:hidden py-3">
//                     <div className="w-2/6 sm:w-1/6 py-1">
//                       <img src={products.find(product => product.slug === key)?.image} alt="Watch" className="mr-2 w-full" />
//                     </div>

//                     <div className="flex flex-col flex-grow px-2 ">
//                       <div className="flex justify-between gap-2 pb-4 items-start sm:h-auto h-16">
//                         <span className="text-md">{truncate(product.name)}</span>
//                         <i className="bx bx-x w-6 my-1 content-end text-red-500"></i>
//                       </div>
//                       <div className="flex flex-col gap-2 text-sm">
//                         <div className="flex justify-between ">
//                           <p>Price :</p>
//                           <p>{product.price}</p>
//                         </div>
//                         <div className="flex justify-between">
//                           <p>Quantity :</p>
//                           <span className=" "><span className="text-sm align-middle">
//                             <i
//                               className="bx bxs-minus-square text-base p-1 text-gray-400 align-middle"
//                               onClick={() => {
//                                 handleRemoveFromCart(
//                                   key,
//                                   1,
//                                   product.price,
//                                   product.name,
//                                   product.variant,
//                                   product.size
//                                 );
//                               }}
//                             ></i>
//                             {product.qty}
//                             <i
//                               className="bx bxs-plus-square  text-base pl-1 text-gray-400 align-middle"
//                               onClick={() => {
//                                 handleAddToCart(
//                                   key,
//                                   1,
//                                   product.price,
//                                   product.name,
//                                   product.variant,
//                                   product.size
//                                 );
//                               }}
//                             ></i>
//                           </span></span>
//                         </div>
//                         <div className="flex justify-between">
//                           <p>Sub Total :</p>
//                           <p>{product.price * product.qty}</p>
//                         </div>
//                       </div>
//                     </div>
//                   </div>

//                   <div className="flex justify-center md:hidden">
//                     <div className="h-0.5 w-[95%] bg-gray-800"></div>
//                   </div>
//                 </>
//               );
//             }
//           })}
//         </div>
//       </div>
//     </>
//   );
// }

// export default Page;
