import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
  return (
    <section className='container mx-auto mt-20 relative px-5'>
        <img src={assets.header_img} className='h-[60vh] rounded-3xl object-cover' />
        <div className='absolute w-[45%] top-1/2 -translate-y-1/2 left-10 text-4xl lg:text-6xl font-bold mb-5 text-white'>
            Order your favourite food here
        </div>
    </section>
  )
}

export default Hero