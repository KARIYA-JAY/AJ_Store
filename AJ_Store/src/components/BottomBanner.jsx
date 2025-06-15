import React from 'react'
import { assets } from '../assets/assets'

export const BottomBanner = () => {
  return (
    <div className='relative mt-24'>
        <img src={assets.logo} alt='banner' className='w-full hidden md:block'></img>
        <img src={assets.logo} alt='banner' className='w-full hidden md:block'></img>
        <img src={assets.logo} alt='banner' className='w-full hidden md:block'></img>
        <img src={assets.logo} alt='banner' className='w-full  md:hidden'></img>

    </div>
  )
}
