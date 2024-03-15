import React from 'react'
import bgImg from '../img/cyber.png';

const About = () => {
    return (
        <div name='home' className='w-full h-screen bg-white dark:bg-custom-black dark:text-white text-custom-dark flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='text-2xl'>How to create strong password?</p>
                    <h1 className='py-3 text-5xl md:text-7xl font-bold'>About This Site</h1>
                    <p className='text-2xl'>our solution.</p>
                    <p className='py-2 text-5xl md:text-2xl font-bold'>Is it actually safe to use Password Checkers?</p>
                    <p className='py-3 px-6 text-xl my-4'>
                        If you’re reading this section, then good – the quickest way to get hacked online is to be too trusting or assume websites are automatically safe. It’s good to be cautious and it’s never a good idea to enter your legitimate credentials into any website you are not confident about. The ones to watch especially are those who ask you to input your credentials.
                    </p>
                </div>
                <div>
                    <img className='w-full' src={bgImg} alt="/" />
                </div>
            </div>
        </div>
    )
}

export default About