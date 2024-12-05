import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Sidebar from '../components/Sidebar'
import Table from '../components/Table'
import ProfileNavigation from '../components/ProfileNavigation'
import ArrowUpRight from "../assets/arrow-up-right.svg"
import SquareTikmark from "../assets/Tick-Square.svg"



const Plan = () => {
  const [isOn, setIsOn] = useState(false);
  const [checkboxes, setCheckboxes] = useState({
    crm: true,
    takeoffModule: true,
    constructionEstimate: true,
  });
  const navigate = useNavigate()

  const handleToggle = () => {
    setIsOn(prevState => !prevState);
  };


  // Handle change event for checkbox
  const handleChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prev) => ({
      ...prev,
      [name]: checked,
    }));
  };


  // navigate toupgrade-plans page 
  const handleNaviagtetoUpgradePlans = (() => {
    navigate("/upgrade-plans")
  })


  return (
    <Table showFilterSearchBox={false}>
      <Sidebar />


      <section className='p-4 md:p-6 flex gap-5 flex-col md:flex-row'>
        {/* Profile Navigation  */}
        <div className='max-w-full md:max-w-[220px] h-fit w-full md:sticky md:top-5'>
          <ProfileNavigation />
        </div>

        {/* Plan Section  */}
        <div className='flex-1 mb-32'>
          <h2 className='text-xl font-semibold text-text-color-1 leading-[26px] mb-5'>Plans</h2>

          <p className='text-sm font-medium text-blue-normal py-3'>My Subscription</p>
          <div className='h-[2px] bg-[#EAECF0] mb-7'>
            <div className='h-full bg-blue-normal w-[113px]'></div>
          </div>

          <div className='flex items-center justify-between flex-wrap'>
            <p className='text-xl font-semibold text-[#101828]'>My Subscriptions</p>
            <div className='flex items-center gap-3'>
              {/* Toggle Switch */}
              <label className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" checked={isOn} onChange={handleToggle} className="sr-only" />
                <div
                  className={`w-9 h-5 bg-gray-300 rounded-full ${isOn ? 'bg-[#1E55A8]' : 'bg-gray-300'
                    }`}
                ></div>
                <div
                  className={`absolute w-4 h-4 bg-white rounded-full transform transition-transform ${isOn ? 'translate-x-4' : 'translate-x-1'
                    }`}
                ></div>
              </label>

              <p className='text-sm text-[#344054] font-medium'>Enable auto-payment to renew subscription</p>
            </div>
          </div>

          <div className='shadow-boxshadowfour p-7 rounded-xl max-w-[300px] w-full mt-8'>
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

            <button onClick={handleNaviagtetoUpgradePlans} className='py-[10px] mt-10 px-[18px] text-center text-base font-semibold w-full flex items-center justify-end gap-2'>
              Upgrade plan
              <img src={ArrowUpRight} alt="ArrowUpRight" />
            </button>
          </div>

        </div>

      </section>

    </Table>
  )
}

export default Plan