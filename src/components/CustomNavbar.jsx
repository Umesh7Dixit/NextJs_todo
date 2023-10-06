import Link from 'next/link';
import React from 'react'

const CustomNavbar = () => {
  return (
    <nav className='bg-blue-500 h-14  py-2 px-7 flex justify-between items-center'>
        <div className='brand'>
            <h1 className='text-2xl font-semibold'><a href='/home'>Work Manager</a></h1>
        </div>
        <div>
            <ul className='flex space-x-6'>
                <li><Link href={'/'} className='hover:text-blue-400'>Home</Link></li>
                <li><Link href={'/add-task'} className='hover:text-blue-400'>Add Task</Link></li>
                <li><Link href={'/show-tasks'} className='hover:text-blue-400'>Show Task</Link></li>
            </ul>
        </div>
        <div>
            <ul className='flex space-x-5'>
                <li><Link href={'/login'}>Login</Link></li>
                <li><Link href={'/signup'}>SignUp</Link></li>
            </ul>
        </div>
    </nav>
  )
}

export default CustomNavbar;