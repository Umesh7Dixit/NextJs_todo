"use client"

import React, { useState } from 'react'
import signupbanner from '../../assets/Signup.svg'
import Image from 'next/image'
import { toast } from 'react-toastify'
import { signUp } from '@/services/userService'

const Signup = () => {


    const [data, setData] = useState({
      name:"",
      email:"",
      password:"",
    })


   const doSignup = async (event)=> {
            event.preventDefault();
       
            // console.log(event);

            console.log(data);

            if(data.name.trim() === "" || data.name == null ) {
              toast.warning("Name is required",{position:"top-center"});
              return;
            }


            try {
              
              const result = await signUp(data);
              console.log(result);

              toast.success("User is registere !!",{ position:"top-center"});

              setData({
                name:"",
                email:"",
                password:"",
              })

            } catch (error) {
              console.log(error);
              toast.error("Signup Error",{position:"top-center"})
            }

   }

   const resetForm = ()=> {
    setData({
      name:"",
      email:"",
      password:"",
    })
   }

  return (
    <div className='grid grid-cols-12'>
        <div className='col-span-4 col-start-5  border-r-emerald-300'>
            <div className='py-5'>

              <div className='flex justify-center m-5'>
                <Image src={signupbanner} alt='signup' style={{ width:'50%'}} />
              </div>
              <h1 className='text-3xl text-center'>SignUp Here</h1>

              
              <form className='mt-5' onSubmit={doSignup}>

                  <div className="mt-3">
                    <label htmlFor='user_name' className='block text-sm font-medium mb-2 ps-2'>UserName</label>
                    <input name='user_name' type="text" className="w-full p-3 rounded-2xl bg-gray-800  focus:ring-white-400-100 border border-gray-800" placeholder='Enter here '
                       value={data.name}
                       onChange={(event)=>{  setData({...data, name: event.target.value, }) }}/>
                  </div>

                  <div className="mt-3">
                    <label htmlFor='user_email' className='block text-sm font-medium mb-2 ps-2'>Email</label>
                    <input type="text" htmlFor='user_email' className="w-full p-3 rounded-2xl bg-gray-800  focus:ring-white-400-100 border border-gray-800" placeholder='Enter here'
                        value={data.email}
                        onChange={(event)=>{  setData({...data, email: event.target.value, }) }}/>
                  </div>

                  <div className="mt-3">
                    <label htmlFor='user_password' className='block text-sm font-medium mb-2 ps-2'>Password</label>
                    <input type="text" htmlFor='user_password' className="w-full p-3 rounded-2xl bg-gray-800  focus:ring-white-400-100 border border-gray-800" placeholder='Enter here'
                         value={data.password}
                         onChange={(event)=>{  setData({...data, password: event.target.value, }) }}/>
                  </div>


                  <div className="mt-3 text-center">
                    <button type='submit' className='px-2 py-3 bg-green-600 rounded hover:bg-green-500'>SignUp</button>
                    <button type='button' onClick={resetForm} className='ms-3 px-2 py-3 bg-orange-600 rounded hover:bg-orange-500' >Reset</button>
                  </div>

                  {/* {
                    JSON.stringify(data)
                  } */}

              </form>
            </div>
        </div>
    </div>
  )
}

export default Signup