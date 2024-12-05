import React from 'react'
import { Link } from 'react-router-dom'
import LanguageDropdwon from '../components/LanguageDropdwon'
import Plans from '../components/Plans'
import AlphaLogo from "../assets/alpa-logo.svg"
import HelpCircle from "../assets/help-circle.svg"
import LeftArrow from "../assets/left-arrow.svg"


const UpgradePlans = () => {
    return (
        <section className='px-4 pb-20'>
            <div className='flex items-center justify-between max-w-[1330px] w-full mx-auto py-3 '>
                <Link to="/">
                    <img src={AlphaLogo} alt="AlphaLogo" />
                </Link>
                <div className='flex items-center gap-[18px]'>
                    <div className='py-[10px] px-3 rounded-md bg-[#E9EEF6] hidden sm:flex items-center justify-center gap-[6px] text-blue-normal text-sm font-medium cursor-pointer'>
                        <img src={HelpCircle} alt="HelpCircle" />
                        <p>Need help?</p>
                    </div>
                    <LanguageDropdwon />
                </div>
            </div>

            <div className='max-w-[1260px] w-full mx-auto mt-[55px]'>
                <div className='mb-7 flex items-center gap-7'>
                    <Link to="/plan">
                        <img src={LeftArrow} alt="LeftArrow" />
                    </Link>
                    <h2 className='text-xl font-bold leading-[32px] text-heading-text'>Select Your Plans</h2>
                </div>

                {/* Plans  */}
                <Plans />
            </div>
        </section>
    )
}

export default UpgradePlans