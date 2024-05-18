'use client'
import React, { useEffect, useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import '../admin.css'
// import '../admin.style.css'
import { setNav } from '../../../lib/features/nav/navSlice'
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export default function page() {
    const router = useRouter()
    const dispatch = useAppDispatch()   
    dispatch(setNav({location : "orders"}))
  let location = useAppSelector((state) => state.nav.location);
  console.log("Location [", location)
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
    
      fetchOrders()
  
}, [])
  return (
    <div>
      <main>
            <h1>Orders</h1>
            {/* <!-- Analyses --> */}
            {/* <div class="analyse">
                <div class="sales">
                    <div class="status">
                        <div class="info">
                            <h3>Total Sales</h3>
                            <h1>$65,024</h1>
                        </div>
                        <div class="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="percentage">
                                <p>+81%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="visits">
                    <div class="status">
                        <div class="info">
                            <h3>Orders</h3>
                            <h1>24,981</h1>
                        </div>
                        <div class="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="percentage">
                                <p>-48%</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="searches">
                    <div class="status">
                        <div class="info">
                            <h3>Users</h3>
                            <h1>14,147</h1>
                        </div>
                        <div class="progresss">
                            <svg>
                                <circle cx="38" cy="38" r="36"></circle>
                            </svg>
                            <div class="percentage">
                                <p>+21%</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
            {/* <!-- End of Analyses --> */}

            
            <table className="w-full my-16 text-sm text-left">
    <thead className="text-xs text-gray-700 uppercase bg-gray-50">
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
        {orders.map((item, index) => (
            <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b`}>
                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                    {item.orderId}
                </th>
                <td className="px-6 py-4">
                    {Object.keys(item.products).length}
                </td>
                <td className="px-6 py-4">
                    {item.amount}
                </td>
                <td className="px-6 py-4">
                    <Link href={`/order?id=${item.orderId}`} className="font-medium text-blue-600 hover:underline">Edit</Link>
                </td>
            </tr>
        ))}
    </tbody>
</table>

            {/* <!-- New Users Section --> */}
          
            {/* <!-- End of New Users Section --> */}

            {/* <!-- Recent Orders Table --> */}
            
            {/* <!-- End of Recent Orders --> */}

        </main>
    </div>
  )
}
