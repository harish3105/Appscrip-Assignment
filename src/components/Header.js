import React from 'react';
import { FaSearch, FaShoppingBag, FaUser ,FaHeart} from 'react-icons/fa';

import Logo from "../Assests/Logo.png";

function Header() {
  return (
    <div>
      
      <div className='flex lg:px-8 px-4 py-4 pt-12 w-full h-fit justify-between lg:border-b-0 border-b-2'>

        <div >
         
          <img src={Logo} alt="icon" className='h-6 w-6' />
        </div>

        
        <div>
          <h1 className='text-2xl font-bold'>LOGO</h1>
        </div>


        <div className='flex gap-2 items-center'>

          <FaSearch />
          <FaHeart />
          <FaShoppingBag  />
          <FaUser className='lg:block hidden' />
          <select className='lg:block hidden'>
            <option value="ENG">ENG</option>
            <option value="HIN">HIN</option>
          </select>
        </div>
      </div>

      {/* Navbar Options */}
      <div className='lg:flex justify-center hidden py-8 border-b-2'>
        <ul className='flex gap-16'>
         
          <li>SHOP</li>
          <li>SKILLS</li>
          <li>STORIES</li>
          <li>ABOUT</li>
          <li>CONTACT US</li>
        </ul>
      </div>
      <div className='w-full h-fit lg:hidden flex items-center gap-4 px-4 py-4'>
        
            <p className='text-gray-400 text-sm'>HOME</p>
            <div className='h-4 w-0.5 bg-black text-sm'></div>
            <p>SHOP</p>
        
      </div>
      <div className='flex justify-center flex-col items-center lg:py-8 py-6'>
      <h1 className='lg:text-5xl text-xl font-bold px-1'>DISCOVER OUR PRODUCTS</h1>
      <p className='text-center px-4 py-2 lg:py-6 lg:text-2xl text-lg'>Lorem seems to be a phrase without any specific meaning. It might be a typo or an incomplete sentence. </p>
      </div>
    </div>
  );
}

export default Header;
