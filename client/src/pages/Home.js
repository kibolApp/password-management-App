import React from 'react'
import App from '../App'
import Header from '../components/header';
import Hero from '../components/hero';

const Home = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative'>
            <Header />
            <Hero />
            <App />
        </div>
    )
}

export default Home