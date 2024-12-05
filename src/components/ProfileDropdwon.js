import React, { useState, useEffect, useRef } from 'react'
import DownArrow from "../assets/chevron-down.svg";
import ProfileAvatar from "../assets/avatar-emoticon.svg";
import { useNavigate } from 'react-router-dom';


const ProfileDropdwon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);
    const naviagte = useNavigate()

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <div className='flex items-center justify-center gap-4'>
            <img src={ProfileAvatar} alt="ProfileAvatar" className='w-11 h-11 rounded-full' />
            <p className='text-[#2D3643] font-semibold text-base leading-[22px] block'>Patricia Peters</p>

            <div className='relative flex gap-3' ref={dropdownRef}>
                <button className='flex items-center gap-1' onClick={toggleDropdown}>
                    <img src={DownArrow} alt="DownArrow" className={` ${isOpen === true ? "" : "rotate-180"}`} />
                </button>

                {isOpen && (
                    <ul className='bg-white p-4 flex flex-col gap-3 rounded-xl absolute right-0 bottom-8 top-auto w-[162px] z-40 border border-gray-200'>
                        <li>
                            <a href='/profile' className='text-sm font-medium text-text-color-1'>My profile</a>
                        </li>
                        <li>
                            <a href='/plan' className='text-sm font-medium text-text-color-1'>Plan</a>
                        </li>
                        <li>
                            <a href='/settings' className='text-sm font-medium text-text-color-1'>Settings</a>
                        </li>
                        <li className='w-full'>
                            <a href="mailto:example@gmail.com" className='text-sm font-medium text-text-color-1'>
                                Contact Us
                            </a>
                        </li>

                        <li className='w-full'>
                            <a href="/login" className='text-sm font-medium text-red-500 font-bold'>
                                Logout
                            </a>
                        </li>


                    </ul>
                )}
            </div>
        </div>
    )
}

export default ProfileDropdwon