import React from 'react'
import App from '../App'
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className='min-h-screen bg-white dark:bg-custom-black'>
            <Header />
            <Hero />
            <App />
            <Footer />
        </div>
    )
}

export default Home