'use client'
import { Inter } from 'next/font/google'
import Navbar from '../components/Nav-bar'
import "../styles/globals.css"
import StoreProvider from '../lib/storeProvider.jsx';
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { setCart, saveCart, addToCart, removeFromCart, open } from '../lib/features/cart/cartSlice';
import { getUser } from '../lib/features/user/userSlice'
const inter = Inter({ subsets: ['latin'] })
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
import "../styles/homepage.css"
import Expired from "./Expired"



const Side = React.memo(() => {
  // Your sidebar content here
  return <div><Sidebar/></div>;
});

const Nav = React.memo(() => {
  // Your navbar content here
  return <div><Navbar/></div>;
});

export default function RootLayout({ children , params}) {

  const router = useRouter();

  useEffect(() => {
    // router.events.on('routeChangeComplete', (url) => {
    //   console.log(`completely routed to ${url}`);
    // });
  }, []);
  return (
    <StoreProvider>
    <html lang="en">
    <head>
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Sharp" rel="stylesheet"/>
    <link href='https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css' rel='stylesheet' />
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" rel="stylesheet"/>
    </head>
      <body className={inter.className}>
        
        {/* <Expired/> */}
        <Nav/>
        <div className='child-box bg-[#212121] min-h-screen'>
        {children}
        </div>
        </body>
    </html> 
    </StoreProvider>
  )
}
