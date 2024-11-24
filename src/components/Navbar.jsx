import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { assets } from '../assets/assets'
import { StoreContext } from '../context/ShopContext';

const Navbar = ({ setShowModal }) => {
  const { getCartAmount } = useContext(StoreContext);

  return (
    <nav className="container mx-auto p-4 shadow-lg rounded-b-lg">
      <div className="flex justify-between items-center">
        <div className="text-white text-lg font-bold">
          <Link to="/">
            <img src={assets.logo} className='w-40 h-8' />
          </Link>
        </div>
        <div className='flex items-center gap-6'>
          <img src={assets.search_icon} alt="search" className='w-6 h-6 cursor-pointer' />
          <Link to="/cart" className='relative '>
            <img src={assets.basket_icon} className='w-6 h-6 cursor-pointer' alt='basket' />
            <span 
              className='absolute -top-3 -right-3 bg-gray-700 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs'>
                {getCartAmount()}
            </span>
          </Link>
          <button onClick={()=> setShowModal(true)} className="text-white bg-orange-500 px-4 lg:px-7 py-2 rounded-md text-sm font-bold">
            Login
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
