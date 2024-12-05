import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import ProfileNavigation from '../components/ProfileNavigation'


const Settings = () => {
    const [isOn, setIsOn] = useState(false);

    const handleToggle = () => {
        setIsOn(prevState => !prevState);
    };

    return (
        <Table showFilterSearchBox={false}>
            <Sidebar />


            <section className='p-4 md:p-6 flex gap-3 flex-col md:flex-row'>
                {/* Profile Navigation  */}
                <div className='max-w-full md:max-w-[220px] h-fit w-full md:sticky md:top-5'>
                    <ProfileNavigation />
                </div>

                {/* Settings Section  */}


                <div className='shadow-boxshadowthree flex-1 p-5 rounded-lg mb-32'>
                    <h2 className='text-xl font-semibold text-text-color-1 leading-[26px] mb-8'>Password Management</h2>

                    {/* form  */}
                    <form className='mt-5'>

                        {/* Previous password */}
                        <div className='mb-4 grid grid-cols-1 sm:grid-cols-2'>
                            <div>
                                <label htmlFor='Previous password' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>Previous password</label>
                                <input type="password" placeholder='Enter previous passwords' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                            </div>
                        </div>

                        <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4'>
                            {/* New password */}
                            <div>
                                <label htmlFor='New password' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>New password</label>
                                <input type="password" placeholder='*****' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                            </div>

                            {/* New confrim password */}
                            <div>
                                <label htmlFor='New confrim password' className='block text-sm font-normal leading-[22px] text-normal-text mb-[6px]'>New confrim password</label>
                                <input type="password" placeholder='***************' required className='shadow-input-shadow flex-1 w-full border border-gray-200 py-[13px] px-3 rounded-xl outline-none text-normal-text font-normal text-base' />
                            </div>

                        </div>

                        {/* Update button */}
                        <div className='flex items-end justify-end mt-6'>
                            <button className='py-[10px] px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-[130px]'>Update</button>
                        </div>
                    </form>

                    {/* divider  */}
                    <div className='h-[1px] w-full bg-[#EAECF0] my-6'></div>

                    <h2 className='text-xl font-semibold text-text-color-1 leading-[26px] mb-8'>Notification Management</h2>

                    <div className='flex items-center gap-4'>
                        <p className='text-sm font-medium text-[#27303F]'>Email Notifications</p>
                        {/* Toggle Switch */}
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input type="checkbox" checked={isOn} onChange={handleToggle} className="sr-only" />
                            <div
                                className={`w-[51px] h-[31px] bg-gray-300 rounded-full shadow-inner ${isOn ? 'bg-[#1E55A8]' : 'bg-gray-300'
                                    }`}
                            ></div>
                            <div
                                className={`absolute w-[27px] h-[27px] bg-white rounded-full transform transition-transform ${isOn ? 'translate-x-5' : 'translate-x-1'
                                    }`}
                            ></div>
                        </label>
                    </div>

                </div>

            </section>

        </Table>
    )
}

export default Settings