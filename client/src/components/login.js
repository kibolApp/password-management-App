import React, { useRef } from 'react';
import { FcGoogle } from 'react-icons/fc'
import { AiFillFacebook } from 'react-icons/ai'
import { useStateContext } from './Context/ContextProvider';
import axiosClient from './AxiosClient';

const Login = ({ toggleForm }) => {
    const {setUser,setToken}=useStateContext();
    const emailloginRef = useRef();
    const passwordloginRef = useRef();


    const submitLogin = async (ev) => {
        ev.preventDefault()
        const payload={
          email:emailloginRef.current.value,
          password: passwordloginRef.current.value,
        };
        console.log(payload);
        axiosClient.post('/login',payload)
        .then(({data})=>{
          setUser(data.user)
          setToken(data.token)
          const userId = data.user.id; 
          document.cookie = `user_id=${userId}; path=/;`;
        })
        .catch(err=>{
          console.log(err);
        })
    }

    return (
        <form onSubmit={submitLogin} className='max-w-[400px] w-full mx-auto dark:bg-gray-800 bg-none border border-gray-900 p-12 rounded-3xl dark:text-white text-black'>
            <h2 className='text-4xl font-bold text-center py-4 dark:text-color'>Agatka cyber security</h2>
            <div className='flex justify-between py-8'>
                <p className='border shadow-lg hover:bg-orange-800 px-6 py-2 border-white relative flex items-center'><AiFillFacebook className='mr-2' />Facebook</p>
                <p className='border shadow-lg hover:bg-orange-800 px-6 py-2 border-white relative flex items-center'><FcGoogle className='mr-2' />Google</p>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Username</label>
                <input className='border relative p-3.5 dark:text-white text-black bg-white dark:bg-gray-800 text-lg' type="text" ref={emailloginRef} required />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border relative p-3.5 text-black dark:text-white bg-white dark:bg-gray-800 text-lg' type="password" ref={passwordloginRef} required  />
            </div>
            <button type="submit" className='w-full py-3 mt-8 bg-orange-500 hover:bg-orange-800 relative mb-3 text-white'>Sign In</button>
            <p className='flex items-center mt-2 '><input className='mr-2 ' type="checkbox" />Remember Me</p>
            <p className='text-center mt-8 '>
                Not a member? <button className="text-custom-brown text-xl font-semibold bg-transparent border-none" onClick={toggleForm}>Sign up now</button>
            </p>
        </form>
    );
}

export default Login;
