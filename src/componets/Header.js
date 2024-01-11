import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Header = () => {
  const navLinkStyles = ({ isActive }) => ({
    backgroundColor: isActive ? '#2a2a2a' : '#1d1d1d',
    color: isActive ? '#b9dc0c' : '#919191'
  });
  
  return (
    <>
      <header className='bg-[#1d1d1d] text-[#919191] text-sm'>
        <nav className='flex pl-[16px] pr-[106px] justify-between items-center max-w-screen-xl mx-auto'>
          <div className='w-[108px]'>
            <img alt='Met Office' src='https://www.metoffice.gov.uk/webfiles/1704798105601/images/logos/mo-green-white.svg' />
          </div>
          <div className='flex items-center'>
            <NavLink style={navLinkStyles} to="/" className='p-4'>Weather & climate</NavLink>
            <NavLink style={navLinkStyles} to="/research" className='p-4'>Research programmes</NavLink>
            <NavLink style={navLinkStyles} to="/services" className='p-4'>Services</NavLink>
            <NavLink style={navLinkStyles} to="/about" className='p-4'>About us</NavLink>
          </div>
        </nav>
      </header>
      <Outlet />
    </>
  )
}

export default Header