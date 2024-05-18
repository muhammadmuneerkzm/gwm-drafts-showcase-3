// components/Sidebar.js
'use client'
import Link from 'next/link';
// components/Sidebar.js
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { setCart, saveCart, addToCart, removeFromCart, open } from '../../../lib/features/cart/cartSlice';
import './sidebar.css'
import { useRef } from 'react';
import { useRouter } from 'next/navigation';

const Sidebar = ({element}) => {
  const sideMenuRef = useRef();
  const AdminBody = useRef();
  const darkModeRef = useRef()
  const lightModeRef = useRef() 
  
  const router = useRouter()

  let location = useAppSelector((state) => state.nav.location);

  console.log("Location = ",location)


  // const location = getLocation()
  console.log(location)
  console.log()
  const openSidebar = () => {
    sideMenuRef.current.classList.remove('closed');
    sideMenuRef.current.classList.add('open');
  };

  const closeSidebar = () => {
    sideMenuRef.current.classList.remove('open');
    sideMenuRef.current.classList.add('closed');
  };

  const toggleDarkMode = () => {
    AdminBody.current.classList.toggle('dark-mode-variables');
    const darkModeIcons = [darkModeRef, lightModeRef]
    darkModeIcons.forEach(icon => icon.current.classList.toggle('active'));
  };

  return (
    <div ref={AdminBody} className='dash-body'>
      <div className="container">
      <aside ref={sideMenuRef} className="dashSidebar closed">  
  <div className="toggle">
    <div className="logo">
      <img src="images/logo.png" alt="Logo" />
      <h2 className='text-md'>Smoz<span className="danger">Dashboard</span></h2>
    </div>
    <div className="close" id="close-btn" onClick={closeSidebar}>
      <span className="material-icons-sharp">
        close
      </span>
    </div>
  </div>

  <div className="dashboardSidebar">
    <Link href={'/admin'} className={`${location === '' ? "active" : ""}`}>
      <span className="material-icons-sharp">
        dashboard
      </span>
      <h3>Dashboard</h3>
    </Link>
    <Link href={'/admin/addProduct'} className={`${location === 'addProduct' ? "active" : ""}`}>
      <span className="material-icons-sharp">
        add_circle
      </span>
      <h3>Add Product</h3>
    </Link>
    {/* <Link href={'/admin/analytics'} className={`${location === 'analytics' ? "active" : ""}`}>
      <span className="material-icons-sharp">
        insights
      </span>
      <h3>Analytics</h3>
    </Link> */}
    <Link href={'/admin/viewProducts'} className={`${location === 'viewProducts' ? "active" : ""}`}>
      <span className="material-icons-sharp">
        watch
      </span>
      <h3>View Products</h3>
    </Link>
    <Link href={'/admin/imageUploader'} className={`${location === 'imageUploader' ? "active" : ""}`}>
      <span className="material-icons-sharp">
        camera
      </span>
      <h3>Image Uploader</h3>
    </Link>
    <Link href={'/admin/orders'} className={`${location === 'orders' ? "active" : ""}`}>
      <span className="material-icons-sharp">
        verified
      </span>
      <h3>Orders</h3>
      <span className="message-count">27</span>
    </Link>
    <Link href={'/admin'}>
      <span className="material-icons-sharp">
        logout
      </span>
      <h3>Logout</h3>
    </Link>
  </div>
      </aside>
        <section className='admin-navbar'>
          <div className="nav">
            <button id="menu-btn" onClick={openSidebar}>
              <span className="material-icons-sharp">
                menu
              </span>
            </button>
            {/* <div className="dark-mode" onClick={toggleDarkMode}>
              <span ref={lightModeRef} className="material-icons-sharp active">
                light_mode
              </span>
              <span ref={darkModeRef} className="material-icons-sharp">
                dark_mode
              </span>
            </div> */}

            <div className="profile">
              <div className="info">
                <p>Hey, <b>Reza</b></p>
                <small className="text-muted">Admin</small>
              </div>
              <div className="profile-photo">
                <img src="images/profile-3.jpg" alt="Profile" />
              </div>
            </div>
          </div>
        </section>
        <div className='dashElementBox'>
      {element}
    </div>
      </div>
    
    </div>

  );
};

export default Sidebar;
