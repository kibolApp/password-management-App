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
        <div className='relative w-full h-screen overflow-hidden bg-white dark:bg-custom-black'>
            <Header />
            <div className='flex justify-center items-center h-full relative z-10'>
                {isLoginVisible ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
            </div>
        </div>
    )
}
