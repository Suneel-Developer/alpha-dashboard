import React from 'react';
import DeleteIcon from "../assets/delete-document.svg"
import { IoIosClose } from "react-icons/io";

const DeleteConfirmationPopup = ({ isOpen, onClose, onConfirm }) => {
    if (!isOpen) return null;

    return (
        <div className='fixed inset-0 flex items-center justify-center p-3 bg-[#433B3B3D] z-50'>
            <div className='bg-white p-6 rounded-[20px] shadow-popup relative max-w-[360px] w-full'>
                <img src={DeleteIcon} alt="SavedIcon" className='mx-auto mt-14' />
                <p className='mb-5 mt-3 text-center text-base font-medium text-text-color-1 leading-[22px]'>Are you sure you want to delete the document?</p>
                <div className='flex items-center gap-5'>
                    <button
                        onClick={onClose}
                        className='py-3 px-4 bg-blue-light w-full rounded-xl text-sm font-semibold text-blue-normal text-center'>
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        className='py-3 px-4 bg-blue-normal w-full rounded-xl text-sm font-semibold text-white text-center'
                    >
                        OK
                    </button>
                </div>
                <button
                    onClick={onClose}
                    className='w-6 h-6 flex items-center justify-center absolute right-3 top-3 bg-gray-300 rounded-full text-sm font-semibold'>
                    <IoIosClose className='text-normal-text text-lg' />
                </button>

            </div>
        </div>
    );
};

export default DeleteConfirmationPopup;
