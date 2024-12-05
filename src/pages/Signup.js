import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import AlphaLogo from "../assets/Alpha-01-01.svg"
import MainImg from "../assets/login-img.png"
import HelpCircle from "../assets/help-circle.svg"
import { FiEyeOff, FiEye } from "react-icons/fi";
import LanguageDropdwon from '../components/LanguageDropdwon';
import { useNavigate } from 'react-router-dom';


const Signup = () => {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const navigate = useNavigate()


    // SHow & hide Passwors 
    const togglePasswordVisibility = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };

    const toggleConfirmPasswordVisibility = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };

    // navigate to Email Confermation page 
    const handleNaviagtetoEmailConfermation = (() => {
        navigate("/email-confermation")
    })

    return (
        <section className='grid grid-cols-1 md:grid-cols-2 min-h-screen'>

            {/* Left Side  */}
            <div className='flex flex-col min-h-fit md:min-h-screen items-start bg-gray-100 pt-[100px] md:pt-[148px] px-4'>
                <div className='max-w-[497px] w-full mx-auto'>
                    <img src={AlphaLogo} alt="Alpha Logo" className='h-[70px]' />
                    <p className='text-text-color-3 text-base font-normal leading-[29px] mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <img src={MainImg} alt="MainImg" className='rounded-2xl mt-12' />
                </div>
            </div>

            {/* Right Side Form  */}

            <div className='flex flex-col items-center justify-center min-h-screen relative py-[100px] px-4'>
                {/* LanguageDropdwon & help  */}

                <div className='absolute top-[30px] right-10 flex items-center gap-[18px]'>
                    <div className='py-[10px] px-3 rounded-md bg-[#E9EEF6] flex items-center justify-center gap-[6px] text-blue-normal text-sm font-medium cursor-pointer'>
                        <img src={HelpCircle} alt="HelpCircle" />
                        <p>Need help?</p>
                    </div>
                    <LanguageDropdwon />
                </div>


                {/* Form Box  */}
                <div className='max-w-[500px] w-full mx-auto'>
                    <h2 className='text-heading-text text-2xl font-semibold leading-[32px] mb-2'>Signup!</h2>
                    <p className='text-normal-text text-base font-normal leading-[20px]'>You will be invited by an administrator by using this email.</p>

                    <form className='mt-8 flex flex-col gap-4'>

                        {/* First Name &  Last Name */}
                        <div className='grid grid-cols-2 gap-4'>

                            {/* First Name  */}
                            <div>
                                <label htmlFor='firstname' className='block text-sm font-medium leading-[20px] text-heading-text mb-[6px]'>First Name</label>
                                <input type="text" placeholder='Olivia' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none placeholder:text-gray-400 text-heading-text font-normal text-base' />
                            </div>

                            {/* Last Name  */}
                            <div>
                                <label htmlFor='lastname' className='block text-sm font-medium leading-[20px] text-heading-text mb-[6px]'>Last Name</label>
                                <input type="text" placeholder='Rahye' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none placeholder:text-gray-400 text-heading-text font-normal text-base' />
                            </div>
                        </div>

                        {/* Email  */}
                        <div>
                            <label htmlFor='email' className='block text-sm font-medium leading-[20px] text-heading-text mb-[6px]'>Email</label>
                            <input type="email" placeholder='olivia@untitledui.com' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none placeholder:text-gray-400 text-heading-text font-normal text-base' />
                        </div>

                        {/* Password  */}
                        <div>
                            <label htmlFor='password' className='block text-sm font-medium leading-[20px] text-heading-text mb-[6px]'>Password</label>
                            <div className='relative shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl'>
                                <input
                                    type={isPasswordVisible ? 'text' : 'password'}
                                    placeholder='*********'
                                    required
                                    className='w-full border-none h-full placeholder:mt-4 outline-none bg-transparent placeholder:text-gray-400 text-heading-text font-normal text-base'
                                />
                                <div
                                    onClick={togglePasswordVisibility}
                                    className='absolute right-4 cursor-pointer text-normal-text text-lg'
                                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                                >
                                    {isPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                        </div>

                        {/* Confirm Password  */}
                        <div>
                            <label htmlFor='confirmpassword' className='block text-sm font-medium leading-[20px] text-heading-text mb-[6px]'>Confirm Password</label>
                            <div className='relative shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl'>
                                <input
                                    type={isConfirmPasswordVisible ? 'text' : 'password'}
                                    placeholder='*********'
                                    required
                                    className='w-full border-none h-full placeholder:mt-4 outline-none bg-transparent placeholder:text-gray-400 text-heading-text font-normal text-base'
                                />
                                <div
                                    onClick={toggleConfirmPasswordVisibility}
                                    className='absolute right-4 cursor-pointer text-normal-text text-lg'
                                    style={{ top: '50%', transform: 'translateY(-50%)' }}
                                >
                                    {isConfirmPasswordVisible ? <FiEye /> : <FiEyeOff />}
                                </div>
                            </div>
                        </div>


                        {/* I have read and agree to Tekleen Terms of use and Privacy policy.  */}
                        <div className='flex items-center gap-2'>
                            <input type="checkbox" className="ui-checkbox" />
                            <p className='flex-1 font-normal leading-[20px] text-sm text-normal-text'>
                                I have read and agree to Tekleen <Link href="#" className='text-blue-normal font-medium'> Terms of use </Link> and <Link href="#" className='text-blue-normal font-medium'> Privacy policy </Link>.
                            </p>
                        </div>


                        {/* Signup Btn  */}
                        <button onClick={handleNaviagtetoEmailConfermation} className='w-full h-12 text-center bg-blue-normal p-3 rounded-lg text-base font-semibold text-white mt-8'>Sign Up</button>


                        {/* Already have an account? Link  */}
                        <div className='w-full text-center text-base font-medium text-heading-text flex items-center justify-center'>
                            Already have an account?
                            <Link to="/login" className='text-blue-normal font-semibold ml-1 underline'> Login</Link>
                        </div>

                    </form>
                </div>
            </div>
        </section>
    )
}

export default Signup