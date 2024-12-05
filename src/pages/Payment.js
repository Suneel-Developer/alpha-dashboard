import React, { useState } from 'react'
import LanguageDropdwon from '../components/LanguageDropdwon'
import { Link } from 'react-router-dom'
import AlphaLogo from "../assets/Alpha-01-01.svg"
import HelpCircle from "../assets/help-circle.svg"
import StripeLogo from "../assets/stripe.svg"
import PaypalLogo from "../assets/PayPal.svg"

const Payment = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <section className='px-4 pb-10'>

            {/* header  */}
            <div className='flex items-center justify-between max-w-[1330px] w-full mx-auto py-2'>
                <Link to="/">
                    <img src={AlphaLogo} alt="AlphaLogo"className='h-[50px]' />
                </Link>
                <div className='flex items-center gap-[18px]'>
                    <div className='py-[10px] px-3 rounded-md bg-[#E9EEF6] hidden sm:flex items-center justify-center gap-[6px] text-blue-normal text-sm font-medium cursor-pointer'>
                        <img src={HelpCircle} alt="HelpCircle" />
                        <p>Need help?</p>
                    </div>
                    <LanguageDropdwon />
                </div>
            </div>

            <div className='max-w-[1260px] w-full mx-auto mt-6'>
                <h2 className='text-xl font-bold leading-[32px] text-heading-text pb-4 border-b border-[#E7E7E7] mb-7'>Payments summery</h2>



                <div className='flex flex-col md:flex-row gap-10'>
                    <div className='md:max-w-[520px] w-full shadow-boxshadowfour p-7 rounded-xl'>
                        <h4 className='text-xl font-normal leading-[32px] text-heading-text'>Subscribe to</h4>
                        <h4 className='text-xl font-bold leading-[32px] text-heading-text'>Enterprise - Small Firm to 5 Employees</h4>

                        <div className='flex items-center gap-2 my-8'>
                            <h2 className='text-[32px] leading-[32px] text-heading-text font-bold'>$25</h2>
                            <p className='text-base leading-[25px] font-normal text-[#7F8494]'>/ per month</p>
                        </div>

                        <div className='flex flex-col gap-[6px] mb-6'>
                            <label className='text-sm text-heading-text'>Promo Code</label>
                            <input type="text" placeholder='Enter promo code' className='p-3 border border-[#E5E1E6] outline-none rounded-lg text-heading-text placeholder:text-[#7F8494] text-sm' />
                        </div>

                        <ul>
                            <li className='flex items-center justify-between gap-1 py-3 border-b border-[#F4F4F4]'>
                                <p className='text-base text-heading-text leading-[32px]'>Payment method</p>
                                <b className='text-base font-medium text-heading-text leading-[32px]'>US$40.00</b>
                            </li>
                            <li className='flex items-center justify-between gap-1 py-3 border-b border-[#F4F4F4]'>
                                <p className='text-base text-heading-text leading-[32px]'>Discount</p>
                                <b className='text-base font-medium text-heading-text leading-[32px]'>00.00</b>
                            </li>
                            <li className='flex items-center justify-between gap-1 py-3 border-b border-[#F4F4F4]'>
                                <p className='text-base text-heading-text leading-[32px]'>Subtotal</p>
                                <b className='text-base font-medium text-heading-text leading-[32px]'>US$40.00</b>
                            </li>

                            <li className='py-4 font-semibold text-lg text-[#1D2939]'>US$40.00</li>
                        </ul>

                        <p className='text-base mt-3 font-medium text-[#667085]'>Total due today</p>

                    </div>

                    <div className='md:max-w-[718px] w-full'>
                        <h4 className='text-xl font-bold leading-[32px] text-heading-text mb-6'>Select Payments Method</h4>

                        <div className='flex justify-center items-center h-[195px] w-full p-3 shadow-boxshadowfour rounded-xl mb-5'>
                            <img src={StripeLogo} alt="StripeLogo" />
                        </div>

                        <div className='flex justify-center items-center w-full h-[195px] p-3 shadow-boxshadowfour rounded-xl mb-14'>
                            <img src={PaypalLogo} alt="PaypalLogo" />
                        </div>


                        <div className='flex items-center gap-3'>
                            {/* Toggle Switch */}
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input type="checkbox" checked={isOn} onChange={handleToggle} className="sr-only" />
                                    <div
                                        className={`w-9 h-5 bg-gray-300 rounded-full ${isOn ? 'bg-[#1E55A8]' : 'bg-gray-300'
                                            }`}
                                    ></div>
                                    <div
                                        className={`absolute w-4 h-4 bg-white rounded-full transform transition-transform ${isOn ? 'translate-x-4' : 'translate-x-1'
                                            }`}
                                    ></div>
                                </label>

                            <p className='text-base text-heading-text'>Enable auto-payment to renew subscription</p>
                        </div>

                    </div>
                </div>

                {/* Progress Bar  */}
                <div className='flex items-center gap-3 mt-5'>
                    <p className='text-xs text-[#202020] font-medium'>3 of 3</p>
                    <div className='flex-1 bg-[#E8E8E8] h-2 rounded overflow-hidden'>
                        <div className='bg-blue-normal w-full h-full'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Payment