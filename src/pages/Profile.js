import React, { useState, useRef, useEffect } from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import ProfileImage from "../assets/profile.png"
import GmailIcon from "../assets/gmail.svg"
import DownArrow from "../assets/chevron-down.svg"
import { RiErrorWarningLine } from "react-icons/ri";
import ProfileNavigation from '../components/ProfileNavigation'


const Profile = () => {
    const [openDropdown, setOpenDropdown] = useState(null);
    const [selectedValues, setSelectedValues] = useState({
        employee: 'Employee',
        country: 'Select',
        state: 'Select'
    });
    const dropdownRefs = useRef([]);

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

    return (
        <Table showFilterSearchBox={false}>
            <Sidebar />

            <section className='p-4 md:p-6 flex gap-3 flex-col md:flex-row'>
                {/* Profile Navigation  */}
                <div className='max-w-full md:max-w-[220px] h-fit w-full md:sticky md:top-5'>
                    <ProfileNavigation />
                </div>

                {/* Profile Section  */}

                <div className='w-full'>
                    <div className='shadow-boxshadowthree flex-1 p-5 rounded-lg w-full mb-4'>
                        <h2 className='text-xl font-semibold text-text-color-1 leading-[26px] mb-5'>Profile</h2>

                        <img src={ProfileImage} alt="Profile" className='rounded-full w-[89px] h-[89px] object-cover' />

                        <form className='mt-5'>
                            {/* First Name &  Last Name */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 max-w-[742px] w-full '>

                                {/* First Name  */}
                                <div>
                                    <label htmlFor='firstname' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>First name *</label>
                                    <input type="text" placeholder='Olivia' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                                </div>

                                {/* Last Name  */}
                                <div>
                                    <label htmlFor='lastname' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Last Name *</label>
                                    <input type="text" placeholder='Rahye' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                                </div>
                            </div>

                            {/* Email * */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4 max-w-[742px] w-full '>
                                <div>
                                    <label htmlFor='email' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Email *</label>
                                    <div className='relative shadow-input-shadow flex-1 flex items-center gap-2 h-[52px] w-full border border-gray-200 px-3 rounded-xl'>
                                        <img src={GmailIcon} alt="GmailIcon" />
                                        <input
                                            type="email"
                                            placeholder='XYZ@gmail.com'
                                            required
                                            className='w-full border-none h-full placeholder:mt-4 outline-none bg-transparent text-normal-text font-normal text-base'
                                        />
                                        <div
                                            className='absolute right-4 cursor-pointer text-normal-text text-lg'
                                            style={{ top: '50%', transform: 'translateY(-50%)' }}
                                        >
                                            <RiErrorWarningLine color='#F04438' />
                                        </div>
                                    </div>
                                    <p className='text-normal-text text-base font-normal mt-[6px]'>This is an error message.</p>
                                </div>
                            </div>

                            {/* Save button  */}
                            <div className='flex items-end justify-end mt-4'>
                                <button className='py-[10px] px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-[130px]'>Save</button>
                            </div>
                        </form>
                    </div>

                    <div className='shadow-boxshadowthree flex-1 p-5 rounded-lg mb-32'>
                        <h2 className='text-xl font-semibold text-text-color-1 leading-[26px] mb-5'>Company Information</h2>

                        <form className='mt-5'>

                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                                {/* Company Name */}
                                <div>
                                    <label htmlFor='company' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Company Name</label>
                                    <input type="text" placeholder='abc@company.com' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                                </div>

                                {/* Employee */}
                                <div ref={el => dropdownRefs.current[0] = el}>
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
                            </div>

                            {/* Address */}
                            <div className='mb-4'>
                                <label htmlFor='Address' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Address</label>
                                <input type="text" placeholder='Enter Address' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                            </div>

                            {/* Country & State */}
                            <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
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
                            <div className='flex items-end justify-end mt-6'>
                                <button className='py-[10px] px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-[130px]'>Save</button>
                            </div>
                        </form>
                    </div>
                </div>

            </section>

        </Table>
    )
}

export default Profile