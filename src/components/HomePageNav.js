import React from 'react';
import { IoMdSettings, IoMdSearch } from "react-icons/io";

const HomePageNav = () => {
  return (
    <div className='bg-[#2a2a2a]'>
      <nav className='flex justify-center max-w-screen-xl mx-auto'>
        <div className='flex-grow items-center text-[#919191]'>
          <div className='flex items-center justify-center'>
            <span className='px-[24px] py-[16px]'>Find a forecast</span>
            <span className='px-[24px] py-[16px]'>Warnings & advice</span>
            <span className='px-[24px] py-[16px]'>Maps & charts</span>
            <span className='px-[24px] py-[16px]'>Climate</span>
            <span className='px-[24px] py-[16px]'>Specialist forecasts</span>
            <span className='px-[24px] py-[16px]'>Learn about...</span>
          </div>
        </div>
        <div className='flex text-white'>
          <span className='border-l-[0.5px] flex items-center justify-center p-[10px]'><IoMdSettings className='w-[28.8px] h-[28.8px]' /></span>
          <span className='border-l-[0.5px] flex items-center justify-center p-[10px]'><IoMdSearch className='w-[28.8px] h-[28.8px]' /></span>
        </div>
      </nav>
    </div>
  )
}

export default HomePageNav