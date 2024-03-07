import React from 'react';

const Register = ({ toggleForm }) => {
    return (
        <form className='max-w-[400px] w-full mx-auto bg-gray-800 p-8 rounded-3xl text-white'>
            <h2 className='text-4xl font-bold text-center py-4'>Agatka cyber security</h2>
            <div className='flex justify-between py-4'>
            </div>
            <div className='flex flex-col mb-4 '>
                <label>Username</label>
                <input className='border relative text-black text-lg p-2' type="text" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative text-black text-lg p-2' type="email" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border relative text-black text-lg p-2' type="password" />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Confirm Password</label>
                <input className='border relative text-black text-lg p-2' type="password" />
            </div>
            <button className='w-full py-3 mt-8 bg-orange-500 mb-3 hover:bg-orange-800 relative text-white'>Sign Up</button>
            <p className='flex items-center mt-2'><input className='mr-2' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8'>Already have an account? <button className="text-custom-brown font-semibold bg-transparent text-xl border-none" onClick={toggleForm}>Sign in here</button></p>
        </form>
    );
}

export default Register;