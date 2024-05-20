import connectDb from "../../../middleware/mongoose";
import Product from '../../../models/Product';


import mongoose from 'mongoose';


export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request) {
  // mongoose.connect('mongodb://localhost:27017/smoz')
  // .then(() => console.log('Connected to MongoDB'))
  // .catch((error) => console.error('MongoDB connection error:', error));
  // try {
  //   const products = await Product.find();
  //   return Response.json({products})
  // } catch (error) {
  //   return new Response(JSON.stringify({ error: error.message }), {
  //     status: 500,
  //     headers: { 'Content-Type': 'application/json' },
  //   });

  let products = [
    { brand: "Nibosi", code: "NW5815150", name: "NIBOSI Watch for Men Fashion Business Men Watches Ultra-Thin Waterproof Chronograph Quartz Watches with Stainless Steel Band",  slug: "nibosi-watch-for-men-fashion-business-men-watches-ultra-thin-waterproof-chronograph-quartz-watches-with-stainless-steel-band", price: 2999, image: "/watches/w1.png" },
    { brand: "Fossil", code: "FM1892177", name: "Fossil Men Leather Grant Sport Analog Blue Dial Watch-Fs5237, Band Color-Blue",  slug: "fossil-men-leather-grant-sport-analog-blue-dial-watch-fs5237-band-color-blue", price: 7497, image: "/watches/w2.png" },
    { brand: "Armani", code: "AE6338065", name: "Armani Exchange Silicone Analog White Dial Men Watch-Ax4160, White Band",  slug: "armani-exchange-silicone-analog-white-dial-men-watch-ax4160-white-band",  price: 9995, image: "/watches/w3.png" },
    { brand: "Tommy Hilfiger", code: "TH9131694", name: "Tommy Hilfiger Analog Blue Dial Men's Watch ",  slug: "tommy-hilfiger-analog-blue-dial-men-s-watch", price: 11900, image: "/watches/w4.png" },
    { brand: "Fastrack", code: "FA3335451", name: "Fastrack Analog Unisex-Adult Watch ",  slug: "fastrack-analog-unisex-adult-watch",  price: 804, image: "/watches/w5.png" },
    { brand: "Timex", code: "TA9925218", name: "TIMEX Analog Black Dial Men's Watch",  slug: "timex-analog-black-dial-men-s-watch",  price: 2645, image: "/watches/w6.png" },
    { brand: "Timex", code: "TM2849474", name: "Timex Men Stainless Steel E-Class Surgical Steel Charge Chronograph Analog Black Dial Watch",  slug: "timex-men-stainless-steel-e-class-surgical-steel-charge-chronograph-analog-black-dial-watch",  price: 6897, image: "/watches/w7.png" }
  ]
  return Response.json({products})
  }

