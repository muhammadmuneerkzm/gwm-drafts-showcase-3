import React from 'react'

export default function Expired() {
  return (
    <>
    {/* <div className='w-screen h-screen bg-black'>
      <div className="flex flex-col text-center text-6xl justify-center h-full">
      <span>
        Free Preview
        <span className='block bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-700'>Expired</span>
        </span>
      </div>
    </div> */}
    

    <div className="relative flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-black text-white">
      {/* Top Header */}
      <div className="absolute top-0 left-0 w-full py-8 text-center">
        <h1 className="text-3xl font-bold">Rehan's Collection</h1>
      </div>

      {/* Circles on corners */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-r from-primary-400 to-secondary-700 rounded-full opacity-50"></div>
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-gradient-to-r from-primary-400 to-secondary-700 rounded-full opacity-50"></div>
      {/* <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-r from-secondary-700 to-primary-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-r from-secondary-700 to-primary-400 rounded-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-r from-primary-400 to-secondary-700 rounded-full opacity-50"></div> */}

      {/* Main Content */}
      <div className="flex flex-col items-center justify-center flex-1 text-center">
        <h2 className="text-5xl md:text-6xl">Free Preview</h2>
        <span className="block text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary-400 to-secondary-700">
          Expired
        </span>
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 w-full py-6 text-center">
        <p className="text-lg font-bold">GreenWebMakers</p>
      </div>
    </div>
    </>
  )
}
 