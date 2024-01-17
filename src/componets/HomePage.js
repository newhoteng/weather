import React, { useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import HomePageNav from './HomePageNav';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <main className=''>
      <HomePageNav />
      <div className='bg-castle h-[400px] bg-cover py-[30px]'>
        <div className='bg-black/65 max-w-screen-xl mx-auto p-[50px]'>
          <form className='bg-white flex'>
            <input
              name='searchTerm'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search for a place'
              type='search'
              className='outline-none w-full px-[24px] py-[8px]'
            />
            <button
                type='submit'
                className='basis-1/12 flex items-center justify-center'
              >
                <IoMdSearch className='text-gray-600 text-[32px]' />
              </button>
          </form>
          <div>
            Display matching cities
          </div>
        </div>
      </div>
    </main>
  )
}

export default HomePage