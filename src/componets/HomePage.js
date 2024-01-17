import React, { useEffect, useRef, useState } from 'react';
import { IoMdSearch } from "react-icons/io";
import HomePageNav from './HomePageNav';
import { cities } from '../data/cities';

const HomePage = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const matched = cities.filter((city) => city.name.toLowerCase().includes(searchTerm.trim().toLowerCase()));

  const handleSumbit = (e) => {
    e.preventDefault();
    if (searchTerm !== '') {
    }
    console.log(matched)
  }

  const handleClick = (e) => {
    console.log(matched);
  }

  return (
    <main className=''>
      <HomePageNav />
      <div className='bg-castle h-[400px] bg-cover py-[30px]'>
        <div className='bg-black/65 max-w-screen-xl mx-auto p-[50px]'>
          <form onSubmit={handleSumbit} className='bg-white flex'>
            <input
              name='searchTerm'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder='Search for a place'
              type='text'
              className='outline-none w-full px-[24px] py-[8px]'
            />
            <button
                type='submit'
                className='basis-1/12 flex items-center justify-center'
              >
                <IoMdSearch className='text-gray-600 text-[32px]' />
              </button>
          </form>
          {searchTerm.trim().length !== 0 && (
            <div className='text-gray-600 bg-white mt-2'>
              {matched.map((city, index) => (
                <div
                  id={index}
                  key={index}
                  onClick={handleClick}
                  className='border p-2 cursor-pointer'
                >
                  {city.name}{' '}({city.cou_name_en})
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </main>
  )
}

export default HomePage