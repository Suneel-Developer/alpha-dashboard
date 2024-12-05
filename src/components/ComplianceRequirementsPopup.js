import React from 'react';
import { useNavigate } from 'react-router-dom';
import CloseIcon from "../assets/close.svg";
import CheckboxIcon from "../assets/checkbox.svg";


const ComplianceRequirementsPopup = ({ onClose }) => {
    const navigate = useNavigate();

    const handleNavigateHome = () => {
        navigate('/');
    };

    return (
        <div className='fixed inset-0 flex items-center p-3 justify-center bg-[#433B3B3D] z-50'>
            <div className='bg-white rounded-[20px] shadow-popup overflow-hidden relative max-w-[465px] w-full'>

                {/* header  */}
                <div className='flex items-center justify-between bg-blue-light px-4 sm:px-6 py-4'>
                    <h2 className='text-sm font-bold text-text-color-1'>Compliance Requirements</h2>
                    <button onClick={onClose}>
                        <img src={CloseIcon} alt="CloseIcon" />
                    </button>
                </div>

                {/* content  */}
                <div className='px-4 sm:px-6 pb-6 pt-4'>
                    <ul className='flex flex-col gap-5 h-[261px] overflow-y-auto boxscrollbar mb-4'>

                        <li className='flex items-center gap-3 cursor-pointer'>
                            <img src={CheckboxIcon} alt="CheckboxIcon" />
                            <p className='text-sm font-medium leading-[16px] text-text-color-3 flex-1'>Lorem ipsum dolor sit amet, consectetur adipiscingj.</p>
                        </li>
                        <li className='flex items-center gap-3 cursor-pointer'>
                            <img src={CheckboxIcon} alt="CheckboxIcon" />
                            <p className='text-sm font-medium leading-[16px] text-text-color-3 flex-1'>Lorem ipsum dolor sit amet, consectetur adipiscingj.</p>
                        </li>
                        <li className='flex items-center gap-3 cursor-pointer'>
                            <img src={CheckboxIcon} alt="CheckboxIcon" />
                            <p className='text-sm font-medium leading-[16px] text-text-color-3 flex-1'>Lorem ipsum dolor sit amet, consectetur adipiscingj.</p>
                        </li>
                        <li className='flex items-center gap-3 cursor-pointer'>
                            <img src={CheckboxIcon} alt="CheckboxIcon" />
                            <p className='text-sm font-medium leading-[16px] text-text-color-3 flex-1'>Lorem ipsum dolor sit amet, consectetur adipiscingj.</p>
                        </li>
                        <li className='flex items-center gap-3 cursor-pointer'>
                            <img src={CheckboxIcon} alt="CheckboxIcon" />
                            <p className='text-sm font-medium leading-[16px] text-text-color-3 flex-1'>Lorem ipsum dolor sit amet, consectetur adipiscingj.</p>
                        </li>
                        <li className='flex items-center gap-3 cursor-pointer'>
                            <img src={CheckboxIcon} alt="CheckboxIcon" />
                            <p className='text-sm font-medium leading-[16px] text-text-color-3 flex-1'>Lorem ipsum dolor sit amet, consectetur adipiscingj.</p>
                        </li>








                    </ul>

                    <button
                        onClick={handleNavigateHome}
                        className='py-3 px-4 bg-blue-light w-full rounded-xl text-sm font-semibold text-blue-normal text-center'>
                        Navigate to Home
                    </button>
                </div>

            </div>
        </div>
    );
};

export default ComplianceRequirementsPopup;
