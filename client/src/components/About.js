import React from 'react';
import bgImg from '../img/cyber.png';
import { ArrowSmRightIcon, AtSymbolIcon, KeyIcon, ShieldCheckIcon } from '@heroicons/react/outline';

const About = () => {
    return (
        <div name='home' className='w-full h-screen pt-2 mb-52 bg-white dark:bg-custom-black dark:text-white text-custom-dark flex flex-col justify-between'>
            <div className='grid md:grid-cols-2 max-w-[1240px] m-auto'>
                <div className='flex flex-col justify-center md:items-start w-full px-2 py-8'>
                    <p className='py-2 text-5xl md:text-3xl font-bold'>Is it actually safe to use this Password Checker?</p>
                    <p className='py-3 px-6 text-xl my-4'>
                        Don't worry, this is just a student project. Any password you enter here won't be saved. However, it will be checked against various techniques to evaluate its strength. The password strength calculator employs a range of methods, including utilizing common password dictionaries, regular dictionaries, first and last name dictionaries, and more. It also conducts substitution attacks on these common words and names,
                        replacing letters with numbers and symbols.
                    </p>
                </div>
                <div>
                    <img className='w-full' src={bgImg} alt="/" />
                </div>
            </div>
            <div className='max-w-[1240px] mx-auto text-white relative mt-12'>
                <div className='px-2 py-12 text-black dark:text-white'>
                    <h3 className='text-5xl font-bold py-6 text-center'>Strong Password Tips and Tricks</h3>
                    <p className='py-4 text-3xl dark:'>Passwords are a crucial element of online security. Properly created passwords can significantly enhance the security of your accounts and personal data. Below are some useful tips on how to create strong and secure passwords:</p>
                </div>
                <div className='grid grid-cols-1 lg:grid-cols-3 relative gap-x-8 gap-y-16 px-4 pt-12 sm:pt-20 text-black'>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <AtSymbolIcon className='w-16 p-4 bg-pink-600 text-white rounded-lg mt-[-3rem]' />
                            <h3 className='font-bold text-2xl my-6'>Special characters</h3>
                            <p className='text-gray-600 text-xl'>Replacing letters with digits and symbols. This technique is well known to hackers so swapping an “E” for a “3” or a “5” for a “$” doesn’t make you much more secure.
                                The password should have at least eight to 10 passwords, but 16 to 20 characters is ideal. For example, the password “f0JB^B5sjmXl” would take a computer 34,000 years to crack.
                            </p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Learn more<ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <KeyIcon className='w-16 p-4 bg-pink-600 text-white rounded-lg mt-[-3rem]' />
                            <h3 className='font-bold text-2xl my-6'>Key to a strong password</h3>
                            <p className='text-gray-600 text-xl'>A strong password is one that’s either not easily guessed or not easily brute forced. To make it not easily guessed
                                it can’t be a simple word, to make it not easily cracked it needs to be long and complex. Super computers can go through billions of attempts per second to guess a password. Try to make your passwords a minimum of 14 characters.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Learn more<ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                    <div className='bg-white rounded-xl shadow-2xl'>
                        <div className='p-8'>
                            <ShieldCheckIcon className='w-16 p-4 bg-pink-600 text-white rounded-lg mt-[-3rem]' />
                            <h3 className='font-bold text-2xl my-6'>Passphrase Security</h3>
                            <p className='text-gray-600 text-xl'>Consider using passphrases instead of passwords.
                                Passphrases are longer combinations of words which are easier to remember and harder to crack.
                                For example, "SunflowerPuppyDance2023" quite easy to remember. Additionally, utilizing a password manager to generate and store unique, using different passwords will enhance your security.</p>
                        </div>
                        <div className='bg-slate-100 pl-8 py-4'>
                            <p className='flex items-center text-indigo-600'>Learn more<ArrowSmRightIcon className='w-5 ml-2' /></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;
