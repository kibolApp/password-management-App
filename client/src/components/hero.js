import React from 'react'
import img1 from '../img/img1.webp';

const Hero = () => {
    return (
        <div className=' bg-gray-900 relative py-16'>
            <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 bg-gray-900 relative py-16 px-4'>
                <img className='w-[500px] mx-auto ' src={img1} alt='/' />
                <div className='flex flex-col justify-center'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-8 bg-gradient-to-r from-pink-500 to-blue-500 bg-clip-text text-transparent'>Keep your passwords safe!</h1>
                    <p className='text-custom-dark dark:text-white font-body text-2xl'>
                        Are you tired of forgetting your passwords or worrying about their security? Look no further!
                        Our app provides a secure and convenient solution for storing all your passwords in one place.
                    </p>
                </div>
            </div>
        </div>
    );
};


export default Hero