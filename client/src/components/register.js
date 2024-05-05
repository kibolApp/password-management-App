import React, { useRef } from 'react';
import { useStateContext } from './Context/ContextProvider';
import axiosClient from './AxiosClient';



const Register = ({ toggleForm }) => {

const nameRef = useRef();
const emailRef = useRef();
const passwordRef = useRef();
const passwordConfirmationRef = useRef();
const {setUser,setToken}=useStateContext();

const submitRegister = async (e) => {
    e.preventDefault();
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value,
    };
  
    axiosClient.post('/register', payload)
      .then(({ data }) => {
        setUser(data.user);
        setToken(data.token);
        const userId = data.user.id; 
      document.cookie = `user_id=${userId}; path=/;`;
      })
      .catch((err) => {
        console.error(err);
      });
  };



    return (
        <form  onSubmit={submitRegister} className='max-w-[400px] w-full mx-auto dark:text-white text-black dark:bg-gray-800 bg-none border border-gray-900 p-8 rounded-3xl'>
            <h2 className='text-4xl font-bold text-center py-4'>Agatka cyber security</h2>
            <div className='flex justify-between py-4'>
            </div>
            <div className='flex flex-col mb-4 '>
                <label>Username</label>
                <input className='border relative dark:text-white text-black bg-white dark:bg-gray-800 text-lg p-2' type="text" ref={nameRef} required />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Email</label>
                <input className='border relative dark:text-white text-black bg-white dark:bg-gray-800 text-lg p-2' type="email" ref={emailRef} required/>
            </div>
            <div className='flex flex-col mb-4'>
                <label>Password</label>
                <input className='border relative dark:text-white text-black bg-white dark:bg-gray-800 text-lg p-2' type="password" ref={passwordRef} required />
            </div>
            <div className='flex flex-col mb-4'>
                <label>Confirm Password</label>
                <input className='border relative dark:text-white text-black bg-white dark:bg-gray-800 text-lg p-2' type="password" ref={passwordConfirmationRef} required />
            </div>
            <button type="submit" className='w-full py-3 mt-6 bg-orange-500 mb-3 hover:bg-orange-800 relative text-white'>Sign Up</button>
            <p className='text-center mt-8'>Already have an account? <button className="text-custom-brown font-semibold bg-transparent text-xl border-none" onClick={toggleForm}>Sign in here</button></p>
        </form>
    );
}

export default Register;