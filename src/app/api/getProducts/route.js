import connectDb from "../../../middleware/mongoose";
import Product from '../../../models/Product';


import mongoose from 'mongoose';


export const dynamic = 'force-dynamic'; // defaults to auto

export async function GET(request) {
  mongoose.connect('mongodb://localhost:27017/smoz')
  .then(() => console.log('Connected to MongoDB'))
  .catch((error) => console.error('MongoDB connection error:', error));
  try {
    const products = await Product.find();
    return Response.json({products})
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
