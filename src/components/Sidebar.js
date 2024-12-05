import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import Logo from "../assets/Alpha-01-01.svg";
import { RiHome6Line } from "react-icons/ri";
import { IoDocumentTextOutline } from "react-icons/io5";
import { GiSettingsKnobs } from "react-icons/gi";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosCloseCircleOutline } from "react-icons/io";
import ProfileDropdwon from './ProfileDropdwon';

const Sidebar = ({ isOpen, onClose }) => {
    const location = useLocation();

    const getLinkClassName = (path) => {
        const baseClass = "rounded-xl text-base font-normal leading-[22px] text-normal-text flex items-center gap-2 py-[10px] px-3 hover:text-[#1E55A8] hover:bg-[#E9F2FF] transition-colors duration-200";
        const activeClass = "bg-[#E9F2FF] font-semibold text-[#1E55A8]";
        return location.pathname === path ? `${baseClass} ${activeClass}` : baseClass;
    };

    

    return (
        <div className={`fixed top-0 left-0 pl-6 xxlg:pl-4 pr-6 xxlg:pr-0 py-6 xxlg:py-4 w-[320px] xxlg:w-[296px] bg-gray-100 lg:bg-white border-r xxlg:border-r-0 h-full transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 xxlg:translate-x-0 z-50`}>
            <div className='bg-[#DDE6F2] h-full flex justify-between overflow-hidden flex-col rounded-[18px] pt-2 pb-6 px-2 relative'>
                <div>
                    <Link to="/" className='flex items-center justify-center mt-2'>
                        <img src={Logo} alt="alpa-logo" className='h-[70px]' />
                    </Link>

                    <nav>
                        <ul className="flex flex-col gap-3 mt-8">

                            {/* Dashboard Link  */}
                            <li>
                                <Link to="/" className={getLinkClassName('/')}>
                                    <RiHome6Line />
                                    Dashboard
                                </Link>
                            </li>

                            {/* Compliance Documents Link  */}
                            <li>
                                <Link to="/uploaddocumentsone" className={getLinkClassName('/uploaddocumentsone')}>
                                    <IoDocumentTextOutline />
                                    Compliance Documents
                                </Link>
                            </li>

                            {/* Settings Link  */}
                            <li>
                                <Link to="/settings" className={getLinkClassName('/settings')}>
                                    <IoSettingsOutline />
                                    Settings
                                </Link>
                            </li>

                        </ul>
                    </nav>
                </div>

                <div>
                    <div className='flex items-center flex-col gap-4'>

                        <ProfileDropdwon/>
                    </div>
                </div>
            </div>

            {/* Close btn  */}
            <button className='top-2 absolute right-2 xxlg:hidden' onClick={onClose}>
                <IoIosCloseCircleOutline />
            </button>
        </div>
    );
};

export default Sidebar;
