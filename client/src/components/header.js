import React from 'react';
import { Link } from 'react-router-dom';
import Switcher from "../Switcher";

const Header = () => {
    return (
        <div className="flex items-center justify-between px-4 py-2 ">
            <div className="text-custom-dark dark:text-white font-bold text-5xl">Agatka</div>
            <div className="flex space-x-4 text">
                <Link to="/Auth" className="text-custom-dark dark:text-white text-2xl">Login</Link>
                <a href="#" className="text-custom-dark dark:text-white text-2xl">About</a>
                <a href="#" className="text-custom-dark dark:text-white text-2xl">Contact</a>
                <div className="right-0">
                    <Switcher />
                </div>
            </div>
        </div>
    )
}

export default Header;
