// lib/StoreProvider.jsx
'use client'
import { useRef } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks';
import { setCart, saveCart, addToCart, removeFromCart, open } from '../lib/features/cart/cartSlice';

export default function Loader({ children }) {
    const loading = useAppSelector((state) => state.ui.loading);
    console.log(loading)
    return (
        <>
           {!loading && 
           
           <div>{children}</div>
           } 
           {loading && <div><Loading/></div>} 
        </>
    )
}
