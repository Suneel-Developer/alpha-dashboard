import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SquareTikmark from "../assets/Tick-Square.svg"


const Plans = () => {
    const [isMonthly, setIsMonthly] = useState(true);
    const [checkboxes, setCheckboxes] = useState({
        crm: true,
        takeoffModule: true,
        constructionEstimate: true,
    });
    const navigate = useNavigate()


    //   toggle switch 
    const handleToggle = () => {
        setIsMonthly(!isMonthly);
    };



    // Handle change event for checkbox
    const handleChange = (event) => {
        const { name, checked } = event.target;
        setCheckboxes((prev) => ({
            ...prev,
            [name]: checked,
        }));
    };


    // navigate to payment page 
    const handleNaviagtetoPayment = (() => {
        navigate("/payment")
    })


    return (
        <section>
            <div className='flex items-center justify-center gap-8 mb-7'>
                <p className='text-[#101828] text-xl font-normal'>Monthly</p>

                {/* Toggle Switch */}
                <div className='relative'>
                    <input type='checkbox' id='planToggle' checked={!isMonthly} onChange={handleToggle} className='sr-only' />
                    <label
                        htmlFor='planToggle'
                        className='flex items-center cursor-pointer'
                    >
                        <div className='w-[70px] h-[31px] flex items-center bg-blue-normal rounded-full p-1'>
                            <div
                                className={`w-6 h-6 bg-white rounded-full transform ${isMonthly ? 'translate-x-0' : 'translate-x-9'}`}
                            />
                        </div>
                    </label>
                </div>

                <p className='text-[#101828] text-xl font-normal'>Yearly</p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7'>
                {isMonthly ? (

                    // Monthly Plans 
                    <>
                        <div className='shadow-boxshadowfour p-7 rounded-xl'>
                            <h2 className='text-xl font-bold text-heading-text mb-8'>Individual Basic License</h2>
                            <div className='flex items-end gap-2'>
                                <h2 className='text-[50px] leading-[45px] text-heading-text font-extrabold'>$25</h2>
                                <p className='text-sm font-medium text-normal-text'>/Month</p>
                            </div>

                            <p className='text-base font-normal text-normal-text leading-[27px] py-9'>All the basics for businesses that are just getting started.</p>

                            <div className='w-full h-[1px] bg-[#0000001A] mb-7'></div>

                            <h2 className='text-lg font-medium text-heading-text mb-4'>Features</h2>

                            <ul className='flex flex-col gap-4'>
                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>CRM</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Takeoff Module</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Construction Estimate Module</p>
                                </li>
                            </ul>

                            <button onClick={handleNaviagtetoPayment} className='py-[10px] mt-20 px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-full'>Buy</button>
                        </div>

                        <div className='shadow-boxshadowfour p-7 rounded-xl'>
                            <h2 className='text-xl font-bold text-heading-text mb-8'>Individual Basic License</h2>
                            <div className='flex items-end gap-2'>
                                <h2 className='text-[50px] leading-[45px] text-heading-text font-extrabold'>$25</h2>
                                <p className='text-sm font-medium text-normal-text'>/Month</p>
                            </div>

                            <p className='text-base font-normal text-normal-text leading-[27px] py-9'>All the basics for businesses that are just getting started.</p>

                            <div className='w-full h-[1px] bg-[#0000001A] mb-7'></div>

                            <h2 className='text-lg font-medium text-heading-text mb-4'>Features</h2>

                            <ul className='flex flex-col gap-4'>
                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>CRM</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Takeoff Module</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Construction Estimate Module</p>
                                </li>
                            </ul>

                            <button onClick={handleNaviagtetoPayment} className='py-[10px] mt-20 px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-full'>Buy</button>
                        </div>

                        <div className='shadow-boxshadowfour p-7 rounded-xl'>
                            <h2 className='text-xl font-bold text-heading-text mb-8'>Individual Basic License</h2>
                            <div className='flex items-end gap-2'>
                                <h2 className='text-[50px] leading-[45px] text-heading-text font-extrabold'>$25</h2>
                                <p className='text-sm font-medium text-normal-text'>/Month</p>
                            </div>

                            <p className='text-base font-normal text-normal-text leading-[27px] py-9'>All the basics for businesses that are just getting started.</p>

                            <div className='w-full h-[1px] bg-[#0000001A] mb-7'></div>

                            <h2 className='text-lg font-medium text-heading-text mb-4'>Features</h2>

                            <ul className='flex flex-col gap-4'>
                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>CRM</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Takeoff Module</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Construction Estimate Module</p>
                                </li>
                            </ul>

                            <button onClick={handleNaviagtetoPayment} className='py-[10px] mt-20 px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-full'>Buy</button>
                        </div>
                    </>
                ) : (

                    // Yearly Plans 
                    <>
                        <div className='shadow-boxshadowfour p-7 rounded-xl'>
                            <h2 className='text-xl font-bold text-heading-text mb-8'>Individual Basic License</h2>
                            <div className='flex items-end gap-2'>
                                <h2 className='text-[50px] leading-[45px] text-heading-text font-extrabold'>$25</h2>
                                <p className='text-sm font-medium text-normal-text'>/Year</p>
                            </div>

                            <p className='text-base font-normal text-normal-text leading-[27px] py-9'>All the basics for businesses that are just getting started.</p>

                            <div className='w-full h-[1px] bg-[#0000001A] mb-7'></div>

                            <h2 className='text-lg font-medium text-heading-text mb-4'>Features</h2>

                            <ul className='flex flex-col gap-4'>
                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>CRM</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Takeoff Module</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Construction Estimate Module</p>
                                </li>
                            </ul>

                            <button onClick={handleNaviagtetoPayment} className='py-[10px] mt-20 px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-full'>Buy</button>
                        </div>

                        <div className='shadow-boxshadowfour p-7 rounded-xl'>
                            <h2 className='text-xl font-bold text-heading-text mb-8'>Individual Basic License</h2>
                            <div className='flex items-end gap-2'>
                                <h2 className='text-[50px] leading-[45px] text-heading-text font-extrabold'>$25</h2>
                                <p className='text-sm font-medium text-normal-text'>/Year</p>
                            </div>

                            <p className='text-base font-normal text-normal-text leading-[27px] py-9'>All the basics for businesses that are just getting started.</p>

                            <div className='w-full h-[1px] bg-[#0000001A] mb-7'></div>

                            <h2 className='text-lg font-medium text-heading-text mb-4'>Features</h2>

                            <ul className='flex flex-col gap-4'>
                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>CRM</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Takeoff Module</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Construction Estimate Module</p>
                                </li>
                            </ul>

                            <button onClick={handleNaviagtetoPayment} className='py-[10px] mt-20 px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-full'>Buy</button>
                        </div>

                        <div className='shadow-boxshadowfour p-7 rounded-xl'>
                            <h2 className='text-xl font-bold text-heading-text mb-8'>Individual Basic License</h2>
                            <div className='flex items-end gap-2'>
                                <h2 className='text-[50px] leading-[45px] text-heading-text font-extrabold'>$25</h2>
                                <p className='text-sm font-medium text-normal-text'>/Year</p>
                            </div>

                            <p className='text-base font-normal text-normal-text leading-[27px] py-9'>All the basics for businesses that are just getting started.</p>

                            <div className='w-full h-[1px] bg-[#0000001A] mb-7'></div>

                            <h2 className='text-lg font-medium text-heading-text mb-4'>Features</h2>

                            <ul className='flex flex-col gap-4'>
                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>CRM</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Takeoff Module</p>
                                </li>

                                <li className='flex items-center gap-3'>
                                    <img src={SquareTikmark} alt="SquareTikmark" />
                                    <p className='text-base font-normal text-normal-text flex-1'>Construction Estimate Module</p>
                                </li>
                            </ul>

                            <button onClick={handleNaviagtetoPayment} className='py-[10px] mt-20 px-[18px] rounded-lg bg-blue-normal text-white text-center shadow-input-shadow text-base font-semibold w-full'>Buy</button>
                        </div>

                    </>
                )}
            </div>
        </section>
    );
};

export default Plans;
