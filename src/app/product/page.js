'use client'
import React, { useState } from 'react'
import "../../styles/productDetail.css";
import Head from 'next/head';

const ProductPage = () => {


    const [images, setImages] = useState({
        img1 : "https://dummyimage.com/512x512/fffaff/000000.png&text=512x512",
        img2 : "/2.png",
        img3 : "DemoImg.png",
        img4 : "2.png",
        img5 : "DemoImg.png"
    })

    const [activeImg, setActiveImage] = useState(images.img1)

    const [amount, setAmount2] = useState(1);
    if (amount <= 0) {
      setAmount(1)
    }


    return (
        <>
        {/* <div className='flex flex-col productdetails justify-between lg:flex-row gap-16 lg:items-center'>
            <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={activeImg} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
                <div className='flex flex-row justify-between h-24'>
                    <img src={images.img1} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img1)}/>
                    <img src={images.img2} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img2)}/>
                    <img src={images.img3} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img3)}/>
                    <img src={images.img4} alt="" className='w-24 h-24 rounded-md cursor-pointer' onClick={() => setActiveImage(images.img4)}/>
                </div>
            </div>
            <div className='flex flex-col gap-4 lg:w-2/4'>
                <div>
                    <span className=' text-violet-600 font-semibold'>Special Sneaker</span>
                    <h1 className='text-3xl font-bold'>Nike Invincible 3</h1>
                </div>
  


                <h6 className='text-2xl font-semibold'><span className='discount' >-30 % </span>$ 199.00</h6>
                <div className='toggle-and-cart flex flex-row gap-12'>
                    <div className='flex flex-row items-center'>
                        <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount2((prev) => prev - 1)}>-</button>
                        <span className='py-4 px-6 rounded-lg'>{amount}</span>
                        <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => setAmount2((prev) => prev + 1)}>+</button>
                    </div>
                    <div className="button">
                      <button className=' detailProduct-btn bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>
                    </div>
                </div>
                <p className='text-white'>
                Con un'ammortizzazione incredibile per sostenerti in tutti i tuoi chilometri, Invincible 3 offre un livello di comfort elevatissimo sotto il piede per aiutarti a dare il massimo oggi, domani e oltre. Questo modello incredibilmente elastico e sostenitivo, è pensato per dare il massimo lungo il tuo percorso preferito e fare ritorno a casa carico di energia, in attesa della prossima corsa.
                </p>
                <div className="other-variants flex flex-col mb-25">
                  <h1 className='font-bold text-center mt-3 mb-3'>Related Products</h1>
                  <div className="images flex">
                    <a href="">
                    <img src={images.img1} className='rounded-full cursor-pointer' width={'100px'} height={'100px'}/>
                    </a>

                    <a href="">
                    <img src={images.img3} className='rounded-full cursor-pointer' width={'100px'} height={'100px'}/>
                    </a>

                    <a href="">
                    <img src={images.img4} className='rounded-full cursor-pointer' width={'100px'} height={'100px'}/>
                    </a>

                    <a href="">
                    <img src={images.img5} className='rounded-full cursor-pointer' width={'100px'} height={'100px'}/>
                    </a>
                  </div>
                </div>
            </div>
        </div> */}
        <div className="bg-gray-900 text-white min-h-screen">
      <Head>
        <title>Watch Product Page</title>
        <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.15/dist/tailwind.min.css" rel="stylesheet" />
      </Head>
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row">
          {/* Product Image */}
          <div className="md:w-1/2 md:order-1 mb-8 md:mb-0">
            {/* <img src="watch.jpg" alt="Watch" className="w-full rounded-lg shadow-md" /> */}
        <img src="/watches/w1.png" alt="Watch" className="w-full rounded-lg shadow-md" />

          </div>
          {/* Product Details */}
          <div className="md:w-1/2 md:order-2 md:pl-8">
            <div className="flex items-center justify-between mb-4">
              <h1 className="text-4xl font-semibold">Elegant Stainless Steel Watch</h1>
              <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600">Add to Cart</button>
            </div>
            <p className="text-2xl mb-4">$150</p>
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ligula nec nunc mattis lacinia eu nec libero. Nulla facilisi. Vivamus nec ante at felis blandit ultrices.</p>
            </div>
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14" />
              </svg>
              <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis ligula nec nunc mattis lacinia eu nec libero. Nulla facilisi. Vivamus nec ante at felis blandit ultrices.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
        </>
    )
}

export default ProductPage