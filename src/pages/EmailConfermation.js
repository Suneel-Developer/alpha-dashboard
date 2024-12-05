import React from 'react'
import LanguageDropdwon from '../components/LanguageDropdwon'
import { Link } from 'react-router-dom'
import AlphaLogo from "../assets/Alpha-01-01.svg"
import HelpCircle from "../assets/help-circle.svg"
import InboxIcon from "../assets/inbox.svg"
import { useNavigate } from 'react-router-dom'


const EmailConfermation = () => {
    const navigate = useNavigate()

    // navigate to Company Information page 
    const handleNaviagtetoCompanyInformation = (() => {
        navigate("/company-information")
    })
    return (
        <section className='px-4'>
            <div className='flex items-center justify-between max-w-[1330px] w-full mx-auto py-3 '>
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

            <div className='flex items-center justify-center h-[80vh]'>
                <div className='shadow-boxshadow rounded-[20px] p-5 flex flex-col items-center justify-center max-w-[497px] w-full mx-auto'>
                    <img src={InboxIcon} alt="InboxIcon" />
                    <h2 className='text-xl md:text-2xl font-bold text-center text-heading-text mt-3'>Check your mail</h2>
                    <p className='text-sm md:text-base font-normal text-center text-normal-text mt-5'>We’ve sent a verification email to abc@example.com</p>
                    <p className='text-sm md:text-base font-semibold text-center text-heading-text mt-5'>Click the link in your email to verify your account.</p>
                    <p className='text-sm md:text-base font-normal text-center text-normal-text mt-3'>If you have trouble finding your email, check your spam folder for an email from noreply@example.com</p>
                    <p className='text-sm md:text-base font-normal text-center text-normal-text mt-8'>Didn’t receive an email? Resend</p>
                    <button onClick={handleNaviagtetoCompanyInformation} className='w-full text-center bg-blue-normal p-3 rounded-xl text-base font-semibold text-white mt-4'>Continue</button>
                </div>
            </div>
        </section>
    )
}

export default EmailConfermation