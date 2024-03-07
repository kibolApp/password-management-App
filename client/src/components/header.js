import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 ">
            <div className="text-white font-bold text-5xl">Agatka</div>
            <div className="flex space-x-4 text">
                <Link to="/Auth" className="text-white text-2xl">Login</Link>
                <a href="#" className="text-white text-2xl">About</a>
                <a href="#" className="text-white text-2xl">Contact</a>
            </div>
        </div>
    )
}

export default Header;
