"use client";

import mongoose from "mongoose";
import Link from "next/link";
import Product from "../../models/Product";
// import "../../styles/productCard.css";
import {
  addToCart,
  removeFromCart,
  open,
} from "../../lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../lib/hooks";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import AddToCart from "./AddToCart";
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'
import { useEffect, useState } from "react";
import Image from "next/image";
import Loading from './loading'
import products from "../../data/products"
export default async function Page() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);
const limit = 35


function truncate(str) {
  if (str.length > limit) {
    return str.substring(0, limit - 3) + '...';
  }
  return str;
}


  if (!isMounted) return <Loading/>;

  return (
    <>
      <ToastContainer />
    
      <div className="ProductCardListContainer">

        <div className="title text-2xl font-bold text-center">
            <h1>Products</h1>
        </div>



<div className="cards-wrapper-outer px-2 md:px-4 py-8">
  <div className="grid gap-2 md:gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
     {[...Array(6)].map((_, index) => (
<>
{products.map((product) => {
  return (
    <div key={product.id} className="card flex flex-col bg-[#1e1c1c] rounded-md pb-3">
      <Link href={`/product/${product.slug}`}>
      <div className="imageSection py-2 aspect-w-1 aspect-h-1">
        {product.image?
        <img src={product.image} alt={product.name} className="w-full h-full object-cover rounded-t-md" width={100} height={100} loading="lazy"/>
        :
        <div className="imageSection py-2 flex items-center justify-center w-full aspect-square rounded-t-md animate-pulse">
        <div className="w-[90%] h-[90%] p-2 bg-gray-700 rounded-lg"></div>
      </div>
      }
      </div>
      <div className="contentSection text-white">
        <div className="title-brand p-2">
          <div className="title text-sm lg:text-md">{truncate(product.name)}</div>
          <div className="brand text-xs my-1 text-gray-300">{product.brand}</div>
        </div>
        <div className="priceSection px-2 py-1">
          <div className="price text-md font-bold">₹ {product.price}</div>
        </div>
      </div>
      </Link>
    </div>
  );
})}
</>
     ))}
  </div>
</div>

      </div>
    </>
  );
}

// const GetAllProducts = async () => {
//   mongoose.connect("mongodb://localhost:27017/smoz").then(() => console.log("Connected to MongoDB")).catch((error) => console.error("MongoDB connection error:", error));
//   const products = await Product.find();
//   console.log(products);
//   return products;
// };
