import React from 'react';
import { Link } from 'react-router-dom';
import Switcher from "../Switcher";
import icon from '../img/icon.png';
import { HashLink } from 'react-router-hash-link';
import { useStateContext } from './Context/ContextProvider';
import axiosClient from './AxiosClient';

const Header = () => {
    const { token } = useStateContext()
    const { setUser, setToken } = useStateContext();

    const handleLogout = async () => {
        axiosClient.post("/logout")
            .then(() => {
                setUser({});
                setToken(null);
                window.location.reload()
            });
    };

    return (
        <div className="flex items-center justify-between px-8 py-2 ">
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <Link to="/home" className="flex items-center">
                    <img src={icon} alt="Agatka" className="h-16 w-16 mr-2" />
                    <span className="text-custom-dark dark:text-white font-bold text-5xl">Agatka</span>
                </Link>
                <div className="flex space-x-4 text">
                    {token ? (
                        <button onClick={handleLogout} className="flex text-custom-dark dark:text-white text-2xl p-5 transition-all duration-300 ease-in-out hover:scale-110">Logout</button>
                    ) : (
                        <Link to="/Auth" className="text-custom-dark dark:text-white text-2xl p-5 transition-all duration-300 ease-in-out hover:scale-110">Login</Link>
                    )}
                    <Link to="/Main" className="text-custom-dark dark:text-white text-2xl p-5 transition-all duration-300 ease-in-out hover:scale-110">Password management </Link>
                    <HashLink smooth to="#Contact" className='className="text-custom-dark dark:text-white text-2xl p-5 transition-all duration-300 ease-in-out hover:scale-110"'>Contact</HashLink>
                    <div className="right-0 p-5 transition-all duration-300 ease-in-out hover:scale-110">
                        <Switcher />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header;
