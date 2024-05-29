"use server"
import mongoose from "mongoose";
import Product from "../../../models/Product";
import InterFace from "./interface"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Head from "next/head";
// import { useRouter } from "next/router";
import GoBack from"./GoBack"
import products from "../../../data/products";

export default async function Page({ params }) {
    let slug = params.slug;
    // let router = useRouter()
    // let product = await GetProductData(slug)
    // product = JSON.parse(JSON.stringify(product))


    // let products = [
    //     { brand: "Nibosi", code: "NW4467648", name: "NIBOSI Watch for Men Fashion Business Men Watches Ultra-Thin Waterproof Chronograph Quartz Watches with Stainless Steel Band", slug: "nibosi-watch-for-men-fashion-business-men-watches-ultra-thin-waterproof-chronograph-quartz-watches-with-stainless-steel-band", price: 2999, image: "/watches/w1.png" },
    //     { brand: "Fossil", code: "FM6471572", name: "Fossil Men Leather Grant Sport Analog Blue Dial Watch-Fs5237, Band Color-Blue", slug: "fossil-men-leather-grant-sport-analog-blue-dial-watch-fs5237-band-color-blue", price: 7497, image: "/watches/w2.png" },
    //     { brand: "Armani", code: "AE3319243", name: "Armani Exchange Silicone Analog White Dial Men Watch-Ax4160, White Band", slug: "armani-exchange-silicone-analog-white-dial-men-watch-ax4160-white-band", price: 9995, image: "/watches/w3.png" },
    //     { brand: "Tommy Hilfiger", code: "TH8888629", name: "Tommy Hilfiger Analog Blue Dial Men's Watch ", slug: "tommy-hilfiger-analog-blue-dial-men-s-watch", price: 11900, image: "/watches/w4.png" },
    //     { brand: "Fastrack", code: "FA9204251", name: "Fastrack Analog Unisex-Adult Watch ", slug: "fastrack-analog-unisex-adult-watch", price: 804, image: "/watches/w5.png" },
    //     { brand: "Timex", code: "TA7251169", name: "TIMEX Analog Black Dial Men's Watch", slug: "timex-analog-black-dial-men-s-watch", price: 2645, image: "/watches/w6.png" },
    //     { brand: "Timex", code: "TM1228868", name: "Timex Men Stainless Steel E-Class Surgical Steel Charge Chronograph Analog Black Dial Watch", slug: "timex-men-stainless-steel-e-class-surgical-steel-charge-chronograph-analog-black-dial-watch", price: 6897, image: "/watches/w7.png" }
    // ]

    let product = products.find(product => product.slug === slug);

    console.log("product ,", product)
    // const notify = () => toast("Wow so easy!");



    return (
        <>
            <ToastContainer />
            {product ?
            <>
<InterFace product={product} />
            <Head>
                <title>watchHubKerala - {product.title}</title>
            </Head>

            </>
                : 
                <>
            <Head>
                <title>404 Not Found</title>
            </Head>
            {/* <i class='bx bxs-left-arrow-circle absolute text-lg p-2'  onClick={() => redirect.back()}></i> */}
            <GoBack/>
                <div className="w-full h-full bg-black flex items-center justify-center flex-col">
                    <i className="bx bxs-category text-5xl pb-4 text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-secondary-600"></i>
                    <span className="text-2xl md:text-3xl">Product Not Found</span>
                </div>
                </>
                }
        </>
    )
}

import { GetServerSideProps } from 'next'
import { NotFoundBoundary } from "next/dist/client/components/not-found-boundary";
import { NOTFOUND } from "dns";
import { redirect, useRouter } from "next/navigation";

const GetProductData = async (slug) => {
    mongoose.connect('mongodb://localhost:27017/smoz')
        .then(() => console.log('Connected to MongoDB'))
        .catch((error) => console.error('MongoDB connection error:', error));
    const product = await Product.find({ slug: slug });
    console.log(product)
    return product
}