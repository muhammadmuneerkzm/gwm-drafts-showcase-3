'use client'
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function Page(context) {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [cpassword, setCpassword] = useState("")

  let token = context.searchParams.token

  useEffect(()=>{
    const checkUser = async (token)=>{
    const data = {token, sendmail : false, resetpass: false}
    let res = await fetch("http://localhost:3000/api/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }) 
    let response = await res.json()
    if(!response.success){
      router.push("/forgot")
    }
    }

    if(token){
      checkUser(token)
    }
  }, [])
  const handleChange = (e)=>{
    if(e.target.name == "email"){
      setEmail(e.target.value)
    }
    if(e.target.name == "password"){
      setPassword(e.target.value)
    }
    if(e.target.name == "cpassword"){
      setCpassword(e.target.value)
    }
  }

  const sendEmail = async (e)=>{
    e.preventDefault()
    console.log("hello")
    const data = {email, sendmail : true}
    let res = await fetch("http://localhost:3000/api/forgot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    }) 
    let response = await res.json()
    if(response.success){
      toast.success("Email have been send...",{ position: "bottom-center", theme: 'dark', autoClose: 2000 });
    }else{
      toast.error(response.message,{ position: "bottom-center", theme: 'dark', autoClose: 2000 })
    }
  }

  const resetPassword = async (e)=>{
    e.preventDefault()
    const data = {password, token , sendmail : false , resetpass: true}
    if(password == cpassword){

      let res = await fetch("http://localhost:3000/api/forgot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
      }) 
      let response = res.json()
      if(response.success){
        toast.success("password has been changed",{ position: "bottom-center", theme: 'dark', autoClose: 2000 });
      }else{
      }
    }else{
      toast.error("passwords doesn't match",{ position: "bottom-center", theme: 'dark', autoClose: 2000 });
    }
  }
  const handleSubmit = async (e)=>{
    e.preventDefault()
    const data = {email , password}
    let res = await fetch("http://localhost:3000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })
 
    let response = await res.json()
    // console.log(response)
    if(response.success){
      localStorage.setItem("token", response.token)
      toast.success("You are successfully logged in!",{ position: "bottom-center", theme: 'dark', autoClose: 2000 });
      setTimeout(()=>{
        router.push('/')
      }, 1000)
    } else{
      toast.error("Invalid Credentials",{ position: "bottom-center", theme: 'dark'});
    }
    

    // setEmail("")
    // setPassword("")
    // toast("Your account has been created...",{ position: "bottom-center", theme: 'dark'});
  }
    return (
    <>

<ToastContainer/>
{/* If token is present */}
{token &&
  <div 
      className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Forgot Password?</div>



        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-primary-500">
          <input value={password} required onChange={handleChange} type="password" name="password" id="password" placeholder="New Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>


        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-primary-500">
          <input value={cpassword} required onChange={handleChange} type="password" name="cpassword" id="cpassword" placeholder="Confirm new Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>



        <button disabled={password!== cpassword} onClick={resetPassword} className="transform rounded-sm bg-primary-600 py-2 font-bold duration-300 hover:bg-primary-400 disabled:bg-warmGray-700 disabled:hover:bg-grey-700 ">
          Continue
        </button>

        <a
          href="#"
          className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>

        <p className="text-center text-lg">
          No account? &nbsp;
          <a
            href="#"
            className="font-medium text-primary-500 underline-offset-4 hover:underline">Go back?</a>
        </p>
      </section>
    </div>
}


{/* If token is absent */}
{!token &&
  <div 
      className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Forgot Password?</div>



        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-primary-500">
          <input value={email} required onChange={handleChange} type="text" name="email" id="email" placeholder="Email" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>



        <button  onClick={sendEmail}
          className="transform rounded-sm bg-primary-600 py-2 font-bold duration-300 hover:bg-primary-400">
          Continue
        </button>

        <a
          href="#"
          className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>

        <p className="text-center text-lg">
          No account? &nbsp;
          <a
            href="#"
            className="font-medium text-primary-500 underline-offset-4 hover:underline">Go back?</a>
        </p>
      </section>
    </div>
}
    
    </>
    )
  }