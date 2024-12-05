import React, { useState, useRef, useEffect } from 'react'
import ArrowDropdown from "../assets/arrow_drop_down.svg"
import Flag from "../assets/flag.png"


const LanguageDropdwon = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Eng (US)');
    const dropdownRef = useRef(null);


    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        setIsOpen(false);
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
        <div className='relative' ref={dropdownRef}>
            <div
                className='cursor-pointer flex items-center gap-2 flex-1 w-full text-heading-text font-normal text-base'
                onClick={toggleDropdown}
            >
                <img src={Flag} alt="Flag" className='h-6 w-6 rounded-full' />
                <span>{selectedOption}</span>
                <img src={ArrowDropdown} alt="Chevron Down" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </div>

            <ul
                className={`absolute top-10 z-30 bg-white left-0 flex flex-col gap-1 flex-1 w-full border border-gray-200 p-2 text-dark-text font-normal text-sm transition-opacity duration-100 ease-in-out ${isOpen ? 'opacity-100' : 'opacity-0'} ${isOpen ? 'scale-100' : 'scale-95'} transform origin-top`}
            >
                <li className='cursor-pointer' onClick={() => handleOptionSelect('Eng (US)')}>Eng (US)</li>
                <li className='cursor-pointer' onClick={() => handleOptionSelect('Eng (US)')}>Eng (US)</li>
                <li className='cursor-pointer' onClick={() => handleOptionSelect('Eng (US)')}>Eng (US)</li>
            </ul>
        </div>
    )
}

export default LanguageDropdwon