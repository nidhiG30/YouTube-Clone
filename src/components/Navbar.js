import React from 'react';
import { MdMic } from 'react-icons/md';
import { HiOutlineBars3, HiMagnifyingGlass } from 'react-icons/hi2'; // HeroIcons2
import { BiVideoPlus } from 'react-icons/bi'; // BoxIcons
import { FaRegBell } from 'react-icons/fa'; // Font Awesome 5
import logo from '../assets/yt-logo-white.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-yt-black h-14 flex items-center pl-4 pr-5 justify-between fixed w-full z-10">
      <div className="flex justify-between items-center">
        <div className="text-yt-white p-2 w-10 text-2xl text-center hover:bg-yt-light-black rounded-full cursor-pointer">
          <HiOutlineBars3 />
        </div>
        <div className='py-5 w-28 pr-3'>
          <Link to="/">
            <img src={logo} alt="" className='object-contain' />
          </Link>
        </div>
      </div>
    </div>
    
  );
};

export default Navbar;
