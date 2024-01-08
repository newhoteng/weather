import React from 'react';

// max-w-screen-xl mx-auto

const Header = () => {
  return (
    <header>
      <nav className='text-[#919191]'>
        <div className='bg-[#1d1d1d] text-sm'>
          <div className='flex justify-between items-center border max-w-screen-xl mx-auto'>
            <div>
              <span>Logo</span>
              <span className='text-white'>Met Office</span>
            </div>
            <div className='flex items-center'>
              <span className='border pt-3 pb-5 px-3 text-[#8ea724]'>Weather & climate</span>
              <span className='border pt-3 pb-5 px-3'>Research programmes</span>
              <span className='border pt-3 pb-5 px-3'>Services</span>
              <span className='border pt-3 pb-5 px-3'>About us</span>
            </div>
          </div>
        </div>
        <div className='bg-[#2a2a2a]'>
          <div className='flex items-center justify-between border max-w-screen-xl mx-auto'>
            <div className='flex items-center'>
              <span className='border'>Find a forecast</span>
              <span className='border'>Warnings & advice</span>
              <span className='border'>Maps & charts</span>
              <span className='border'>Climate</span>
              <span className='border'>Specialist forecasts</span>
              <span className='border'>Learn about...</span>
            </div>
            <div>
              <span>Logo1</span>
              <span>Logo2</span>
            </div>
          </div>
        </div>
      </nav>

    </header>
  )
}

export default Header