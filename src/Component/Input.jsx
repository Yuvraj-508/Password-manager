import React from 'react'
import './Input.css'
function Input() {
  return (
    <div className='flex flex-col  w-full min-h-screen items-center mt-5 md:mt-10'>
      <h1 className='text-2xl tracking-wider'> Welcome to <span className='text-blue-600'> PassLocker</span></h1>
      <p className='mt-2 text-sm font-extralight text-gray-600'>Store and Manage Password</p>
      <div className="w-full text-center mt-5">
        <input type="text" className=' w-[90%] md:w-[65%] py-2  px-3 text-lg' placeholder='Enter your Site Name or Other'/>
      </div>
      <div className="flex flex-col md:flex-row gap-5 md:gap-8 mt-5">
        <input type="text" className='border py-1.5 px-2 text-[16px]' placeholder='Username or gmail'/>
        <input type="password" name="" id="" className='border py-1 px-3 text-lg' placeholder='password'/>
      </div>
      <button className='bg-[#28CDD0] text-white py-2 px-6 rounded-lg mt-5 cursor-pointer font-semibold tracking-wide'>Save Now</button>
                   
    </div>
  )
}

export default Input
