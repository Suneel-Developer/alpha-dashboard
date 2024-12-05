import React, { useState } from 'react';
import CloseIcon from "../assets/close.svg";
import SelectFileIcon from "../assets/selectfile.svg";
import DocumentIcon from "../assets/documet-icon.svg";
import DocumentCloseIcon from "../assets/x.svg";

const SummaryPopup = ({ isOpen, onClose, onUploadComplete }) => {
    const [isUploading, setIsUploading] = useState(false);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [fileName, setFileName] = useState('');

    if (!isOpen) return null;

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setFileName(file.name);
            startUpload();
        }
    };

    const startUpload = () => {
        setIsUploading(true);
        const uploadInterval = setInterval(() => {
            setUploadProgress((prevProgress) => {
                if (prevProgress >= 100) {
                    clearInterval(uploadInterval);
                    onUploadComplete();
                    return 100;
                }
                return prevProgress + 10;
            });
        }, 500);
    };

    const handleCancel = () => {
        setIsUploading(false);
        setUploadProgress(0);
        setFileName('');
        onClose();
    };

    return (
        <div className='bg-[#433B3B3D] fixed p-3 top-0 w-full bottom-0 right-0 z-50 left-0 h-screen flex items-center justify-center'>
            <div className="bg-white shadow-popup rounded-xl overflow-hidden max-w-[465px] w-full">
                {/* header  */}
                <div className='flex items-center justify-between bg-blue-light px-4 sm:px-6 py-4'>
                    <h2 className='text-sm font-semibold text-heading-text'>Summary</h2>
                    <button onClick={onClose}>
                        <img src={CloseIcon} alt="CloseIcon" />
                    </button>
                </div>

                {/* content  */}
                <div className='px-4 sm:px-6 pb-6 pt-4'>
                    <p className='font-normal text-sm leading-[22px] tracking-[1%] text-normal-text'>
                        Lorem ipsum dolor sit amet consectetur. Fermentum facilisi feugiat risus at quis adipiscing. Nam aliquam sit amet molestie sed elementum rhoncus vehicula.
                    </p>

                    <div className='mt-5'>
                        {!isUploading ? (
                            <div className='border-[#C7CBD8] border rounded-lg p-4 border-dashed flex items-center justify-between gap-4'>
                                <div className='flex items-center gap-2'>
                                    <img src={SelectFileIcon} alt="SelectFileIcon" />
                                    <div className='flex-1'>
                                        <h3 className='text-sm font-semibold text-dark-text leading-[22px]'>Choose File</h3>
                                        <p className='text-[10px] font-normal text-normal-text leading-[16px]'>
                                            Drag & drop or upload file. Files should be in PDF format & should be less than 5MB.
                                        </p>
                                    </div>

                                    <div className="bg-blue-normal py-[9px] cursor-pointer px-2 sm:px-5 text-center rounded text-sm font-semibold text-white">
                                        <input type="file" id="file" className="hidden" onChange={handleFileChange} />
                                        <label
                                            htmlFor="file"
                                            className="cursor-pointer"
                                        >
                                            Select File
                                        </label>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className='flex items-center justify-between gap-4'>
                                <div className='w-10 h-10 bg-blue-light flex items-center justify-center rounded-full'>
                                    <img src={DocumentIcon} alt="DocumentIcon" />
                                </div>
                                <div className='flex-1'>
                                    <h3 className='text-sm font-semibold text-dark-text leading-[22px]'>{fileName}</h3>
                                    <div className='flex items-center w-full flex-1 gap-2'>
                                        <div className='w-full h-2 rounded-lg bg-blue-light mt-2'>
                                            <div className='bg-blue-normal h-full rounded-lg' style={{ width: `${uploadProgress}%` }}></div>
                                        </div>
                                        <p className='text-xs font-semibold text-blue-dark mt-1'>{uploadProgress}%</p>
                                    </div>
                                </div>


                                <button
                                    onClick={handleCancel}
                                >
                                    <img src={DocumentCloseIcon} alt="DocumentCloseIcon" />
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SummaryPopup;
