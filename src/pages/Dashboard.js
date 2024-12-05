import React from 'react';
import BoxOne from '../components/Dashboard/BoxOne';
import BoxThree from '../components/Dashboard/BoxThree';
import BoxFour from '../components/Dashboard/BoxFour';
import Table from '../components/Table';
import BoxFive from '../components/Dashboard/BoxFive';
import BoxTwo from '../components/Dashboard/BoxTwo';

const Dashboard = () => {
  return (
    <Table showFilterSearchBox={false}>

      <section className='p-4'>
        {/* <div className='flex flex-col gap-2'>
          <h2 className='text-xl xsm:text-[28px] font-bold text-[#2D3643] xsm:leading-[36.4px]'>Welcome, Jerremy Hage! 👋 </h2>
          <p className='text-text-color-3 text-xs xsm:text-sm font-normal xsm:leading-[20px]'>We're happy to help manage your team.</p>
        </div> */}

        <div className="flex gap-5 flex-col xxlg:flex-row">
          <div className='flex-1'>
            <BoxOne />
          </div>
          <div className="w-full xxlg:w-[30%]">
            <BoxTwo />
          </div>
        </div>

        <div className='flex flex-col lg:flex-row xxlg:flex-col xlg:flex-row mt-5 gap-5'>
          <div className='w-full lg:w-[70%] xxlg:w-full xlg:w-[70%]'>
            <BoxThree />
          </div>

          <div className='w-full lg:w-[30%] xxlg:w-full xlg:w-[30%]'>
            <BoxFour />
          </div>
        </div>

        <BoxFive />
      </section>
    </Table>
  );
};

export default Dashboard;
