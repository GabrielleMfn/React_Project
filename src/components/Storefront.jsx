import React from 'react'
import { assets } from '../assets/assets'

const Storefront = () => {
  return (
    <div className='flex flex-col box-border'>

      <div className='flex flex-raw gap-5 w-600 justify-center items-center '>

        <div className='flex flex-col gap-5 w-2/4'>
          <h1 className='text-3xl font-extrabold '>FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
          <hr className='w-2/4 border-none bg-gray-700' />
          <p>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
          <button className='w-36 mt-5 py-2 bg-black text-white rounded-3xl' >Shop Now</button>
          <div className='flex flew-raw gap-20  text-black p-6'> 
        <p className='w-20'><span className='font-bold'>200+ </span>International Brands</p>
        <p className='w-20'><span className='font-bold'>2000+</span> High-Quality Products</p>
        <p className='w-20'><span className='font-bold'>30,000+</span> Happy Customers</p>
        
      </div>
        </div>

        <div className='flex gap-4 w-2/4'>
          <hr className='w-md border-none bg-gray-700' />
          <img className='w-50' src={assets.hero_img} alt="Image de personnes" />
        </div>

      </div>

      <div className='flex justify-evenly items-center gap-5 bg-black text-white p-6 mr-100 ml-100 '> 
        <img className='w-30' src={assets.versace_icon} alt="logo Brands" />
        <img className='w-20' src={assets.zara_icon} alt="logo Brands" />
        <img className='w-30' src={assets.gucci_icon} alt="logo Brands" />
        <img className='w-30' src={assets.prada_icon} alt="logo Brands" />
        <img className='w-30' src={assets.calvin_icon} alt="logo Brands" />
        
      </div>

    </div>
  )
}

export default Storefront