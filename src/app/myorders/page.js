'use client'
// 'use server'
import mongoose from "mongoose";
import Order from "../../models/Order"
import connectDb from "../../middleware/mongoose";
// import { useRouter } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Page(context) {
  
  let router = useRouter()
  const [orders, setOrders] = useState([])
  useEffect(()=>{
    const fetchOrders =  async () =>{
        let a = await fetch('http://localhost:3000/api/myOrders',{
          method: "POST",
          headers: {
            'Content-Type' : "application/json"
          },
          body: JSON.stringify({token : localStorage.getItem('token')})
        })
      
      let res = await a.json()
      setOrders(res.orders)
    }
    if(!localStorage.getItem('token')){
      router.push('/')
    }
    else{
      fetchOrders()
    }
  
}, [])
return(
    <>
  {/* 1st Table */}
 {/* <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b bg-black text-white font-medium">
                <tr>
                  <th scope="col" className="px-6 py-4">#</th>
                  <th scope="col" className="px-6 py-4">First</th>
                  <th scope="col" className="px-6 py-4">Last</th>
                  <th scope="col" className="px-6 py-4">Handle</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b bg-gray-800 text-white">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">Mark</td>
                  <td className="whitespace-nowrap px-6 py-4">Otto</td>
                  <td className="whitespace-nowrap px-6 py-4">@mdo</td>
                </tr>
                <tr className="border-b bg-black text-white">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">2</td>
                  <td className="whitespace-nowrap px-6 py-4">Jacob</td>
                  <td className="whitespace-nowrap px-6 py-4">Thornton</td>
                  <td className="whitespace-nowrap px-6 py-4">@fat</td>
                </tr>

              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div> */}

    {/* 2nd Table */}
    

    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 bg-gray-700 border-gray-600">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
        <tr>
            <th scope="col" className="px-6 py-3">
                Order ID
            </th>
            <th scope="col" className="px-6 py-3">
                No. of Products
            </th>
            <th scope="col" className="px-6 py-3">
                Amount
            </th>
            <th scope="col" className="px-6 py-3">
                Details
            </th>
        </tr>
    </thead>
    <tbody>
        {orders.map((item) => (
            <tr key={item.name} className="odd:bg-gray-900 even:bg-gray-800 border-b border-gray-700">
                <th scope="row" className="px-6 py-4 font-medium  whitespace-nowrap text-white">
                    {item.orderId}
                </th>
                <td className="px-6 py-4">
                    {Object.keys(item.products).length}
                </td>
                <td className="px-6 py-4">
                    {item.amount}
                </td>
                <td className="px-6 py-4">
                    <Link href={`/order?id=${item.orderId}`} className="font-medium text-blue-500 hover:underline">Edit</Link>
                </td>
            </tr>
        ))}
    </tbody>
</table>

</div>

    </>
)
}



// const GetOrders = async (id) => {
// // const router = useRouter()
// //  if(token){
// //     router.push("/")
// //  }else{

// //  }
//   await mongoose.connect('mongodb://localhost:27017/smoz')
//     .then(() => console.log('Connected to MongoDB'))
//     .catch((error) => console.error('MongoDB connection error:', error));
//   if (!mongoose.connections[0].readyState) {
//   }
//   // console.log("THIS IS ID", id)
//   const order = await Order.findOne({ orderId: id });

//   // console.log("THIS IS ORDER", order)
//   return order
// }
