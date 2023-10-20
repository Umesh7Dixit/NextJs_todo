"use client";

import UserContext from '@/context/userContext';
import { logout } from '@/services/userService';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext } from 'react'
import { toast } from 'react-toastify';


const CustomNavbar = () => {

   const context =  new useContext(UserContext);
    console.log(context);
  const router = useRouter;



   async function doLogout(){

      try {
        const result = await logout();
        console.log(result);
        context.setUser(undefined);
        router.push("/");


      } catch (error) {
        console.log(error)
        toast.error("logout error");
      }

    }

  return (
    <nav className='bg-blue-500 h-14  py-2 px-7 flex justify-between items-center'>
        <div className='brand'>
            <h1 className='text-2xl font-semibold'><a href='/home'>Work Manager</a></h1>
        </div>
        <div>
            <ul className='flex space-x-5'>
           
                  {context.user && (
                    <>
                      
                      <li><Link href={'/'} className='hover:text-blue-400'>Home</Link></li>
                      <li><Link href={'/add-task'} className='hover:text-blue-400'>Add Task</Link></li>
                      <li><Link href={'/show-tasks'} className='hover:text-blue-400'>Show Task</Link></li>

                    
                    </>
                  
                  )}  
                  
                
            </ul>
        </div>
        <div>
            <ul className='flex space-x-3'>
            {context.user && (
            <>
              <li>
                <Link href={"#!"}>{context.user.name}</Link>
              </li>
              <li>
                <button onClick={doLogout}>Logout</button>
              </li>
            </>
          )}

                {!context.user && (
                    <>
                        <li><Link href={'/login'}  >Login</Link></li>
                        <li><Link href={'/signup'}>SignUp</Link></li>
                    </>
                )}
            </ul>
        </div>
    </nav>
  );
};

export default CustomNavbar;