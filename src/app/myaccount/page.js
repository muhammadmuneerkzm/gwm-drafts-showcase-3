'use client'
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from '../../lib/hooks';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Page() {
  const dispatch = useAppDispatch()
    const router = useRouter()
    const userEmail = useAppSelector((state) => state.user.email)
    let userData;
    // useEffect(()=>{
      
    //   const fetchUserDataDB = async (email) =>{
    //     if(!localStorage.getItem('token')){
    //       router.push('/')
    //       return
    //     }
    //     let res = await fetch("http://localhost:3000/api/getUserData",{
    //       method: "POST",
    //     headers: {
    //       "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({email})
    //     })

    //     let data = await res.json()
    //     if(data.success){
    //       userData = data.user
    //       console.log(userData)
    //       setName(userData.name)
    //       setAddress(userData.address)
    //       setPincode(userData.pincode)
    //       setPhone(userData.phone)
    //       setState(userData.state)
    //       setCity(userData.city)
    //     }
    //   }
    //   fetchUserDataDB(userEmail)
    // },[userEmail])


    
    const [name, setName] = useState();
    const [address, setAddress] = useState('');
    const [state, setState] = useState('');
    const [city, setCity] = useState('');
    const [pincode, setPincode] = useState('');
    const [phone, setPhone] = useState('');
    const [confirmPass, setConfirmPass] = useState('')
    const [currentPass, setCurrentPass] = useState('')
    const [newPass, setNewPass] = useState('')


    const handlePasswordSubmit = async (e) =>{
      e.preventDefault()
      console.log(newPass, confirmPass, currentPass)
      if(!(newPass.length>3 && confirmPass.length>3 && currentPass.length>3)){
        toast.error("Please Check all the fields again",{ position: "bottom-center", theme: 'dark'});
        return
      }

      if(!(newPass == confirmPass)){
        toast.error("Passwords Doesn't match!",{ position: "bottom-center", theme: 'dark'})
        return
      }
      const data = {
        password: currentPass,
        newPassword: newPass
      }
      let res = await fetch("http://localhost:3000/api/updatePassword",{
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data, email: userEmail})
      })

      let response = await res.json()
      console.log(response)
      if(response.success){
        toast.success(response.message,{ position: "bottom-center", theme: 'dark'})
      }else{
        toast.error(response.message,{ position: "bottom-center", theme: 'dark'})
      }

    }
    const handleUserSubmit = async (e) =>{
      e.preventDefault()
      if((name.length>3 && address.length>3 && pincode.length>3 && phone.length>3 && state.length>3 && city.length>3)){
        toast.error("Please Check all the fields again",{ position: "bottom-center", theme: 'dark'});
        return
      }
      const data = {
        name, address, pincode, phone, state, city
      }
      let res = await fetch("http://localhost:3000/api/updateUser",{
        method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({data, email: userEmail})
      })
      toast.success("Successfully updated!",{ position: "bottom-center", theme: 'dark'})
    }
    
  
    
  
  
    const handleChange = async (e)=>{
      const { value } = e.target;
   
      if (e.target.name === 'name') {
         setName(value);
      }  else if (e.target.name === 'address') {
        setAddress(value);
      } else if (e.target.name === 'state') {
        setState(value);
      } else if (e.target.name === 'city') {
        setCity(value);
      } else if (e.target.name === 'pincode') {
        setPincode(value);
      } else if (e.target.name === 'phone') {
        setPhone(value);
      } else if (e.target.name === 'currentPass') {
        setCurrentPass(value);
      } else if (e.target.name === 'newPass') {
        setNewPass(value);
      } else if (e.target.name === 'confirmPass') {
        setConfirmPass(value);
      }
    }

    // setName(userData.name)
    // setName(userData.name)
    return (
    <>
      <ToastContainer/>
         <h1 className="font-bold text-3xl  text-white my-8 text-center">My Account</h1>
        <h2 className="font-semibold text-white">1. Delivery Details</h2>
        <section className="delivery-details">
        <div className="mx-auto flex flex-col my-4 md:w-full lg:w-auto lg:flex-row md:flex-col sm:flex-col ">
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="name" className="leading-7 text-sm text-gray-400">Name</label>
              <input onChange={handleChange}value={name} type="text" id="name" name="name" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Email (Cannot Change Email)</label>
              <input value={userEmail}  type="email" id="email" name="email" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" readOnly/>
            </div>
          </div>
          </div>
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="address" className="leading-7 text-sm text-gray-400">Address</label>
              <textarea onChange={handleChange} name="address" id="address" value={address} cols="30" rows="3" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
            </div>
          </div>
          <div className="mx-auto flex flex-col my-4 md:w-full lg:w-auto lg:flex-row md:flex-col sm:flex-col ">
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="pincode" className="leading-7 text-sm text-gray-400">Pincode</label>
              <input onChange={handleChange} value={pincode} type="text" id="pincode" name="pincode" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="phone" className="leading-7 text-sm text-gray-400">Phone No.</label>
              <input onChange={handleChange} value={phone} type="number" id="phone"  name="phone" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" style={{WebkitAppearance: 'none', MozAppearance: 'textfield', appearance: 'none',}}/>
            </div>

          </div>
          </div>

          <div className="mx-auto flex flex-col my-4 md:w-full lg:w-auto lg:flex-row md:flex-col sm:flex-col ">
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">State</label>
              <input onChange={handleChange} value={state} type="text" id="state" name="state" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">City</label>
              <input onChange={handleChange} value={city} type="text" id="city" name="city" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          </div>
          
          <button onClick={handleUserSubmit} className='flex mx-auto rounded-md text-white bg-gradient-to-r from-primary-400 to-secondary-600 border-0 py-2 px-5 disabled:opacity-75 focus:outline-none'>
        Submit</button>


          </section>

        <h2 className="font-semibold text-white">2. Change Password</h2>
        <section className="change-password">
        <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">Enter Current Password</label>
              <input onChange={handleChange}value={currentPass} type="password" id="currentPass" name="currentPass" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
             </div>
          </div>
        <div className="mx-auto flex flex-col my-4 md:w-full lg:w-auto lg:flex-row md:flex-col sm:flex-col ">
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Enter New Password</label>
              <input onChange={handleChange}value={newPass} type="password" id="newPass" name="newPass" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          <div className="px-2 w-full md:w-full">
            <div className="relative mb-4">
              <label htmlFor="email" className="leading-7 text-sm text-gray-400">Confirm New Password</label>
              <input onChange={handleChange} value={confirmPass}  type="password" id="confirmPass" name="confirmPass" className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
          </div>
          </div>

          <button onClick={handlePasswordSubmit} className='flex mx-auto rounded-md text-white bg-gradient-to-r from-primary-400 to-secondary-600 border-0 py-2 px-5 disabled:opacity-75 focus:outline-none'>
        Submit</button>
          </section>
    </>
    )
}