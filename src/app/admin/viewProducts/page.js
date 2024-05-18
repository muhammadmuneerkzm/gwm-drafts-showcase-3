'use client'
import React, { useEffect , useState } from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { setNav } from '../../../lib/features/nav/navSlice'
import '../admin.css'
export default function page() {
    
  const [products, setProducts] = useState([])
  useEffect(()=>{
    const getProducts = async ()=>{
    let res = await fetch("http://localhost:3000/api/getProducts", {
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      }
    })
    let response = await res.json()
    console.log("SMOZ")
    let data = response.products
    setProducts(data)
    console.log("DATA = PRODUCTS = ", products)
  }
getProducts()


  }, [])

  const dispatch = useAppDispatch()   
    dispatch(setNav({location : "viewProducts"}))
  let location = useAppSelector((state) => state.nav.location);
  console.log("Location [", location)
  console.log(products)
  
  return (
    <main>
      <h1>View Products</h1>
      {products.map((key)=>{
        return(
          <>
          {/* todo: Make UI */}
          <div>
          {key.title}
          </div>
          </>
        )
      })}
    </main>
  )
}
