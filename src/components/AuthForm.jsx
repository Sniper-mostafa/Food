import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets'

const AuthForm = ({ setShowModal }) => {
    const [form, setForm] = useState("Sign up")
  return (
    <div className='h-full w-full absolute bg-[#000000d0] z-10 flex justify-center items-center'>
        <div className='w-[350px] mx-auto bg-white p-5 rounded-md'>
            <div className='flex items-center justify-between mb-10'>
            <h2 className='text-3xl font-bold'>{form === 'Sign up' ? 'Sign up' : 'Login'}</h2>
            <img onClick={()=> setShowModal(false)} src={assets.cross_icon} className='h-4 w-4 cursor-pointer' />
            </div>
            <form className='flex flex-col gap-6'>
                {form === 'Sign up' ? <input type='text' placeholder='Type your name' className='ring-2 ring-blue-500 w-full px-3 py-2 rounded-sm outline-none' /> : <></> }
                <input type='email' placeholder='Type your email' className='ring-2 ring-blue-500 w-full px-3 py-2 rounded-sm outline-none' />
                <input type='password' placeholder='Type your password' className='ring-2 ring-blue-500 w-full px-3 py-2 rounded-sm outline-none' />
                
                <button className='bg-orange-500 text-white py-2 rounded-sm'>{form === 'Sign up' ? 'Create Account' : 'Login'}</button>
            </form>
           <p onClick={()=> setForm(form === 'Sign up' ? 'Login' : 'Sign up')} className='text-center mt-3 text-lg font-semibold'>{form === 'Sign up' ? 'Have an account?' : 'Create an account'} <span className='text-blue-500 cursor-pointer'>{form === 'Sign up' ? 'Login' : 'Sign up'}</span></p>
        </div>
    </div>
  )
}

export default AuthForm