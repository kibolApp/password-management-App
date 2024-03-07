import React, { useState } from 'react';
import Login from '../components/login';
import Register from '../components/register';
import Header from '../components/header';

export default function Auth() {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    }

    return (
        <div className='relative w-full h-screen overflow-hidden bg-gradient-to-b from-gray-900 to-gray-800'>
            <Header />
            <div className='absolute inset-0 z-0 bg-cover bg-center'></div>
            <div className='flex justify-center items-center h-full relative z-10'>
                {isLoginVisible ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
            </div>
        </div>
    )
}
