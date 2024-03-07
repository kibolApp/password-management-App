import React from 'react'
import App from '../App'
import Header from '../components/header';

const Home = () => {
    return (
        <div className='min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 relative'>
            <Header />
            <App />
        </div>
    )
}

export default Home