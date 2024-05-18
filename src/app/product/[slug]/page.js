
import mongoose from "mongoose";
import Link from "next/link";
import Product from "../../../models/Product";
import { addToCart, removeFromCart , open} from "../../../lib/features/cart/cartSlice";
import { useAppDispatch, useAppSelector } from "../../../lib/hooks";
import InterFace from "./interface"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



export default async function Page({params}) {
    let slug = params.slug;
    // let product = await GetProductData(slug)
    // product = JSON.parse(JSON.stringify(product))
    let product = {availableQty
        :
        155, 
        category
        :
        (3)['men', 'timex', 'luxury'],
        desc
        :
        "The titan vintage watch with great facilities",
        img
        :
        "https://m.media-amazon.com/images/I/71pzBTYRs7L.SY741.jpg",
        price
        :
        4145,
        slug
        :
        "timex-analog-6527",
        title
        :
        "TIMEX Analog Silver Dial Men's Watch",
        updatedAt
        :
        "2024-02-06T16:15:18.852Z",
        __v
        :
        0,
        _id
        :
        "65b4b0db22600e91d4460843"}
    console.log(product)
    const notify = () => toast("Wow so easy!");




    return (
        <>
            {/* <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {products.map((product)=>{
                        return (
                            <div key={product._id} className="lg:w-1/4 md:w-1/2 p-4 w-full">
                        <Link href={`product/${product.slug}`} passHref={false}>
                                <span className="block relative h-48 rounded overflow-hidden">
                                    <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={product.img} />
                                </span>
                                <div className="mt-4">
                                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">CATEGORY</h3>
                                    <h2 className="text-white title-font text-lg font-medium">{product.title}</h2>
                                    <p className="mt-1">${product.price}</p>
                                </div>
                        </Link>
                            </div>

                        )})}
                    </div>
                </div>
            </section> */}
            <ToastContainer />
            <InterFace product={product}/>
        </>
    )
}

import { GetServerSideProps } from 'next'

const GetProductData = async (slug) => {
mongoose.connect('mongodb://localhost:27017/smoz')
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('MongoDB connection error:', error));
const product = await Product.find({slug : slug});
console.log(product)
return product
}