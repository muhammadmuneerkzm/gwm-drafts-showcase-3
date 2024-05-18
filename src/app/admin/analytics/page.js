'use client'
import React from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { setNav } from '../../../lib/features/nav/navSlice'
export default function page() {
    const dispatch = useAppDispatch()
    dispatch(setNav({location : "analytics"}))
  let location = useAppSelector((state) => state.nav.location);
  console.log("Location [", location)
    
  return (
    <div>
      analytics   
    </div>
  )
}
