"use client"

import Link from "next/link";
import { useRouter } from "next/navigation";

import { useEffect, useRef, useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { setTimeout } from "timers";
import "../../styles/Forms.css"
 
export default function Page() {
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const containerRef = useRef(null);

  useEffect(() => {
      const lines = () => {
          let sizeW = Math.random() * 12;
          let duration = Math.random() * 3;
          let e = document.createElement('div');
          e.setAttribute('class', 'circle');
          containerRef.current.appendChild(e);
          e.style.width = 2 + sizeW + 'px';
          e.style.left = Math.random() * window.innerWidth + 'px';
          e.style.animationDuration = 3 + duration + 's';

          setTimeout(() => {
              containerRef.current.removeChild(e);
          }, 5000);
      };

      const intervalId = setInterval(lines, 200);

      return () => clearInterval(intervalId);
    }, []);

  const handleChange = (e)=>{
    if(e.target.name == "password"){
      setPassword(e.target.value)
    }else if(e.target.name == "email"){
      setEmail(e.target.value)
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
    {/* <form  method="POST" onSubmit={handleSubmit}
      className="mx-auto flex min-h-screen w-full items-center justify-center bg-gray-900 text-white">
      <section className="flex w-[30rem] flex-col space-y-10">
        <div className="text-center text-4xl font-medium">Login</div>



        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input value={email} required onChange={handleChange} type="text" name="email" id="email" placeholder="Email" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>

        <div className="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
          <input value={password} required onChange={handleChange} type="password" name="password" id="password" placeholder="Password" className="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none"/>
        </div>



        <button
          className="transform rounded-sm bg-indigo-600 py-2 font-bold duration-300 hover:bg-indigo-400">
          Login
        </button>

        <a
          href="#"
          className="transform text-center font-semibold text-gray-500 duration-300 hover:text-gray-300">FORGOT PASSWORD?</a>

        <p className="text-center text-lg">
          No account? &nbsp;
          <a
            href="#"
            className="font-medium text-indigo-500 underline-offset-4 hover:underline">Create One</a>
        </p>
      </section>
    </form> */}


<div className="container" ref={containerRef}>
  <div className="LoginParent">
            <div className="box Login">
                <form>
                    <h2>Login</h2>

                    {/* <div className="inputbox">
                        <input type="text" required />
                        <span>Username</span>
                        <i></i>
                    </div>

                    <div className="inputbox">
                        <input type="password" required />
                        <span>Password</span>
                        <i></i>
                    </div> */}


<div className="inputbox">
                        <input value={email} className={email.length >= 1 ?"assured":""} required onChange={handleChange} type="email" name="email" id="email"/>
                        <span>Email</span>
                        <i></i>
                    </div>

                    <div className="inputbox">
                        <input value={password} className={password.length >= 1 ?"assured":""} required onChange={handleChange} type="password" name="password" id="password" />

                        <span>Password</span>
                        <i></i>
                    </div>

                    <div className="links">
                        <a href="#">Forgot Password?</a>
                        <a href="form_signyp.html">Signup</a>
                    </div>

                    {/* <input type="submit" value="Login" className="btn" /> */}
                    <button className="btn">Login</button>
                </form>
            </div>
        </div>
        </div>
    </>

  )
}