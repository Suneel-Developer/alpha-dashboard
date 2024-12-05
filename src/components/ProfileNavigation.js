import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const ProfileNavigation = () => {
  const location = useLocation();
  const { pathname } = location;

  return (
    <div>
      <ul className='shadow-boxshadowthree w-full rounded-lg p-5 flex flex-col gap-6'>
        <li>
          <Link 
            to='/profile' 
            className={`py-2 px-3 inline-block rounded-md text-base font-normal transition-colors duration-300 w-full 
              ${pathname === '/profile' ? 'bg-[#E9EEF6] text-blue-normal font-medium' : 'text-normal-text hover:bg-[#E9EEF6] hover:text-blue-normal'}
            `}
          >
            My Profile
          </Link>
        </li>

        <li>
          <Link 
            to='/plan' 
            className={`py-2 px-3 inline-block rounded-md text-base font-normal transition-colors duration-300 w-full 
              ${pathname === '/plan' ? 'bg-[#E9EEF6] text-blue-normal font-medium' : 'text-normal-text hover:bg-[#E9EEF6] hover:text-blue-normal'}
            `}
          >
            Plan
          </Link>
        </li>

        <li>
          <Link 
            to='/settings' 
            className={`py-2 px-3 inline-block rounded-md text-base font-normal transition-colors duration-300 w-full 
              ${pathname === '/settings' ? 'bg-[#E9EEF6] text-blue-normal font-medium' : 'text-normal-text hover:bg-[#E9EEF6] hover:text-blue-normal'}
            `}
          >
            Settings
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default ProfileNavigation;
