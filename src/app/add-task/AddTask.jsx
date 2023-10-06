"use client"

import React, { useState } from 'react'
import loginSvg from "../../assets/ab.svg";
import Image from 'next/image';
import { addTask } from '@/services/taskServices';
import { toast } from 'react-toastify';




const AddTask = () => {


    const [task,setTask] = useState({
                                         title: "",
                                         content: "",
                                         status: "none",


                                         userId: "650fb9c797a29bba99870075",
                                        });


   const  handlerAddTask = async (event) => {
       event.preventDefault();
       console.log(task);

    //  

    try {
         
        const result = await addTask(task)
        console.log(result);
        toast.success("Your task is added!",{position:"top-center"});
        
        
        setTask({
          title:"",
          content:"",
          status:"none",
        });

    } catch (error) {
      console.log(error);
      toast.error("Task not added",{position:'top-center'})
    }

   };


  return (
    <div className='grid grid-cols-12 justify-center'>
          <div className='col-span-4 col-start-5 p-5 shadow-sm'>
            <div className="my-8 flex justify-center">
              <Image style={{width:"50%"}} src={loginSvg} alt='loginbannerimage'/>
            </div>
                <h1 className='text-3xl text-center'>Add Task components</h1>

                <form  onSubmit={handlerAddTask}>
                  <div className='mt-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='task_title'>Title</label>
                    <input name="task_title" onChange={(event)=>{setTask({...task,title:event.target.value})}} value={task.title} type='text' className='w-full p-3 rounded-3xl bg-gray-800  focus:ring-white-400-100 border border-gray-800 ' id='task_title'/>
                  </div>

                  <div className='mt-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='task_content'>Content</label>
                    <textarea type='text' name="task_content" onChange={(event)=>{setTask({...task,content:event.target.value})}} value={task.content}  className='w-full p-3 rounded-3xl bg-gray-800  focus:ring-white-400-100 border border-gray-800 ' rows={5}id='task_content'/>
                  </div>

                  <div className='mt-4'>
                    <label className='block text-sm font-medium mb-2' htmlFor='task_status'>Status</label>
                    <select id="task_status"  name='task_status'  onChange={(event)=>{setTask({...task,status:event.target.value})}} value={task.status} className='w-full p-3 rounded-3xl bg-gray-800  focus:ring-white-400-100 border border-gray-800 '>
                      <option value={'none'}  disabled >---Select Status---</option>
                      <option value={'Pending'}>Pending</option>
                      <option value={'Completed'}>Completed</option>
                    </select>
                  </div>

                  <div className='mt-4 flex justify-center'>
                    <button className='bg-blue-600 py-2 px-3 rounded-lg hover:bg-blue-800'>Add Todo</button>
                    <button className='bg-red-600 py-2 px-3 rounded-lg hover:bg-red-800 ms-3'>Clear</button>
                  </div>

                  {

                        //  JSON.stringify(task)

                  }
                </form>
          </div>
    </div>
  )
}

export default AddTask;