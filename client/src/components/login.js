import React from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'

const Login = ({ toggleForm }) => {
    return (
        <form className='max-w-[400px] w-full mx-auto bg-gray-800 text-white p-12 rounded-3xl'>
            <h2 className='text-4xl font-bold text-center py-4'>Agatka cyber security</h2>
            <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:bg-orange-800 px-6 py-2 border-white relative flex items-center'><AiFillFacebook className='mr-2' />Facebook</p>
                <p className='border shadow-lg hover:bg-orange-800 px-6 py-2 border-white relative flex items-center'><FcGoogle className='mr-2' />Google</p>
            </div>
            <div className='flex flex-col mb-4 '>
                <label className=''>Username</label>
                <input className='border relative p-3.5 text-black text-lg' type="text" />
            </div>
            <div className='flex flex-col '>
                <label className=''>Password</label>
                <input className='border relative  p-3.5 text-black text-lg' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-orange-500 hover:bg-orange-800 relative mb-3 text-white'>Sign In</button>
            <p className='flex items-center mt-2 '><input className='mr-2 ' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8 '>
                Not a member? <button className="text-custom-brown text-xl font-semibold bg-transparent border-none" onClick={toggleForm}>Sign up now</button>
            </p>
        </form>
    );
}

export default Login;