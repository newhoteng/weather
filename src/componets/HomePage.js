import React from 'react';
import { IoMdSearch } from "react-icons/io";
import HomePageNav from './HomePageNav';

const HomePage = () => {
  return (
    <main className=''>
      <HomePageNav />
      <div className='bg-plane'>
        <form className='border border-red-600'>
          <div>
            <input placeholder='Search for a place' type='search' />
            <IoMdSearch />
          </div>
        </form>
      </div>
    </main>
  )
}

export default HomePage