import React from 'react'
import DocumentIcon from "../../assets/documet-icon.svg"
import DotsThreeVertical from "../../assets/DotsThreeVertical.svg"



const BoxFour = () => {
    return (
        <div className='w-full shadow-boxshadow bg-white h-[448px] rounded-[20px] pt-4 pb-4 pl-4 pr-1'>
            <div className='flex items-center justify-between gap-1 pr-5 pb-4'>
                <h4 className='text-lg font-semibold text-text-color-1'>Documentation</h4>
                <button>
                    <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                </button>
            </div>

            <ul className='boxscrollbar h-[355px] w-full overflow-y-auto'>
                <li className='w-full flex items-start gap-2 overflow-x-auto'>
                    <div className='flex items-center flex-col'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#E9EEF6]'>
                            <img src={DocumentIcon} alt="DocumentIcon" className='h-[13px]' />
                        </div>
                        <div className='border border-dashed border-[#DBE2E9] h-10'></div>
                    </div>

                    <div className='flex-1 flex justify-between'>
                        <div className='flex flex-col gap-[6px]'>
                            <h3 className='text-text-color-1 font-medium text-sm leading-[20px]'>CPR Document</h3>
                            <p className='text-text-color-3 font-normal text-[10px] leading-[12.6px]'>Invoices</p>
                        </div>

                        <button className='pr-4'>
                            <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                        </button>
                    </div>
                </li>

                <li className='w-full flex items-start gap-2 overflow-x-auto'>
                    <div className='flex items-center flex-col'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#E9EEF6]'>
                            <img src={DocumentIcon} alt="DocumentIcon" className='h-[13px]' />
                        </div>
                        <div className='border border-dashed border-[#DBE2E9] h-10'></div>
                    </div>

                    <div className='flex-1 flex justify-between'>
                        <div className='flex flex-col gap-[6px]'>
                            <h3 className='text-text-color-1 font-medium text-sm leading-[20px]'>CPR Document</h3>
                            <p className='text-text-color-3 font-normal text-[10px] leading-[12.6px]'>Reports</p>
                        </div>

                        <button className='pr-4'>
                            <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                        </button>
                    </div>
                </li>

                <li className='w-full flex items-start gap-2 overflow-x-auto'>
                    <div className='flex items-center flex-col'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#E9EEF6]'>
                            <img src={DocumentIcon} alt="DocumentIcon" className='h-[13px]' />
                        </div>
                        <div className='border border-dashed border-[#DBE2E9] h-10'></div>
                    </div>

                    <div className='flex-1 flex justify-between'>
                        <div className='flex flex-col gap-[6px]'>
                            <h3 className='text-text-color-1 font-medium text-sm leading-[20px]'>CPR Document</h3>
                            <p className='text-text-color-3 font-normal text-[10px] leading-[12.6px]'>Receipts</p>
                        </div>

                        <button className='pr-4'>
                            <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                        </button>
                    </div>
                </li>

                <li className='w-full flex items-start gap-2 overflow-x-auto'>
                    <div className='flex items-center flex-col'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#E9EEF6]'>
                            <img src={DocumentIcon} alt="DocumentIcon" className='h-[13px]' />
                        </div>
                        <div className='border border-dashed border-[#DBE2E9] h-10'></div>
                    </div>

                    <div className='flex-1 flex justify-between'>
                        <div className='flex flex-col gap-[6px]'>
                            <h3 className='text-text-color-1 font-medium text-sm leading-[20px]'>CPR Document</h3>
                            <p className='text-text-color-3 font-normal text-[10px] leading-[12.6px]'>Contracts</p>
                        </div>

                        <button className='pr-4'>
                            <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                        </button>
                    </div>
                </li>

                <li className='w-full flex items-start gap-2 overflow-x-auto'>
                    <div className='flex items-center flex-col'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#E9EEF6]'>
                            <img src={DocumentIcon} alt="DocumentIcon" className='h-[13px]' />
                        </div>
                        <div className='border border-dashed border-[#DBE2E9] h-10'></div>
                    </div>

                    <div className='flex-1 flex justify-between'>
                        <div className='flex flex-col gap-[6px]'>
                            <h3 className='text-text-color-1 font-medium text-sm leading-[20px]'>CPR Document</h3>
                            <p className='text-text-color-3 font-normal text-[10px] leading-[12.6px]'>Letters</p>
                        </div>

                        <button className='pr-4'>
                            <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                        </button>
                    </div>
                </li>

                <li className='w-full flex items-start gap-2 overflow-x-auto'>
                    <div className='flex items-center flex-col'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#E9EEF6]'>
                            <img src={DocumentIcon} alt="DocumentIcon" className='h-[13px]' />
                        </div>
                        <div className='border border-dashed border-[#DBE2E9] h-10'></div>
                    </div>

                    <div className='flex-1 flex justify-between'>
                        <div className='flex flex-col gap-[6px]'>
                            <h3 className='text-text-color-1 font-medium text-sm leading-[20px]'>CPR Document</h3>
                            <p className='text-text-color-3 font-normal text-[10px] leading-[12.6px]'>Statements</p>
                        </div>

                        <button className='pr-4'>
                            <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                        </button>
                    </div>
                </li>

                <li className='w-full flex items-start gap-2 overflow-x-auto'>
                    <div className='flex items-center flex-col'>
                        <div className='w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#E9EEF6]'>
                            <img src={DocumentIcon} alt="DocumentIcon" className='h-[13px]' />
                        </div>
                        <div className='border border-dashed border-[#DBE2E9] h-10'></div>
                    </div>

                    <div className='flex-1 flex justify-between'>
                        <div className='flex flex-col gap-[6px]'>
                            <h3 className='text-text-color-1 font-medium text-sm leading-[20px]'>CPR Document</h3>
                            <p className='text-text-color-3 font-normal text-[10px] leading-[12.6px]'>Forms</p>
                        </div>

                        <button className='pr-4'>
                            <img src={DotsThreeVertical} alt="DotsThreeVertical" />
                        </button>
                    </div>
                </li>
            </ul>
        </div>
    )
}

export default BoxFour


  