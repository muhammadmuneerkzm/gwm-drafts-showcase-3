"use client";

import React, { useRef, useState } from "react";
// import { GetServerSideProps } from 'next'
import Link from "next/link";
// import { FaPlusSquare } from "react-icons/fa";
import { useEffect } from "react";
import "../styles/Navbar.css";
import { setUser } from "../lib/features/user/userSlice";
import { useAppDispatch, useAppSelector } from "../lib/hooks";
import products from "../data/products";
import {
  setCart,
  saveCart,
  addToCart,
  removeFromCart,
  open,
} from "../lib/features/cart/cartSlice";
var jwt = require("jsonwebtoken");

export default function Navbar() {
  const [btn_one, setBtn_one] = useState("active");
  const [btn_two, setBtn_two] = useState("");
  const [btn_three, setBtn_three] = useState("");
  const [btn_four, setBtn_four] = useState("");
  const [btn_five, setBtn_five] = useState("");

  const [side_bar_state, setSide_bar_state] = useState("");
  const [btn_class_state, setBtn_class_state] = useState("bx-menu-alt-left");

  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.items);
  const openStateCart = useAppSelector((state) => state.cart.openState);
  let cart = useAppSelector((state) => state.cart.items);
  let subtotal = useAppSelector((state) => state.cart.subtotal);
  let userEmail = useAppSelector((state) => state.user.email);
  let userName = useAppSelector((state) => state.user.name);
  let token;
  useEffect(() => {
    const fetchUserData = async () => {
      let res = await fetch("http://localhost:3000/api/getUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ token }),
      });

      let data = await res.json();
      console.log(data);
      if (data.success) {
        dispatch(setUser({ email: data.email, token: token, name: data.name }));
      } else {
        localStorage.removeItem("token");
      }
    };

    token = localStorage.getItem("token");
    if (token) {
      fetchUserData();
    }
  }, []);

  // For Cart
  useEffect(() => {
    const fetchCartData = async () => {
      try {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        dispatch(setCart(cartData));
        // console.log("cart data", cartData)
      } catch (error) {
        // console.log("The Cart Was Reset..");
        dispatch(setCart({}));
      }
    };

    fetchCartData();
  }, [dispatch]);

  const handleAddToCart = (itemCode, qty, price, name, size, variant) => {
    // console.log("Get Ready...")
    dispatch(addToCart({ itemCode, qty, price, name, size, variant }));
  };

  const handleRemoveFromCart = (itemCode, qty) => {
    dispatch(removeFromCart({ itemCode, qty }));
  };

  const NavClickHandler = (num) => {
    setBtn_one("");
    setBtn_two("");
    setBtn_three("");
    setBtn_four("");
    setBtn_five("");
    if (num === 1) {
      setBtn_one("active");
    } else if (num === 2) {
      setBtn_two("active");
    } else if (num === 3) {
      setBtn_three("active");
    } else if (num === 4) {
      setBtn_four("active");
    } else if (num === 5) {
      setBtn_five("active");
    }
  };
  const SideClickHandler = () => {
    if (side_bar_state === "") {
      setSide_bar_state("open");
      setBtn_class_state("bx-menu-alt-right");
    } else {
      setSide_bar_state("");
      setBtn_class_state("bx-menu-alt-left");
    }
  };

  const toggleCart = () => {
    let p = new Promise(() => {
      dispatch(open({}));
    });
    p.then(() => {
      // console.log(openStateCart)
    });
  };
  const ref = useRef();


  // let products = [
  //   { brand: "Nibosi", code: "NW4467648", name: "NIBOSI Watch for Men Fashion Business Men Watches Ultra-Thin Waterproof Chronograph Quartz Watches with Stainless Steel Band",  slug: "nibosi-watch-for-men-fashion-business-men-watches-ultra-thin-waterproof-chronograph-quartz-watches-with-stainless-steel-band", price: 2999, image: "/watches/w1.png" },
  //   { brand: "Fossil", code: "FM6471572", name: "Fossil Men Leather Grant Sport Analog Blue Dial Watch-Fs5237, Band Color-Blue",  slug: "fossil-men-leather-grant-sport-analog-blue-dial-watch-fs5237-band-color-blue", price: 7497, image: "/watches/w2.png" },
  //   { brand: "Armani", code: "AE3319243", name: "Armani Exchange Silicone Analog White Dial Men Watch-Ax4160, White Band",  slug: "armani-exchange-silicone-analog-white-dial-men-watch-ax4160-white-band",  price: 9995, image: "/watches/w3.png" },
  //   { brand: "Tommy Hilfiger", code: "TH8888629", name: "Tommy Hilfiger Analog Blue Dial Men's Watch ",  slug: "tommy-hilfiger-analog-blue-dial-men-s-watch", price: 11900, image: "/watches/w4.png" },
  //   { brand: "Fastrack", code: "FA9204251", name: "Fastrack Analog Unisex-Adult Watch ",  slug: "fastrack-analog-unisex-adult-watch",  price: 804, image: "/watches/w5.png" },
  //   { brand: "Timex", code: "TA7251169", name: "TIMEX Analog Black Dial Men's Watch",  slug: "timex-analog-black-dial-men-s-watch",  price: 2645, image: "/watches/w6.png" },
  //   { brand: "Timex", code: "TM1228868", name: "Timex Men Stainless Steel E-Class Surgical Steel Charge Chronograph Analog Black Dial Watch",  slug: "timex-men-stainless-steel-e-class-surgical-steel-charge-chronograph-analog-black-dial-watch",  price: 6897, image: "/watches/w7.png" }
  //   ]


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
      if(encodedMessage){
        return `https://wa.me/+918849127330?text=${encodedMessage}`;
      }else{
        return null;
      }
    }
  return (
    <>
      <div className={`sidebar ${side_bar_state}`}>
        <div className="logo-details">
          {/* <div className="style-gradient"></div> */}
          <i className="bx bxs-watch icon"></i>
          <div className="logo_name pt-1">Prokicks</div>
          <i
            onClick={() => {
              SideClickHandler();
            }}
            className={`${btn_class_state} bx`}
            id="btn"
          ></i>
        </div>
        <ul className="nav-list">
          {/* <li>
              <i className='bx bx-search' ></i>
              {/* <input type="text" placeholder="Search..." /> }
              <span className="tooltip">Search</span>
            </li>*/}

          <li>
            <Link href="/">
              <i className="bx bx-home"></i>
              <span className="links_name">Home</span>
            </Link>
            <span className="tooltip">Home</span>
          </li>

          {/* <li>
            <Link href="/categories">
              <i className="bx bx-store"></i>
              <span className="links_name">Categories</span>
            </Link>
            <span className="tooltip">Categories</span>
          </li> */}

          {/* <li>
            <Link href="/products">
              <i className='bx bx-category'></i>
              <span className="links_name">Products</span>
            </Link>
            <span className="tooltip">Products</span>
          </li> */}

          <li>
            <Link href="/products">
              <i className="bx bx-category"></i>

              <span className="links_name">Products</span>
            </Link>
            <span className="tooltip">Products</span>
          </li>

          {/* <li>
            <Link href="/trending">
              <i className='bx bxs-hot'></i>
              <span className="links_name">Trending</span>
            </Link>
            <span className="tooltip">Trending</span>
          </li> */}

<li>
  <Link href="/contact">
    <i className="bx bx-phone"></i>
    <span className="links_name">Contact</span>
  </Link>
  <span className="tooltip">Contact</span>
</li>


<li>
  <Link href="/about">
  <i class='bx bx-info-circle'></i>
    <span className="links_name">About</span>
  </Link>
  <span className="tooltip">About</span>
</li>

          {/* <li>
            <Link href="/">
              <i className='bx bx-chat' ></i>
              <span className="links_name">Messages</span>
            </Link>
            <span className="tooltip">Messages</span>
          </li> */}

          {/* <li>
            <Link href="/">
              <i className='bx bx-pie-chart-alt-2' ></i>
              <span className="links_name">Analytics</span>
            </Link>
            <span className="tooltip">Analytics</span>
          </li> */}

          {/* <li>
            <Link href="/">
              <i className='bx bx-folder' ></i>
              <span className="links_name">File Manager</span>
            </Link>
            <span className="tooltip">Files</span>
          </li> */}

          {/* <li>
            <Link href="/myorders">
              <i class="bx bx-purchase-tag-alt"></i>
              <span className="links_name">My Orders</span>
            </Link>
            <span className="tooltip">My Orders</span>
          </li> */}

          <li>
            <Link href="/cart">
              <i className="bx bx-cart"></i>
              <span className="links_name">Cart</span>
            </Link>
            <span className="tooltip">Cart</span>
          </li>

          {/* <li>
            <Link href="/wishlist">
              <i className="bx bx-heart"></i>
              <span className="links_name">Wishlist</span>
            </Link>
            <span className="tooltip">Wishlist</span>
          </li> */}

          {/* <li>
            <Link href="/">
              <i className='bx bx-cog' ></i>
              <span className="links_name">Setting</span>
            </Link>
            <span className="tooltip">Setting</span>
          </li> */}

          {/* <li className='absolute bottom-0'>
            <Link href="/">
              <i className='bx bx-log-in' ></i>
              <span className="links_name">Login</span>
            </Link>
            <span className="tooltip">Login</span>
          </li> */}

          {/* When Logged in */}
          {/* <li className="profile logged">
            <div className="profile-details">
              <div className="name_job">
                <div className="name">{userName} Hello</div>
                <div className="job flex">
                  <span className="m-0 flex justify-end">Explore</span>
                </div>
              </div>
            </div>
            <i className="bx bx-log-out" id="log_out"></i>
          </li> */}
        </ul>
      </div>

      <nav className="navbar">
        <div className="menu-icon">
          <i
            onClick={() => {
              SideClickHandler();
            }}
            className={`${btn_class_state} bx`}
            id="btn"
          ></i>
        </div>
        <div id="mainTitle">
        <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600">
                Prokicks
              </span>
        </div>
        {/* <div className="Brand-name">
          <b>B</b>rand
        </div> */}
        <div className="search-icon">
          {/* <i className="bx bx-search cursor-pointer"></i> */}
          <i onClick={(e) => { e.preventDefault(); toggleCart();  }}
            className="bx bx-cart cursor-pointer"
          ></i>
        </div>

        {/* Cart side bar */}
        <div
          ref={ref}
          className={`cart-sidebar cart-side absolute top-full overflow-y-scroll pb-24 right-0 ml-1 transition-transform ${
            openStateCart ? "cartOpen" : "cartClose"
          }`}
        >
          <i
            onClick={toggleCart}
            className="bx bx-x absolute right-0 m-3 text-2xl cursor-pointer"
          ></i>

          {/* bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 */}
          <h3 className="mt-12 mb-6 font-bold text-center text-gray-700">
            Shopping Cart
          </h3>
          <hr />

          <ol className="list-decimal">
            {Object.keys(cart).map((i) => {
              return (
                <li key={i} className="cart-item">
                  <i  onClick={() => {
                            handleRemoveFromCart(
                              i,
                              cart[i].qty,
                              cart[i].price,
                              cart[i].name,
                              cart[i].variant,
                              cart[i].size
                            );
                          }} className="bx bx-x absolute right-0 top-0 text-base my-1 text-red-500 cursor-pointer"></i>
                     <img
            src={products.find(product => product.slug === i)?.image}
            alt={cart[i].name}
          />       <div className="info flex flex-col justify-between">
                    <h6 className="text-sm pt-1">{cart[i].name}</h6>
                    <div className="content">
                      <span className="qty text-sm">
                        <i
                          className="bx bxs-minus-square"
                          onClick={() => {
                            handleRemoveFromCart(
                              i,
                              1,
                              cart[i].price,
                              cart[i].name,
                              cart[i].variant,
                              cart[i].size
                            );
                          }}
                        ></i>
                        {cart[i].qty}
                        <i
                          className="bx bxs-plus-square"
                          onClick={() => {
                            handleAddToCart(
                              i,
                              1,
                              cart[i].price,
                              cart[i].name,
                              cart[i].variant,
                              cart[i].size
                            );
                          }}
                        ></i>
                      </span>
                      <div className="price">₹{cart[i].price}</div>
                    </div>
                  </div>
                </li>
              );
            })}
            {Object.keys(cart).length === 0 && (
              <div className="empty-cart text-center my-12">
                <i className="bx bx-shopping-bag text-6xl text-gray-500"></i>
                <p className="text-gray-400 mt-4">Your cart is empty.</p>
              </div>
            )}
          </ol>

          <div className="bottom-section">
            <hr />
            <div className="subtotal mt-3">
              <h2 className="text-sm">Subtotal:</h2>
              <h2 className="text-sm">₹{subtotal}</h2>
            </div>

            <Link href={"/cart"}>
              <button
                disabled={Object.keys(cart).length === 0}
                className=" cart-checkout-btn mx-auto rounded-full text-transparent bg-clip-text bg-gray-700 text-sm font-bold border-0 disabled:opacity-75 disabled:cursor-default focus:outline-none"
              >
                VIEW CART
              </button>
            </Link>
            {/* <Link href={}> */}
              <button
               onClick={() => {window.location = generateWhatsAppLink(cart)}}
                className={` cart-checkout-btn mx-auto rounded-full text-white bg-gradient-to-r from-primary-400 to-secondary-600 border-0 disabled:opacity-60 focus:outline-none ${
                  Object.keys(cart).length === 0 ? "" : "hover:bg-secondary-600"
                }`}
                disabled={Object.keys(cart).length === 0}
              >
                <i className="bx bxl-whatsapp pt-1.5 pr-1 text-white"></i>Order Now
              </button>
            {/* </Link> */}
          </div>
        </div>

        {
          // <div className="w-96 bg-white shadow-lg fixed right-0 top-0 h-screen overflow-y-auto p-6">
          //       {/* Top section */}
          //       <div className="flex items-center justify-between px-4 pb-8 pt-2 border-b border-gray-300">
          //         <h2 className="text-xs uppercase text-gray-700">Shopping Cart</h2>
          //         <button className="text-black hover:text-gray-700 focus:outline-none">
          //           <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"></path>
          //           </svg>
          //         </button>
          //       </div>
          //       {/* Thin horizontal line */}
          //       <hr className="border-gray-300 py-4"/>
          //       {/* Cart items section */}
          //       <div className="px-4 mb-3">
          //         {/* Cart item */}
          //         <div className="flex items-center justify-between border rounded-lg p-4">
          //       <div className="flex items-center">
          //         <img src="product-image.jpg" alt="Product Image" className="w-16 h-16 object-cover rounded-lg" />
          //         <div className="ml-4">
          //           <h3 className="text-lg font-semibold text-black">{productName}</h3>
          //         </div>
          //       </div>
          //       <div className="flex items-center">
          //         <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-l-md focus:outline-none">
          //           <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4"></path>
          //           </svg>
          //         </button>
          //         <span className="mx-2 text-black">1</span>
          //         <button className="w-8 h-8 flex items-center justify-center border border-gray-300 rounded-r-md focus:outline-none">
          //           <svg className="w-4 h-4 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v12M6 12h12"></path>
          //           </svg>
          //         </button>
          //       </div>
          //       <span className="text-gray-600 text-sm">${productPrice}</span>
          //     </div>
          //         {/* End of cart item */}
          //         {/* Repeat this cart item section for multiple items */}
          //       </div>
          //       {/* Simple horizontal line */}
          //       <hr className="border-gray-300"/>
          //       {/* View cart link */}
          //       <div className="text-center py-2">
          //         <a href="#" className="text-blue-500 hover:underline">View Cart</a>
          //       </div>
          //       {/* Checkout button */}
          //       <div className="text-center">
          //         <button className="bg-blue-500 text-white px-4 py-2 rounded-full hover:bg-blue-600 focus:outline-none">Checkout</button>
          //       </div>
          //     </div>
        }
      </nav>

      <header className="header">
        <div className="mobile-navigation">
          <ul>
            <li
              onClick={() => {
                NavClickHandler(1);
              }}
              className={`list ${btn_one}`}
            >
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="icon">
                  <i className="bx bx-home"></i>
                </span>
                <span className="text">Home</span>
                {/* <span className="circle"></span> */}
              </Link>
            </li>

            <li
              onClick={() => {
                NavClickHandler(2);
              }}
              className={`list ${btn_two}`}
            >
              <Link
                href="/products"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="icon">
                  <i className="bx bx-category"></i>
                </span>
                <span className="text">Products</span>
                {/* <span className="circle"></span> */}
              </Link>
            </li>

            <li>
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="icon noActivationCart">
                  <i
                    className="bx bx-cart-alt"
                    onClick={(e) => {
                      e.preventDefault();
                      toggleCart();
                    }}
                  ></i>
                </span>
                {/* <span className="text">Cart</span> */}
                {/* <span className="circle"></span> */}
              </Link>
            </li>

            <li
              onClick={() => {
                NavClickHandler(4);
              }}
              className={`list ${btn_four}`}
            >
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="icon">
                  <i className="bx bx-purchase-tag-alt"></i>
                </span>
                <span className="text">Photos</span>
                {/* <span className="circle"></span> */}
              </Link>
            </li>

            <li
              onClick={() => {
                NavClickHandler(5);
              }}
              className={`list ${btn_five}`}
            >
              <Link
                href="/"
                onClick={(e) => {
                  e.preventDefault();
                }}
              >
                <span className="icon">
                  <i className="bx bx-user"></i>
                </span>
                <span className="text">Settings</span>
                {/* <span className="circle"></span> */}
              </Link>
            </li>

            {/* 
            <div className="indicator-box">
              <div className="indicator-container">
                <div className="indicator"></div>
              </div>
            </div> */}
          </ul>
        </div>
      </header>
    </>
  );
}
