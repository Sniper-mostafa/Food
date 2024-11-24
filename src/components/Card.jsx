import React, { useContext } from 'react'
import { assets } from '../assets/assets'
import { StoreContext } from '../context/ShopContext'

const Card = ({ id, name, price, description, image }) => {

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext)
  
  return (
    <div className='w-[350px] rounded-t-xl overflow-hidden border-2 shadow-xl'>
      <div className='overflow-hidden relative'>
        <img src={image} className='object-cover hover:scale-125 duration-300 transition-all' />
        <div 
          className='absolute bottom-2 right-2 cursor-pointer'
        >
          {!cartItems[id]
            ?<img onClick={()=> addToCart(id)} src={assets.add_icon_white} alt='add' />
            :<div className='flex items-center gap-2 bg-white p-2 rounded-full'>
              <img onClick={()=> removeFromCart(id)} src={assets.remove_icon_red} alt="add" />
              <span>{cartItems[id]}</span>
              <img onClick={()=> addToCart(id)} src={assets.add_icon_green} alt='remove' />
            </div>
          }
        
        </div>
      </div>
      <div className='flex flex-col gap-3 px-3 py-6'>
        <div className='flex justify-between items-center'>
          <span className='text-xl font-medium text-gray-500'>{name}</span>
          <img src={assets.rating_starts} />
        </div>
        <p className='text-sm text-gray-400'>{description}</p>
        <span className='text-2xl font-bold text-orange-400'>${price}</span>
      </div>
    </div>
  )
}

export default Card