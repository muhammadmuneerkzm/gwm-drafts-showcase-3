"use client";
import React from 'react'
import "../styles/Home-Hero.css"

import "../styles/Navbar.css"
import Link from 'next/link'
import Image from 'next/image';


import { TypeAnimation } from "react-type-animation";
import Home_card from './Home-card';
// import { motion } from "framer-motion";

export default function Home_hero_section() {
  return (
    <>
      <div className="container">
        <div className="hero-top-section flex justify-center items-center flex-col h-56">
          <b style={{ fontSize: '1em'}} className='font-extrabold'>WELCOME TO</b>
          <span style={{ fontSize: '3em'}} className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-700">
            SMOZ STORE!
          </span>
        </div>   
      <div>
        <Home_card />
      </div>
      </div>


      {/* demo */}



    </>


  )
}

{/* <TypeAnimation
              sequence={[
                "Judy",
                1000,
                "Web Developer",
                1000,
                "Mobile Developer",
                1000,
                "UI/UX Designer",
                1000,
              ]}
              wrapper="span"
              speed={40}
              repeat={Infinity}
            /> */}
