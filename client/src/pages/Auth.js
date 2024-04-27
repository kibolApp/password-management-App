import React, { useState } from 'react';
import Login from '../components/login';
import Register from '../components/register';
import Header from '../components/header';
import Footer from '../components/Footer';

export default function Auth() {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    const toggleForm = () => {
        setIsLoginVisible(!isLoginVisible);
    }

    return (
        <div className='relative w-full h-screen bg-white dark:bg-custom-black'>
            <Header />
            <div className='mt-10 mb-20 z-10'>
                {isLoginVisible ? <Login toggleForm={toggleForm} /> : <Register toggleForm={toggleForm} />}
            </div>
            <Footer />
        </div>
    )
}
