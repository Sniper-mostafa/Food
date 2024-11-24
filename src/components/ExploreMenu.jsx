import React from 'react'
import { menu_list } from '../assets/assets';

const ExploreList = ({ category, setCategory}) => {

  return (
    <div className='container mx-auto mt-20 px-5'>
        <h2 className='text-3xl lg:text-6xl font-semibold mb-5'>Explore our menu</h2>
        <p className='md:max-w-[500px] text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et magni magnam expedita recusandae. Totam, voluptas vero veniam accusamus officia, error voluptatem dolorum nisi, nostrum pariatur vel harum odio impedit facere?</p>
        <div className='flex justify-center gap-5 flex-wrap mt-10'>
          {menu_list.map((menu,index)=> (
            <div 
              key={index} 
              className='flex flex-col gap-2 items-center'
              onClick={() => setCategory(prev => prev === menu.menu_name ? "All" : menu.menu_name)}
            > 
                <img src={menu.menu_image} alt={menu.menu_name} className={`${category === menu.menu_name && "border-orange-400"} p-2 border-4 rounded-full cursor-pointer`} />
                <span className='text-lg text-gray-500'>{menu.menu_name}</span>
            </div>
          ))}
        </div>
        <hr className='my-10' />
    </div>
  )
}

export default ExploreList;