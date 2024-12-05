import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import LanguageDropdwon from '../components/LanguageDropdwon'
import AlphaLogo from "../assets/Alpha-01-01.svg"
import HelpCircle from "../assets/help-circle.svg"
import DownArrow from "../assets/chevron-down.svg"
import { useNavigate } from 'react-router-dom'


const CompanyInformation = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedValues, setSelectedValues] = useState({
        employee: 'Employee',
        country: 'Select',
        state: 'Select'
    });
    const dropdownRefs = useRef([]);
    const navigate = useNavigate()

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRefs.current.every(ref => ref && !ref.contains(event.target))) {
                setOpenDropdown(null);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const toggleDropdown = (index) => {
        setOpenDropdown(openDropdown === index ? null : index);
    };

    const handleSelection = (dropdownIndex, value) => {
        if (dropdownIndex === 0) {
            setSelectedValues(prev => ({ ...prev, employee: value }));
        } else if (dropdownIndex === 1) {
            setSelectedValues(prev => ({ ...prev, country: value }));
        } else if (dropdownIndex === 2) {
            setSelectedValues(prev => ({ ...prev, state: value }));
        }
        setOpenDropdown(null);
    };

    const handleNaviagtetoPricing = (() => {
        navigate('/pricing')
    })
    return (
        <section className='px-4 pb-10'>
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

            <div className='max-w-[548px] w-full mx-auto mt-3'>
                <h2 className='text-xl font-bold leading-[32px] text-heading-text pb-4 border-b border-[#E7E7E7] mb-6'>Setup Company profile</h2>

                {/* form  */}

                <div className='shadow-boxshadowthree flex-1 p-8 rounded-xl'>
                    <h2 className='text-2xl font-semibold text-heading-text leading-[32px] text-center mb-6'>Company / Personal Information</h2>

                    <form className='mt-5'>

                        {/* Company Name */}
                        <div className='mb-6'>
                            <label htmlFor='company' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Company Name</label>
                            <input type="text" placeholder='abc@company.com' className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                        </div>

                        {/* Employee */}
                        <div className='mb-6' ref={el => dropdownRefs.current[0] = el}>
                            <label htmlFor='Emplyee' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Emplyee</label>
                            <div onClick={() => toggleDropdown(0)} className='relative'>
                                <div className='shadow-input-shadow flex-1 flex items-center justify-between cursor-pointer w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base'>
                                    <p>{selectedValues.employee}</p>
                                    <img src={DownArrow} alt="DownArrow" />
                                </div>

                                {/* Dropdown */}
                                {openDropdown === 0 && (
                                    <ul className='shadow-input-shadow bg-white absolute top-14 z-30 flex-1 flex flex-col gap-2 cursor-pointer w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base'>
                                        <li onClick={() => handleSelection(0, 'Employee')}>Employee</li>
                                        <li onClick={() => handleSelection(0, 'Non-Employee')}>Non-Employee</li>
                                        <li onClick={() => handleSelection(0, 'Self-Employee')}>Self-Employee</li>
                                    </ul>
                                )}
                            </div>
                        </div>

                        {/* Email Address */}
                        <div className='mb-6'>
                            <label htmlFor='Address' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Address</label>
                            <input type="text" placeholder='Enter Address' className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                        </div>

                        {/* Country & State */}
                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6'>
                            {/* Country */}
                            <div ref={el => dropdownRefs.current[1] = el}>
                                <label htmlFor='Country' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Country</label>
                                <div onClick={() => toggleDropdown(1)} className='relative'>
                                    <div className='shadow-input-shadow flex-1 flex items-center justify-between cursor-pointer w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base'>
                                        <p>{selectedValues.country}</p>
                                        <img src={DownArrow} alt="DownArrow" />
                                    </div>

                                    {/* Dropdown */}
                                    {openDropdown === 1 && (
                                        <ul className='shadow-input-shadow bg-white absolute top-14 z-30 flex-1 flex flex-col gap-2 cursor-pointer w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base'>
                                            <li onClick={() => handleSelection(1, 'United States')}>United States</li>
                                            <li onClick={() => handleSelection(1, 'Russia')}>Russia</li>
                                            <li onClick={() => handleSelection(1, 'South Korea')}>South Korea</li>
                                            <li onClick={() => handleSelection(1, 'United Kingdom')}>United Kingdom</li>
                                        </ul>
                                    )}
                                </div>
                            </div>

                            {/* State */}
                            <div ref={el => dropdownRefs.current[2] = el}>
                                <label htmlFor='State' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>State</label>
                                <div onClick={() => toggleDropdown(2)} className='relative'>
                                    <div className='shadow-input-shadow flex-1 flex items-center justify-between cursor-pointer w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base'>
                                        <p>{selectedValues.state}</p>
                                        <img src={DownArrow} alt="DownArrow" />
                                    </div>

                                    {/* Dropdown */}
                                    {openDropdown === 2 && (
                                        <ul className='shadow-input-shadow bg-white absolute top-14 z-30 flex-1 flex flex-col gap-2 cursor-pointer w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base'>
                                            <li onClick={() => handleSelection(2, 'State 1')}>State 1</li>
                                            <li onClick={() => handleSelection(2, 'State 2')}>State 2</li>
                                            <li onClick={() => handleSelection(2, 'State 3')}>State 3</li>
                                            <li onClick={() => handleSelection(2, 'State 4')}>State 4</li>
                                        </ul>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Save button */}
                        <button onClick={handleNaviagtetoPricing} className='py-[10px] mt-4 px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-full'>Submit</button>
                    </form>
                </div>


                {/* Progress Bar  */}
                <div className='flex items-center gap-3 mt-6'>
                    <p className='text-xs text-[#202020] font-medium'>1 of 3</p>
                    <div className='flex-1 bg-[#E8E8E8] h-2 rounded overflow-hidden'>
                        <div className='bg-blue-normal w-[33.3%] h-full'></div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default CompanyInformation