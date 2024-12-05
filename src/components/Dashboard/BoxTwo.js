import React from 'react'
import Graph from '../../assets/graph.svg'

const BoxTwo = () => {
    return (
        <div className='w-full shadow-boxshadow bg-white p-4 sm:p-5 rounded-[20px] flex items-center flex-col h-full justify-between gap-7'>
            <img src={Graph} alt="Graph" />
            <div className="flex items-center justify-between flex-wrap w-full gap-2">
                <div className='flex items-center gap-[5px]'>
                    <p className='bg-[#E9EFFD] py-1 px-2 w-fit flex items-center justify-center gap-[6px] rounded-[90px] text-[10px] font-medium text-blue-normal'>
                        <span className='w-[6px] h-[6px] rounded-full bg-blue-normal'></span>
                        Completed
                    </p>
                    <p className='text-base font-semibold text-[#4D5154]'>60%</p>
                </div>

                <div className='flex items-center gap-[5px]'>
                    <p className='bg-[#DDE6F2] py-1 px-2 w-fit flex items-center justify-center gap-[6px] rounded-[90px] text-[10px] font-medium text-[#6D7A8D]'>
                        <span className='w-[6px] h-[6px] rounded-full bg-[#6D7A8D]'></span>
                        In Progress
                    </p>
                    <p className='text-base font-semibold text-[#4D5154]'>40%</p>
                </div>
            </div>
        </div>
    )
}

export default BoxTwo