import React from 'react'

export default function page() {
  
  return (
    <div>
       {/* <div className="container mx-auto py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-4">
          Contact Us
        </h1>
        <p className="text-white mb-8">
          Reach out to us through any of the following means. We are here to assist you with any queries or orders.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
            <i className="bx bxs-phone text-primary-500 text-5xl mb-4"></i>
            <h1 className="text-white text-xl font-semibold mb-2">+91 87339 66617</h1>
            <p className="text-gray-400">Call for Orders</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
            <i className="bx bxl-instagram text-primary-500 text-5xl mb-4"></i>
            <h1 className="text-white text-xl font-semibold mb-2">@rehans_collection</h1>
            <p className="text-gray-400">Follow us on Instagram</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-xl flex flex-col items-center">
            <i className="bx bxs-envelope text-primary-500 text-5xl mb-4"></i>
            <h1 className="text-white text-xl font-semibold mb-2">info@rehanscollection.com</h1>
            <p className="text-gray-400">Email us for support</p>
          </div>
        </div>
      </div> */}


<div className="container mx-auto py-12 px-6 text-center">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600 mb-4">
          Contact Us
        </h1>
        <p className="text-white mb-8">
          Reach out to us through any of the following means. We are here to assist you with any queries or orders.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <a
            href="tel:+917025345660"
            className="bg-[#212121] p-6 rounded-xl flex flex-col items-center transition transform cursor-pointer"
          >
            <i className="bx bxs-phone text-primary-500 text-5xl mb-4"></i>
            <h1 className="text-white text-lg font-semibold mb-2">+91 70253 45660</h1>
            <p className="text-gray-400">Call for Orders</p>
          </a>
          <a
            href="https://www.instagram.com/watchhub_kerala"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#212121] p-6 rounded-xl flex flex-col items-center transition transform  cursor-pointer"
          >
            <i className="bx bxl-instagram text-primary-500 text-5xl mb-4"></i>
            <h1 className="text-white text-lg font-semibold mb-2">@watchhub_kerala</h1>
            <p className="text-gray-400">Follow us on Instagram</p>
          </a>
          <a
            // href="mailto:support@rehanscollection.co.in"
            className="bg-[#212121] p-6 rounded-xl flex flex-col items-center transition transform  cursor-pointer"
          >
            <i className="bx bxs-envelope text-primary-500 text-5xl mb-4"></i>
            <h1 className="text-white text-lg font-semibold mb-2">watchhub_kerala@gmail.com</h1>
            <p className="text-gray-400">Email us for support</p>
          </a>
        </div>
      </div>
    </div>
  )
}
