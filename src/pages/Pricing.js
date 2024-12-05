import React from 'react'
import LanguageDropdwon from '../components/LanguageDropdwon'
import AlphaLogo from "../assets/Alpha-01-01.svg"
import { Link } from 'react-router-dom'
import HelpCircle from "../assets/help-circle.svg"
import Plans from '../components/Plans'


const Pricing = () => {
    return (
        <section className='px-4 pb-8'>
            <div className='flex items-center justify-between max-w-[1330px] w-full mx-auto py-2'>
                <Link to="/">
                    <img src={AlphaLogo} alt="AlphaLogo" className='h-[50px]' />
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
                <h2 className='text-xl font-bold leading-[32px] text-heading-text pb-4 border-b border-[#E7E7E7] mb-7'>Select Your Plans</h2>


                {/* Plans  */}
                <Plans />

                {/* Progress Bar  */}
                <div className='flex items-center gap-3 mt-5'>
                    <p className='text-xs text-[#202020] font-medium'>2 of 3</p>
                    <div className='flex-1 bg-[#E8E8E8] h-2 rounded overflow-hidden'>
                        <div className='bg-blue-normal w-[66.6%] h-full'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Pricing