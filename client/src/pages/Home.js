import React from 'react'
import App from '../App'
import Header from '../components/header';
import Hero from '../components/hero';
import Footer from '../components/Footer';
import About from '../components/About';

const Home = () => {
    return (
        <div className='min-h-screen bg-white dark:bg-custom-black'>
            <Header />
            <Hero />
            <About />
            <App />
            <Footer />
        </div>
    )
}

export default Home