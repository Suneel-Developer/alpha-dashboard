import React from 'react'
import DotsThreeVertical from "../../assets/DotsThreeVertical.svg"

const BoxOne = () => {
    return (
        <div className='w-full shadow-boxshadow bg-white p-4 sm:p-5 rounded-[20px]'>
            <div className='flex items-center justify-between gap-1 mb-6'>
                <h4 className='text-base font-semibold text-text-color-1'>Audit Progress</h4>
                <button>
                    <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                </button>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-2 mb-10'>
                {/* 1.  */}
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                        <h2 className='text-[26px] font-semibold text-text-color-1 leading-[36px]'>19,241</h2>
                        <div className='py-1 px-2 bg-[#D7555529] bg-opacity-[16%] rounded-[90px] text-[11px] font-semibold text-error leading-[13.86px]'>19%</div>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                        <div className='w-[14px] h-[14px] rounded-full bg-error'></div>
                        <p className='text-text-color-3 font-normal text-sm flex-1'>Non-compliant Documents</p>
                    </div>
                </div>

                {/* 2.  */}
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                        <h2 className='text-[26px] font-semibold text-text-color-1 leading-[36px]'>8,394</h2>
                        <div className='py-1 px-2 bg-[#4ABDE829] bg-opacity-[16%] rounded-[90px] text-[11px] font-semibold text-success leading-[13.86px]'>25%</div>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                        <div className='w-[14px] h-[14px] rounded-full bg-success'></div>
                        <p className='text-text-color-3 font-normal text-sm flex-1'>Compliant Documents</p>
                    </div>
                </div>

                {/* 3.  */}
                <div className='flex flex-col gap-[10px]'>
                    <div className='flex items-center gap-[10px]'>
                        <h2 className='text-[26px] font-semibold text-text-color-1 leading-[36px]'>1,589</h2>
                        <div className='py-1 px-2 bg-[#FFAE4129] bg-opacity-[16%] rounded-[90px] text-[11px] font-semibold text-warning leading-[13.86px]'>16%</div>
                    </div>
                    <div className='flex items-center gap-[6px]'>
                        <div className='w-[14px] h-[14px] rounded-full bg-warning'></div>
                        <p className='text-text-color-3 font-normal text-sm flex-1'>Partially Compliant Documents</p>
                    </div>
                </div>
            </div>

            <div className='flex'>
                <div className='w-[50%] flex items-center bg-[#F9E4E4] rounded-l-[10px] py-[10px] gap-1 sm:gap-3 pl-2 sm:pl-3'>
                    <div className='bg-error w-[17.2px] h-[17.2px] rounded-[5px]'></div>
                    <p className='text-error text-[15px] font-semibold'>19%</p>
                </div>

                <div className='w-[25%] flex items-center bg-[#D2FFEF] py-[10px] gap-1 sm:gap-3 pl-2 sm:pl-3'>
                    <div className='bg-success w-[17.2px] h-[17.2px] rounded-[5px]'></div>
                    <p className='text-success text-[15px] font-semibold'>30%</p>
                </div>

                <div className='w-[25%] flex items-center bg-[#FCF2E6] rounded-r-[10px] py-[10px] gap-1 sm:gap-3 pl-2 sm:pl-3'>
                    <div className='bg-warning w-[17.2px] h-[17.2px] rounded-[5px]'></div>
                    <p className='text-warning text-[15px] font-semibold'>16%</p>
                </div>
            </div>
        </div>
    )
}

export default BoxOne