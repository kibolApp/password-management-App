import React from 'react';
import { Link } from 'react-router-dom';
import Switcher from "../Switcher";
import { PhoneIcon, ArrowSmRightIcon } from '@heroicons/react/outline';
import { ChipIcon, SupportIcon } from '@heroicons/react/solid'
import icon from '../img/icon.png';

const Header = () => {
    return (
        <div className="flex items-center justify-between px-8 py-2 ">
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <Link to="/" className="flex items-center">
                    <img src={icon} alt="Agatka" className="h-16 w-16 mr-2" />
                    <span className="text-custom-dark dark:text-white font-bold text-5xl">Agatka</span>
                </Link>
                <div className="flex space-x-4 text">
                    <a href="#" className="text-custom-dark dark:text-white text-2xl p-5 transition-all duration-300 ease-in-out hover:scale-110">Password Checker</a>
                    <Link to="/Auth" className="text-custom-dark dark:text-white text-2xl p-5 transition-all duration-300 ease-in-out hover:scale-110">Login</Link>
                    <a href="#" className="text-custom-dark dark:text-white text-2xl p-5 transition-all duration-300 ease-in-out hover:scale-110">Contact</a>
                    <div className="right-0 p-5 transition-all duration-300 ease-in-out hover:scale-110">
                        <Switcher />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
