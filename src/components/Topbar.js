import React, { useState, useEffect, useRef } from 'react';
import { FaBarsStaggered } from "react-icons/fa6";

import Logo from "../assets/alpa-logo.svg";
import WarningIcon from "../assets/warning.svg";
import DownArrow from "../assets/chevron-down.svg";
import ProfileAvatar from "../assets/avatar-emoticon.svg";
import FilterSearchBox from './FilterSearchBox';

const Topbar = ({ toggleSidebar }) => {

    return (
        <div className="sticky top-0 left-0 right-0 h-[79px] px-3 md:px-6 bg-white z-20 flex xxlg:hidden items-center gap-3">
            <button onClick={toggleSidebar} className='block xxlg:hidden'>
                <FaBarsStaggered className='text-2xl xsm:text-3xl text-[#6D7A8D]' />
            </button>
            <img src={Logo} alt="Logo" className='w-[123px] xxlg:hidden block' />
        </div>
    );
};

export default Topbar;
