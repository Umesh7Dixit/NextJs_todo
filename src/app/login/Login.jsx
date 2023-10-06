"use client"

import { useState } from "react"
import { toast } from "react-toastify";



const Login = () => {



   const [loginData , setLoginData]  =  useState({
        email:"",
        password:"",
    });



    const loginFormSubmitted = (event) => {
        event.preventDefault();
        console.log(loginData)

        if(loginData.email.trim() === "" || loginData.password.trim() === ""){
            toast.info("Invalid Data",{position:"top-center"})
            return;
        }
      
      
          setLoginData({
            email:"",
            password:"",
        })
    }


 



  return (
        <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5  border-r-emerald-300'>
            <div className='py-5'></div>

            <h1 className='text-3xl text-center'>Login Here</h1>

            <form onSubmit={loginFormSubmitted} >

            <div className="mt-3">
                    <label htmlFor='user_email' className='block text-sm font-medium mb-2 ps-2'>Email</label>
                    <input type="text" htmlFor='user_email' className="w-full p-3 rounded-2xl bg-gray-800  focus:ring-white-400-100 border border-gray-800" placeholder='Enter here'
                        value={loginData.email}
                        onChange={(event)=>{  setLoginData({...loginData, email: event.target.value, }) }}
                        />
                  </div>

                  <div className="mt-3">
                    <label htmlFor='user_password' className='block text-sm font-medium mb-2 ps-2'>Password</label>
                    <input type="text" htmlFor='user_password' className="w-full p-3 rounded-2xl bg-gray-800  focus:ring-white-400-100 border border-gray-800" placeholder='Enter here'
                         value={loginData.password}
                         onChange={(event)=>{  setLoginData({...loginData, password: event.target.value, }) }}
                        />
                  </div>

                  <div className="mt-3 text-center">
                    <button type='submit' className='px-3 py-2 bg-green-600 rounded hover:bg-green-500'>Login</button>
                    <button type='button'  className='ms-3 px-3 py-2 bg-orange-600 rounded hover:bg-orange-500' >Reset</button>
                  </div>

            </form>

            {
                JSON.stringify(loginData)
            }


        </div>
        </div>
  )
}

export default Login