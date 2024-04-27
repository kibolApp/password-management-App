import React, { useState } from 'react';
import Header from './header';
import Clipboard from 'clipboard';
import { FaCopy } from "react-icons/fa6";

const RandomPassword = () => {
    const [password, setPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState('');

    const generatePassword = () => {
        const generateRandomPassword = () => {
            const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+~`|}{[]\:;?><,./-=";
            const minLength = 4;
            const maxLength = 18;
            const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
            let newPassword = "";
            for (let i = 0; i < length; i++) {
                const randomIndex = Math.floor(Math.random() * charset.length);
                newPassword += charset[randomIndex];
            }
            return newPassword;
        };

        const newPassword = generateRandomPassword();
        setPassword(newPassword);

        setPasswordStrength(checkPasswordStrength(newPassword));
    };

    const checkPasswordStrength = (password) => {
        const length = password.length;
        const hasLowerCase = /[a-z]/.test(password);
        const hasUpperCase = /[A-Z]/.test(password);
        const hasNumbers = /\d/.test(password);
        const hasSymbols = /[^a-zA-Z0-9]/.test(password);

        let strength = 1;

        if (length >= 8 && hasLowerCase && hasUpperCase && hasNumbers && hasSymbols) {
            strength = 5;
        } else if (length >= 6 && (hasLowerCase || hasUpperCase) && (hasNumbers || hasSymbols)) {
            strength = 3;
        }

        return strength;
    };

    const renderStars = (strength) => {
        const stars = [];
        for (let i = 0; i < 5; i++) {
            if (i < strength) {
                stars.push(
                    <input key={i} type="radio" name="password-strength" className="bg-green-500 mask mask-star-2" checked />
                );
            } else {
                stars.push(
                    <input key={i} type="radio" name="password-strength" className="bg-gray-300 mask mask-star-2" />
                );
            }
        }
        return stars;
    };

    const copyToClipboard = () => {
        const clipboard = new Clipboard('.btn-copy', {
            text: () => password
        });

        clipboard.on('success', () => {
            alert('Password copied to clipboard');
            clipboard.destroy();
        });

        clipboard.on('error', () => {
            alert('Failed to copy password');
            clipboard.destroy();
        });
    };

    return (
        <div className='relative w-full h-screen bg-white dark:bg-custom-black'>
            <Header />
            <div className="mockup-window border bg-base-280 mt-6 mr-12 ml-12 p-8">
                <h5 className='text-center text-xl mb-1 font-bold'>Password Generator </h5>
                <p className='text-center mb-4'>Need a strong password? Try the Bitwarden Password Generator to create complex passwords that will keep your information safe.</p>
                <div className="flex justify-center items-center flex-col">
                    <button className="btn btn-outline btn-info mb-4" onClick={generatePassword}>Generate Password</button>

                    <div className="text-center mb-4">
                        <span className='font-bold'>Generated Password:</span>
                        <div className="flex flex-col w-full border-opacity-50">
                            <div className="grid h-20 card bg-base-300 rounded-box place-items-center">
                                <p>{password}</p>
                            </div>
                        </div>
                    </div>
                    <div className="divider divider-accent"></div>

                    <div className="text-center">
                        <button className="btn btn-primary btn-copy button-3 left-32 absolute" onClick={copyToClipboard}><FaCopy /> Copy to Clipboard</button>
                    </div>

                    <div className="text-center">Your Password Strength is:
                    </div>
                    <div className="rating rating-lg rating-half">
                        {renderStars(passwordStrength)}
                    </div>

                </div>
            </div>
        </div>
    );
};

export default RandomPassword;
