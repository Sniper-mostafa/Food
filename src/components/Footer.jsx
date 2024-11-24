import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gray-800 text-gray-300 p-5 pt-10'>
        <div className='flex flex-col lg:flex-row justify-between'>
            <div className='lg:w-1/2'>
                <img src={assets.logo} />
                <p className='text-sm font-medium mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, debitis molestiae? Ducimus omnis veritatis libero optio tempora voluptate repellendus nemo? Dolor itaque magnam ducimus at asperiores, voluptas fugiat ad quasi, eligendi eaque quidem ratione ipsam natus architecto consequuntur delectus quibusdam maxime dignissimos error sapiente doloribus! Explicabo dolore perferendis fugit omnis!</p>
            </div>
            <div className=''>
                <h2 className='uppercase font-bold text-lg'>company</h2>
                <ul className='mt-5'>
                    <li><a href='#'>About</a></li>
                    <li><a href='#'>Services</a></li>
                    <li><a href='#'>Contact</a></li>
                </ul>
            </div>
            <div className=''>
                <h2 className='uppercase text-xl font-bold'>get in touch</h2>
                <ul className='mt-5'>
                    <li><a href='#'>Email: 123@example.com</a></li>
                    <li><a href='#'>Phone: 123-456-7890</a></li>
                    <li><a href='#'>Address: 123 Main St, City, State, ZIP</a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer