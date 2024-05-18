'use client'
import React , {useState, useRef} from 'react'
import { useAppDispatch, useAppSelector } from '../../../lib/hooks';
import { setNav } from '../../../lib/features/nav/navSlice'
import { useRouter } from 'next/navigation';
import axios from 'axios';



import '../add.style.css'
import '../admin.css'
export default function page() {
    const fileInputRef = useRef();

    const dispatch = useAppDispatch()   
    dispatch(setNav({location : "addProduct"}))
  let location = useAppSelector((state) => state.nav.location);
  console.log("Location [", location)
  const router = useRouter()
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [state, setState] = useState('');
  const [district, setDistrict] = useState('');
  const [pincode, setPincode] = useState('');
  const [phone, setPhone] = useState('');

  const handleChange = async (e)=>{
    const { value } = e.target;
 
    if (e.target.name === 'name') {
       setName(value);
    } else if (e.target.name === 'email') {
       setEmail(value);
    } else if (e.target.name === 'address') {
      setAddress(value);
    } else if (e.target.name === 'state') {
      setState(value);
    } else if (e.target.name === 'district') {
      setDistrict(value);
    } else if (e.target.name === 'pincode') {
      setPincode(value);
    } else if (e.target.name === 'phone') {
      setPhone(value);
    }
  }
  const [productName, setProductName] = useState('');
  const [productPrice, setProductPrice] = useState('');
  const [productDescription, setProductDescription] = useState('');

    
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('file', fileInputRef.current.files[0]);
    console.log(fileInputRef.current.files[0])
    console.log("FORMDATA: ", formData)
    try {
        const response = await axios.post('http://localhost:3000/api/dataUpload', formData, {
            method: 'POST',
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });
        console.log("response: ", response.json());
        console.log('Form submitted:', { productName, productPrice, productDescription });
    } catch (error) {
        console.error('Error uploading file:', error.response.data);
    }
};

  return (
    <>
    <main>
      




    <h1>Add Product</h1>
  
    <form className='my-12' onSubmit={handleSubmit}> 
    <div className="grid gap-6 mb-6">
        <div>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
            <input
                type="text"
                id="first_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Product Name"
                required
            />
        </div>
        <div>
            <label htmlFor="last_name" className="block mb-2 text-sm font-medium text-gray-900">Slug</label>
            <input
                type="text"
                id="last_name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Slug"
                required
            />
        </div>
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
            <input
                type="number"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Product Price"
                required
            />
        </div>  
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Tags</label>
            <input
                type="number"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter tags"
                required
            />
        </div>  
        <div>
            <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Price</label>
            <input
                type="number"
                id="company"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Product Price"
                required
            />
        </div>  
        <div>
            <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Enter Category</label>
            <input
                type="tel"
                id="phone"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Enter Category"
                // pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                required
            />
        </div>
       <div>
            <label htmlFor="website" className="block mb-2 text-sm font-medium text-gray-900">Choose Product Images (PNG)</label>
            <input type="file" ref={fileInputRef} />
        </div>
        { /*  <div>
            <label htmlFor="visitors" className="block mb-2 text-sm font-medium text-gray-900">Unique visitors (per month)</label>
            <input
                type="number"
                id="visitors"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder=""
                required
            />
        </div>
    </div>
    <div className="mb-6">
        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
        <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="john.doe@company.com"
            required
        />
    </div> 
    <div className="mb-6">
        <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">Password</label>
        <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
        />
    </div> 
    <div className="mb-6">
        <label htmlFor="confirm_password" className="block mb-2 text-sm font-medium text-gray-900">Confirm password</label>
        <input
            type="password"
            id="confirm_password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="•••••••••"
            required
        />
    </div> 
    <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
            <input
                id="remember"
                type="checkbox"
                value=""
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                required
            />
        </div>
        <label htmlFor="remember" className="ms-2 text-sm font-medium text-gray-900">I agree with the <a href="#" className="text-blue-600 hover:underline">terms and conditions</a>.</label>
    </div> */}
    </div>
    <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
    >
        Submit
    </button>
</form>






    </main>
    </>
  );
}
