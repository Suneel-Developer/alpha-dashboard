import React, { useState, useRef, useEffect } from 'react';
import SearchIcon from "../assets/search-lg.svg";
import FilterIcon from "../assets/filter.svg";
import { IoIosClose } from "react-icons/io";

const FilterSearchBox = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Toggle dropdown visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(prev => !prev);
    };

    // Close dropdown if clicked outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <section className='relative' ref={dropdownRef}>
            <div className='max-w-[300px] min-w-[300px] w-full py-[10px] px-4 flex items-center border border-[#E1E5EB] rounded-lg gap-2'>
                <button>
                    <img src={SearchIcon} alt="Search Icon" className='w-5 h-5' />
                </button>
                <input type="text" placeholder='Search' className='h-full flex-1 w-full border-none bg-transparent outline-none text-sm font-normal text-[#989EAD]' />
                <button onClick={toggleDropdown}>
                    <img src={FilterIcon} alt="Filter Icon" className='w-5 h-5' />
                </button>
            </div>

            {/* Filter Dropdown */}
            {isDropdownOpen && (
                <div  className='absolute top-12 z-30 right-0 bg-white rounded-[10px] p-4 max-w-[300px] w-full border border-text-color-1 border-opacity-10'>
                    <div className='flex items-center justify-between mb-3'>
                        <h2 className='text-xs font-medium text-text-color-3'>Filters</h2>
                        <button className='w-5 h-5 bg-[#EBEEF4] rounded-full flex items-center justify-center' onClick={toggleDropdown}>
                            <IoIosClose className='text-normal-text' />
                        </button>
                    </div>

                    <div className='flex flex-col gap-2 mb-3'>
                        <h2 className='text-xs font-medium text-text-color-3'>Filter By Status</h2>
                        <ul>
                            <li className='flex items-center gap-2 text-text-color-3 text-xs font-normal mb-3'>
                                <input type="checkbox" className="ui-checkbox" />
                                Compliant
                            </li>
                            <li className='flex items-center gap-2 text-text-color-3 text-xs font-normal mb-3'>
                                <input type="checkbox" className="ui-checkbox" />
                                Compliant
                            </li>
                            <li className='flex items-center gap-2 text-text-color-3 text-xs font-normal'>
                                <input type="checkbox" className="ui-checkbox" />
                                Compliant
                            </li>
                        </ul>
                    </div>

                    <div className='h-[1px] bg-[#F3EEFA] my-3'></div>

                    <div className='flex flex-col gap-2 mb-3'>
                        <h2 className='text-xs font-medium text-text-color-3'>Filter By Alphabetically</h2>
                        <ul>
                            <li className='flex items-center gap-2 text-text-color-3 text-xs font-normal mb-3'>
                                <input type="checkbox" className="ui-checkbox" />
                                A-Z
                            </li>
                            <li className='flex items-center gap-2 text-text-color-3 text-xs font-normal'>
                                <input type="checkbox" className="ui-checkbox" />
                                Z-A
                            </li>
                        </ul>
                    </div>

                    <div className='h-[1px] bg-[#F3EEFA] my-3'></div>

                    <div className='flex flex-col gap-2 mb-3'>
                        <h2 className='text-xs font-medium text-text-color-3'>Filter By State</h2>
                        <ul>
                            <li className='flex items-center gap-2 text-text-color-3 text-xs font-normal mb-3'>
                                <input type="checkbox" className="ui-checkbox" />
                                Uploaded
                            </li>
                            <li className='flex items-center gap-2 text-text-color-3 text-xs font-normal mb-3'>
                                <input type="checkbox" className="ui-checkbox" />
                                Not Uploaded
                            </li>
                        </ul>
                    </div>

                    <div className='flex items-center justify-end gap-3'>
                        <button className='text-xs font-medium text-blue-normal bg-blue-light py-[6px] px-3 rounded-md text-center'>Reset</button>
                        <button className='text-xs font-medium bg-blue-normal text-white py-[6px] px-3 rounded-md text-center'>Apply</button>
                    </div>
                </div>
            )}
        </section>
    );
}

export default FilterSearchBox;
