import React from 'react';
import SavedIcon from "../assets/saved-icon.svg"
import { IoIosClose } from "react-icons/io";


const SavedChangesPopup = ({ onClose, onComplianceRequirements }) => {
    return (
        <div className='fixed inset-0 flex items-center justify-center p-3 bg-[#433B3B3D] z-50'>
            <div className='bg-white p-6 rounded-[20px] shadow-popup relative max-w-[360px] w-full'>
                <img src={SavedIcon} alt="SavedIcon" className='mx-auto mt-14' />
                <p className='mb-5 mt-3 text-center text-base font-medium text-text-color-1 leading-[22px]'>All the changes have been saved successfully.</p>
                <button
                    onClick={onComplianceRequirements}
                    className='py-[10px] px-4 bg-blue-light w-full rounded-xl text-sm font-semibold text-blue-normal text-center'>
                    Re-check Compliance Requirements
                </button>
                <button
                    onClick={onClose}
                    className='w-6 h-6 flex items-center justify-center absolute right-3 top-3 bg-gray-300 rounded-full text-sm font-semibold'>
                    <IoIosClose className='text-normal-text text-lg' />
                </button>
            </div>
        </div>
    );
};

export default SavedChangesPopup;
